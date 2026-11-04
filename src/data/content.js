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
      eyebrow: "Dados / Automação / Sistemas web",
      title: "Transformo rotinas operacionais em sistemas claros.",
      subtitle:
        "Crio automações, dashboards e interfaces modernas para reduzir trabalho manual, organizar dados e acelerar processos.",
      primary: "Ver Projetos",
      secondary: "Entrar em Contato",
      stats: [
        { value: "React", label: "interfaces responsivas" },
        { value: "Python", label: "automação e dados" },
        { value: "FastAPI", label: "backends objetivos" },
      ],
    },
    about: {
      title: "Sobre Mim",
      body: "Sou formando em Análise e Desenvolvimento de Sistemas (ADS) e atuo no desenvolvimento de sistemas completos, automações e soluções digitais para empresas. Atualmente, trabalho na Aulevi, unindo tecnologia, dados e experiência no setor da construção civil para identificar problemas operacionais e transformar processos manuais em soluções mais rápidas, organizadas e eficientes. Meu foco é criar sistemas personalizados, do backend ao frontend, com interfaces modernas, fáceis de usar e funcionalidades pensadas para resolver problemas reais do dia a dia. Busco desenvolver soluções que simplificam rotinas, centralizam informações e ajudam empresas a ganhar produtividade.",
      pillars: [
        "Construção Civil",
        "Automação de processos",
        "Desenvolvimento de sistemas",
      ],
    },
    experienceTitle: "Experiência",
    experiences: [
      {
        type: "Profissional",
        role: "Estagiário - Compras / Dados / Automação",
        place: "Aulevi - São Carlos, SP",
        period: "Jan/2026 - Atual",
        description:
          "Apoio estratégico à área de compras e suprimentos unindo inteligência de dados e desenvolvimento de software. Atuo desde a análise de dados com SQL, Power BI e Excel até a concepção de sistemas completos e ferramentas em Python. Meu foco é a automação de processos manuais de ponta a ponta, substituindo rotinas lentas de extração de dados por sistemas unificados que entregam informações rápidas e saídas visuais padronizadas.",
        highlights: [
          "Desenvolvimento de Sistemas",
          "SQL e tratamento de dados",
          "Power BI e Excel",
          "Análise de custos e fornecedores",
        ],
      },
      {
        type: "Profissional",
        role: "Estagiário - Compras / Dados",
        place: "Simple Wall / Smart Pods - São Carlos, SP",
        period: "Jul/2024 - Dez/2025",
        description:
          "Combino a análise técnica de dados com a execução operacional no setor de suprimentos. Utilizo SQL, Python e Excel para extrair e higienizar bases, consolidando informações críticas que são visualizadas através de dashboards e KPIs no Power BI. Toda essa estrutura tecnológica que desenvolvo serve de alicerce para dar agilidade e segurança às atividades diárias de compras, apoiando ativamente em cotações, ordens de compra, processos de pré-notas e gestão de Master Data.",
        highlights: [
          "Dashboards e KPIs",
          "Compras e suprimentos",
          "Master Data",
          "Relatórios automatizados",
        ],
      },
      {
        type: "Profissional",
        role: "Estagiário em Desenvolvimento Web",
        place: "Compass UOL - Remoto",
        period: "Jun/2023 - Out/2023",
        description:
          "Foco na construção de aplicações seguras, estáveis e bem estruturadas. Desenvolvo ecossistemas utilizando React Native e TypeScript para garantir um código limpo e livre de ambiguidades estruturais. Trabalho de forma integrada a ambientes ágeis (Scrum), gerenciando entregas com Git e aplicando rigorosos padrões de segurança de ponta a ponta. No aspecto de infraestrutura, apoio-me no AWS Well-Architected Framework para explorar serviços em nuvem e projetar soluções preparadas para escalar de forma eficiente.",
        highlights: [
          "React Native",
          "TypeScript",
          "Git e Scrum",
          "AWS Well-Architected",
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
        title: "Sistema de Orçamento Estimativo Automatizado",
        description:
          "Plataforma full-stack responsiva projetada para eliminar o tempo gasto na criação de orçamentos manuais. Através da inserção de parâmetros específicos, o sistema gera estimativas de custo automaticamente em poucos minutos. Criado inicialmente para uso em totens de autoatendimento, o sistema é acessível via web a partir de qualquer dispositivo com internet.",
        tags: ["React", "FastAPI", "Kiosk", "Automação", "Full-Stack"],
        problem:
          "O maior gargalo da operação era o tempo elevado gasto para elaborar orçamentos de estimativa manualmente. O processo era lento, exigia cálculos complexos e gerava longas esperas para o cliente, o que inviabilizava um atendimento rápido e escalável, especialmente durante eventos e feiras.",
        solution:
          "Desenvolvimento de um sistema unificado que centraliza e automatiza a precificação. O usuário (ou o próprio cliente no autoatendimento) insere os parâmetros do projeto, e a aplicação processa as regras de negócio instantaneamente. O que antes levava horas, agora entrega um orçamento estimativo completo em minutos, seja no totem ou no navegador do celular.",
        technologies: [
          "React",
          "TypeScript",
          "FastAPI",
          "SQLite",
          "SQLAlchemy",
          "Alembic",
          "Responsive Design",
        ],
        highlights: [
          "Cálculo automatizado de orçamentos com base em parâmetros",
          "Redução do tempo de resposta (estimativas prontas em minutos)",
          "Acesso universal via web em qualquer dispositivo (mobile, desktop ou totem)",
          "Interface de alta usabilidade com fluxo guiado passo a passo",
          "Captação de leads integrada diretamente à geração da proposta",
          "Motor de cálculo centralizado no backend para garantir consistência",
        ],
        gallery: [
          {
            title: "Inserção de Parâmetros",
            caption:
              "Interface guiada e escalável onde as variáveis do projeto são inseridas rapidamente, sem complicação.",
          },
          {
            title: "Estimativa em Minutos",
            caption:
              "Cálculo processado automaticamente pelo sistema, entregando o orçamento completo e pronto para o cliente em tempo real.",
          },
        ],
      },
      {
        title: "Automação de Relatórios e Documentos",
        description:
          "Ferramentas em Python para ler relatórios, organizar dados operacionais e gerar documentos automaticamente. O foco é cortar tarefas repetitivas, padronizar saídas e reduzir erros em processos administrativos.",
        tags: ["Python", "Data Analysis", "Automation"],
        problem:
          "Relatórios e documentos administrativos exigiam conferência manual, cópia de dados entre arquivos e repetição de etapas sujeitas a erro.",
        solution:
          "Criação de scripts para ler arquivos, consolidar informações, aplicar regras de validação e gerar documentos padronizados de forma automática.",
        technologies: [
          "Python",
          "Pandas",
          "OpenPyXL",
          "PDF/Docs",
          "Automação local",
        ],
        highlights: [
          "Leitura e limpeza de dados",
          "Geração padronizada de documentos",
          "Redução de retrabalho",
          "Fluxo simples para uso administrativo",
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
        title: "PriceTable Pro",
        description:
          "Plataforma para criação e gestão de tabelas de preços, com configuração visual dos dados e exportação de layouts em PDF de alta qualidade para uso comercial e operacional.",
        tags: ["React", "Puppeteer", "PDF"],
        problem:
          "Tabelas de preço precisam ser visualmente consistentes, mas editar layouts manualmente ou exportar arquivos com qualidade ruim atrasa o uso comercial.",
        solution:
          "Interface para configurar dados e layouts, com renderização controlada e exportação em PDF usando automação de navegador.",
        technologies: ["React", "Tailwind CSS", "Puppeteer", "Node.js", "PDF"],
        highlights: [
          "Configuração visual",
          "Exportação em PDF",
          "Layout comercial mais consistente",
          "Fluxo pensado para edição rápida",
        ],
        gallery: [
          {
            title: "Editor visual",
            caption: "Área para ajustar dados, colunas e aparência da tabela.",
          },
          {
            title: "Preview PDF",
            caption: "Prévia do layout final antes da exportação.",
          },
        ],
      },
      {
        title: "Portfólio Interativo",
        description:
          "Este site foi estruturado com Vite, Tailwind CSS, troca de idioma, tema claro/escuro e componentes reutilizáveis para apresentar projetos técnicos com visual moderno e direto.",
        tags: ["Vite", "Tailwind CSS", "i18n"],
        problem:
          "Um portfólio genérico não mostrava bem a combinação entre desenvolvimento web, automação e experiência real com processos operacionais.",
        solution:
          "Construção de uma página responsiva com conteúdo bilíngue, tema claro/escuro, visual minimalista/brutalista e estrutura pronta para detalhar cada projeto.",
        technologies: [
          "React",
          "Vite",
          "Tailwind CSS",
          "Context API",
          "Lucide Icons",
        ],
        highlights: [
          "Tema claro/escuro",
          "PT-BR e EN",
          "Componentes reutilizáveis",
          "Modal detalhado por projeto",
        ],
        gallery: [
          {
            title: "Hero responsivo",
            caption:
              "Primeiro bloco com mensagem direta, imagem e estatísticas técnicas.",
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
        title: "Desenvolvimento",
        items: [
          "Sistemas web modernos",
          "Interfaces responsivas",
          "Aplicações para totens",
          "Experiência do usuário",
          "Design limpo e minimalista",
          "Fluxos intuitivos",
        ],
      },
      {
        title: "Sistemas e Integrações",
        items: [
          "Desenvolvimento back-end",
          "APIs REST",
          "Autenticação de usuários",
          "Módulos de ERP",
          "Integração com sistemas externos",
          "Regras de negócio",
        ],
      },
      {
        title: "Dados e Automação",
        items: [
          "Dashboards gerenciais",
          "Análise de dados",
          "Automação de processos",
          "Relatórios operacionais",
          "Geração automática de PDFs",
          "Melhoria de fluxos internos",
        ],
      },
      {
        title: "Stack técnica",
        items: [
          "React",
          "TypeScript",
          "Python",
          "FastAPI",
          "SQLite",
          "Tailwind CSS",
          "Vite",
          "Puppeteer",
          "Git",
        ],
      },
    ],
    ui: {
      all: "Todos",
      filterLabel: "Filtrar projetos por tecnologia",
      available: "Aberto a oportunidades",
      footer: "Feito com React, Vite e Tailwind CSS.",
      backToTop: "Voltar ao topo",
    },
    contact: {
      title: "Contato",
      subtitle:
        "Tem um processo manual, uma planilha crítica ou uma rotina que consome tempo demais?",
      name: "Nome",
      email: "E-mail",
      message: "Mensagem",
      submit: "Enviar Mensagem",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
  en: {
    nav: ["Home", "About", "Experience", "Projects", "Skills", "Contact"],
    hero: {
      eyebrow: "Data / Automation / Web systems",
      title: "I turn operational routines into clear systems.",
      subtitle:
        "I build automations, dashboards, and modern interfaces to reduce manual work, organize data, and accelerate processes.",
      primary: "View Projects",
      secondary: "Get in Touch",
      stats: [
        { value: "React", label: "responsive interfaces" },
        { value: "Python", label: "automation and data" },
        { value: "FastAPI", label: "focused backends" },
      ],
    },
    about: {
      title: "About Me",
      body: "I am graduating in Systems Analysis and Development (ADS) and work in the development of full systems, automations, and digital solutions for companies. Currently, I work at Aulevi, combining technology, data, and experience in the civil construction sector to identify operational problems and transform manual processes into faster, organized, and more efficient solutions. My focus is on creating customized systems, from backend to frontend, with modern, easy-to-use interfaces and features designed to solve real everyday problems. I seek to develop solutions that simplify routines, centralize information, and help companies gain productivity.",
      pillars: [
        "Civil Construction",
        "Process automation",
        "Systems development",
      ],
    },
    experienceTitle: "Experience",
    experiences: [
      {
        type: "Professional",
        role: "Intern - Purchasing / Data / Automation",
        place: "Aulevi - São Carlos, SP",
        period: "Jan/2026 - Current",
        description:
          "Strategic support to the purchasing and supply area, combining data intelligence and software development. I work from data analysis with SQL, Power BI, and Excel to the design of full systems and Python tools. My focus is on end-to-end automation of manual processes, replacing slow data extraction routines with unified systems that deliver fast information and standardized visual outputs.",
        highlights: [
          "Systems Development",
          "SQL and data treatment",
          "Power BI and Excel",
          "Cost and supplier analysis",
        ],
      },
      {
        type: "Professional",
        role: "Intern - Purchasing / Data",
        place: "Simple Wall / Smart Pods - São Carlos, SP",
        period: "Jul/2024 - Dec/2025",
        description:
          "I combine technical data analysis with operational execution in the supply sector. I use SQL, Python, and Excel to extract and clean databases, consolidating critical information visualized through dashboards and KPIs in Power BI. This entire technological structure I develop serves as a foundation to bring agility and security to daily purchasing activities, actively supporting quotes, purchase orders, pre-invoice processes, and Master Data management.",
        highlights: [
          "Dashboards and KPIs",
          "Purchasing and supply",
          "Master Data",
          "Automated reports",
        ],
      },
      {
        type: "Professional",
        role: "Web Development Intern",
        place: "Compass UOL - Remote",
        period: "Jun/2023 - Oct/2023",
        description:
          "Focus on building secure, stable, and well-structured applications. I develop ecosystems using React Native and TypeScript to ensure clean code free from structural ambiguities. I work integrated into agile environments (Scrum), managing deliveries with Git and applying rigorous end-to-end security standards. On the infrastructure side, I rely on the AWS Well-Architected Framework to explore cloud services and design solutions ready to scale efficiently.",
        highlights: [
          "React Native",
          "TypeScript",
          "Git and Scrum",
          "AWS Well-Architected",
        ],
      },
      {
        type: "Academic",
        role: "Technology Degree in Systems Analysis and Development",
        place: "IFSP - São Carlos",
        period: "2022 - Current",
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
          "Technical education in avionics systems, maintenance, diagnostic logic, and attention to critical processes, contributing to a disciplined view of operation, precision, and reliability.",
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
        title: "Automated Estimating Quote System",
        description:
          "Responsive full-stack platform designed to eliminate the time spent creating manual quotes. By inserting specific parameters, the system automatically generates cost estimates in minutes. Initially created for self-service kiosks, the system is accessible via the web from any internet-connected device.",
        tags: ["React", "FastAPI", "Kiosk", "Automation", "Full-Stack"],
        problem:
          "The operation's biggest bottleneck was the high amount of time spent manually elaborating estimate quotes. The process was slow, required complex calculations, and generated long waits for the customer, making fast and scalable service impossible, especially during events and trade shows.",
        solution:
          "Development of a unified system that centralizes and automates pricing. The user (or the customer themselves at the kiosk) enters the project parameters, and the application instantly processes the business rules. What used to take hours now delivers a complete estimate quote in minutes, whether on the kiosk or a mobile browser.",
        technologies: [
          "React",
          "TypeScript",
          "FastAPI",
          "SQLite",
          "SQLAlchemy",
          "Alembic",
          "Responsive Design",
        ],
        highlights: [
          "Automated quote calculation based on parameters",
          "Reduced response time (estimates ready in minutes)",
          "Universal web access on any device (mobile, desktop, or kiosk)",
          "High-usability interface with a guided step-by-step flow",
          "Lead capture integrated directly into proposal generation",
          "Centralized calculation engine in the backend to ensure consistency",
        ],
        gallery: [
          {
            title: "Parameter Insertion",
            caption:
              "Guided and scalable interface where project variables are quickly inserted without complication.",
          },
          {
            title: "Estimate in Minutes",
            caption:
              "Calculation processed automatically by the system, delivering the complete quote ready for the client in real time.",
          },
        ],
      },
      {
        title: "Report and Document Automation",
        description:
          "Python tools to read reports, organize operational data, and automatically generate documents. The focus is to cut repetitive tasks, standardize outputs, and reduce errors in administrative processes.",
        tags: ["Python", "Data Analysis", "Automation"],
        problem:
          "Administrative reports and documents required manual checking, data copying between files, and repeating error-prone steps.",
        solution:
          "Creation of scripts to read files, consolidate information, apply validation rules, and automatically generate standardized documents.",
        technologies: [
          "Python",
          "Pandas",
          "OpenPyXL",
          "PDF/Docs",
          "Local automation",
        ],
        highlights: [
          "Data reading and cleaning",
          "Standardized document generation",
          "Rework reduction",
          "Simple flow for administrative use",
        ],
        gallery: [
          {
            title: "Execution panel",
            caption: "Summary of processed routines and validation status.",
          },
          {
            title: "Document output",
            caption:
              "Final document generated with treated data and standardized layout.",
          },
        ],
      },
      {
        title: "PriceTable Pro",
        description:
          "Platform for creating and managing price tables, with visual data configuration and high-quality PDF layout export for commercial and operational use.",
        tags: ["React", "Puppeteer", "PDF"],
        problem:
          "Price tables need to be visually consistent, but manually editing layouts or exporting low-quality files delays commercial use.",
        solution:
          "Interface to configure data and layouts, with controlled rendering and PDF export using browser automation.",
        technologies: ["React", "Tailwind CSS", "Puppeteer", "Node.js", "PDF"],
        highlights: [
          "Visual configuration",
          "PDF export",
          "More consistent commercial layout",
          "Fast editing workflow",
        ],
        gallery: [
          {
            title: "Visual editor",
            caption: "Area to adjust data, columns, and table appearance.",
          },
          {
            title: "PDF preview",
            caption: "Preview of the final layout before export.",
          },
        ],
      },
      {
        title: "Interactive Portfolio",
        description:
          "This site was structured with Vite, Tailwind CSS, language switching, light/dark theme, and reusable components to present technical projects with a modern and direct visual style.",
        tags: ["Vite", "Tailwind CSS", "i18n"],
        problem:
          "A generic portfolio didn't properly show the combination of web development, automation, and real experience with operational processes.",
        solution:
          "Building a responsive page with bilingual content, light/dark theme, minimalist/brutalist visuals, and a structure ready to detail each project.",
        technologies: [
          "React",
          "Vite",
          "Tailwind CSS",
          "Context API",
          "Lucide Icons",
        ],
        highlights: [
          "Light/dark theme",
          "PT-BR and EN",
          "Reusable components",
          "Detailed project modal",
        ],
        gallery: [
          {
            title: "Responsive hero",
            caption:
              "First block with direct messaging, image, and technical stats.",
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
        title: "Development",
        items: [
          "Modern web systems",
          "Responsive interfaces",
          "Kiosk applications",
          "User experience",
          "Clean and minimalist design",
          "Intuitive flows",
        ],
      },
      {
        title: "Systems and Integrations",
        items: [
          "Back-end development",
          "APIs REST",
          "User authentication",
          "ERP modules",
          "External system integration",
          "Business rules",
        ],
      },
      {
        title: "Data and Automation",
        items: [
          "Management dashboards",
          "Data analysis",
          "Process automation",
          "Operational reports",
          "Automatic PDF generation",
          "Internal workflow improvement",
        ],
      },
      {
        title: "Tech Stack",
        items: [
          "React",
          "TypeScript",
          "Python",
          "FastAPI",
          "SQLite",
          "Tailwind CSS",
          "Vite",
          "Puppeteer",
          "Git",
        ],
      },
    ],
    ui: {
      all: "All",
      filterLabel: "Filter projects by technology",
      available: "Open to opportunities",
      footer: "Built with React, Vite and Tailwind CSS.",
      backToTop: "Back to top",
    },
    contact: {
      title: "Contact",
      subtitle:
        "Do you have a manual process, a critical spreadsheet, or a routine that takes too much time?",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send Message",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
};