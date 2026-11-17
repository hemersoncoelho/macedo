/**
 * Conteúdo das páginas de benefício (/previdenciario/{slug}).
 * Uma entrada por benefício; o layout é `src/pages/previdenciario/[slug].astro`
 * e cada benefício tem um gráfico próprio em `src/components/graphics/`.
 *
 * ⚠ Informação legal geral, sem promessa de resultado (Provimento 205/2021 da OAB).
 * Todos os textos precisam ser validados pelo escritório antes da publicação.
 */
import type { IconName } from "../components/ui/Icon.astro";

export type GraficoId = "bpc" | "aposentadoria" | "pensao" | "maternidade" | "auxilio";

export interface Beneficio {
  slug: string;
  /** Nome curto: chip do hero, cartão e H1 (compartilham view-transition-name). */
  nome: string;
  icon: IconName;
  /** Pergunta que orienta quem não sabe qual benefício procurar (cartão "outros benefícios"). */
  pergunta: string;
  /** Uma linha sobre para quem é (hub Previdenciário). */
  resumo: string;
  overline: string;
  title: string;
  description: string;
  lead: string;
  whatsapp: string;
  destaques: { icon: IconName; texto: string }[];
  grafico: { id: GraficoId; overline: string; titulo: string; lead: string };
  documentos: string[];
  passos: { title: string; text: string }[];
  perguntas: { pergunta: string; resposta: string }[];
}

