/**
 * Normalize a Russian phone number to 7XXXXXXXXXX (11 digits, starting with 7).
 * Accepts: +7..., 7..., 8..., or 9XXXXXXXXX (10 digits)
 * Returns null if the number cannot be recognized.
 */
export function normalizePhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 11 && (digits.startsWith('7') || digits.startsWith('8'))) {
    return '7' + digits.slice(1);
  }
  if (digits.length === 10 && digits.startsWith('9')) {
    return '7' + digits;
  }
  return null;
}
