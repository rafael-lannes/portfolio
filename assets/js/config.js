/**
 * ==============================================================================
 * ⚙️ CONFIGURAÇÃO CENTRAL DO PORTFÓLIO - RAFAEL LANNES
 * ==============================================================================
 * Todas as informações do site podem ser editadas diretamente neste arquivo!
 * ==============================================================================
 */

const SITE_CONFIG = {
  // 1. Dados Pessoais & Apresentação
  profile: {
    name: "Rafael Lannes",
    role: "Analista de Soluções Digitais & Engenheiro de Software",
    institution: "Bacharel em Sistemas de Informação — Universidade Federal Fluminense (UFF)",
    subheading: "Soluções digitais, engenharia de software e análise de dados",
    location: "Niterói, RJ - Brasil",
    cvUrl: "https://docs.google.com/document/d/1FzDuEu7fBet1tpHOFAoU4kjU7POQWh7B/edit?usp=sharing&ouid=111306556304286270366&rtpof=true&sd=true",
    
    status: {
      available: true,
      text: "Explorando novas tecnologias e soluções"
    },
    
    avatar: "assets/images/profile-pic.png",
    
    bioShort: "Formado em Sistemas de Informação pela UFF com atuação corporativa em Soluções Digitais na Enel. Desenvolvimento de software, modelagem de dados/BI e prototipagem técnica.",
    
    bioFull: `Sou formado em Sistemas de Informação pela Universidade Federal Fluminense (UFF - Niterói) e atuo como Analista de Soluções Digitais na Enel.

Minha trajetória une desenvolvimento de software, engenharia de dados/BI e hardware. Possuo experiência no desenvolvimento de utilitários de alta performance em C# / .NET, automações com Python, dashboards em Power BI e prototipagem com manufatura aditiva (impressão 3D) no laboratório universitário L3D UFF.

Busco construir soluções tecnológicas robustas, eficientes e de real impacto.`
  },

  // 2. Linha do Tempo da Carreira (Timeline)
  timeline: [
    {
      year: "2015",
      title: "Universidade Federal Fluminense (UFF)",
      description: "Início do bacharelado em Sistemas de Informação na UFF (Niterói - RJ)."
    },
    {
      year: "2018",
      title: "Estágio em Suporte Técnico - UFF",
      description: "Suporte técnico, infraestrutura e manutenção de computadores na Biblioteca do Instituto de Física da UFF."
    },
    {
      year: "2019",
      title: "Técnico de TI e Impressão 3D - L3D UFF",
      description: "Atuação técnica com manutenção de hardware e manufatura aditiva no projeto de inovação L3D UFF."
    },
    {
      year: "2020",
      title: "Graduação em Sistemas de Informação",
      description: "Conclusão do bacharelado em Sistemas de Informação pela UFF e publicação do Trabalho de Conclusão de Curso."
    },
    {
      year: "2021 - Presente",
      title: "Analista de Soluções Digitais - Enel",
      description: "Atuação corporativa com análise, desenvolvimento e sustentação de soluções digitais e melhorias tecnológicas."
    },
    {
      year: "Atualmente",
      title: "Aprendizado Contínuo & Desenvolvimento",
      description: "Aprofundamento contínuo em arquitetura de software, ecossistema .NET, engenharia de dados e projetos independentes."
    }
  ],

  // 3. Redes Sociais & Contato
  social: {
    linkedin: "https://linkedin.com/in/rafaellannes",
    github: "https://github.com/rafael-lannes",
    itchio: "https://rafaellannes.itch.io/",
    reviews: "https://modostealth.wordpress.com/",
    l3d: "https://l3d.if.uff.br/"
  },

  // 4. Menu de Navegação
  navigation: [
    { title: "Início", url: "#hero" },
    { title: "Sobre & Carreira", url: "#about" },
    { title: "Portfolio", url: "#projects" },
    { title: "Resume | CV", url: "https://docs.google.com/document/d/1FzDuEu7fBet1tpHOFAoU4kjU7POQWh7B/edit?usp=sharing&ouid=111306556304286270366&rtpof=true&sd=true", external: true },
    { title: "Contato", url: "#contact" }
  ],

  // 5. Tecnologias & Competências
  skills: [
    {
      category: "Dados e BI",
      icon: "server",
      items: [
        "Power BI (modelagem de dados, Power Query, dashboards e DAX)",
        "Conceitos de ETL e modelagem analítica",
        "SQL e bancos de dados NoSQL"
      ]
    },
    {
      category: "Programação e Automação",
      icon: "code",
      items: [
        "Python",
        "C, C#, Java",
        ".NET 8 / WPF"
      ]
    },
    {
      category: "Integração e Ferramentas",
      icon: "layout",
      items: [
        "APIs e integração de sistemas",
        "Power Automate",
        "Grafana e Dynatrace (monitoramento)"
      ]
    },
    {
      category: "DevOps e Infraestrutura",
      icon: "server",
      items: [
        "AWS",
        "Jira",
        "Git & GitHub"
      ]
    },
    {
      category: "Game Dev & Hardware",
      icon: "gamepad",
      items: [
        "Unity Engine (C#)",
        "Impressão 3D (Manufatura Aditiva)",
        "Montagem e Manutenção de Hardware"
      ]
    },
    {
      category: "Idiomas",
      icon: "layout",
      items: [
        "Inglês Avançado",
        "Espanhol Intermediário",
        "Libras (Língua Brasileira de Sinais)"
      ]
    }
  ],

  // 6. Lista de Projetos (Portfolio)
  projects: [
    {
      title: "SteamER",
      description: "Aplicação web moderna, rápida e responsiva criada para facilitar a elaboração, formatação padronizada e publicação de análises (reviews) de jogos na Steam.",
      image: "assets/images/projects/steamer.jpg",
      featured: false,
      status: "desenvolvendo",
      tags: ["Desenvolvendo", "Web App", "Steam Reviews", "Produtividade"],
      demoUrl: "https://rafael-lannes.github.io/SteamER/",
      githubUrl: "https://github.com/rafael-lannes/SteamER"
    },
    {
      title: "Cloudpaper",
      description: "Aplicativo Android moderno para gerenciamento de papéis de parede em nuvem, personalização de interface e integração com serviços de mídia.",
      image: "assets/images/projects/cloudpaper.jpg",
      featured: false,
      status: "desenvolvendo",
      tags: ["Desenvolvendo", "Android", "Mobile", "Kotlin / Java", "Cloud"],
      demoUrl: "",
      githubUrl: "https://github.com/rafael-lannes/Cloudpaper"
    },
    {
      title: "AudioJoiner",
      description: "Utilitário desktop de alta performance para Windows (< 40MB RAM) desenvolvido em C# / .NET 8 e WPF. Unifica e clona a saída de áudio do sistema em tempo real para múltiplos dispositivos de som físicos simultaneamente sem drivers virtuais externos.",
      image: "assets/images/projects/project-audiojoiner.svg",
      featured: false,
      status: "desenvolvendo",
      tags: ["Desenvolvendo", "C# / .NET 8", "WPF", "Windows", "Áudio"],
      demoUrl: "",
      githubUrl: "https://github.com/rafael-lannes/AudioJoiner"
    },
    {
      title: "Protótipos & Jogos Digitais (Itch.io)",
      description: "Jogos e protótipos interativos desenvolvidos em Unity e C#, publicados de forma independente no Itch.io com foco em mecânicas responsivas e design de jogabilidade.",
      image: "assets/images/projects/project-game.svg",
      featured: false,
      tags: ["Game Dev", "Itch.io", "Unity", "C#", "Game Design"],
      demoUrl: "https://rafaellannes.itch.io/",
      githubUrl: "https://github.com/rafael-lannes"
    },
    {
      title: "Projetos de Impressões 3D (L3D UFF)",
      description: "Projetos, peças técnicas e modelos desenvolvidos no Laboratório de Impressão 3D do Instituto de Física da Universidade Federal Fluminense. Contribuições realizadas até 2021.",
      image: "assets/images/projects/project-3d.svg",
      featured: false,
      status: "descontinuado",
      tags: ["Descontinuado", "Impressão 3D", "L3D UFF", "Manufatura Aditiva", "Hardware"],
      demoUrl: "https://l3d.if.uff.br/?cat=4",
      githubUrl: ""
    },
    {
      title: "Trabalho de Conclusão de Curso (TCC UFF)",
      description: "Artigo científico e Trabalho de Conclusão de Curso em Sistemas de Informação disponibilizado no Repositório Institucional da UFF (RIUFF).",
      image: "assets/images/projects/project-tcc.svg",
      featured: false,
      tags: ["Artigo Científico", "UFF", "Sistemas de Informação", "RIUFF"],
      demoUrl: "https://app.homologacao.uff.br/riuff/handle/1/22495",
      githubUrl: ""
    },
    {
      title: "Modo Stealth (Reviews & Tecnologia)",
      description: "Portal e blog com análises aprofundadas, ensaios e artigos sobre o ecossistema de games, hardware e tecnologia.",
      image: "assets/images/projects/project-stealth.svg",
      featured: false,
      tags: ["Blog", "Reviews", "Tecnologia", "WordPress"],
      demoUrl: "https://modostealth.wordpress.com/",
      githubUrl: ""
    }
  ]
};

// Disponibiliza globalmente
window.SITE_CONFIG = SITE_CONFIG;
