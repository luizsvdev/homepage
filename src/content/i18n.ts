import type { Locale } from "./site";

export type ExperienceId = "flow" | "l2mu" | "viasoft" | "habil";

export type ProductId = "habil" | "chefhabil" | "viahelper" | "radar" | "flow-data" | "flow-permissions" | "flow-team" | "juriscontroller";

type Experience = {
  id: ExperienceId;
  company: string;
  role: string;
  period: string;
  /** One line about the company itself. */
  context?: string;
  summary: string;
  highlights?: string[];
  /** Products built inside the company; `featured` gets the emphasis. */
  products?: {
    id: ProductId;
    name: string;
    featured?: boolean;
    /** Delivered by L²MU under a contract with this company. */
    viaL2mu?: boolean;
    badge?: string;
    body?: string;
    points: string[];
  }[];
  stack?: string[];
};

export type Dictionary = {
  meta: { title: string; description: string; ogAlt: string };
  ids: { main: string; approach: string; career: string; company: string; contact: string };
  nav: { label: string; approach: string; career: string; company: string; contact: string; switchTo: string; skip: string; open: string; close: string };
  hero: {
    /** Rendered as "{eyebrow} · {cofounder} <L²MU wordmark>". */
    eyebrow: string;
    cofounder: string;
    title: [string, string];
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    photoAlt: string;
    factsLabel: string;
    facts: { title: string; body: string }[];
  };
  approach: { kicker: string; title: string; items: { title: string; body: string }[] };
  career: { kicker: string; title: string; lead: string; current: string; featuredLabel: string; viaL2mu: string; items: Experience[] };
  company: {
    kicker: string;
    title: string;
    body: string[];
    role: string;
    since: string;
    pillars: { title: string; body: string }[];
    cta: string;
  };
  contact: {
    team: { kicker: string; title: string; body: string };
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
      "Engenheiro de software desde 2022, com entregas em ERPs, plataformas de dados e produtos de IA usados por milhares de empresas. Cofundador da L²MU.",
    ogAlt: "Luiz Silva, engenheiro de software e cofundador da L²MU",
  },
  ids: { main: "conteudo", approach: "como-trabalho", career: "trajetoria", company: "l2mu", contact: "contato" },
  nav: {
    label: "Principal",
    approach: "Como trabalho",
    career: "Trajetória",
    company: "L²MU",
    contact: "Contato",
    switchTo: "English",
    skip: "Ir para o conteúdo",
    open: "Abrir menu",
    close: "Fechar menu",
  },
  hero: {
    eyebrow: "Engenheiro de Software",
    cofounder: "Cofundador da",
    title: ["Do problema de negócio", "ao sistema em produção."],
    lead:
      "Engenheiro de software desde 2022, com entregas em ERPs, plataformas de dados e produtos de IA usados por milhares de empresas. Hoje, como cofundador da L²MU, conduzo projetos da descoberta com o cliente à operação em produção.",
    ctaPrimary: "Ver trajetória",
    ctaSecondary: "Entrar em contato",
    photoAlt: "Retrato de Luiz Silva",
    factsLabel: "O que entrego",
    facts: [
      { title: "Produtos do zero", body: "Do MVP à produção: Chef Hábil, VIAHELPER e Juris Controller." },
      { title: "Sistemas críticos", body: "Segurança, dados e integrações em plataformas com milhares de empresas." },
      {
        title: "Negócio e engenharia",
        body: "Do entendimento do problema à coordenação de fornecedores, com prazo e custo na mesa.",
      },
    ],
  },
  approach: {
    kicker: "Como trabalho",
    title: "O mesmo critério em cada projeto.",
    items: [
      {
        title: "Entender antes de construir",
        body: "Antes do código, entendo a dor de quem vai usar o sistema e o impacto dela no negócio. A solução certa equilibra a melhor experiência para o usuário com o melhor custo para a empresa.",
      },
      {
        title: "Arquitetura do tamanho do problema",
        body: "Microsserviços quando a escala exige, como na evolução do VIAHELPER para mais de 19 serviços. Um monólito bem estruturado quando ele resolve melhor e mais barato.",
      },
      {
        title: "Processo que acelera o time",
        body: "Deploy em segundos, ambiente de QA para cada PR e ferramentas internas que dão autonomia às outras áreas. Entrega rápida depende de processo, não de esforço heroico.",
      },
      {
        title: "Feito para durar em produção",
        body: "Sistemas são mais mantidos do que escritos. Desenho cada um pensando em quem vai operá-lo e evoluí-lo depois, com migrações graduais e rollback simples.",
      },
    ],
  },
  career: {
    kicker: "Trajetória",
    title: "Onde trabalhei e o que entreguei.",
    lead: "Do ERP de pequenas empresas a plataformas usadas por milhares delas, e agora com empresa própria.",
    current: "Atual",
    featuredLabel: "Destaque",
    viaL2mu: "Entregue pela L²MU, contratada pela Flow para este projeto.",
    items: [
      {
        id: "l2mu",
        company: "L²MU",
        role: "Cofundador · Engenheiro de Software",
        period: "abr 2025 — hoje",
        summary:
          "Software house de quatro engenheiros: construímos sistemas sob medida para clientes e operamos nossos próprios produtos para nichos específicos.",
        highlights: [
          "Desenho a arquitetura da maioria dos projetos e acompanho a construção até a entrega em produção",
          "Participo da descoberta com os clientes para transformar a dor do negócio em escopo, prazo e custo",
          "Entregamos projetos sob medida para clientes, da evolução de sistemas existentes a novos produtos web",
        ],
        products: [
          {
            id: "juriscontroller",
            name: "Juris Controller",
            featured: true,
            badge: "Produto próprio",
            body: "Sistema web de gestão para pequenos escritórios de advocacia, que reúne prazos, intimações do DJEN, processos e financeiro em um só lugar. Criado, mantido e operado por nós.",
            points: [],
          },
        ],
      },
      {
        id: "flow",
        company: "Flow",
        role: "Engenheiro de Software",
        period: "fev 2026 — nov 2026",
        context:
          "Plataforma de análise e gestão comercial usada por mais de 1.000 empresas, alimentada pelos dados do ERP de cada cliente. Entrei como o desenvolvedor mais experiente de um time enxuto.",
        summary:
          "Fortaleci a base de um sistema feito de dados: isolamento entre clientes, conexões com o banco, estrutura multitenant e o fluxo de entregas do time.",
        products: [
          {
            id: "flow-data",
            name: "Segurança e base de dados",
            featured: true,
            badge: "+1.000 empresas",
            points: [
              "Identifiquei e corrigi na primeira semana uma falha crítica de isolamento entre clientes na autenticação, reestruturando o controle de acesso com JWT",
              "Implementei pool de conexões por banco de cliente, com guard baseado no JWT e validação contra vazamento de conexão entre usuários. Antes, cada requisição abria uma conexão do zero",
              "Iniciei a reorganização da estrutura multitenant, levando para o schema de cada cliente os dados que estavam no schema administrativo",
            ],
          },
          {
            id: "flow-permissions",
            name: "Permissões por empresa",
            viaL2mu: true,
            body: "Demanda de clientes estratégicos: usuários com acesso a várias empresas precisavam de permissões diferentes em cada uma.",
            points: [
              "Refatoramos as permissões para o schema de cada empresa, com escopo de visualização por gerente, supervisor e vendedor",
              "Fizemos a migração de forma gradual, com uma flag por empresa que reativa o modelo legado em caso de problema",
            ],
          },
          {
            id: "flow-team",
            name: "Fluxo de entregas",
            points: [
              "Criei o painel administrativo da equipe para cadastrar clientes, usuários, grupos de acesso, relatórios e módulos. Antes, tudo era feito direto no banco e dependia de um desenvolvedor",
              "Criei um migrador de bases automatizado para acelerar as entregas",
              "Simplifiquei o fluxo Git: merge na main publica em homologação e tag versionada publica em produção, com deploy em segundos e rollback simples",
              "Criei um script que sobe o projeto com Docker na máquina do QA, para testar cada PR antes da aprovação",
            ],
          },
        ],
        stack: ["Python", "React", "Vite", "JWT", "Docker"],
      },
      {
        id: "viasoft",
        company: "VIASOFT",
        role: "Engenheiro de Software · P&D",
        period: "dez 2024 — out 2025",
        context:
          "Grupo de ERPs especialistas por segmento, no mercado desde 1990, com cerca de 700 colaboradores. Atuei no P&D, time de inovação e modernização de produtos.",
        summary:
          "Ajudei a levar o VIAHELPER do MVP a um produto usado por mais de 120 empresas, uma delas com mais de 3 mil lojas, e arquitetei sua funcionalidade mais estratégica.",
        products: [
          {
            id: "viahelper",
            name: "VIAHELPER",
            body: "Plataforma de IA para empresas: assistentes por setor, alimentados pelos dados do ERP do cliente via API.",
            points: [
              "Participei da concepção do MVP e da identidade visual do produto, junto ao time de design",
              "Integrei múltiplos provedores de IA (OpenAI, Gemini, Claude, Groq e LiteLLM), abrindo o produto para clientes com contratos em outras plataformas",
              "Participei da evolução da plataforma de um monólito para uma arquitetura de mais de 19 microsserviços",
              "Coordenei a consultoria externa contratada para o projeto: integração ao time, versão mobile e revisão de qualidade das entregas",
            ],
          },
          {
            id: "radar",
            name: "Radar Diário",
            featured: true,
            badge: "Pedido do CEO",
            body: "Alertas proativos com IA: o usuário descreve a regra em linguagem natural e a equipe é avisada quando algo no ERP precisa de atenção, como contas prestes a vencer sem ninguém olhando.",
            points: [
              "Arquitetei e construí a funcionalidade de ponta a ponta, do cadastro do alerta à notificação em tempo real",
              "Criei 3 microsserviços reutilizáveis: um scheduler com Quartz e um par producer/consumer sobre OCI Queue",
              "Implementei o disparo por agenda ou a cada carga de dados do ERP, com a IA avaliando as regras e decidindo se o alerta deve ser gerado",
              "Desenhei o processamento por fila conforme a capacidade disponível, para atender o volume de mais de 120 empresas sem sobrecarregar a plataforma com modelos ainda lentos",
              "Implementei as notificações via WebSocket para quem está online, com entrega das pendentes no login",
            ],
          },
        ],
        stack: ["OpenAI", "Gemini", "Claude", "Groq", "LiteLLM", "Java", "Spring Boot", "Next.js", "Quartz", "OCI Queue", "WebSocket"],
      },
      {
        id: "habil",
        company: "Hábil",
        role: "Desenvolvedor Full Stack",
        period: "fev 2022 — nov 2024",
        context: "ERP com mais de 30 anos de mercado para micro e pequenas empresas, hoje parte do Grupo Limber.",
        summary:
          "Evoluí módulos críticos de vendas e integração do ERP e ajudei a construir o produto que motivou a aquisição da Hábil pelo Grupo Limber.",
        products: [
          {
            id: "habil",
            name: "Hábil Software",
            points: [
              "Desenvolvi a API de integração para clientes, abrindo Vendas, Compras, Estoque e Serviços aos sistemas deles, e documentei todos os endpoints",
              "Criei uma plataforma de mensagens via WhatsApp com API própria e a integrei ao ERP para enviar boletos, notas fiscais e cobranças automaticamente",
              "Desenvolvi o fluxo de Pedidos de Venda para um cliente estratégico, do pedido em campo à venda com NF-e",
            ],
          },
          {
            id: "chefhabil",
            name: "Chef Hábil",
            featured: true,
            badge: "+8.600 estabelecimentos",
            body: "Sistema de gestão para restaurantes integrado ao ERP. Construí do zero junto com mais dois desenvolvedores.",
            points: [
              "Desenvolvi o kanban de pedidos em tempo real, integrado ao iFood e ao aiqfome via webhooks e WebSocket, em produção desde a entrega sem mudanças estruturais",
              "Criei o sincronizador com o ERP, que importa os cadastros e devolve as vendas automaticamente",
              "Criei o Painel de Comandas, um modo do kanban para as TVs da cozinha e do balcão",
            ],
          },
        ],
        stack: ["Java", "Spring Boot", "SQL", "Angular", "Node.js", "TypeScript", "WebSocket"],
      },
    ],
  },
  company: {
    kicker: "A empresa",
    title: "L²MU",
    body: [
      "A L²MU começou com uma ideia minha e virou empresa porque três profissionais que eu admiro toparam construir junto. Hoje somos quatro sócios: três na engenharia e um à frente da gestão e do comercial.",
      "Construímos sistemas sob medida e mantemos produtos próprios, como o Juris Controller. Como sócio, respondo pela arquitetura dos projetos e participo da descoberta com cada cliente, onde escopo, prazo e custo são definidos.",
    ],
    role: "Cofundador",
    since: "desde abril de 2025",
    pillars: [
      { title: "Sob medida", body: "Sistemas web, mobile e APIs para a operação do cliente." },
      { title: "Produtos próprios", body: "Software que construímos e operamos para nichos específicos." },
      { title: "Direto com os sócios", body: "Você conversa com quem conduz e entrega o projeto, sem intermediários." },
    ],
    cta: "Conhecer a L²MU",
  },
  contact: {
    team: {
      kicker: "Em equipe",
      title: "Dois fazem mais do que um.",
      body: "Levo um sistema de ponta a ponta, mas os melhores resultados que entreguei vieram de times. A L²MU é o exemplo mais claro: uma ideia que, no dia seguinte, já era um time de quatro sócios. Em cada projeto, busco somar ao que o time já tem e cobrir o que falta.",
    },
    kicker: "Contato",
    title: "Uma vaga, um projeto ou um problema para resolver?",
    lead: "Respondo pessoalmente. Para oportunidades, envie o contexto da vaga. Para projetos, conte o problema e eu indico o melhor caminho.",
    whatsapp: "WhatsApp",
    whatsappMessage: "Olá, Luiz! Vim pelo seu portfólio.",
    email: "E-mail",
    copy: "Copiar e-mail",
    copied: "Copiado",
  },
  footer: { rights: "Brasil" },
};

