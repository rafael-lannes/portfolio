/**
 * ==============================================================================
 * 🚀 SCRIPT PRINCIPAL - PORTFÓLIO RAFAEL LANNES
 * ==============================================================================
 * - Renderização e Hidratação de Dados via SITE_CONFIG (config.js)
 * - Linha do tempo da carreira (Timeline)
 * - Alternância de Tema Dark / Light Mode com persistência (localStorage)
 * - Menu Hamburguer Mobile Acessível (com ARIA e bloqueio de scroll de fundo)
 * - Destaque de Link Ativo no Menu conforme a rolagem (ScrollSpy)
 * - Atualização Automática do Ano no Rodapé
 * ==============================================================================
 */

// Biblioteca interna de ícones SVG leves
const SVG_ICONS = {
  github: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>`,
  linkedin: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
  twitter: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>`,
  email: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`,
  itchio: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="14" x="2" y="5" rx="3"></rect><line x1="6" y1="12" x2="10" y2="12"></line><line x1="8" y1="10" x2="8" y2="14"></line><circle cx="15" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>`,
  external: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>`,
  code: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
  layout: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>`,
  gamepad: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="6" y1="12" x2="10" y2="12"></line><line x1="8" y1="10" x2="8" y2="14"></line><line x1="15" y1="13" x2="15.01" y2="13"></line><line x1="18" y1="11" x2="18.01" y2="11"></line><rect width="20" height="12" x="2" y="6" rx="6"></rect></svg>`,
  server: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect><rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
  star: `<svg class="icon badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
  briefcase: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
  fileText: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>`
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Carrega os dados centralizados do SITE_CONFIG se disponível
  if (window.SITE_CONFIG) {
    renderSiteContent(window.SITE_CONFIG);
  }

  // 2. Inicializa os módulos de comportamento
  initThemeToggle();
  initMobileMenu();
  initScrollSpy();
  initDynamicYear();
});

/**
 * 1. RENDERIZAÇÃO DINÂMICA DO CONTEÚDO A PARTIR DO CONFIG.JS
 */
function renderSiteContent(config) {
  const { profile, social, skills, projects, timeline, navigation } = config;

  // Atualizar Navegação
  if (navigation && Array.isArray(navigation)) {
    renderNavigation(navigation);
  }

  // Atualizar Perfil & Textos Básicos
  if (profile) {
    if (profile.name) {
      document.title = `${profile.name} | ${profile.role || 'Portfólio'}`;
      const brandElem = document.getElementById('brand-name');
      if (brandElem) brandElem.textContent = profile.name;
      const heroNameElem = document.getElementById('hero-name');
      if (heroNameElem) heroNameElem.textContent = profile.name;
      const footerNameElem = document.getElementById('footer-name');
      if (footerNameElem) footerNameElem.textContent = profile.name;
    }

    if (profile.role) {
      const heroRoleElem = document.getElementById('hero-role');
      if (heroRoleElem) heroRoleElem.textContent = profile.role;
    }

    const heroInstElem = document.getElementById('hero-institution');
    if (heroInstElem) {
      if (profile.institution && profile.institution.trim() !== '') {
        heroInstElem.textContent = profile.institution;
        heroInstElem.style.display = '';
      } else {
        heroInstElem.textContent = '';
        heroInstElem.style.display = 'none';
      }
    }

    if (profile.location) {
      const locationElem = document.getElementById('about-location');
      if (locationElem) locationElem.textContent = profile.location;
    }

    if (profile.avatar) {
      const avatarElem = document.getElementById('hero-avatar');
      if (avatarElem) avatarElem.src = profile.avatar;
    }

    if (profile.bioShort) {
      const bioShortElem = document.getElementById('hero-bio-short');
      if (bioShortElem) bioShortElem.textContent = profile.bioShort;
    }

    if (profile.bioFull) {
      const bioFullElem = document.getElementById('about-bio-full');
      if (bioFullElem) {
        bioFullElem.innerHTML = profile.bioFull
          .split('\n')
          .filter(p => p.trim() !== '')
          .map(p => `<p>${p}</p>`)
          .join('');
      }
    }

    if (profile.status) {
      const statusContainer = document.getElementById('hero-status');
      const statusText = document.getElementById('status-text');
      if (statusContainer && statusText) {
        if (profile.status.available) {
          statusContainer.style.display = 'inline-flex';
          statusText.textContent = profile.status.text || 'Aprendendo algo novo todos os dias!';
        } else {
          statusContainer.style.display = 'none';
        }
      }
    }

    if (profile.email) {
      const emailBtn = document.getElementById('contact-email-btn');
      if (emailBtn) emailBtn.href = `mailto:${profile.email}`;
    }

    if (profile.cvUrl) {
      const heroCvBtn = document.getElementById('hero-cv-btn');
      if (heroCvBtn) heroCvBtn.href = profile.cvUrl;
    }
  }

  // Atualizar Redes Sociais no Hero, Footer e Contato
  if (social) {
    if (social.linkedin) {
      const linkedinBtn = document.getElementById('contact-linkedin-btn');
      if (linkedinBtn) linkedinBtn.href = social.linkedin;
    }
    if (social.github) {
      const githubCta = document.getElementById('projects-github-cta');
      if (githubCta) githubCta.href = social.github;
    }

    renderSocialLinks(social);
  }

  // Renderizar Habilidades
  if (skills && Array.isArray(skills)) {
    renderSkills(skills);
  }

  // Renderizar Linha do Tempo (Timeline)
  if (timeline && Array.isArray(timeline)) {
    renderTimeline(timeline);
  }

  // Renderizar Projetos ("Coisas que fiz!")
  if (projects && Array.isArray(projects)) {
    renderProjects(projects);
  }
}

/**
 * Renderiza Links de Navegação Desktop e Mobile
 */
function renderNavigation(navigation) {
  const desktopNavList = document.getElementById('desktop-nav-list');
  const mobileNavList = document.getElementById('mobile-nav-list');

  if (desktopNavList) {
    desktopNavList.innerHTML = navigation.map(item => `
      <li class="nav-item">
        <a href="${item.url}" 
           class="nav-link ${item.url === '#hero' ? 'active' : ''}" 
           ${item.external ? 'target="_blank" rel="noopener noreferrer"' : ''}>
          ${item.title}
          ${item.external ? SVG_ICONS.external : ''}
        </a>
      </li>
    `).join('');
  }

  if (mobileNavList) {
    mobileNavList.innerHTML = navigation.map(item => `
      <li class="mobile-nav-item">
        <a href="${item.url}" 
           class="mobile-nav-link" 
           ${item.external ? 'target="_blank" rel="noopener noreferrer"' : ''}>
          ${item.title}
          ${item.external ? SVG_ICONS.external : ''}
        </a>
      </li>
    `).join('');
  }
}

/**
 * Renderiza Links Sociais em todas as seções (Hero, Footer, Mobile)
 */
function renderSocialLinks(social) {
  const heroContainer = document.getElementById('hero-social-links');
  const footerContainer = document.getElementById('footer-social-links');
  const mobileContainer = document.getElementById('mobile-social-container');

  const socialItems = [
    { key: 'linkedin', label: 'LinkedIn', url: social.linkedin, icon: SVG_ICONS.linkedin },
    { key: 'github', label: 'GitHub', url: social.github, icon: SVG_ICONS.github },
    { key: 'itchio', label: 'Itch.io', url: social.itchio, icon: SVG_ICONS.itchio }
  ].filter(item => item.url && item.url.trim() !== '');

  if (heroContainer) {
    heroContainer.innerHTML = socialItems.map(item => `
      <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="social-icon-pill" aria-label="${item.label}">
        ${item.icon}
        <span>${item.label}</span>
      </a>
    `).join('');
  }

  if (footerContainer) {
    footerContainer.innerHTML = socialItems.map(item => `
      <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="footer-social-icon" aria-label="${item.label}" title="${item.label}">
        ${item.icon}
      </a>
    `).join('');
  }

  if (mobileContainer) {
    mobileContainer.innerHTML = socialItems.map(item => `
      <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="${item.label}" title="${item.label}">
        ${item.icon}
      </a>
    `).join('');
  }
}

/**
 * Renderiza a Linha do Tempo da Carreira
 */
function renderTimeline(timeline) {
  const container = document.getElementById('timeline-container');
  if (!container) return;

  container.innerHTML = timeline.map(item => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="timeline-year-badge">${item.year}</span>
        <h4 class="timeline-role-title">${item.title}</h4>
        <p class="timeline-desc">${item.description}</p>
      </div>
    </div>
  `).join('');
}

