/**
 * Depoimentos transcritos de mensagens de clientes (os prints ficam fora do git).
 * - Sem nome nem iniciais: identifica só o benefício (privacidade/LGPD).
 * - Trechos sobre o ATENDIMENTO; cortadas as frases sobre resultado
 *   ("deu tudo certo"), por causa do Provimento 205/2021 da OAB.
 * PENDENTE: autorização escrita de cada cliente antes de publicar o site.
 */

export interface Depoimento {
  beneficio: string;
  texto: string;
}

export const depoimentos: Depoimento[] = [
  {
    beneficio: "Aposentadoria",
    texto:
      "Quero agradecer de coração a vocês por toda atenção e paciência durante meu processo de aposentadoria. Obrigado pelo carinho e pelo excelente trabalho.",
  },
  {
    beneficio: "Pensão por morte",
    texto:
      "Quero agradecer de coração a vocês por toda atenção e dedicação durante meu processo de pensão por morte. Sei que não foi fácil. Muito obrigado por tudo!",
  },
  {
    beneficio: "Salário-maternidade",
    texto:
      "Quero agradecer de coração por toda atenção e dedicação durante o processo do salário maternidade. Vou recomendar seu trabalho para outras pessoas!",
  },
];
