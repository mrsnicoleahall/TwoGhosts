import React, { useEffect } from 'react';

type Props = {
  selector?: string;
  threshold?: number;
  rootMargin?: string;
  stagger?: number; // ms
};

const AnimateOnView: React.FC<Props> = ({
  selector = '[data-animate], .animate-on-scroll',
  threshold = 0.15,
  rootMargin = '0px 0px -5% 0px',
  stagger = 50,
}) => {
  useEffect(() => {
    if (typeof window === 'undefined' || !document) return;

    const items = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (!items.length) return;

    // Group items by their parent section for better staggering
    const itemsBySection = new Map<Element, HTMLElement[]>();

    items.forEach((el) => {
      // don't re-init elements that already have in-view
      if (el.classList.contains('in-view')) return;

      // Find the closest section parent
      const section = el.closest('section') || document.body;
      if (!itemsBySection.has(section)) {
        itemsBySection.set(section, []);
      }
      itemsBySection.get(section)!.push(el);
    });

    // Apply animations with stagger per section
    itemsBySection.forEach((sectionItems) => {
      sectionItems.forEach((el, i) => {
        // initial state
        el.classList.add('slide-init');
        const dir = el.dataset.animateDir || 'up';
        if (dir === 'left') el.classList.add('slide-in-left');
        else if (dir === 'right') el.classList.add('slide-in-right');
        else el.classList.add('slide-in');
        // set stagger via inline style with reduced delay for faster feel
        const delay = Math.min(i * stagger, 400); // cap at 400ms
        el.style.transitionDelay = `${delay}ms`;
      });
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