const en: Dictionary = {
  meta: {
    title: "Luiz Silva · Software Engineer and co-founder of L²MU",
    description:
      "Software engineer since 2022, delivering ERPs, data platforms and AI products used by thousands of companies. Co-founder of L²MU.",
    ogAlt: "Luiz Silva, software engineer and co-founder of L²MU",
  },
  ids: { main: "content", approach: "how-i-work", career: "career", company: "l2mu", contact: "contact" },
  nav: {
    label: "Main",
    approach: "How I work",
    career: "Career",
    company: "L²MU",
    contact: "Contact",
    switchTo: "Português",
    skip: "Skip to content",
    open: "Open menu",
    close: "Close menu",
  },
  hero: {
    eyebrow: "Software Engineer",
    cofounder: "Co-founder of",
    title: ["From business problem", "to system in production."],
    lead:
      "Software engineer since 2022, delivering ERPs, data platforms and AI products used by thousands of companies. Today, as co-founder of L²MU, I lead projects from discovery with the client to running in production.",
    ctaPrimary: "See my career",
    ctaSecondary: "Get in touch",
    photoAlt: "Portrait of Luiz Silva",
    factsLabel: "What I deliver",
    facts: [
      { title: "Built from scratch", body: "From MVP to production: Chef Hábil, VIAHELPER and Juris Controller." },
      { title: "Critical systems", body: "Security, data and integrations on platforms serving thousands of companies." },
      {
        title: "Business and engineering",
        body: "From understanding the problem to managing vendors, with timeline and cost on the table.",
      },
    ],
  },
  approach: {
    kicker: "How I work",
    title: "The same standard on every project.",
    items: [
      {
        title: "Understand before building",
        body: "Before any code, I understand the pain of whoever will use the system and its impact on the business. The right solution balances the best experience for the user with the best cost for the company.",
      },
      {
        title: "Architecture sized to the problem",
        body: "Microservices when scale demands it, as in VIAHELPER's evolution to 19+ services. A well-structured monolith when it solves the problem better and cheaper.",
      },
      {
        title: "Process that speeds up the team",
        body: "Deploys in seconds, a QA environment for every PR and internal tools that give other teams autonomy. Fast delivery comes from process, not heroics.",
      },
      {
        title: "Built to last in production",
        body: "Systems are maintained far more than they are written. I design for whoever will run and evolve them next, with gradual migrations and simple rollbacks.",
      },
    ],
  },
  career: {
    kicker: "Career",
    title: "Where I've worked and what I shipped.",
    lead: "From ERPs for small businesses to platforms used by thousands of them, and now my own company.",
    current: "Current",
    featuredLabel: "Highlight",
    viaL2mu: "Delivered by L²MU, hired by Flow for this project.",
    items: [
      {
        id: "l2mu",
        company: "L²MU",
        role: "Co-founder · Software Engineer",
        period: "Apr 2025 — present",
        summary:
          "A software house of four engineers: we build custom systems for clients and run our own products for specific niches.",
        highlights: [
          "I design the architecture of most projects and stay with the build until it runs in production",
          "I take part in discovery with clients to turn business pain into scope, timeline and cost",
          "We deliver custom projects for clients, from evolving existing systems to building new web products",
        ],
        products: [
          {
            id: "juriscontroller",
            name: "Juris Controller",
            featured: true,
            badge: "Our own product",
            body: "A web-based management system for small law firms, bringing deadlines, DJEN court notices, cases and finance together in one place. Built, maintained and run by us.",
            points: [],
          },
        ],
      },
      {
        id: "flow",
        company: "Flow",
        role: "Software Engineer",
        period: "Feb 2026 — Nov 2026",
        context:
          "A sales analytics and management platform used by 1,000+ companies, fed by each client's ERP data. I joined as the most experienced developer on a lean team.",
        summary:
          "I strengthened the foundation of a data-only system: isolation between clients, database connections, the multitenant structure and the team's delivery flow.",
        products: [
          {
            id: "flow-data",
            name: "Security and data foundation",
            featured: true,
            badge: "1,000+ companies",
            points: [
              "Found and fixed, in my first week, a critical client isolation flaw in authentication, restructuring access control with JWT",
              "Implemented connection pooling per client database, with a JWT-based guard and checks against connections leaking between users. Before, every request opened a connection from scratch",
              "Started reorganizing the multitenant structure, moving data from the admin schema into each client's own schema",
            ],
          },
          {
            id: "flow-permissions",
            name: "Per-company permissions",
            viaL2mu: true,
            body: "Requested by key clients: users with access to several companies needed different permissions in each one.",
            points: [
              "We refactored permissions into each company's schema, with view scopes for manager, supervisor and sales rep",
              "We migrated gradually, with a per-company flag that restores the legacy model if anything goes wrong",
            ],
          },
          {
            id: "flow-team",
            name: "Delivery flow",
            points: [
              "Created the team's admin panel to manage clients, users, access groups, reports and modules. Before, everything was done straight in the database and required a developer",
              "Created an automated database migrator to speed up deliveries",
              "Simplified the Git flow: merging to main deploys to staging and a versioned tag deploys to production, with deploys in seconds and easy rollback",
              "Created a script that spins up the project with Docker on the QA machine, so every PR is tested before approval",
            ],
          },
        ],
        stack: ["Python", "React", "Vite", "JWT", "Docker"],
      },
      {
        id: "viasoft",
        company: "VIASOFT",
        role: "Software Engineer · R&D",
        period: "Dec 2024 — Oct 2025",
        context:
          "A group of industry-specialized ERPs, on the market since 1990, with around 700 employees. I worked in R&D, the innovation and product modernization team.",
        summary:
          "I helped take VIAHELPER from MVP to a product used by 120+ companies, one of them with 3,000+ stores, and architected its most strategic feature.",
        products: [
          {
            id: "viahelper",
            name: "VIAHELPER",
            body: "An AI platform for businesses: assistants per department, fed by the client's ERP data through an API.",
            points: [
              "Took part in shaping the MVP and the product's visual identity alongside the design team",
              "Integrated multiple AI providers (OpenAI, Gemini, Claude, Groq and LiteLLM), opening the product to clients already contracted with other platforms",
              "Took part in evolving the platform from a monolith into an architecture of 19+ microservices",
              "Coordinated the external consultancy hired for the project: onboarding, the mobile version and quality review of their deliveries",
            ],
          },
          {
            id: "radar",
            name: "Radar Diário",
            featured: true,
            badge: "Requested by the CEO",
            body: "Proactive AI alerts: users describe a rule in plain language and the team is notified when something in the ERP needs attention, such as bills about to fall due with nobody looking.",
            points: [
              "Architected and built the feature end to end, from alert setup to real-time notification",
              "Created 3 reusable microservices: a Quartz scheduler and an OCI Queue producer/consumer pair",
              "Implemented scheduled and per-ERP-load triggers, with the AI evaluating the rules and deciding whether to raise the alert",
              "Designed queue-based processing paced to available capacity, handling 120+ companies without overloading the platform with still-slow models",
              "Implemented WebSocket notifications for users online, with pending ones delivered at login",
            ],
          },
        ],
        stack: ["OpenAI", "Gemini", "Claude", "Groq", "LiteLLM", "Java", "Spring Boot", "Next.js", "Quartz", "OCI Queue", "WebSocket"],
      },
      {
        id: "habil",
        company: "Hábil",
        role: "Full Stack Developer",
        period: "Feb 2022 — Nov 2024",
        context: "An ERP with 30+ years on the market for small businesses, now part of Grupo Limber.",
        summary:
          "I evolved the ERP's critical sales and integration modules and helped build the product behind Grupo Limber's acquisition of Hábil.",
        products: [
          {
            id: "habil",
            name: "Hábil Software",
            points: [
              "Built the customer integration API, opening Sales, Purchasing, Inventory and Services to their own systems, and documented every endpoint",
              "Created a WhatsApp messaging platform with its own API and integrated it with the ERP to send invoices, payment slips and reminders automatically",
              "Built the Sales Orders flow for a key client, from field order to invoiced sale",
            ],
          },
          {
            id: "chefhabil",
            name: "Chef Hábil",
            featured: true,
            badge: "8,600+ venues",
            body: "Restaurant management software integrated with the ERP. I built it from scratch alongside two other developers.",
            points: [
              "Built the real-time order kanban, integrated with iFood and aiqfome via webhooks and WebSocket, in production since launch with no structural changes",
              "Created the ERP sync, which imports records and sends sales back automatically",
              "Created the Ticket Board, a kanban mode for kitchen and counter TVs",
            ],
          },
        ],
        stack: ["Java", "Spring Boot", "SQL", "Angular", "Node.js", "TypeScript", "WebSocket"],
      },
    ],
  },
  company: {
    kicker: "The company",
    title: "L²MU",
    body: [
      "L²MU started as an idea of mine and became a company because three professionals I admire agreed to build it together. Today we're four partners: three in engineering and one leading management and sales.",
      "We build custom systems and run products of our own, like Juris Controller. As a partner, I own the architecture of our projects and take part in discovery with every client, where scope, timeline and cost are set.",
    ],
    role: "Co-founder",
    since: "since April 2025",
    pillars: [
      { title: "Custom", body: "Web, mobile and API systems for the client's operation." },
      { title: "Own products", body: "Software we build and run for specific niches." },
      { title: "Straight to the partners", body: "You talk to the people who run and deliver the project, with no middlemen." },
    ],
    cta: "Visit L²MU",
  },
  contact: {
    team: {
      kicker: "As a team",
      title: "Two achieve more than one.",
      body: "I can take a system end to end, but my best results came from teams. L²MU is the clearest example: an idea that, the next day, was already a team of four partners. On every project, I look to add to what the team already has and cover what is missing.",
    },
    kicker: "Contact",
    title: "A role, a project or a problem to solve?",
    lead: "I reply personally. For opportunities, send the context of the role. For projects, describe the problem and I'll point to the best path.",
    whatsapp: "WhatsApp",
    whatsappMessage: "Hi Luiz! I found you through your portfolio.",
    email: "Email",
    copy: "Copy email",
    copied: "Copied",
  },
  footer: { rights: "Brazil" },
};

export const dictionaries: Record<Locale, Dictionary> = { "pt-BR": ptBR, en };

/** Maps a section anchor from any locale to the same section in `to` ("#trajetoria" -> "#career"). */
export function translateHash(hash: string, to: Locale): string {
  const id = hash.replace(/^#/, "");
  if (!id) return "";
  for (const dict of Object.values(dictionaries)) {
    const key = (Object.keys(dict.ids) as (keyof Dictionary["ids"])[]).find((k) => dict.ids[k] === id);
    if (key) return `#${dictionaries[to].ids[key]}`;
  }
  return "";
}
