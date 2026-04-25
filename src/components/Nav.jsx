import { useEffect, useRef, useState } from 'react';

const NAV_HEIGHT = 60;
const SCROLL_DURATION = 700;

const links = [
  { href: '#projects',   label: '// projects' },
  { href: '#about',      label: '// about' },
  { href: '#stack',      label: '// stack' },
  { href: '#experience', label: '// experience' },
  { href: '#contact',    label: '// contact' },
];

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export default function Nav() {
  const linksRef = useRef([]);
  const rafRef = useRef(null);
  const isProgrammaticRef = useRef(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const navLinks = linksRef.current;
    const observers = [];

    document.querySelectorAll('section[id]').forEach(section => {
      const obs = new IntersectionObserver((entries) => {
        if (isProgrammaticRef.current) return;
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
              if (!link) return;
              link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
          }
        });
      }, { threshold: 0.4 });
      obs.observe(section);
      observers.push(obs);
    });

    const handleScroll = () => setMenuOpen(false);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observers.forEach(obs => obs.disconnect());
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollToSection = (href, linkIndex) => {
    const target = document.querySelector(href);
    if (!target) return;

    // Immediately set active state
    linksRef.current.forEach((link, i) => {
      if (!link) return;
      link.classList.toggle('active', i === linkIndex);
    });

    const targetY = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    isProgrammaticRef.current = true;

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / SCROLL_DURATION, 1);
      window.scrollTo(0, startY + distance * easeOutExpo(progress));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        isProgrammaticRef.current = false;
      }
    }

    rafRef.current = requestAnimationFrame(step);
  };

  const handleClick = (e, href, index) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollToSection(href, index);
  };

  return (
    <>
      <nav className="nav">
        <span className="nav-logo">SM.dev</span>

        <ul className="nav-links">
          {links.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                ref={el => linksRef.current[i] = el}
                onClick={(e) => handleClick(e, link.href, i)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <span className="nav-rev">REV.01</span>
          <button
            className={['nav-hamburger', menuOpen ? 'nav-hamburger--open' : ''].filter(Boolean).join(' ')}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="nav-mobile-menu" role="navigation" aria-label="Mobile navigation">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-mobile-link"
              onClick={(e) => handleClick(e, link.href, i)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
