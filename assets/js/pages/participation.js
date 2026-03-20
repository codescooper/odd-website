// ========== GESTION DES ACCORDÉONS ODD AVEC LAZY LOADING ==========

document.addEventListener('DOMContentLoaded', function() {
  initializeOddToggles();
  updateToggleStates();
  setupLazyLoading();
  smoothScroll();
});

// ========== LAZY LOADING DES CARTES ODD ==========
function setupLazyLoading() {
  // Vérifie si IntersectionObserver est supporté
  if ('IntersectionObserver' in window) {
    const oddCards = document.querySelectorAll('.odd-card');
    const options = {
      threshold: 0.1,
      rootMargin: '50px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Ajoute une classe pour le chargement
          entry.target.classList.add('loaded');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    oddCards.forEach(card => {
      observer.observe(card);
    });
  }
}

// ========== INITIALISER LES TOGGLES ==========
function initializeOddToggles() {
  const toggles = document.querySelectorAll('.odd-toggle');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      const oddCard = this.closest('.odd-card');
      const oddBody = oddCard.querySelector('.odd-card__body');
      const isExpanded = this.getAttribute('aria-expanded') === 'true';

      if (isExpanded) {
        // Fermer avec animation
        oddBody.classList.remove('show');
        oddBody.style.maxHeight = '0';
        oddBody.style.overflow = 'hidden';
        this.setAttribute('aria-expanded', 'false');
        this.textContent = 'Afficher';
      } else {
        // Ouvrir avec animation
        oddBody.classList.add('show');
        oddBody.style.maxHeight = oddBody.scrollHeight + 'px';
        this.setAttribute('aria-expanded', 'true');
        this.textContent = 'Réduire';
      }
    });
  });
}

// ========== METTRE À JOUR L'ÉTAT DES TOGGLES ==========
function updateToggleStates() {
  const oddCards = document.querySelectorAll('.odd-card');

  oddCards.forEach(card => {
    const toggle = card.querySelector('.odd-toggle');
    const body = card.querySelector('.odd-card__body');

    // Tous les ODD sont ouverts par défaut avec animation
    body.classList.add('show');
    body.style.display = 'block';
    body.style.maxHeight = body.scrollHeight + 'px';
    toggle.textContent = 'Réduire';
    toggle.setAttribute('aria-expanded', 'true');
  });
}

// ========== SCROLL FLUIDE ==========
function smoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '#!') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ========== AJUSTER HAUTEUR DYNAMIQUEMENT ==========
window.addEventListener('resize', function() {
  const openBodies = document.querySelectorAll('.odd-card__body.show');
  openBodies.forEach(body => {
    body.style.maxHeight = body.scrollHeight + 'px';
  });
});
