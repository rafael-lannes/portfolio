# 🚀 Portfólio Pessoal & Profissional - Rafael Lannes

Um modelo de portfólio moderno, ultra veloz, responsivo e desacoplado, projetado especificamente para ser **hospedado gratuitamente no GitHub Pages** sem necessidade de configurações complicadas ou pipelines de CI/CD.

Inspirado na simplicidade do *Beautiful Jekyll*, este projeto foi construído para que você **nunca precise editar arquivos HTML complexos** ao atualizar textos, redes sociais ou adicionar novos projetos ao seu portfólio.

---

## ✨ Principais Recursos

- 🛠 **Manutenção Centralizada**: Edite apenas arquivos YAML (`_config.yml` e `_data/`).
- 🌓 **Dark / Light Mode Nativo**: Alternância de tema suave com memorização da preferência do visitante (`localStorage`) e detecção automática do tema do sistema.
- 📱 **Mobile-First & Acessível**: Menu hamburguer deslizante, semântica HTML5 estrita e suporte para navegação por teclado e leitores de tela.
- ⚡ **Alta Performance (Zero Bloatware)**: Carregamento instantâneo com CSS moderno (<10KB) e ícones vetoriais SVG leves, sem frameworks pesados.
- 🎮 **Grid de Projetos Dinâmico**: Cards modernos com thumbnails, tags de tecnologia, badges de destaque e botões para demonstração ao vivo e repositório.
- 🌐 **100% Compatível com GitHub Pages**: Usa o motor nativo Jekyll do GitHub Pages.

---

## 📂 Estrutura de Diretórios do Repositório

```text
Pagina Rafael Lannes/
│
├── _config.yml               # ⚙️ CONFIGURAÇÃO PRINCIPAL: Seu nome, bio, redes sociais, avatar e tema
│
├── _data/
│   ├── projects.yml          # 💼 SEUS PROJETOS: Adicione ou edite projetos aqui
│   └── skills.yml            # 🧠 SUAS HABILIDADES: Agrupadas por categorias
│
├── _includes/                # 🧩 Componentes modulares reutilizáveis (HTML/SVG)
│   ├── head.html             # Metatags, SEO, OpenGraph e script de tema
│   ├── navbar.html           # Barra de navegação com tema toggle e menu mobile
│   ├── hero.html             # Apresentação inicial (Avatar, Nome, Cargo, Bio e CTAs)
│   ├── about.html            # Seção Sobre e Habilidades dinâmicas
│   ├── projects.html         # Grid moderno de cards de projetos
│   ├── contact.html          # Card de contato rápido
│   ├── footer.html           # Rodapé com ícones sociais e ano dinâmico
│   └── icons.html            # Biblioteca de ícones SVG leves
│
├── _layouts/
│   └── default.html          # Template base do site
│
├── assets/
│   ├── css/
│   │   └── style.css         # Design system, temas Dark/Light e responsividade
│   ├── js/
│   │   └── main.js           # Controle de Dark Mode, menu mobile e scroll spy
│   └── images/
│       ├── avatar.svg        # Sua foto de perfil (ou coloque seu avatar.png/.jpg)
│       └── projects/         # Imagens e thumbnails dos seus projetos
│
├── index.html                # Ponto de entrada do site
├── .gitignore                # Arquivos ignorados pelo Git
└── README.md                 # Guia de uso e deploy
```

---

## 🛠️ Como Personalizar Seu Portfólio (Sem tocar em HTML!)

### 1. Alterar seus Dados Pessoais e Redes Sociais
Abra o arquivo `_config.yml` e altere os campos:
```yaml
author:
  name: "Seu Nome Completo"
  role: "Seu Cargo / Especialidade"
  location: "Sua Cidade, Brasil"
  email: "seuemail@dominio.com"
  bio_short: "Frase de impacto curta para o Hero."
  bio_full: >
    Seu texto de apresentação mais detalhado para a seção Sobre.

social:
  github: "https://github.com/seu-usuario"
  linkedin: "https://linkedin.com/in/seu-usuario"
  itchio: "https://seu-usuario.itch.io" # Opcional (deixe "" para ocultar)
```

### 2. Adicionar ou Editar Projetos
Abra o arquivo `_data/projects.yml` e adicione um novo bloco no formato:
```yaml
- title: "Nome do Meu Projeto"
  description: "Breve resumo sobre o que o projeto faz e seu impacto."
  image: "assets/images/projects/meu-projeto.png"
  featured: true # true para exibir a badge de "Destaque"
  tags:
    - "React"
    - "TypeScript"
    - "Tailwind"
  demo_url: "https://meu-projeto.vercel.app" # Link para ver online (ou "" se não houver)
  github_url: "https://github.com/usuario/projeto" # Link do código no GitHub (ou "" se for privado)
  details_url: "" # Opcional
```

### 3. Atualizar Habilidades & Tecnologias
Abra o arquivo `_data/skills.yml` para adicionar ou remover tecnologias e seus níveis de proficiência.

### 4. Mudar sua Foto de Perfil
1. Coloque sua imagem (ex: `avatar.jpg` ou `avatar.png`) na pasta `assets/images/`.
2. No `_config.yml`, atualize a linha:
   ```yaml
   avatar: "assets/images/avatar.jpg"
   ```

---

## 🚢 Como Publicar no GitHub Pages (Passo a Passo)

### Passo 1: Criar o Repositório no GitHub
1. Acesse o [GitHub](https://github.com/) e clique em **New repository**.
2. **Nome do repositório**:
   - Para o site ficar no endereço principal `https://seuusuariono.github.io`: Nomeie o repositório exatamente como `seuusuariono.github.io`.
   - Para o site ficar em um subendereço `https://seuusuariono.github.io/portfolio`: Nomeie como `portfolio` e no `_config.yml` defina `baseurl: "/portfolio"`.
3. Deixe o repositório como **Public** e clique em **Create repository**.

### Passo 2: Enviar o Código para o GitHub
No terminal da sua pasta local, execute:
```bash
git init
git add .
git commit -m "feat: meu portfólio pessoal e profissional"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
git push -u origin main
```

### Passo 3: Ativar o GitHub Pages nas Configurações
1. No seu repositório no GitHub, clique na aba **Settings** (Configurações).
2. Na barra lateral esquerda, clique em **Pages** (dentro da seção *Code and automation*).
3. Na opção **Build and deployment**:
   - **Source**: selecione **Deploy from a branch**.
   - **Branch**: selecione `main` e a pasta `/(root)`.
4. Clique em **Save**.

🎉 **Pronto!** Em cerca de 1 minuto, o GitHub processará os arquivos com o Jekyll e exibirá o link verde com a sua página no ar!

---

## 💻 Teste Local (Opcional)

Se quiser visualizar as alterações na sua máquina:

- **Opção 1 (Simples - Sem Ruby)**: Use a extensão **Live Server** do VS Code ou execute `python -m http.server 8000` (Obs: para renderizar as tags Liquid dinamicamente em tempo real, use a Opção 2).
- **Opção 2 (Nativo Jekyll)**:
  ```bash
  gem install jekyll bundler
  bundle exec jekyll serve
  ```
  Acesse `http://localhost:4000` no seu navegador.
