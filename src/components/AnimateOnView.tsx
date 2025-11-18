import React, { useEffect } from 'react';

type Props = {
  selector?: string;
  threshold?: number;
  rootMargin?: string;
  stagger?: number; // ms
};

const AnimateOnView: React.FC<Props> = ({
  selector = '[data-animate], .animate-on-scroll',
  threshold = 0.12,
  rootMargin = '0px 0px -10% 0px',
  stagger = 80,
}) => {
  useEffect(() => {
    if (typeof window === 'undefined' || !document) return;

    const items = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (!items.length) return;

    items.forEach((el, i) => {
      // don't re-init elements that already have in-view
      if (el.classList.contains('in-view')) return;
      // initial state
      el.classList.add('slide-init');
      const dir = el.dataset.animateDir || 'up';
      if (dir === 'left') el.classList.add('slide-in-left');
      else if (dir === 'right') el.classList.add('slide-in-right');
      else el.classList.add('slide-in');
      // set stagger via inline style so we can vary per element
      const delay = (i % 10) * stagger; // prevent excessive delay
      el.style.transitionDelay = `${delay}ms`;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('in-view');
            io.unobserve(el);
          }
        });
      },
      { threshold, rootMargin }
    );

    items.forEach((el) => io.observe(el));

    return () => {
      try {
        io.disconnect();
      } catch (e) {
        // noop
      }
    };
  }, [selector, threshold, rootMargin, stagger]);

  return null;
};

export default AnimateOnView;
