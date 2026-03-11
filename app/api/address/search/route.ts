import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const DGIS_KEY = process.env.NEXT_PUBLIC_2GIS_API_KEY;

const CITY_COORDS = {
 'Москва': '37.6176,55.7558',
 'Санкт-Петербург': '30.3351,59.9343'
};

export async function GET(req: NextRequest) {
 const { searchParams } = new URL(req.url);
 const rawQ = searchParams.get('q') || '';
 const city = (searchParams.get('city') || 'Москва').trim();

 if (!rawQ || rawQ.length < 1) return NextResponse.json([]);

 try {
  const coords = CITY_COORDS[city as keyof typeof CITY_COORDS] || CITY_COORDS['Москва'];
  const cleanQ = rawQ.toLowerCase().includes(city.toLowerCase()) ? rawQ : `${city}, ${rawQ}`;
  
  const params = new URLSearchParams({
   q: cleanQ,
   key: DGIS_KEY || '',
   location: coords,
   sort_point: coords,
   radius: '50000',
   fields: 'items.point,items.address,items.adm_div',
   limit: '50'
  });

  const url = `https://catalog.api.2gis.com/3.0/items?${params.toString()}`;
  const response = await fetch(url, { cache: 'no-store' });

  if (!response.ok) {
   return NextResponse.json({ debug_url: url, error: 'Api response not ok' });
  }

  const data = await response.json();

  if (!data?.result?.items) return NextResponse.json({ debug_url: url, final: [] });

  const suggestions = data.result.items
   .map((item: any) => {
    try {
     if (!item) return null;

     const addressObj = item.address || {};
     const components = addressObj.components || [];

     let road = '';
     let houseNum = '';

     const streetComp = components.find((c: any) => c.street || c.type === 'street');
     const numberComp = components.find((c: any) => c.number || c.type === 'street_number');

     if (streetComp) road = streetComp.street || streetComp.name || '';
     if (numberComp) houseNum = numberComp.number || '';

     // SMART GUESSING: If no road/street, use the item name (perfect for metro, parks, etc.)
     if (!road) {
      const isPlace = ['station', 'attraction', 'place', 'sights', 'park'].some(t => item.type?.includes(t));
      if (isPlace) {
       road = item.name || item.address_name || item.full_name || '';
      } else {
       const rawName = item.address_name || item.full_name || '';
       if (rawName) {
        const parts = rawName.split(',').map((p: string) => p.trim());
        const cityLower = city.toLowerCase();
        // Skip city if it's the first part
        const startIndex = (parts[0] && parts[0].toLowerCase().includes(cityLower)) ? 1 : 0;
        road = parts[startIndex] || '';
        if (parts[startIndex + 1] && !houseNum) houseNum = parts[startIndex + 1];
       }
      }
     }

     // If we still have no road, skip this item
     if (!road) return null;

     // Normalize road name: Preserve original type if present (проспект, шоссе, проезд, etc.)
     let displayRoad = road;
     const lowerRoad = road.toLowerCase();
     const typeKeywords = ['проспект', 'шоссе', 'бульвар', 'переулок', 'набережная', 'аллея', 'площадь', 'тупик', 'проезд', 'тракт', 'линия', 'тупик', 'кольцо', 'метро', 'станция', 'парк', 'сквер'];
     const hasType = typeKeywords.some(kw => lowerRoad.includes(kw));

     if (!hasType && item.type === 'street') {
      // Only attempt to "clean" and re-prefix if it doesn't already have a strong type
      let cleanRoad = road.replace(/(^|\s)(ул|улица|пр|пр-т|проспект|пер|переулок|б-р|бульвар|ш|шоссе|наб|набережная|аллея|тракт)\.?\s+/gi, ' ').trim();
      cleanRoad = cleanRoad.replace(/\s+(ул|улица|пр|пр-т|проспект|пер|переулок|б-р|бульвар|ш|шоссе|наб|набережная|аллея|тракт)\.?$/gi, '').trim();

      if (cleanRoad.length > 0) {
       cleanRoad = cleanRoad.charAt(0).toUpperCase() + cleanRoad.slice(1);
       displayRoad = `улица ${cleanRoad}`;
      }
     } else {
      // If it has a type (like Metro) or isn't a street, just ensure it's capitalized correctly
      displayRoad = displayRoad.charAt(0).toUpperCase() + displayRoad.slice(1);
     }

     // Filter: Road after cleanup shouldn't be just the city name
     const checkRoad = displayRoad.toLowerCase();
     if (checkRoad === city.toLowerCase() || checkRoad === 'москва' || checkRoad === 'санкт-петербург' || checkRoad === 'петербург') {
      return null;
     }

     // Relaxed relevance: Trust API results, but ensure it's not a different major city
     const full = (item.full_name || item.address_name || '').toLowerCase();
     const otherCity = city === 'Москва' ? 'санкт-петербург' : 'москва';
     if (full.includes(otherCity) && !full.includes(city.toLowerCase())) return null;

     const title = houseNum ? `${displayRoad}, ${houseNum}` : displayRoad;
     
     // Special subtitle for metro/stations
     let subtitle = city;
     if (item.type?.includes('station')) {
      subtitle = `Метро, ${city}`;
     }

     return {
      display_name: item.full_name || item.address_name || '',
      lat: item.point?.lat?.toString(),
      lon: item.point?.lon?.toString(),
      id: item.id,
      address: {
       road: displayRoad,
       house_number: houseNum,
       city: city,
       title: title,
       subtitle: subtitle
      },
      type: item.type
     };
    } catch (e) {
     return null;
    }
   })
   .filter(Boolean);

  const seen = new Set();
  const final = (suggestions as any[]).filter((s: any) => {
   const key = `${s.address.title}`.toLowerCase();
   if (seen.has(key)) return false;
   seen.add(key);
   return true;
  }).slice(0, 15);

  return NextResponse.json(final);
 } catch (error: any) {
  return NextResponse.json([]);
 }
}
