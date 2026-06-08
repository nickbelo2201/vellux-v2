// Contato central da Velluxia.
// TODO: trocar pelo número real de WhatsApp e e-mail da Velluxia.
const WHATSAPP_NUMBER = "5511970000000"; // placeholder — Grande ABC

export const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Velluxia e quero um orçamento.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const EMAIL = "contato@velluxia.com.br";
