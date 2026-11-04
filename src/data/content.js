export const dictionary = {
  pt: {
    nav: [
      "Início",
      "Sobre",
      "Experiência",
      "Projetos",
      "Habilidades",
      "Contato",
    ],
    hero: {
      eyebrow: "Desenvolvimento Full Stack / Automação / Tecnologia aplicada a negócios",
      title: "Desenvolvo sistemas que transformam processos em resultados.",
      subtitle:
        "Crio aplicações, automações e soluções digitais que conectam tecnologia às necessidades reais das empresas. Do desenvolvimento de sistemas à integração de dados, meu trabalho é simplificar operações, eliminar tarefas repetitivas e construir ferramentas que tornam o dia a dia mais eficiente.",
      primary: "Ver Projetos",
      secondary: "Entrar em Contato",
      stats: [
        { value: "Full Stack", label: "web, desktop e APIs" },
        { value: "Automação", label: "processos e integrações" },
        { value: "Dados", label: "dashboards e indicadores" },
      ],
    },
    about: {
      title: "Sobre Mim",
      body: "Sou Desenvolvedor Full Stack Júnior e estudante de Análise e Desenvolvimento de Sistemas no IFSP São Carlos. Minha trajetória combina desenvolvimento de software, automação de processos e análise de dados, com experiência na construção de soluções tecnológicas para ambientes empresariais.\n\nAtualmente, trabalho na Aulevi, participando do desenvolvimento e da evolução do ecossistema ALV, um conjunto de sistemas internos que conecta as áreas comercial e operacional. Atuo na criação de aplicações web e desktop, APIs, integrações com sistemas corporativos (como o TOTVS Protheus), dashboards e ferramentas de automação, transformando necessidades do negócio em soluções funcionais e sustentáveis.\n\nTenho interesse especial em sistemas que simplificam processos, centralizam informações e apoiam a tomada de decisão. Mais do que escrever código, gosto de entender o problema, estruturar a solução e acompanhar sua aplicação na prática. Acredito que a tecnologia deve ser funcional, acessível e, principalmente, capaz de gerar resultados reais.",
      pillars: [
        "Desenvolvimento Full Stack",
        "Automação de processos",
        "Dados e Business Intelligence",
      ],
    },
    experienceTitle: "Experiência",
    experiences: [
      {
        type: "Profissional",
        role: "Desenvolvedor Full Stack Júnior",
        place: "Aulevi - São Carlos, SP",
        period: "Jan/2026 - Atual",
        description:
          "Desenvolvimento e evolução de sistemas internos, aplicações web e ferramentas de automação para apoiar os processos comerciais e operacionais da empresa. Participo do levantamento de necessidades, da definição das soluções, do desenvolvimento de funcionalidades, da integração com bancos de dados e sistemas corporativos e da manutenção dos sistemas em produção, do front-end às APIs e à persistência de dados.",
        highlights: [
          "Desenvolvimento Full Stack do ecossistema ALV",
          "Gestão de clientes, produtos, orçamentos e pedidos",
          "APIs e integrações (incluindo TOTVS Protheus)",
          "Automação de rotinas e dashboards",
        ],
      },
      {
        type: "Profissional",
        role: "Estagiário - Compras / Dados / Automação",
        place: "Simple Wall / Smart Pods - São Carlos, SP",
        period: "Jul/2024 - Dez/2025",
        description:
          "Atuação na área de compras e suprimentos, usando tecnologia e análise de dados para melhorar processos operacionais. Desenvolvimento de ferramentas para tratamento de informações, automatização de relatórios e construção de indicadores no Power BI para apoiar decisões e atividades do setor, com apoio em cotações, ordens de compra, pré-notas e gestão de Master Data.",
        highlights: [
          "Análise e tratamento de dados",
          "SQL, Python e Excel",
          "Dashboards e KPIs no Power BI",
          "Compras, suprimentos e Master Data",
        ],
      },
      {
        type: "Profissional",
        role: "Estagiário em Desenvolvimento Web",
        place: "Compass UOL - Remoto",
        period: "Jun/2023 - Out/2023",
        description:
          "Desenvolvimento de aplicações com React Native e TypeScript, em equipe e com metodologias ágeis (Scrum). Contato com versionamento de código, documentação de componentes e conceitos de arquitetura e infraestrutura em nuvem, com base no AWS Well-Architected Framework.",
        highlights: [
          "React Native e TypeScript",
          "Git e GitHub",
          "Metodologias ágeis (Scrum)",
          "Storybook e fundamentos de AWS",
        ],
      },
      {
        type: "Acadêmica",
        role: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        place: "IFSP - São Carlos",
        period: "2022 - Atual",
        description:
          "Formação superior voltada a programação, banco de dados, desenvolvimento web, engenharia de software e construção de sistemas, conectando fundamentos técnicos com projetos práticos de automação, dados e interfaces.",
        highlights: [
          "Programação",
          "Banco de dados",
          "Desenvolvimento web",
          "Engenharia de software",
        ],
      },
      {
        type: "Acadêmica",
        role: "Técnico em Manutenção de Aeronaves (Aviônicos)",
        place: "IFSP - São Carlos",
        period: "2018 - 2021",
        description:
          "Formação técnica com base em sistemas aviônicos, manutenção, lógica de diagnóstico e atenção a processos críticos, contribuindo para uma visão disciplinada de operação, precisão e confiabilidade.",
        highlights: [
          "Aviônicos",
          "Manutenção técnica",
          "Diagnóstico",
          "Processos críticos",
        ],
      },
    ],
    projectsTitle: "Projetos",
    projectDetails: {
      open: "Ver detalhes",
      close: "Fechar",
      overview: "Visão geral",
      problem: "Problema",
      solution: "Solução",
      technologies: "Tecnologias usadas",
      highlights: "Destaques",
      gallery: "Prévias do sistema",
    },
    projects: [
      {
        title: "ALV - Plataforma de Gestão Operacional",
        description:
          "Plataforma empresarial que integra e organiza processos internos, conectando as áreas comercial e operacional em um ambiente centralizado. Contempla módulos de gestão comercial, acompanhamento de processos, operações e logística, com fluxos de trabalho, controle de acesso e rastreabilidade das atividades.",
        tags: ["React", "FastAPI", "PostgreSQL", "Supabase", "Full-Stack"],
        problem:
          "Informações e processos espalhados entre planilhas, sistemas e áreas diferentes dificultavam o acompanhamento das etapas, a rastreabilidade e a tomada de decisão.",
        solution:
          "Desenvolvimento de módulos independentes e integrados em um único ecossistema, com gestão de processos, controle de permissões e responsabilidades, integração com sistemas corporativos e automação de atividades.",
        technologies: [
          "React",
          "TypeScript",
          "Python",
          "FastAPI",
          "PostgreSQL",
          "Supabase",
          "SQL",
        ],
        highlights: [
          "Módulos independentes e integrados",
          "Gestão de processos e acompanhamento de etapas",
          "Controle de permissões e responsabilidades",
          "Integração entre áreas operacionais e sistemas corporativos",
          "Automação de atividades e centralização de informações",
          "Interfaces web e APIs",
        ],
        gallery: [
          {
            title: "Acompanhamento de processos",
            caption:
              "Visão organizada das etapas e responsáveis de cada processo.",
          },
          {
            title: "Módulos integrados",
            caption:
              "Áreas comercial e operacional conectadas em um só ambiente.",
          },
        ],
      },
      {
        title: "Site Institucional - Caragi",
        description:
          "Site institucional moderno e responsivo desenvolvido para a empresa Caragi, estruturado para apresentar soluções corporativas, fortalecer a presença digital da marca e facilitar o contato comercial com clientes e parceiros.",
        tags: ["React", "TypeScript", "Tailwind CSS", "Front-End"],
        problem:
          "A empresa precisava de uma presença digital profissional, rápida e alinhada à sua identidade visual para apresentar seus serviços com clareza e facilitar a captação de contatos.",
        solution:
          "Desenvolvimento de uma aplicação web responsiva com React, TypeScript e Tailwind CSS, priorizando performance de carregamento, navegação fluida em dispositivos móveis e desktop, SEO e componentes modulares.",
        technologies: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Vite",
          "Responsive Design",
        ],
        highlights: [
          "Interface moderna alinhada à identidade da marca",
          "Layout 100% responsivo para mobile e desktop",
          "Componentização limpa e tipada com TypeScript",
          "Foco em performance, acessibilidade e SEO",
        ],
        gallery: [
          {
            title: "Apresentação institucional",
            caption:
              "Seções claras destacando os diferenciais e serviços da Caragi.",
          },
          {
            title: "Experiência responsiva",
            caption:
              "Navegação adaptada para celulares, tablets e computadores.",
          },
        ],
      },
      {
        title: "Automação de Relatórios e Documentos",
        description:
          "Ferramentas em Python para automatizar tarefas administrativas e operacionais. As soluções fazem a leitura, o tratamento, a consolidação e a validação de dados, além da geração automática de relatórios e documentos padronizados.",
        tags: ["Python", "Data Analysis", "Automation"],
        problem:
          "Relatórios e documentos administrativos exigiam conferência manual, cópia de dados entre arquivos e repetição de etapas sujeitas a erro.",
        solution:
          "Criação de scripts que leem arquivos, consolidam informações, aplicam regras de validação e geram documentos padronizados de forma automática.",
        technologies: ["Python", "Pandas", "OpenPyXL", "SQL", "PDF/Docs"],
        highlights: [
          "Processamento automatizado de planilhas",
          "Tratamento e consolidação de dados",
          "Geração padronizada de relatórios e documentos",
          "Redução de tarefas manuais e retrabalho",
        ],
        gallery: [
          {
            title: "Painel de execução",
            caption: "Resumo das rotinas processadas e status de validação.",
          },
          {
            title: "Saída documental",
            caption:
              "Documento final gerado com dados tratados e layout padronizado.",
          },
        ],
      },
      {
        title: "Portfólio Interativo",
        description:
          "Este site, desenvolvido para apresentar experiências e projetos de forma organizada, responsiva e acessível, com troca de idioma, tema claro/escuro e componentes reutilizáveis.",
        tags: ["Vite", "Tailwind CSS", "i18n"],
        problem:
          "Um portfólio genérico não mostrava bem a combinação entre desenvolvimento de sistemas, automação e experiência real com processos empresariais.",
        solution:
          "Página responsiva com conteúdo bilíngue, tema claro/escuro e estrutura pronta para detalhar cada projeto.",
        technologies: [
          "React",
          "Vite",
          "Tailwind CSS",
          "Context API",
          "Lucide Icons",
        ],
        highlights: [
          "Interface responsiva",
          "Temas claro e escuro",
          "Português e inglês",
          "Apresentação interativa dos projetos",
        ],
        gallery: [
          {
            title: "Hero responsivo",
            caption:
              "Primeiro bloco com mensagem direta e destaques de atuação.",
          },
          {
            title: "Cards interativos",
            caption: "Grade de projetos com detalhes expandidos em modal.",
          },
        ],
      },
    ],
    skillsTitle: "Habilidades",
    skills: [
      {
        title: "Front-end",
        description: "Interfaces responsivas, rápidas e fáceis de usar — da web a totens de autoatendimento.",
        items: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "React Native"],
      },
      {
        title: "Back-end & Integrações",
        description: "APIs, regras de negócio e integrações com ERP e sistemas desktop.",
        items: ["Python", "FastAPI", "Node.js", "APIs REST", "TOTVS Protheus", "Electron"],
      },
      {
        title: "Banco de Dados",
        description: "Modelagem, consultas e persistência de dados relacionais.",
        items: ["PostgreSQL", "Supabase", "MySQL", "SQLite", "SQL"],
      },
      {
        title: "Dados, BI & Ferramentas",
        description: "Análise, dashboards e o ferramental do dia a dia de desenvolvimento.",
        items: ["Power BI", "Excel", "Pandas", "Git/GitHub", "Docker", "Linux", "Figma"],
      },
    ],
    ui: {
      all: "Todos",
      filterLabel: "Filtrar projetos por tecnologia",
      available: "Disponível para conexões profissionais",
      footer: "Feito com React, Vite e Tailwind CSS.",
      backToTop: "Voltar ao topo",
    },
    contact: {
      title: "Contato",
      subtitle:
        "Vamos transformar ideias em soluções? Se você quer trocar experiências, conversar sobre tecnologia ou desenvolver uma solução, entre em contato. Vamos construir algo juntos.",
      name: "Nome",
      email: "E-mail",
      message: "Mensagem",
      submit: "Enviar Mensagem",
      sending: "Enviando...",
      success: "Mensagem enviada com sucesso! Responderei em breve.",
      error: "Não foi possível enviar no momento. Tente novamente ou chame pelo LinkedIn.",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
  en: {
    nav: ["Home", "About", "Experience", "Projects", "Skills", "Contact"],
    hero: {
      eyebrow: "Full Stack Development / Automation / Technology for Business",
      title: "I build systems that turn processes into results.",
      subtitle:
        "I create applications, automations, and digital solutions that connect technology to real business needs. From system development to data integration, my work is to simplify operations, eliminate repetitive tasks, and build tools that make everyday work more efficient.",
      primary: "View Projects",
      secondary: "Get in Touch",
      stats: [
        { value: "Full Stack", label: "web, desktop, and APIs" },
        { value: "Automation", label: "processes and integrations" },
        { value: "Data", label: "dashboards and metrics" },
      ],
    },
    about: {
      title: "About Me",
      body: "I am a Junior Full Stack Developer and a Systems Analysis and Development student at IFSP São Carlos. My background combines software development, process automation, and data analysis, with hands-on experience building technology solutions for business environments.\n\nI currently work at Aulevi, helping develop and evolve the ALV ecosystem, a set of internal systems that connects the commercial and operational areas. I build web and desktop applications, APIs, integrations with enterprise systems (such as TOTVS Protheus), dashboards, and automation tools, turning business needs into functional, sustainable solutions.\n\nI have a particular interest in systems that simplify processes, centralize information, and support better decision-making. More than writing code, I enjoy understanding the problem, designing the solution, and seeing it work in practice. I believe technology should be functional, accessible, and above all capable of delivering real results.",
      pillars: [
        "Full Stack development",
        "Process automation",
        "Data and Business Intelligence",
      ],
    },
    experienceTitle: "Experience",
    experiences: [
      {
        type: "Professional",
        role: "Junior Full Stack Developer",
        place: "Aulevi - São Carlos, SP",
        period: "Jan/2026 - Present",
        description:
          "Development and evolution of internal systems, web applications, and automation tools that support the company's commercial and operational processes. I take part in gathering requirements, defining solutions, building features, integrating databases and enterprise systems, and maintaining systems in production, from the front end to APIs and data persistence.",
        highlights: [
          "Full Stack development of the ALV ecosystem",
          "Customer, product, quote, and order management",
          "APIs and integrations (including TOTVS Protheus)",
          "Routine automation and dashboards",
        ],
      },
      {
        type: "Professional",
        role: "Intern - Purchasing / Data / Automation",
        place: "Simple Wall / Smart Pods - São Carlos, SP",
        period: "Jul/2024 - Dec/2025",
        description:
          "Worked in purchasing and supply, using technology and data analysis to improve operational processes. Built tools for data processing, report automation, and Power BI indicators to support decisions and daily activities, with hands-on support for quotations, purchase orders, pre-invoices, and Master Data management.",
        highlights: [
          "Data analysis and processing",
          "SQL, Python, and Excel",
          "Power BI dashboards and KPIs",
          "Purchasing, supply, and Master Data",
        ],
      },
      {
        type: "Professional",
        role: "Web Development Intern",
        place: "Compass UOL - Remote",
        period: "Jun/2023 - Oct/2023",
        description:
          "Built applications with React Native and TypeScript, working in a team with agile methodologies (Scrum). Gained experience with version control, component documentation, and cloud architecture and infrastructure concepts based on the AWS Well-Architected Framework.",
        highlights: [
          "React Native and TypeScript",
          "Git and GitHub",
          "Agile methodologies (Scrum)",
          "Storybook and AWS fundamentals",
        ],
      },
      {
        type: "Academic",
        role: "Technology Degree in Systems Analysis and Development",
        place: "IFSP - São Carlos",
        period: "2022 - Present",
        description:
          "Higher education focused on programming, databases, web development, software engineering, and system building, connecting technical foundations with practical projects in automation, data, and interfaces.",
        highlights: [
          "Programming",
          "Databases",
          "Web development",
          "Software engineering",
        ],
      },
      {
        type: "Academic",
        role: "Aircraft Maintenance Technician (Avionics)",
        place: "IFSP - São Carlos",
        period: "2018 - 2021",
        description:
          "Technical education in avionics systems, maintenance, diagnostic logic, and attention to critical processes, shaping a disciplined approach to operations, precision, and reliability.",
        highlights: [
          "Avionics",
          "Technical maintenance",
          "Diagnostics",
          "Critical processes",
        ],
      },
    ],
    projectsTitle: "Projects",
    projectDetails: {
      open: "View details",
      close: "Close",
      overview: "Overview",
      problem: "Problem",
      solution: "Solution",
      technologies: "Technologies used",
      highlights: "Highlights",
      gallery: "System previews",
    },
    projects: [
      {
        title: "ALV - Operations Management Platform",
        description:
          "An enterprise platform that integrates and organizes internal processes, connecting the commercial and operational areas in a single environment. It includes modules for sales management, process tracking, operations, and logistics, with workflows, access control, and activity traceability.",
        tags: ["React", "FastAPI", "PostgreSQL", "Supabase", "Full-Stack"],
        problem:
          "Information and processes scattered across spreadsheets, systems, and departments made it hard to track stages, trace activity, and make decisions.",
        solution:
          "Independent yet integrated modules within a single ecosystem, with process management, role-based permissions and responsibilities, integration with enterprise systems, and activity automation.",
        technologies: [
          "React",
          "TypeScript",
          "Python",
          "FastAPI",
          "PostgreSQL",
          "Supabase",
          "SQL",
        ],
        highlights: [
          "Independent and integrated modules",
          "Process management and stage tracking",
          "Permission and responsibility control",
          "Integration across operational areas and enterprise systems",
          "Activity automation and centralized information",
          "Web interfaces and APIs",
        ],
        gallery: [
          {
            title: "Process tracking",
            caption: "Organized view of each process's stages and owners.",
          },
          {
            title: "Integrated modules",
            caption:
              "Commercial and operational areas connected in a single environment.",
          },
        ],
      },
      {
        title: "Corporate Website - Caragi",
        description:
          "Modern and responsive corporate website built for Caragi, designed to present company solutions, strengthen brand presence online, and streamline commercial contact with clients and partners.",
        tags: ["React", "TypeScript", "Tailwind CSS", "Front-End"],
        problem:
          "The company needed a fast, professional digital presence aligned with its visual identity to clearly present its services and capture commercial leads.",
        solution:
          "Development of a responsive web application using React, TypeScript, and Tailwind CSS, focusing on fast load times, smooth navigation across mobile and desktop devices, SEO, and modular components.",
        technologies: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Vite",
          "Responsive Design",
        ],
        highlights: [
          "Modern interface aligned with brand identity",
          "Fully responsive layout for mobile and desktop",
          "Clean, strongly typed component architecture with TypeScript",
          "Focus on performance, accessibility, and SEO",
        ],
        gallery: [
          {
            title: "Corporate showcase",
            caption:
              "Clear sections highlighting Caragi's differentiators and services.",
          },
          {
            title: "Responsive experience",
            caption:
              "Navigation tailored for phones, tablets, and desktops.",
          },
        ],
      },
      {
        title: "Report and Document Automation",
        description:
          "Python tools that automate administrative and operational tasks. They read, clean, consolidate, and validate data, then automatically generate standardized reports and documents.",
        tags: ["Python", "Data Analysis", "Automation"],
        problem:
          "Administrative reports and documents required manual checking, copying data between files, and repeating error-prone steps.",
        solution:
          "Scripts that read files, consolidate information, apply validation rules, and automatically generate standardized documents.",
        technologies: ["Python", "Pandas", "OpenPyXL", "SQL", "PDF/Docs"],
        highlights: [
          "Automated spreadsheet processing",
          "Data cleaning and consolidation",
          "Standardized report and document generation",
          "Less manual work and rework",
        ],
        gallery: [
          {
            title: "Execution panel",
            caption: "Summary of processed routines and validation status.",
          },
          {
            title: "Document output",
            caption:
              "Final document generated from clean data with a standardized layout.",
          },
        ],
      },
      {
        title: "Interactive Portfolio",
        description:
          "This site, built to present experience and projects in an organized, responsive, and accessible way, with language switching, light/dark theme, and reusable components.",
        tags: ["Vite", "Tailwind CSS", "i18n"],
        problem:
          "A generic portfolio did not convey the combination of systems development, automation, and real experience with business processes.",
        solution:
          "A responsive page with bilingual content, light/dark theme, and a structure ready to detail each project.",
        technologies: [
          "React",
          "Vite",
          "Tailwind CSS",
          "Context API",
          "Lucide Icons",
        ],
        highlights: [
          "Responsive interface",
          "Light and dark themes",
          "Portuguese and English",
          "Interactive project presentation",
        ],
        gallery: [
          {
            title: "Responsive hero",
            caption: "Opening section with a direct message and key focus areas.",
          },
          {
            title: "Interactive cards",
            caption: "Project grid with expanded details in a modal.",
          },
        ],
      },
    ],
    skillsTitle: "Skills",
    skills: [
      {
        title: "Front-end",
        description: "Responsive, fast and easy-to-use interfaces — from the web to self-service kiosks.",
        items: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "React Native"],
      },
      {
        title: "Back-end & Integrations",
        description: "APIs, business rules and integrations with ERP and desktop systems.",
        items: ["Python", "FastAPI", "Node.js", "APIs REST", "TOTVS Protheus", "Electron"],
      },
      {
        title: "Databases",
        description: "Modeling, querying and persisting relational data.",
        items: ["PostgreSQL", "Supabase", "MySQL", "SQLite", "SQL"],
      },
      {
        title: "Data, BI & Tools",
        description: "Analysis, dashboards and the everyday development toolkit.",
        items: ["Power BI", "Excel", "Pandas", "Git/GitHub", "Docker", "Linux", "Figma"],
      },
    ],
    ui: {
      all: "All",
      filterLabel: "Filter projects by technology",
      available: "Open to professional connections",
      footer: "Built with React, Vite and Tailwind CSS.",
      backToTop: "Back to top",
    },
    contact: {
      title: "Contact",
      subtitle:
        "Let's turn ideas into solutions. If you'd like to exchange experiences, talk about technology, or build something together, get in touch.",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send Message",
      sending: "Sending...",
      success: "Message sent! I'll get back to you soon.",
      error: "Could not send your message right now. Please try again or reach out on LinkedIn.",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
};