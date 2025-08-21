import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const names = [
  'इंडिकारा', // Hindi
  'Indikaara' // English fallback
];

const BrandAnimation: React.FC = () => {
  const brandEl = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let i = 0;
    function animateBrandName() {
      if (!brandEl.current) return;
      if (!brandEl.current) return;
      gsap.to(brandEl.current, {
        duration: 0.4, x: 60, opacity: 0, ease: 'power1.in',
        onComplete: function () {
          if (!brandEl.current) return;
          if (i === names.length - 1) {
            brandEl.current.innerHTML = '<img src="/assets/Png-04.png" alt="Indikaara Logo" style="height:1.7em;vertical-align:middle;display:inline-block;">';
          } else {
            brandEl.current.textContent = names[i];
          }
          gsap.fromTo(brandEl.current, { x: -60, opacity: 0 }, { duration: 0.4, x: 0, opacity: 1, ease: 'power1.out' });
        }
      });
      i = (i + 1) % names.length;
      setTimeout(animateBrandName, 2000);
    }
    animateBrandName();
  }, []);
  return <span ref={brandEl}>Indikaara</span>;
};

export default BrandAnimation;
