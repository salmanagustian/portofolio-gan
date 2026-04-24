import { useEffect, useRef } from 'react';

const links = [
  { href: '#about',      label: '// about' },
  { href: '#projects',   label: '// projects' },
  { href: '#stack',      label: '// stack' },
  { href: '#experience', label: '// experience' },
  { href: '#contact',    label: '// contact' },
];

export default function Nav() {
  const linksRef = useRef([]);

  useEffect(() => {
    const navLinks = linksRef.current;

    const observers = [];
    document.querySelectorAll('section[id]').forEach(section => {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
              if (!link) return;
              const href = link.getAttribute('href');
              if (href === `#${id}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      }, { threshold: 0.4 });
      obs.observe(section);
      observers.push(obs);
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  return (
    <nav className="nav">
      <span className="nav-logo">SM.dev</span>

      <ul className="nav-links">
        {links.map((link, i) => (
          <li key={link.href}>
            <a
              href={link.href}
              ref={el => linksRef.current[i] = el}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <span className="nav-rev">REV.01</span>
    </nav>
  );
}
