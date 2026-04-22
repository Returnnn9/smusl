import { readFileSync, writeFileSync } from 'fs';

let src = readFileSync('./components/CheckoutModal.tsx', 'utf8');

// 1. Fix title – remove mb-8, add subtitle
src = src.replace(
  '<h2 className="text-[24px] sm:text-[28px] font-extrabold text-[#3A332E] mb-8 tracking-tight">',
  '<h2 className="text-[26px] sm:text-[30px] font-[900] text-[#3A332E] mb-1 tracking-tight">'
);
// Add subtitle after closing h2
src = src.replace(
  '           Как к вам обращаться?\r\n          </h2>',
  '           Как к вам обращаться?\r\n          </h2>\r\n          <p className="text-[13px] text-[#3A332E]/35 font-semibold mb-5">Введите данные для оформления заказа</p>'
);

// 2. Tighten the gap-8 mt-10 wrapper
src = src.replace(
  '<div className="flex flex-col gap-8 mt-10">',
  '<div className="flex flex-col gap-3 mt-4">'
);

// 3. Replace the big auth block (py-10 border-y etc.) with compact inline row
const bigAuthBlock = `           {status !== 'authenticated' && (
            <div className="py-10 border-y border-gray-100 flex flex-col items-center relative overflow-hidden group/login">
             {/* Subtle background glow for the login section */}
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3A332E]/[0.02] to-transparent opacity-0 group-hover/login:opacity-100 transition-opacity duration-700" />

             <p className="text-[10px] font-black text-[#3A332E]/25 mb-5 uppercase tracking-[0.25em] relative z-10">
              Уже есть аккаунт?
             </p>
             <button
              onClick={() => { handleClose(); uiStore.setAuthModalOpen(true); }}
              className="relative z-10 inline-flex items-center justify-center gap-3 w-full sm:w-[340px] py-4 bg-white border-[2px] border-[#CF8F73]/30 text-[#CF8F73] rounded-[1.2rem] text-[15px] sm:text-[16px] font-[800] transition-all hover:border-[#CF8F73] hover:bg-[#FAF3EF] active:scale-[0.96] shadow-sm hover:shadow-[0_15px_30px_-10px_rgba(207,143,115,0.3)] hover:-translate-y-0.5 group"
             >
              <User className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />
              <span className="tracking-wide">Войти / Зарегистрироваться</span>
             </button>
            </div>
           )}`;

const compactAuthBlock = `           {status !== 'authenticated' && (
            <div className="flex items-center gap-3 pt-4 border-t border-[#EEE9E5]">
             <span className="text-[11px] font-[900] text-[#3A332E]/25 uppercase tracking-[0.2em] whitespace-nowrap">Уже есть аккаунт?</span>
             <button
              onClick={() => { handleClose(); uiStore.setAuthModalOpen(true); }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FAF3EF] border border-[#CF8F73]/20 text-[#CF8F73] rounded-[0.8rem] text-[13px] font-[800] transition-all hover:border-[#CF8F73]/50 hover:bg-[#F5EBE4] active:scale-[0.97]"
             >
              <User className="w-3.5 h-3.5" />
              Войти
             </button>
            </div>
           )}`;

// Normalize CRLF for matching
const bigAuthNorm = bigAuthBlock.replace(/\r\n/g, '\n');
const srcNorm = src.replace(/\r\n/g, '\n');

if (!srcNorm.includes(bigAuthNorm)) {
  console.log('Auth block not found — trying trim match...');
  // Show a 50-char snippet search
  console.log('Looking for:', bigAuthBlock.slice(0, 100));
} else {
  const fixed = srcNorm.replace(bigAuthNorm, compactAuthBlock.replace(/\r\n/g, '\n'));
  writeFileSync('./components/CheckoutModal.tsx', fixed.replace(/\n/g, '\r\n'), 'utf8');
  console.log('Auth block replaced!');
}

// 4. Fix button spacing mt-10 -> mt-5, h-[72px] -> h-[62px], text-[20px] -> text-[18px]
let src2 = readFileSync('./components/CheckoutModal.tsx', 'utf8');
src2 = src2.replace(
  'mt-10 w-full h-[72px] bg-gradient-to-br from-[#D99A82] via-[#CF8F73] to-[#B87A60] disabled:from-gray-200 disabled:to-gray-100 disabled:shadow-none text-white disabled:text-gray-400 rounded-[1.5rem] font-[900] text-[20px] transition-all active:scale-[0.98] shadow-[0_20px_40px_-12px_rgba(207,143,115,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(207,143,115,0.5)] hover:-translate-y-1 relative overflow-hidden group',
  'mt-5 w-full h-[62px] bg-gradient-to-br from-[#D99A82] via-[#CF8F73] to-[#B87A60] disabled:from-[#EAE6E2] disabled:to-[#DFDBCF] disabled:shadow-none text-white disabled:text-[#B5AFA9] rounded-[1.4rem] font-[900] text-[18px] transition-all active:scale-[0.98] shadow-[0_16px_36px_-12px_rgba(207,143,115,0.45)] hover:enabled:shadow-[0_22px_44px_-12px_rgba(207,143,115,0.55)] hover:enabled:-translate-y-0.5 relative overflow-hidden group'
);
writeFileSync('./components/CheckoutModal.tsx', src2, 'utf8');
console.log('Button updated!');

// 5. Dim disclaimer links
let src3 = readFileSync('./components/CheckoutModal.tsx', 'utf8');
src3 = src3.replace(
  'mt-6 text-[12px] font-medium text-[#3A332E]/30 leading-relaxed text-center px-4',
  'mt-3 text-[11px] font-medium text-[#3A332E]/25 leading-relaxed text-center'
);
writeFileSync('./components/CheckoutModal.tsx', src3, 'utf8');
console.log('Disclaimer dimmed!');

console.log('All done!');
