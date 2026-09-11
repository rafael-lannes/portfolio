/**
 * ==============================================================================
 * ⚙️ CONFIGURAÇÃO CENTRAL DO PORTFÓLIO - RAFAEL LANNES
 * ==============================================================================
 * Altere seus dados, textos, redes sociais, projetos e habilidades aqui!
 * Não é necessário alterar arquivos HTML para atualizar o seu portfólio.
 * ==============================================================================
 */

const SITE_CONFIG = {
  // 1. Dados Pessoais & Apresentação
  profile: {
    name: "Rafael Lannes",
    role: "Desenvolvedor Full-Stack & Game Dev",
    location: "Brasil",
    email: "contato@rafaellannes.dev",
    status: {
      available: true, // true para exibir a badge verde de disponibilidade
      text: "Disponível para novos projetos e oportunidades"
    },
    avatar: "assets/images/avatar.svg", // Caminho da sua foto (ex: assets/images/avatar.jpg)
    bioShort: "Criando experiências digitais memoráveis, aplicações web modernas e mecânicas de jogos imersivas. Focado em código limpo, alta performance e usabilidade.",
    bioFull: `Olá! Sou desenvolvedor apaixonado por tecnologia, engenharia de software e game design. 
Com sólida experiência em construir produtos digitais do conceito ao deploy, gosto de transformar ideias complexas em soluções interativas, acessíveis e de alto desempenho.`
  },

  // 2. Redes Sociais & Contato (Deixe "" para ocultar)
  social: {
    github: "https://github.com/rafaellannes",
    linkedin: "https://linkedin.com/in/rafaellannes",
    email: "mailto:contato@rafaellannes.dev",
    twitter: "https://twitter.com/rafaellannes",
    itchio: "https://itch.io", // Ideal para Game Devs!
    youtube: "",
    instagram: ""
  },

  // 3. Links do Menu de Navegação
  navigation: [
    { title: "Início", url: "#hero" },
    { title: "Sobre", url: "#about" },
    { title: "Projetos", url: "#projects" },
    { title: "Contato", url: "#contact" }
    // { title: "Currículo (PDF)", url: "assets/curriculo.pdf", external: true }
  ],

  // 4. Habilidades & Tecnologias
  skills: [
    {
      category: "Front-end & Web",
      icon: "layout",
      items: [
        { name: "HTML5 / CSS3 Moderno", level: "Avançado" },
        { name: "JavaScript (ES6+) / TypeScript", level: "Avançado" },
        { name: "React / Next.js", level: "Intermediário" },
        { name: "TailwindCSS / Design Systems", level: "Avançado" },
        { name: "UI/UX & Responsividade", level: "Avançado" }
      ]
    },
    {
      category: "Game Dev & Gráficos",
      icon: "gamepad",
      items: [
        { name: "Unity Engine (2D/3D)", level: "Avançado" },
        { name: "C# / .NET", level: "Avançado" },
        { name: "Godot Engine", level: "Intermediário" },
        { name: "Shaders / HLSL / GLSL", level: "Intermediário" },
        { name: "Game Design & Áudio", level: "Intermediário" }
      ]
    },
    {
      category: "Back-end & Ferramentas",
      icon: "server",
      items: [
        { name: "Node.js / REST APIs", level: "Intermediário" },
        { name: "Git / GitHub / CI/CD", level: "Avançado" },
        { name: "Bancos SQL / NoSQL", level: "Intermediário" },
        { name: "WebSockets / Realtime", level: "Intermediário" },
        { name: "Figma / Prototipagem", level: "Intermediário" }
      ]
    }
  ],

  // 5. Lista de Projetos do Portfólio
  projects: [
    {
      title: "Chronicles of Aethelgard",
      description: "RPG de ação tático desenvolvido em Unity/C# com sistema de combate dinâmico, geração procedural de masmorras e shaders customizados de iluminação.",
      image: "assets/images/projects/project-1.svg",
      featured: true,
      tags: ["Unity", "C#", "HLSL Shaders", "Game Design"],
      demoUrl: "https://itch.io",
      githubUrl: "https://github.com/rafaellannes"
    },
    {
      title: "DevFlow SaaS Platform",
      description: "Plataforma web para gestão de sprints e métricas de engenharia em tempo real, construída com React, TypeScript e WebSockets com dashboard analítico de alta performance.",
      image: "assets/images/projects/project-2.svg",
      featured: true,
      tags: ["TypeScript", "React", "Node.js", "PostgreSQL"],
      demoUrl: "https://github.com/rafaellannes",
      githubUrl: "https://github.com/rafaellannes"
    },
    {
      title: "Retro Pixel Engine",
      description: "Motor de jogos 2D leve compilado para WebAssembly e WebGL, com sistema de partículas em tempo real e sintetizador de áudio chiptune de 8 bits.",
      image: "assets/images/projects/project-3.svg",
      featured: false,
      tags: ["C++", "WebAssembly", "WebGL", "DSP Audio"],
      demoUrl: "",
      githubUrl: "https://github.com/rafaellannes"
    },
    {
      title: "Neural Terrain Generator",
      description: "Ferramenta procedural para criação e modelagem de relevos e biomas 3D em tempo real com exportação direta para pipelines de engines modernas.",
      image: "assets/images/projects/project-1.svg",
      featured: false,
      tags: ["Python", "Compute Shaders", "GLTF", "Procedural"],
      demoUrl: "",
      githubUrl: "https://github.com/rafaellannes"
    }
  ]
};

// Disponibiliza globalmente
window.SITE_CONFIG = SITE_CONFIG;
