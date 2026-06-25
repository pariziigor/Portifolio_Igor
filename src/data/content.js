export const dictionary = {
  pt: {
    nav: ["Início", "Sobre", "Experiência", "Projetos", "Habilidades", "Contato"],
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
      body:
        "Sou estudante de Análise e Desenvolvimento de Sistemas (ADS) com foco no desenvolvimento de automações e aplicações desktop. Atualmente, trabalho com dados aplicados a compras e suprimentos na Aulevi, onde utilizo minha bagagem no setor de construção civil para mapear e resolver ineficiências operacionais. Atuo desde a automação de processos manuais até a criação de sistemas interativos complexos, utilizando Python, React, FastAPI e SQLite. Meu diferencial é aliar uma arquitetura robusta a um design de interface minimalista e moderno, garantindo que fluxos de trabalho antes fragmentados se tornem sistemas unificados, rápidos e fáceis de usar.",
      pillars: ["Construção Civil", "Automação de processos", "Desenvolvimento de sistemas"],
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
        highlights: ["Desenvolvimento de Sistemas", "SQL e tratamento de dados", "Power BI e Excel", "Análise de custos e fornecedores"],
      },
      {
        type: "Profissional",
        role: "Estagiário - Compras / Dados",
        place: "Simple Wall / Smart Pods - São Carlos, SP",
        period: "Jul/2024 - Dez/2025",
        description:
          "Combino a análise técnica de dados com a execução operacional no setor de suprimentos. Utilizo SQL, Python e Excel para extrair e higienizar bases, consolidando informações críticas que são visualizadas através de dashboards e KPIs no Power BI. Toda essa estrutura tecnológica que desenvolvo serve de alicerce para dar agilidade e segurança às atividades diárias de compras, apoiando ativamente em cotações, ordens de compra, processos de pré-notas e gestão de Master Data.",
        highlights: ["Dashboards e KPIs", "Compras e suprimentos", "Master Data", "Relatórios automatizados"],
      },
      {
        type: "Profissional",
        role: "Estagiário em Desenvolvimento Web",
        place: "Compass UOL - Remoto",
        period: "Jun/2023 - Out/2023",
        description:
          "Foco na construção de aplicações seguras, estáveis e bem estruturadas. Desenvolvo ecossistemas utilizando React Native e TypeScript para garantir um código limpo e livre de ambiguidades estruturais. Trabalho de forma integrada a ambientes ágeis (Scrum), gerenciando entregas com Git e aplicando rigorosos padrões de segurança de ponta a ponta. No aspecto de infraestrutura, apoio-me no AWS Well-Architected Framework para explorar serviços em nuvem e projetar soluções preparadas para escalar de forma eficiente.",
        highlights: ["React Native", "TypeScript", "Git e Scrum", "AWS Well-Architected"],
      },
      {
        type: "Acadêmica",
        role: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        place: "IFSP - São Carlos",
        period: "2022 - Atual",
        description:
          "Formação superior voltada a programação, banco de dados, desenvolvimento web, engenharia de software e construção de sistemas, conectando fundamentos técnicos com projetos práticos de automação, dados e interfaces.",
        highlights: ["Programação", "Banco de dados", "Desenvolvimento web", "Engenharia de software"],
      },
      {
        type: "Acadêmica",
        role: "Técnico em Manutenção de Aeronaves (Aviônicos)",
        place: "IFSP - São Carlos",
        period: "2018 - 2021",
        description:
          "Formação técnica com base em sistemas aviônicos, manutenção, lógica de diagnóstico e atenção a processos críticos, contribuindo para uma visão disciplinada de operação, precisão e confiabilidade.",
        highlights: ["Aviônicos", "Manutenção técnica", "Diagnóstico", "Processos críticos"],
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
        title: "Automação de Relatórios e Documentos",
        description:
          "Ferramentas em Python para ler relatórios, organizar dados operacionais e gerar documentos automaticamente. O foco é cortar tarefas repetitivas, padronizar saídas e reduzir erros em processos administrativos.",
        tags: ["Python", "Data Analysis", "Automation"],
        problem:
          "Relatórios e documentos administrativos exigiam conferência manual, cópia de dados entre arquivos e repetição de etapas sujeitas a erro.",
        solution:
          "Criação de scripts para ler arquivos, consolidar informações, aplicar regras de validação e gerar documentos padronizados de forma automática.",
        technologies: ["Python", "Pandas", "OpenPyXL", "PDF/Docs", "Automação local"],
        highlights: ["Leitura e limpeza de dados", "Geração padronizada de documentos", "Redução de retrabalho", "Fluxo simples para uso administrativo"],
        gallery: [
          { title: "Painel de execução", caption: "Resumo das rotinas processadas e status de validação." },
          { title: "Saída documental", caption: "Documento final gerado com dados tratados e layout padronizado." },
        ],
      },
      {
        title: "Sistema de Orçamentos e Catálogo",
        description:
          "Aplicação full-stack para clientes, produtos e cotações, com APIs em FastAPI e uma experiência em React voltada para montar orçamentos com fluxo limpo, rápido e fácil de manter.",
        tags: ["React", "FastAPI", "Quotes"],
        problem:
          "O processo de orçamento dependia de dados espalhados, cadastro manual de clientes/produtos e pouca rastreabilidade entre solicitação, item e proposta.",
        solution:
          "Sistema com cadastro de clientes, produtos, autenticação, montagem de cotações e endpoints organizados para manter o fluxo de orçamento centralizado.",
        technologies: ["React", "TypeScript", "FastAPI", "SQLAlchemy", "SQLite", "Alembic"],
        highlights: ["Fluxo de cotação centralizado", "Cadastro de clientes e produtos", "Backend com rotas protegidas", "Base preparada para evoluir"],
        gallery: [
          { title: "Catálogo e produtos", caption: "Tela para consultar itens e montar propostas com mais velocidade." },
          { title: "Fluxo de orçamento", caption: "Interface para reunir cliente, produtos e condições em uma cotação." },
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
        highlights: ["Configuração visual", "Exportação em PDF", "Layout comercial mais consistente", "Fluxo pensado para edição rápida"],
        gallery: [
          { title: "Editor visual", caption: "Área para ajustar dados, colunas e aparência da tabela." },
          { title: "Preview PDF", caption: "Prévia do layout final antes da exportação." },
        ],
      },
      {
        title: "Dashboard de Suprimentos",
        description:
          "Sistema para apoiar decisões de compras cruzando estoque, demandas de obra e necessidades por projeto. A proposta é entregar uma visão objetiva do que precisa ser comprado, priorizado ou revisado.",
        tags: ["React", "FastAPI", "SQLite"],
        problem:
          "A decisão de compra ficava menos precisa quando estoque, demanda de obras e prioridades de projeto eram analisados separadamente.",
        solution:
          "Dashboard com backend para cruzar demandas e estoque, expondo indicadores simples para apoiar compra, prioridade e revisão.",
        technologies: ["React", "FastAPI", "SQLite", "Python", "Data Analysis"],
        highlights: ["Cálculo de necessidade de material", "Visão por projeto", "Consulta de estoque", "Apoio à priorização de compras"],
        gallery: [
          { title: "Resumo de suprimentos", caption: "Indicadores de necessidade, estoque e criticidade." },
          { title: "Lista de materiais", caption: "Tabela operacional para comparar demanda e disponibilidade." },
        ],
      },
      {
        title: "Interface Touch para Totens",
        description:
          "Experiência pensada para uso em eventos e pontos de atendimento, com navegação simples, botões grandes, coleta de leads e geração de orçamento em tempo real.",
        tags: ["React", "Kiosk", "UI/UX"],
        problem:
          "Em eventos, o atendimento precisa ser rápido e claro, sem depender de navegação complexa ou formulários pequenos em telas touch.",
        solution:
          "Interface em etapas, com componentes grandes, fluxo guiado, coleta de dados e foco em operação sem teclado e mouse.",
        technologies: ["React", "Windows Kiosk", "Touch UI", "Local Storage", "UI/UX"],
        highlights: ["Layout para toque", "Fluxo guiado", "Captação de leads", "Uso em tela cheia"],
        gallery: [
          { title: "Tela inicial touch", caption: "Entrada simples com ações grandes e leitura imediata." },
          { title: "Captação e orçamento", caption: "Etapas para registrar contato e gerar proposta rapidamente." },
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
        technologies: ["React", "Vite", "Tailwind CSS", "Context API", "Lucide Icons"],
        highlights: ["Tema claro/escuro", "PT-BR e EN", "Componentes reutilizáveis", "Modal detalhado por projeto"],
        gallery: [
          { title: "Hero responsivo", caption: "Primeiro bloco com mensagem direta, imagem e estatísticas técnicas." },
          { title: "Cards interativos", caption: "Grade de projetos com detalhes expandidos em modal." },
        ],
      },
    ],
    skillsTitle: "Habilidades",
    skills: [
      {
        title: "Front-end & UI",
        items: ["React", "Vite", "Tailwind CSS", "TypeScript", "Context API", "Design minimalista/brutalista"],
      },
      {
        title: "Back-end & Dados",
        items: ["Python", "FastAPI", "SQLite", "SQL", "Power BI", "Excel"],
      },
      {
        title: "Automação & Operação",
        items: ["Puppeteer", "Git", "AWS", "Geração de PDF", "Aplicações para totem", "Processos de compras"],
      },
    ],
    contact: {
      title: "Contato",
      subtitle: "Tem um processo manual, uma planilha crítica ou uma rotina que consome tempo demais?",
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
      eyebrow: "Procurement data / Automation / Web systems",
      title: "I turn operational routines into clear systems.",
      subtitle:
        "I build automations, dashboards, and modern interfaces to reduce manual work, organize procurement data, and speed up quoting, supply, and documentation workflows.",
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
      body:
        "I am a Systems Analysis and Development student working with data applied to purchasing and procurement. My practical experience in construction helps me identify real bottlenecks: repeated spreadsheets, reports that are hard to consolidate, manual quoting flows, and information scattered across inventory, projects, and suppliers. My work turns that scenario into practical tools, combining Python, React, FastAPI, SQLite, and automated document generation to create faster, traceable, and more reliable processes.",
      pillars: ["Purchasing and procurement", "Process automation", "Direct interfaces"],
    },
    experienceTitle: "Experience",
    experiences: [
      {
        type: "Professional",
        role: "Intern - Purchasing / Data / Automation",
        place: "Aulevi - São Carlos, SP",
        period: "Jan/2026 - Current",
        description:
          "Development of Python tools to automate commercial proposals and quotes, removing manual report data extraction and generating standardized visual outputs. Work with SQL, Python, Power BI, and Excel to support purchasing strategy.",
        highlights: ["Python automation", "SQL and data treatment", "Power BI and Excel", "Cost and supplier analysis"],
      },
      {
        type: "Professional",
        role: "Intern - Purchasing / Data",
        place: "Simple Wall / Smart Pods - São Carlos, SP",
        period: "Jul/2024 - Dec/2025",
        description:
          "Extraction, treatment, cleanup, and standardization of data with SQL, Excel, and Python. Consolidation of datasets for purchasing, production, and supply teams, creation of Power BI dashboards and KPIs, and support for quotes, purchase orders, pre-invoices, and master data.",
        highlights: ["Dashboards and KPIs", "Purchasing and supply", "Master Data", "Automated reports"],
      },
      {
        type: "Professional",
        role: "Web Development Intern",
        place: "Compass UOL - Remote",
        period: "Jun/2023 - Oct/2023",
        description:
          "Development of applications with React Native and TypeScript, application of security best practices, version control with Git, and work in an agile Scrum environment. Exploration of AWS services with focus on the Well-Architected Framework.",
        highlights: ["React Native", "TypeScript", "Git and Scrum", "AWS Well-Architected"],
      },
      {
        type: "Academic",
        role: "Technology Degree in Systems Analysis and Development",
        place: "IFSP - São Carlos",
        period: "2022 - Current",
        description:
          "Higher education focused on programming, databases, web development, software engineering, and system building, connecting technical foundations with practical projects in automation, data, and interfaces.",
        highlights: ["Programming", "Databases", "Web development", "Software engineering"],
      },
      {
        type: "Academic",
        role: "Aircraft Maintenance Technician (Avionics)",
        place: "IFSP - São Carlos",
        period: "2018 - 2021",
        description:
          "Technical education in avionics systems, maintenance, diagnostic logic, and attention to critical processes, contributing to a disciplined view of operation, precision, and reliability.",
        highlights: ["Avionics", "Technical maintenance", "Diagnostics", "Critical processes"],
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
        title: "Report and Document Automation",
        description:
          "Python tools for reading reports, organizing operational data, and generating documents automatically. The goal is to remove repetitive work, standardize outputs, and reduce errors in administrative processes.",
        tags: ["Python", "Data Analysis", "Automation"],
        problem:
          "Administrative reports and documents required manual checking, data copied between files, and repeated steps prone to mistakes.",
        solution:
          "Scripts to read files, consolidate information, apply validation rules, and generate standardized documents automatically.",
        technologies: ["Python", "Pandas", "OpenPyXL", "PDF/Docs", "Local automation"],
        highlights: ["Data reading and cleanup", "Standardized document generation", "Less rework", "Simple administrative workflow"],
        gallery: [
          { title: "Execution panel", caption: "Summary of processed routines and validation status." },
          { title: "Document output", caption: "Final document generated from treated data and a standardized layout." },
        ],
      },
      {
        title: "Quoting and Catalog System",
        description:
          "Full-stack application for clients, products, and quotes, with FastAPI APIs and a React experience designed to build quotes through a clean, fast, and maintainable flow.",
        tags: ["React", "FastAPI", "Quotes"],
        problem:
          "The quoting process depended on scattered data, manual client/product records, and limited traceability between requests, items, and proposals.",
        solution:
          "A system with client and product records, authentication, quote building, and organized endpoints to keep the quoting flow centralized.",
        technologies: ["React", "TypeScript", "FastAPI", "SQLAlchemy", "SQLite", "Alembic"],
        highlights: ["Centralized quote flow", "Client and product records", "Protected backend routes", "Foundation ready to evolve"],
        gallery: [
          { title: "Catalog and products", caption: "Screen to search items and assemble proposals faster." },
          { title: "Quote flow", caption: "Interface to connect client, products, and conditions in one quote." },
        ],
      },
      {
        title: "PriceTable Pro",
        description:
          "Platform for creating and managing price tables, with visual data configuration and high-quality PDF layout export for commercial and operational use.",
        tags: ["React", "Puppeteer", "PDF"],
        problem:
          "Price tables need visual consistency, but manually editing layouts or exporting low-quality files slows down commercial usage.",
        solution:
          "Interface to configure data and layouts, with controlled rendering and PDF export through browser automation.",
        technologies: ["React", "Tailwind CSS", "Puppeteer", "Node.js", "PDF"],
        highlights: ["Visual configuration", "PDF export", "More consistent commercial layout", "Fast editing workflow"],
        gallery: [
          { title: "Visual editor", caption: "Area to adjust data, columns, and table appearance." },
          { title: "PDF preview", caption: "Preview of the final layout before export." },
        ],
      },
      {
        title: "Supply Dashboard",
        description:
          "System to support purchasing decisions by cross-referencing inventory, construction demands, and project needs. The goal is a clear view of what must be bought, prioritized, or reviewed.",
        tags: ["React", "FastAPI", "SQLite"],
        problem:
          "Purchasing decisions became less precise when inventory, construction demands, and project priorities were analyzed separately.",
        solution:
          "Dashboard with a backend that cross-references demands and inventory, exposing simple indicators to support purchasing, priority, and review.",
        technologies: ["React", "FastAPI", "SQLite", "Python", "Data Analysis"],
        highlights: ["Material needs calculation", "Project-level view", "Inventory query", "Purchasing prioritization support"],
        gallery: [
          { title: "Supply summary", caption: "Indicators for needs, stock, and criticality." },
          { title: "Material list", caption: "Operational table comparing demand and availability." },
        ],
      },
      {
        title: "Touch Interface for Kiosks",
        description:
          "Experience designed for events and service points, with simple navigation, large buttons, lead capture, and real-time quote generation.",
        tags: ["React", "Kiosk", "UI/UX"],
        problem:
          "At events, service needs to be fast and clear, without complex navigation or tiny forms on touch screens.",
        solution:
          "Step-based interface with large components, guided flow, data capture, and focus on operation without keyboard or mouse.",
        technologies: ["React", "Windows Kiosk", "Touch UI", "Local Storage", "UI/UX"],
        highlights: ["Touch-first layout", "Guided flow", "Lead capture", "Fullscreen use"],
        gallery: [
          { title: "Touch home screen", caption: "Simple entry point with large actions and immediate reading." },
          { title: "Capture and quote", caption: "Steps to register contact and generate a proposal quickly." },
        ],
      },
      {
        title: "Interactive Portfolio",
        description:
          "This site was structured with Vite, Tailwind CSS, language switching, light/dark theme, and reusable components to present technical projects with a modern and direct visual style.",
        tags: ["Vite", "Tailwind CSS", "i18n"],
        problem:
          "A generic portfolio did not communicate the combination of web development, automation, and real experience with operational processes.",
        solution:
          "Responsive page with bilingual content, light/dark theme, minimalist/brutalist visuals, and a structure ready to detail each project.",
        technologies: ["React", "Vite", "Tailwind CSS", "Context API", "Lucide Icons"],
        highlights: ["Light/dark theme", "PT-BR and EN", "Reusable components", "Detailed project modal"],
        gallery: [
          { title: "Responsive hero", caption: "First block with direct messaging, image, and technical stats." },
          { title: "Interactive cards", caption: "Project grid with expanded details in a modal." },
        ],
      },
    ],
    skillsTitle: "Skills",
    skills: [
      {
        title: "Front-end & UI",
        items: ["React", "Vite", "Tailwind CSS", "TypeScript", "Context API", "Minimalist/brutalist design"],
      },
      {
        title: "Back-end & Data",
        items: ["Python", "FastAPI", "SQLite", "SQL", "Power BI", "Excel"],
      },
      {
        title: "Automation & Operations",
        items: ["Puppeteer", "Git", "AWS", "PDF generation", "Kiosk applications", "Purchasing processes"],
      },
    ],
    contact: {
      title: "Contact",
      subtitle: "Do you have a manual process, a critical spreadsheet, or a routine that takes too much time?",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send Message",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
};
