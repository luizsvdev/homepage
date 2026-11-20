import type { Locale } from "./site";

type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type Dictionary = {
  meta: { title: string; description: string; ogAlt: string };
  nav: { approach: string; career: string; company: string; contact: string; switchTo: string; skip: string };
  hero: {
    eyebrow: string;
    title: [string, string];
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    photoAlt: string;
    facts: { value: string; label: string }[];
  };
  approach: { kicker: string; title: string; items: { title: string; body: string }[] };
  career: { kicker: string; title: string; lead: string; items: Experience[] };
  company: {
    kicker: string;
    title: string;
    body: string[];
    role: string;
    since: string;
    pillars: { title: string; body: string }[];
    cta: string;
  };
  stack: { kicker: string; note: string };
  contact: {
    kicker: string;
    title: string;
    lead: string;
    whatsapp: string;
    whatsappMessage: string;
    email: string;
    copy: string;
    copied: string;
  };
  footer: { rights: string };
};

const ptBR: Dictionary = {
  meta: {
    title: "Luiz Silva · Engenheiro de Software e cofundador da L²MU",
    description:
      "Engenheiro de software desde 2022, com passagem por ERPs, sistemas legados e microsserviços. Cofundador da L²MU, onde transformo dores reais de negócio em software e micro SaaS de nicho.",
    ogAlt: "Luiz Silva, engenheiro de software e cofundador da L²MU",
  },
  nav: {
    approach: "Como trabalho",
    career: "Trajetória",
    company: "L²MU",
    contact: "Contato",
    switchTo: "English",
    skip: "Ir para o conteúdo",
  },
  hero: {
    eyebrow: "Engenheiro de Software · Cofundador da L²MU",
    title: ["Tecnologia é a ferramenta.", "O trabalho é resolver o problema certo."],
    lead:
      "Construo software desde 2022, de ERPs e sistemas legados a microsserviços em empresas de grande porte. Hoje trabalho lado a lado com o comercial para entender a dor de quem paga a conta e entregar a solução que faz sentido para o negócio, não só para o código.",
    ctaPrimary: "Conversar no WhatsApp",
    ctaSecondary: "Ver trajetória",
    photoAlt: "Retrato de Luiz Silva",
    facts: [
      { value: "2022", label: "construindo software em produção" },
      { value: "ERP · SaaS · IA", label: "domínios em que já entreguei" },
      { value: "2025", label: "cofundei a L²MU" },
    ],
  },
  approach: {
    kicker: "Como trabalho",
    title: "Código é a última etapa, não a primeira.",
    items: [
      {
        title: "Começo pela dor",
        body: "Antes de escolher stack, sento com quem vende e com quem usa. Entender o problema de verdade evita meses construindo a coisa errada.",
      },
      {
        title: "Arquitetura do tamanho do problema",
        body: "Já operei microsserviços em escala e sei quando eles valem o custo. Também sei quando um monolito bem feito resolve melhor e mais barato.",
      },
      {
        title: "Sistemas que aguentam o tempo",
        body: "ERPs e legados me ensinaram que o software passa mais tempo sendo mantido do que sendo escrito. Escrevo pensando em quem vem depois.",
      },
      {
        title: "Dono do resultado",
        body: "Do primeiro levantamento ao suporte em produção. Se o cliente não sentiu a melhora, o trabalho não terminou.",
      },
    ],
  },
  career: {
    kicker: "Trajetória",
    title: "Desde 2022 construindo o que empresas usam todo dia.",
    lead: "ERP, legado, microsserviços, IA e agora empresa própria. Cada etapa me deixou uma parte do que sei hoje.",
    items: [
      {
        company: "L²MU",
        role: "Cofundador",
        period: "abr 2025 — hoje",
        summary: "Software sob medida e micro SaaS para nichos específicos.",
        highlights: [
          "Levantamento junto ao comercial e aos clientes para transformar dor em escopo",
          "Decisões de produto, arquitetura e prioridade de ponta a ponta",
          "Construção e operação dos sistemas em produção",
        ],
      },
      {
        company: "Flow Analytics",
        role: "Desenvolvedor Sênior Full Stack",
        period: "fev 2026 — nov 2026",
        summary: "Plataforma de análise e tratamento de dados.",
        highlights: [
          "Evolução do app Flow com foco em dados, performance e segurança",
          "CI/CD e padronização do fluxo de desenvolvimento do time",
        ],
      },
      {
        company: "VIASOFT",
        role: "Desenvolvedor Full Stack Pleno",
        period: "dez 2024 — out 2025",
        summary: "IA aplicada à gestão empresarial dentro de um ecossistema de ERP.",
        highlights: [
          "Desenvolvimento do VIAHELPER, plataforma de IA para gestão",
          "Arquitetura e implementação do Radar Diário, sistema de alertas proativos",
          "Integrações entre ERPs e serviços internos em arquitetura de microsserviços",
        ],
      },
      {
        company: "Hábil Software by Limber",
        role: "Desenvolvedor Full Stack Pleno",
        period: "fev 2022 — nov 2024",
        summary: "ERP e SaaS em larga escala, com bastante sistema legado no caminho.",
        highlights: [
          "Backend em Java, Spring Boot e Hibernate para módulos de ERP",
          "APIs REST em Node.js e TypeScript",
          "Modernização de telas e fluxos legados em Angular",
        ],
      },
    ],
  },
  company: {
    kicker: "A empresa",
    title: "L²MU",
    body: [
      "A L²MU começou com uma ideia minha e virou empresa porque três engenheiros que eu admiro toparam construir junto. Hoje somos quatro sócios, todos com a mão no código.",
      "Fazemos software sob medida e apostamos em micro SaaS de nicho: produtos pequenos e afiados, feitos para um problema específico de um mercado específico.",
    ],
    role: "Cofundador",
    since: "desde abril de 2025",
    pillars: [
      { title: "Sob medida", body: "Sistemas web, mobile e APIs para a operação do cliente." },
      { title: "Micro SaaS", body: "Produtos próprios para nichos que os grandes ignoram." },
      { title: "Sem intermediários", body: "Quem conversa com você é quem escreve o código." },
    ],
    cta: "Conhecer a L²MU",
  },
  stack: {
    kicker: "Ferramentas que uso",
    note: "A escolha vem depois do problema.",
  },
  contact: {
    kicker: "Contato",
    title: "Tem um problema que software pode resolver?",
    lead: "Conte o contexto. Se eu puder ajudar, ou se a L²MU for o caminho, respondo com uma proposta clara.",
    whatsapp: "WhatsApp",
    whatsappMessage: "Olá, Luiz! Vim pelo seu portfólio.",
    email: "E-mail",
    copy: "Copiar e-mail",
    copied: "Copiado",
  },
  footer: { rights: "Pato Branco, PR" },
};

