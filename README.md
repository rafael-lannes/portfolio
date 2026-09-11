# 🚀 Portfólio Pessoal & Profissional - Rafael Lannes

Um modelo de portfólio moderno, veloz, responsivo e desacoplado, projetado para **hospedagem gratuita no GitHub Pages** ou em qualquer servidor estático.

O projeto foi construído para que você **nunca precise mexer em arquivos HTML complexos**: todas as informações (nome, cargo, bio, redes sociais, habilidades e projetos) ficam centralizadas em um único arquivo de configuração: **`assets/js/config.js`**.

---

## ✨ Destaques do Projeto

- 🛠 **Manutenção 100% Centralizada**: Abra `assets/js/config.js` e altere os dados. A página inteira se atualiza automaticamente!
- 🌓 **Dark / Light Mode Inteligente**: Alternância instantânea com clique, memorização no navegador (`localStorage`) e detecção do tema do sistema operacional sem piscada branca (anti-FOUC).
- 📱 **Mobile-First & Responsivo**: Menu hamburguer deslizante, visual fluido em celulares, tablets e monitores ultrawide.
- ⚡ **Zero Dependências & Zero Instalações**: Funciona tanto com duplo-clique no arquivo `index.html` no seu computador quanto publicado no GitHub Pages (sem necessidade de instalar Ruby ou Node.js).
- 🎮 **Grid de Projetos com Destaque**: Cards modernos com thumbnails 16:9, badges de tecnologia, suporte a projetos em destaque e links diretos para Demo e GitHub.

---

## 📂 Estrutura de Arquivos

```text
Pagina Rafael Lannes/
│
├── index.html                # 📄 Página principal completa e estruturada
│
├── assets/
│   ├── js/
│   │   ├── config.js         # ⚙️ ARQUIVO DE CONFIGURAÇÃO: Edite seus dados, projetos e redes aqui!
│   │   └── main.js           # 🧠 Lógica do site (tema, menu mobile, renderização dinâmica)
│   │
│   ├── css/
│   │   └── style.css         # 🎨 Design system moderno, variáveis CSS e responsividade
│   │
│   └── images/
│       ├── avatar.svg        # Foto de perfil (ou coloque seu avatar.jpg/.png)
│       └── projects/         # Imagens dos projetos (project-1, project-2, project-3)
│
├── .gitignore                # Arquivos ignorados pelo Git
└── README.md                 # Guia de uso e deploy
```

---

## 🛠️ Como Personalizar (Sem tocar em HTML!)

Abra o arquivo **`assets/js/config.js`** no seu editor de código e altere os valores:

### 1. Dados Pessoais & Apresentação
```javascript
profile: {
  name: "Rafael Lannes",
  role: "Desenvolvedor Full-Stack & Game Dev",
  location: "Brasil",
  email: "contato@rafaellannes.dev",
  status: {
    available: true, // true para exibir a badge verde de disponível
    text: "Disponível para novos projetos e oportunidades"
  },
  avatar: "assets/images/avatar.svg", // Caminho da sua foto
  bioShort: "Frase de impacto curta para o Hero.",
  bioFull: `Texto completo para a seção Sobre.`
}
```

### 2. Redes Sociais
```javascript
social: {
  github: "https://github.com/seu-usuario",
  linkedin: "https://linkedin.com/in/seu-usuario",
  email: "mailto:seuemail@dominio.com",
  itchio: "https://seu-usuario.itch.io", // Opcional (deixe "" para ocultar)
  twitter: "https://twitter.com/seu-usuario"
}
```

### 3. Adicionar ou Editar Projetos
Para adicionar um novo projeto ao portfólio, basta adicionar um novo objeto na lista `projects`:
```javascript
{
  title: "Nome do Meu Projeto",
  description: "Descrição rápida sobre o que o projeto faz e tecnologias usadas.",
  image: "assets/images/projects/project-1.svg", // ou .png/.jpg
  featured: true, // true para exibir a badge de "Destaque"
  tags: ["React", "TypeScript", "TailwindCSS"],
  demoUrl: "https://meu-projeto.vercel.app", // link do demo (ou "" se não tiver)
  githubUrl: "https://github.com/usuario/projeto" // link do código (ou "" se for privado)
}
```

### 4. Atualizar Habilidades
No array `skills` de `assets/js/config.js`, você pode adicionar categorias e tecnologias com seus respectivos níveis ("Avançado", "Intermediário", etc.).

---

## 🚀 Como Publicar no GitHub Pages (3 Passos)

### Passo 1: Subir os arquivos para o GitHub
No terminal da pasta do projeto, execute:
```bash
git init
git add .
git commit -m "feat: meu portfolio estático"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git push -u origin main
```

### Passo 2: Ativar o GitHub Pages
1. Acesse o seu repositório no GitHub e clique em **Settings**.
2. No menu lateral esquerdo, clique em **Pages**.
3. Em **Build and deployment > Source**, escolha **Deploy from a branch**.
4. Em **Branch**, selecione `main` e a pasta `/(root)`.
5. Clique em **Save**.

### Passo 3: Pronto!
Em menos de 1 minuto, o GitHub Pages fornecerá a URL pública do seu portfólio no topo da página de configurações!

---

## 💻 Visualização Local

Basta dar um **duplo clique no arquivo `index.html`** para abrir diretamente no seu navegador (Chrome, Edge, Firefox, Safari) ou utilizar a extensão **Live Server** no VS Code.
