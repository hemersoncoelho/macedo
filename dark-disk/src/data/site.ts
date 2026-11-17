/**
 * Dados institucionais. Campos com PENDENTE devem ser confirmados com o
 * escritório antes da publicação (ver docs/briefing-site.md).
 */

export interface Advogado {
  nome: string;
  oab: string;
}

export const site = {
  nome: "Macedo Neto",
  descritor: "Advocacia Especializada",
  // PENDENTE: número real do WhatsApp (formato internacional, só dígitos).
  whatsapp: "5500000000000",
  whatsappMensagemPadrao: "Olá! Gostaria de falar com um advogado do escritório Macedo Neto.",
  instagram: "https://www.instagram.com/advocaciamacedoneto/",
  // PENDENTE: endereço completo, cidade/UF, CNPJ, horário.
  endereco: "Nº 108C — endereço completo PENDENTE",
  horario: "Horário de atendimento PENDENTE",
  // Como reconhecer a fachada (tirado da foto; confirmar se mudar).
  fachada: "Fachada preta com o letreiro de mármore “Macedo Neto”, número 108C.",
  advogados: [
    { nome: "Francimar Moura Macedo Neto", oab: "OAB/MA 31.307" },
    { nome: "Victor Felipe Teixeira", oab: "OAB/MA 31.375" },
    { nome: "Benedito Tomaz de Oliveira Neto", oab: "OAB/MA 30.308" },
  ] satisfies Advogado[],
} as const;

export function whatsappUrl(mensagem: string = site.whatsappMensagemPadrao): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}