const en: Dictionary = {
  meta: {
    title: "Luiz Silva · Software Engineer and co-founder of L²MU",
    description:
      "Software engineer since 2022, with experience in ERPs, legacy systems and microservices. Co-founder of L²MU, turning real business pain into custom software and niche micro SaaS.",
    ogAlt: "Luiz Silva, software engineer and co-founder of L²MU",
  },
  nav: {
    approach: "How I work",
    career: "Career",
    company: "L²MU",
    contact: "Contact",
    switchTo: "Português",
    skip: "Skip to content",
  },
  hero: {
    eyebrow: "Software Engineer · Co-founder of L²MU",
    title: ["Technology is the tool.", "The job is solving the right problem."],
    lead:
      "I've been building software since 2022, from ERPs and legacy systems to microservices at large companies. Today I work side by side with sales to understand the pain of whoever pays the bill, and ship the solution that makes sense for the business, not just for the code.",
    ctaPrimary: "Message me on WhatsApp",
    ctaSecondary: "See my career",
    photoAlt: "Portrait of Luiz Silva",
    facts: [
      { value: "2022", label: "shipping software to production" },
      { value: "ERP · SaaS · AI", label: "domains I've delivered in" },
      { value: "2025", label: "co-founded L²MU" },
    ],
  },
  approach: {
    kicker: "How I work",
    title: "Code is the last step, not the first.",
    items: [
      {
        title: "Start with the pain",
        body: "Before picking a stack, I sit down with the people who sell and the people who use it. Understanding the real problem saves months of building the wrong thing.",
      },
      {
        title: "Architecture sized to the problem",
        body: "I've run microservices at scale and know when they're worth the cost. I also know when a well-built monolith solves it better and cheaper.",
      },
      {
        title: "Systems that age well",
        body: "ERPs and legacy code taught me software spends more time being maintained than written. I write for whoever comes next.",
      },
      {
        title: "Owning the outcome",
        body: "From the first discovery call to production support. If the client didn't feel the improvement, the work isn't done.",
      },
    ],
  },
  career: {
    kicker: "Career",
    title: "Since 2022, building what companies use every day.",
    lead: "ERP, legacy, microservices, AI and now my own company. Every step left me a piece of what I know today.",
    items: [
      {
        company: "L²MU",
        role: "Co-founder",
        period: "Apr 2025 — present",
        summary: "Custom software and micro SaaS for specific niches.",
        highlights: [
          "Discovery with sales and clients to turn pain into scope",
          "End-to-end product, architecture and priority decisions",
          "Building and running the systems in production",
        ],
      },
      {
        company: "Flow Analytics",
        role: "Senior Full Stack Developer",
        period: "Feb 2026 — Nov 2026",
        summary: "Data analysis and processing platform.",
        highlights: [
          "Evolved the Flow app with a focus on data, performance and security",
          "CI/CD and a standardized development workflow for the team",
        ],
      },
      {
        company: "VIASOFT",
        role: "Mid-level Full Stack Developer",
        period: "Dec 2024 — Oct 2025",
        summary: "AI applied to business management inside an ERP ecosystem.",
        highlights: [
          "Built VIAHELPER, an AI platform for business management",
          "Architecture and implementation of Radar Diário, a proactive alerting system",
          "Integrations between ERPs and internal services on a microservices architecture",
        ],
      },
      {
        company: "Hábil Software by Limber",
        role: "Mid-level Full Stack Developer",
        period: "Feb 2022 — Nov 2024",
        summary: "Large-scale ERP and SaaS, with plenty of legacy along the way.",
        highlights: [
          "Java, Spring Boot and Hibernate backend for ERP modules",
          "REST APIs with Node.js and TypeScript",
          "Modernized legacy screens and flows in Angular",
        ],
      },
    ],
  },
  company: {
    kicker: "The company",
    title: "L²MU",
    body: [
      "L²MU started as an idea of mine and became a company because three engineers I admire agreed to build it together. Today we're four partners, all hands-on with the code.",
      "We build custom software and bet on niche micro SaaS: small, sharp products made for one specific problem in one specific market.",
    ],
    role: "Co-founder",
    since: "since April 2025",
    pillars: [
      { title: "Custom", body: "Web, mobile and API systems for the client's operation." },
      { title: "Micro SaaS", body: "Our own products for niches the big players ignore." },
      { title: "No middlemen", body: "The people you talk to are the people writing the code." },
    ],
    cta: "Visit L²MU",
  },
  stack: {
    kicker: "Tools I use",
    note: "The choice comes after the problem.",
  },
  contact: {
    kicker: "Contact",
    title: "Got a problem software can solve?",
    lead: "Tell me the context. If I can help, or if L²MU is the right fit, I'll reply with a clear proposal.",
    whatsapp: "WhatsApp",
    whatsappMessage: "Hi Luiz! I found you through your portfolio.",
    email: "Email",
    copy: "Copy email",
    copied: "Copied",
  },
  footer: { rights: "Pato Branco, Brazil" },
};

export const dictionaries: Record<Locale, Dictionary> = { "pt-BR": ptBR, en };