/**
 * Renderiza os blocos de Habilidades / Categorias
 */
function renderSkills(skills) {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = skills.map(group => {
    const groupIcon = SVG_ICONS[group.icon] || SVG_ICONS.layout;
    const tagsHtml = group.items.map(item => {
      const name = typeof item === 'string' ? item : item.name;
      return `
        <li class="skill-tag">
          <span class="skill-tag-name">${name}</span>
        </li>
      `;
    }).join('');

    return `
      <div class="skill-category-card">
        <div class="skill-category-header">
          <span class="skill-cat-icon">${groupIcon}</span>
          <h4 class="skill-cat-title">${group.category}</h4>
        </div>
        <ul class="skill-tags-list">
          ${tagsHtml}
        </ul>
      </div>
    `;
  }).join('');
}

/**
 * Renderiza os Cards de Projetos ("Coisas que fiz!")
 */
function renderProjects(projects) {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = projects.map(proj => {
    const featuredClass = proj.featured ? 'is-featured' : '';
    let badgeHtml = '';
    if (proj.status === 'desenvolvendo') {
      badgeHtml = `<span class="project-badge-dev">🔨 Desenvolvendo</span>`;
    } else if (proj.status === 'descontinuado') {
      badgeHtml = `<span class="project-badge-discontinued">Descontinuado</span>`;
    } else if (proj.featured) {
      badgeHtml = `<span class="project-badge-featured">${SVG_ICONS.star} Destaque</span>`;
    }

    const tagsHtml = proj.tags ? proj.tags.map(t => `<span class="tag-pill">${t}</span>`).join('') : '';

    const isInternal = proj.demoUrl && !proj.demoUrl.startsWith('http');
    const demoBtn = proj.demoUrl && proj.demoUrl.trim() !== ''
      ? `<a href="${proj.demoUrl}" ${isInternal ? '' : 'target="_blank" rel="noopener noreferrer"'} class="btn btn-sm btn-primary">
          <span>${proj.demoLabel || 'Acessar Projeto'}</span>
          ${isInternal ? (SVG_ICONS.fileText || SVG_ICONS.external) : SVG_ICONS.external}
        </a>`
      : '';

    const githubBtn = proj.githubUrl && proj.githubUrl.trim() !== ''
      ? `<a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-secondary">
          <span>GitHub</span>
          ${SVG_ICONS.github}
        </a>`
      : '';

    const formattedDescription = (proj.description || '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    return `
      <article class="project-card ${featuredClass}">
        <div class="project-media-wrapper">
          <img src="${proj.image}" alt="Thumbnail de ${proj.title}" class="project-thumbnail" loading="lazy" width="400" height="240">
          ${badgeHtml}
        </div>
        <div class="project-content">
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-description">${formattedDescription}</p>
          <div class="project-tags">${tagsHtml}</div>
          <div class="project-actions">
            ${demoBtn}
            ${githubBtn}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/**
 * 2. GERENCIAMENTO DE TEMA (DARK / LIGHT MODE)
 */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
}

/**
 * 3. MENU MOBILE RESPONSIVO & ACESSÍVEL
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (!toggleBtn || !mobileNav) return;

  const openMenu = () => {
    toggleBtn.classList.add('is-active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    mobileNav.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    toggleBtn.classList.remove('is-active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('hidden', '');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  mobileNav.addEventListener('click', (e) => {
    if (e.target.classList.contains('mobile-nav-link') || e.target.closest('.mobile-nav-link')) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && toggleBtn.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    }
  });
}

/**
 * 4. SCROLLSPY (DESTAQUE DE LINK ATIVO NA NAVEGAÇÃO)
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-25% 0px -65% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          const href = link.getAttribute('href');
          if (href === `#${id}` || href.endsWith(`#${id}`)) {
            link.classList.add('active');
          } else if (!href.startsWith('http')) {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((sec) => observer.observe(sec));
}

/**
 * 5. ANO ATUAL AUTOMÁTICO NO COPYRIGHT
 */
function initDynamicYear() {
  const yearElement = document.getElementById('copyright-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
