import { BUSINESS_PHONE, WHATSAPP_MESSAGE } from './constants';

export function getWhatsAppUrl(message: string = WHATSAPP_MESSAGE): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS_PHONE}?text=${encodedMessage}`;
}

export function getPhoneUrl(): string {
  return `tel:+${BUSINESS_PHONE}`;
}
