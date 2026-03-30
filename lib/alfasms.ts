/**
 * AlfaSMS (alfaooo.ru) SMS sending utility.
 * API docs: https://alfaooo.ru/api
 * Endpoint: https://ssl.bs00.ru/?method=push_msg
 */

import { normalizePhone } from './phone';

const ALFASMS_API_KEY = process.env.ALFASMS_API_KEY || '';
const ALFASMS_SENDER = process.env.ALFASMS_SENDER || 'Smusl';


interface SmsSendResult {
 success: boolean;
 smsId?: number;
 credits?: string;
 errorCode?: string;
 errorText?: string;
}


export async function sendSms(phone: string, text: string): Promise<SmsSendResult> {
 if (!ALFASMS_API_KEY) {
  console.warn('[AlfaSMS] ALFASMS_API_KEY is not set. Skipping SMS.');
  return { success: false, errorText: 'API key not set' };
 }

 const normalizedPhone = normalizePhone(phone);
 if (!normalizedPhone) {
  return { success: false, errorText: 'Invalid phone format' };
 }

 const params = new URLSearchParams({

  method: 'push_msg',
  key: ALFASMS_API_KEY,
  text: text,
  phone: normalizedPhone,
  sender_name: ALFASMS_SENDER,
  format: 'JSON',
 });

 const url = `https://ssl.bs00.ru/?${params.toString()}`;

 try {
  const res = await fetch(url, {
   method: 'GET',
   headers: { 'Accept': 'application/json' },
   // 8-second timeout — don't block the order response for too long
   signal: AbortSignal.timeout(8000),
  });

  const json = await res.json() as {
   response: {
    msg: { err_code: string; text: string; type: string };
    data: { id: number; credits: string; n_raw_sms: number; sender_name: string } | null;
   };
  };

  const { msg, data } = json.response;

  if (msg.err_code === '0') {
   console.log(`[AlfaSMS] ✅ SMS sent to ${normalizedPhone} | id=${data?.id} | cost=${data?.credits} credits`);
   return { success: true, smsId: data?.id, credits: data?.credits };
  } else {
   console.error(`[AlfaSMS] ❌ Error ${msg.err_code}: ${msg.text}`);
   return { success: false, errorCode: msg.err_code, errorText: msg.text };
  }
 } catch (err) {
  console.error('[AlfaSMS] ❌ Request failed:', err);
  return { success: false, errorText: String(err) };
 }
}

/**
 * Build the order confirmation SMS text.
 */
export function buildOrderSms(opts: {
 orderId: number;
 userName: string;
 total: number;
 address: string;
 itemCount: number;
}): string {
 const shortId = opts.orderId.toString().slice(-6);
 const addr = opts.address || 'самовывоз';
 return (
  `${opts.userName}, ваш заказ #${shortId} принят! ` +
  `Состав: ${opts.itemCount} поз. Сумма: ${opts.total} ₽. ` +
  `Адрес: ${addr}. Спасибо!`
 );
}
