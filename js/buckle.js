class Buckle {
  constructor() {
    this.initNav();
    this.initCarousel();
    this.initTabs();
    this.initAlerts();
    this.initScrollTo();
    this.initScrollToTop();
    this.initDeckTransitions();
  }

  initNav() {
    const toggle = document.querySelector('.buckle-nav-toggle');
    const list = document.querySelector('.buckle-nav-list');
    if (toggle && list) {
      toggle.addEventListener('click', () => {
        list.classList.toggle('show');
      });
    }
  }

  initCarousel() {
    const carousels = document.querySelectorAll('.buckle-carousel');
    carousels.forEach(carousel => {
      const inner = carousel.querySelector('.buckle-carousel-inner');
      const items = carousel.querySelectorAll('.buckle-carousel-item');
      const prev = carousel.querySelector('.buckle-carousel-prev');
      const next = carousel.querySelector('.buckle-carousel-next');
      let index = 0;
      let autoScrollInterval = null;

      if (!inner || !items || items.length === 0) {
        return;
      }

      inner.style.width = '100%';

      const updateCarousel = () => {
        inner.style.transform = `translateX(-${index * 100}%)`;
      };

      const startAutoScroll = () => {
        if (carousel.dataset.autoScroll === 'true' && !autoScrollInterval) {
          autoScrollInterval = setInterval(() => {
            index = (index + 1) % items.length;
            updateCarousel();
          }, 5000);
        }
      };

      const stopAutoScroll = () => {
        if (autoScrollInterval) {
          clearInterval(autoScrollInterval);
          autoScrollInterval = null;
        }
      };

      if (next) {
        next.addEventListener('click', () => {
          stopAutoScroll();
          index = (index + 1) % items.length;
          updateCarousel();
          startAutoScroll();
        });
      }

      if (prev) {
        prev.addEventListener('click', () => {
          stopAutoScroll();
          index = (index - 1 + items.length) % items.length;
          updateCarousel();
          startAutoScroll();
        });
      }

      carousel.addEventListener('mouseenter', stopAutoScroll);
      carousel.addEventListener('mouseleave', startAutoScroll);
      startAutoScroll();
      updateCarousel();
    });
  }

  initTabs() {
    const tabLists = document.querySelectorAll('.buckle-tabs');
    tabLists.forEach(tabs => {
      const tabButtons = tabs.querySelectorAll('.buckle-tab');
      const tabPanels = tabs.querySelectorAll('.buckle-tab-panel');

      tabButtons.forEach(button => {
        button.addEventListener('click', () => {
          const target = button.dataset.tab;
          const panel = tabs.querySelector(`#${target}`);

          if (!panel) return;

          tabButtons.forEach(btn => btn.classList.remove('active'));
          tabPanels.forEach(panel => panel.classList.remove('active'));

          button.classList.add('active');
          panel.classList.add('active');
        });
      });
    });
  }

  initAlerts() {
    const alerts = document.querySelectorAll('.buckle-alert');
    alerts.forEach(alert => {
      const close = alert.querySelector('.buckle-alert-close');
      if (close) {
        close.addEventListener('click', () => {
          alert.style.display = 'none';
        });
      }
    });
  }

  initScrollTo() {
    document.querySelectorAll('[data-scroll-to]').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.dataset.scrollTo);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  initScrollToTop() {
    const scrollTop = document.querySelector('.buckle-scroll-top');
    if (scrollTop) {
      window.addEventListener('scroll', () => {
        scrollTop.style.display = window.scrollY > 200 ? 'block' : 'none';
      });
      scrollTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  initDeckTransitions() {
    const decks = document.querySelectorAll('.buckle-deck-card[data-transition]');
    if (!decks.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    decks.forEach(deck => {
      observer.observe(deck);
    });
  }
}