export const beneficios: Beneficio[] = [
  {
    slug: "aposentadoria",
    nome: "Aposentadoria",
    icon: "user",
    pergunta: "Quando posso me aposentar?",
    resumo: "Para quem já trabalhou e quer saber a idade e o tempo que faltam.",
    overline: "Aposentadoria · INSS",
    title: "Aposentadoria: quando posso me aposentar? | Macedo Neto Advocacia",
    description:
      "Descubra os caminhos para se aposentar: por idade, por tempo de contribuição, rural e atividade especial. Veja a idade e o tempo mínimos e o que fazer se o pedido foi negado.",
    lead:
      "Saber quando e como se aposentar depende da sua idade, do tempo de contribuição e da sua história de trabalho. A gente faz essa conta com você, em linguagem simples, e mostra o melhor caminho.",
    whatsapp: "Olá! Gostaria de saber quando posso me aposentar.",
    destaques: [
      { icon: "file", texto: "Conta de idade e tempo feita com você" },
      { icon: "sprout", texto: "Inclui trabalho rural e atividade especial" },
      { icon: "shield", texto: "Pedido negado ou valor errado: dá para analisar" },
    ],
    grafico: {
      id: "aposentadoria",
      overline: "Requisitos",
      titulo: "Quem tem direito",
      lead: "Na maioria dos casos são duas perguntas: qual é a sua idade e quanto tempo você já trabalhou. Veja os números de referência:",
    },
    documentos: [
      "Documento com foto e CPF",
      "Carteira de trabalho (CTPS): todas as que você tiver",
      "Extrato do CNIS (dá para baixar no Meu INSS)",
      "Carnês ou guias de contribuição, se foi autônomo",
      "Trabalho rural: documentos da terra, notas de produtor ou declaração do sindicato",
      "Atividade especial: laudos e PPP fornecidos pela empresa",
    ],
    passos: [
      { title: "Conversa pelo WhatsApp", text: "Você conta a sua história de trabalho e tira as primeiras dúvidas, sem sair de casa." },
      { title: "Conferência do seu tempo", text: "Reunimos o CNIS, a carteira e os demais documentos e calculamos a sua idade e o seu tempo de contribuição." },
      { title: "Pedido ou revisão", text: "Fazemos o pedido no INSS na hora certa. Se foi negado ou o valor parece errado, analisamos o recurso ou a revisão." },
    ],
    perguntas: [
      {
        pergunta: "Posso me aposentar só pela idade?",
        resposta:
          "Em regra, não. Além da idade mínima é preciso um tempo mínimo de contribuição (ou de atividade rural, para quem trabalha no campo). A conta muda conforme a data em que você começou a contribuir.",
      },
      {
        pergunta: "Já contribuía antes da reforma de 2019. Muda alguma coisa?",
        resposta:
          "Sim. Quem já contribuía antes de novembro de 2019 pode ter direito a uma regra de transição, com combinações diferentes de idade e tempo. Por isso cada caso precisa de uma conta individual.",
      },
      {
        pergunta: "O tempo de trabalho rural conta?",
        resposta:
          "Conta, desde que possa ser comprovado. Documentos da terra, notas de venda da produção e declarações ajudam. Mesmo sem todos eles, vale conversar com a gente.",
      },
      {
        pergunta: "Faltam poucos meses de contribuição. O que fazer?",
        resposta:
          "Existem formas de completar o tempo, como contribuir como facultativo ou autônomo. A melhor opção depende do seu caso, por isso a análise vem antes de qualquer pagamento.",
      },
      {
        pergunta: "Meu pedido foi negado ou o valor ficou baixo. Ainda dá para fazer algo?",
        resposta:
          "Muitas vezes, sim: pode haver tempo que não foi contado ou erro no cálculo. Dependendo do caso, é possível recorrer no INSS ou entrar com uma ação na Justiça.",
      },
    ],
  },
  {
    slug: "pensao-por-morte",
    nome: "Pensão por morte",
    icon: "users",
    pergunta: "Perdeu um familiar que contribuía para o INSS?",
    resumo: "Para a família de quem faleceu e contribuía para o INSS ou já era aposentado.",
    overline: "Pensão por morte · INSS",
    title: "Pensão por morte: quem tem direito e prazo para pedir | Macedo Neto Advocacia",
    description:
      "Pensão por morte do INSS: veja quem pode receber, em que ordem, o prazo de 90 dias para pedir e o que fazer se o pedido foi negado ou está parado.",
    lead:
      "Quando uma pessoa da família falece, quem dependia dela pode ter direito a uma pensão do INSS. Existe uma ordem de quem recebe e um prazo para pedir. A gente explica o caminho com cuidado e sem complicação.",
    whatsapp: "Olá! Perdi um familiar e gostaria de saber se tenho direito à pensão por morte.",
    destaques: [
      { icon: "users", texto: "Cônjuge, companheiro(a), filhos, pais e irmãos" },
      { icon: "file", texto: "Prazo de 90 dias para garantir o valor desde o óbito" },
      { icon: "shield", texto: "Pedido negado ou parado: dá para analisar" },
    ],
    grafico: {
      id: "pensao",
      overline: "Quem pode receber",
      titulo: "Quem tem direito",
      lead: "A pensão vai para a família em uma ordem: um grupo só recebe se o grupo de cima não tiver ninguém. Veja a fila:",
    },
    documentos: [
      "Certidão de óbito",
      "Documento com foto e CPF de quem vai pedir",
      "Certidão de casamento ou provas da união estável (contas em comum, fotos, declarações)",
      "Certidões de nascimento dos filhos",
      "Documentos do falecido: CPF, carteira de trabalho, carnês ou comprovante de aposentadoria",
      "Pais e irmãos: provas de que dependiam do falecido, como comprovantes de despesas pagas por ele",
    ],
    passos: [
      { title: "Conversa pelo WhatsApp", text: "Você conta o que aconteceu e tira as primeiras dúvidas, no seu tempo e sem sair de casa." },
      { title: "Conferência da família", text: "Vemos quem são os dependentes, se o falecido era segurado do INSS e quais documentos ainda faltam." },
      { title: "Pedido no INSS", text: "Fazemos o pedido dentro do prazo e acompanhamos. Se for negado ou ficar parado, analisamos o recurso ou a ação." },
    ],
    perguntas: [
      {
        pergunta: "Qual é o prazo para pedir a pensão?",
        resposta:
          "Em regra, quem pede em até 90 dias do falecimento recebe desde a data do óbito. Depois desse prazo, o pagamento conta só a partir do pedido. Para filhos menores de 16 anos o prazo é maior (180 dias). Por isso vale não deixar para depois.",
      },
      {
        pergunta: "O falecido precisava estar contribuindo?",
        resposta:
          "Ele precisava ter qualidade de segurado: estar contribuindo, ser aposentado ou ainda estar protegido pelo INSS depois de parar de contribuir. Não existe um número mínimo de contribuições para a pensão em si, mas isso pode influenciar por quanto tempo ela é paga.",
      },
      {
        pergunta: "Por quanto tempo a pensão é paga?",
        resposta:
          "Depende da idade de quem recebe e, para cônjuge e companheiro(a), do tempo de casamento ou união e das contribuições do falecido. Pode durar alguns meses ou ser vitalícia. Só dá para saber ao analisar o caso.",
      },
      {
        pergunta: "Companheiro(a) sem certidão de casamento tem direito?",
        resposta:
          "Pode ter, se a união estável puder ser comprovada: contas em comum, fotos, declarações, filhos em comum, entre outros. Os documentos é que pesam na análise.",
      },
      {
        pergunta: "O pedido foi negado ou está parado. E agora?",
        resposta:
          "Muitas vezes é possível recorrer ou entrar com uma ação na Justiça, dependendo do motivo. Cada caso precisa ser visto com os documentos em mãos.",
      },
    ],
  },
  {
    slug: "salario-maternidade",
    nome: "Salário-maternidade",
    icon: "sprout",
    pergunta: "Vai ter, teve ou adotou um filho?",
    resumo: "Para quem teve um filho, adotou ou recebeu a guarda para adoção: 120 dias de benefício.",
    overline: "Salário-maternidade · INSS",
    title: "Salário-maternidade: 120 dias, quem tem direito e carência | Macedo Neto Advocacia",
    description:
      "Salário-maternidade do INSS: 120 dias de benefício para parto, adoção ou guarda. Veja quem tem direito, a carência de cada tipo de trabalho e o que fazer se o pedido foi negado.",
    lead:
      "Quem tem um filho, adota ou recebe a guarda para adoção pode ter direito a 120 dias de benefício do INSS. Vale para quem tem carteira assinada, é autônoma, contribui por conta própria ou trabalha no campo. A gente confere o seu caso e explica o que fazer.",
    whatsapp: "Olá! Gostaria de saber se tenho direito ao salário-maternidade.",
    destaques: [
      { icon: "heart", texto: "120 dias de benefício" },
      { icon: "check", texto: "Vale para parto, adoção e guarda para adoção" },
      { icon: "users", texto: "Empregada, autônoma, MEI, facultativa e rural" },
    ],
    grafico: {
      id: "maternidade",
      overline: "Como funciona",
      titulo: "Quem tem direito",
      lead: "São 120 dias de benefício. O que muda de caso para caso é o tipo de trabalho e a carência. Veja:",
    },
    documentos: [
      "Documento com foto e CPF",
      "Certidão de nascimento do bebê (ou termo de guarda ou adoção)",
      "Carteira de trabalho ou comprovantes das contribuições",
      "Atestado médico da gestação, se o benefício começar antes do parto",
      "Trabalhadora rural: declaração do sindicato, notas de produtor ou documentos da terra",
      "Autônoma ou MEI: comprovantes das contribuições pagas",
    ],
    passos: [
      { title: "Conversa pelo WhatsApp", text: "Você conta a sua situação e tira as primeiras dúvidas, sem sair de casa." },
      { title: "Conferência da carência", text: "Vemos o seu tipo de trabalho, as contribuições e a data do parto ou da adoção, para saber se a carência está completa." },
      { title: "Pedido no INSS", text: "Fazemos o pedido e acompanhamos. Se for negado, analisamos o recurso ou a ação." },
    ],
    perguntas: [
      {
        pergunta: "Posso pedir antes de o bebê nascer?",
        resposta:
          "Pode, com atestado médico: o benefício pode começar até 28 dias antes da data prevista do parto. Também é possível pedir depois do nascimento.",
      },
      {
        pergunta: "Estou desempregada. Tenho direito?",
        resposta:
          "Pode ter, se ainda estiver no período em que mantém a qualidade de segurada depois da última contribuição. Isso depende da sua situação, por isso vale conferir antes de desistir.",
      },
      {
        pergunta: "Sou trabalhadora rural. Como funciona?",
        resposta:
          "É preciso comprovar 10 meses de atividade rural. Declaração do sindicato, notas de produtor e documentos da terra ajudam a provar o trabalho no campo.",
      },
      {
        pergunta: "Pai ou mãe adotivos também podem receber?",
        resposta:
          "Quem adota ou recebe a guarda para adoção tem direito aos 120 dias, seja mulher ou homem. Em caso de falecimento da mãe, o outro responsável pode ter direito ao período restante.",
      },
      {
        pergunta: "O pedido foi negado. E agora?",
        resposta:
          "Muitas vezes dá para recorrer ou entrar com uma ação na Justiça, conforme o motivo. Vale analisar os documentos com a gente.",
      },
    ],
  },
  {
    slug: "auxilio-doenca",
    nome: "Auxílio-doença",
    icon: "shield",
    pergunta: "Ficou sem poder trabalhar por doença ou acidente?",
    resumo: "Para quem está sem condições de trabalhar por doença ou acidente.",
    overline: "Auxílio por incapacidade temporária · INSS",
    title: "Auxílio-doença: quem tem direito, carência e perícia | Macedo Neto Advocacia",
    description:
      "Auxílio-doença (auxílio por incapacidade temporária) do INSS: veja quem tem direito, a carência, como funciona a perícia e o que fazer se o benefício foi negado ou cortado.",
    lead:
      "Quem fica sem condições de trabalhar por doença ou acidente pode ter direito a receber do INSS enquanto se recupera. A gente explica como funciona a perícia e o que fazer se o benefício foi negado ou cortado.",
    whatsapp: "Olá! Estou afastado do trabalho por doença ou acidente e gostaria de saber se tenho direito ao auxílio-doença.",
    destaques: [
      { icon: "shield", texto: "Para doença ou acidente que impede de trabalhar" },
      { icon: "file", texto: "Atestados e laudos fazem diferença na perícia" },
      { icon: "check", texto: "Benefício negado ou cortado: dá para analisar" },
    ],
    grafico: {
      id: "auxilio",
      overline: "Como funciona",
      titulo: "Quem tem direito",
      lead: "Em resumo: ser segurado, cumprir a carência e estar incapaz de trabalhar. Depois vem a perícia. Veja o caminho:",
    },
    documentos: [
      "Documento com foto e CPF",
      "Atestados médicos, com o CID e o tempo de afastamento",
      "Laudos, exames e receitas",
      "Relatórios de internação ou cirurgia, se houver",
      "Carteira de trabalho ou comprovantes das contribuições",
      "Comunicação de Acidente de Trabalho (CAT), se foi acidente no trabalho",
    ],
    passos: [
      { title: "Conversa pelo WhatsApp", text: "Você conta o que aconteceu e tira as primeiras dúvidas, sem sair de casa." },
      { title: "Conferência dos documentos", text: "Vemos se os atestados e laudos mostram a incapacidade e se a carência está completa." },
      { title: "Pedido e perícia", text: "Fazemos o pedido, orientamos você para a perícia e acompanhamos. Se for negado ou cortado, analisamos o recurso ou a ação." },
    ],
    perguntas: [
      {
        pergunta: "Quem paga nos primeiros 15 dias?",
        resposta:
          "Para quem tem carteira assinada, a empresa. A partir do 16º dia, o INSS. Autônomos e contribuintes individuais pedem ao INSS desde o início do afastamento.",
      },
      {
        pergunta: "Quanto tempo preciso ter contribuído?",
        resposta:
          "Em regra, 12 contribuições mensais. Em caso de acidente e de algumas doenças graves previstas em lei, não é exigida carência.",
      },
      {
        pergunta: "O INSS negou ou cortou meu benefício. E agora?",
        resposta:
          "Muitas vezes dá para pedir uma nova perícia, recorrer ou entrar com uma ação na Justiça, conforme o motivo. Guarde os atestados e a carta do INSS.",
      },
      {
        pergunta: "Já tinha a doença antes de começar a contribuir. Perco o direito?",
        resposta:
          "Nem sempre. Se a doença piorou depois de você entrar no INSS, o direito pode existir. Isso é analisado caso a caso.",
      },
      {
        pergunta: "O benefício acaba quando a perícia diz que melhorei?",
        resposta:
          "O benefício dura enquanto a incapacidade durar e pode ser prorrogado com novo pedido e nova perícia. Se você não concordar com o fim, vale analisar o caso.",
      },
    ],
  },
  {
    slug: "bpc-loas",
    nome: "BPC/LOAS",
    icon: "heart",
    pergunta: "Idoso ou pessoa com deficiência, com renda baixa?",
    resumo: "Para pessoa idosa ou com deficiência de baixa renda, mesmo sem ter contribuído.",
    overline: "Benefício assistencial · INSS",
    title: "BPC/LOAS: quem tem direito e como pedir | Macedo Neto Advocacia",
    description:
      "BPC/LOAS: um salário mínimo por mês para pessoa idosa (65+) ou com deficiência de baixa renda. Veja quem tem direito, documentos e o que fazer se o pedido foi negado.",
    lead:
      "Um salário mínimo por mês para a pessoa idosa ou com deficiência que vive em família de baixa renda. Muita gente tem direito e não sabe — ou teve o pedido negado sem entender por quê.",
    whatsapp: "Olá! Gostaria de saber se tenho direito ao BPC/LOAS.",
    destaques: [
      { icon: "check", texto: "Um salário mínimo por mês" },
      { icon: "shield", texto: "Não precisa ter contribuído para o INSS" },
      { icon: "users", texto: "Para pessoa idosa ou com deficiência" },
    ],
    grafico: {
      id: "bpc",
      overline: "Requisitos",
      titulo: "Quem tem direito",
      lead: "São duas perguntas: quem é a pessoa e qual é a situação da família. Veja o caminho:",
    },
    documentos: [
      "Documento com foto e CPF de todas as pessoas da casa",
      "Comprovante de endereço",
      "Número do CadÚnico (NIS) com o cadastro atualizado",
      "Comprovantes de renda da família, se houver",
      "Laudos, exames e receitas médicas (para pessoa com deficiência)",
      "Carta do INSS com o motivo, se o pedido já foi negado",
    ],
    passos: [
      { title: "Conversa pelo WhatsApp", text: "Você conta a sua situação e tira as primeiras dúvidas, sem sair de casa." },
      { title: "Análise do seu caso", text: "Conferimos os documentos, os requisitos e o que ainda falta reunir." },
      { title: "Pedido ou recurso", text: "Fazemos o pedido no INSS ou, se já foi negado, explicamos o caminho: recurso ou ação na Justiça." },
    ],
    perguntas: [
      {
        pergunta: "Preciso ter contribuído para o INSS?",
        resposta:
          "Não. O BPC é um benefício da assistência social: não exige contribuição. O que conta é a idade ou a deficiência e a renda da família.",
      },
      {
        pergunta: "Quem conta como família no cálculo da renda?",
        resposta:
          "Quem mora na mesma casa: a pessoa que pede, marido, esposa ou companheiro(a), pais (ou padrasto e madrasta), irmãos solteiros, filhos e enteados solteiros e menores sob tutela.",
      },
      { pergunta: "O BPC paga 13º ou deixa pensão?", resposta: "Não. O BPC não tem 13º salário e não gera pensão por morte para a família." },
      {
        pergunta: "Meu pedido foi negado. Ainda dá para fazer alguma coisa?",
        resposta:
          "Muitas vezes, sim. Dependendo do motivo, é possível recorrer no próprio INSS ou entrar com uma ação na Justiça. Cada caso precisa ser analisado com os documentos em mãos.",
      },
      {
        pergunta: "Posso ser atendido sem ir ao escritório?",
        resposta: "Sim. O primeiro contato pode ser todo pelo WhatsApp. Se preferir, também atendemos presencialmente.",
      },
    ],
  },
];

export const beneficioUrl = (slug: string): string => `/previdenciario/${slug}`;
