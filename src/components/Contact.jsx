const contactLinks = [
  {
    label: 'Email',
    value: 'hello@salmanmuhammad.dev',
    href: 'mailto:hello@salmanmuhammad.dev',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/salmanmuhammad',
    href: 'https://linkedin.com/in/salmanmuhammad',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/salmanmuhammad',
    href: 'https://github.com/salmanmuhammad',
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-divider reveal">
          <span className="section-label">// SECTION_05 — CONTACT</span>
        </div>

        <div className="contact-inner">
          <div className="reveal">
            <h2 className="contact-headline">
              Currently open to<br />
              <span>senior backend</span><br />
              roles.
            </h2>
            <p className="contact-sub">
              Looking for opportunities where I can work on systems with real scale
              challenges — teams that care about architecture, not just shipping features.
            </p>
            <a href="mailto:hello@salmanmuhammad.dev" className="btn-primary">
              Send an Email
            </a>
          </div>

          <div className="contact-links reveal">
            {contactLinks.map(({ label, value, href, external }) => (
              <a
                key={label}
                href={href}
                className="contact-link"
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className="contact-link__label">{label}</span>
                <span className="contact-link__value">{value}</span>
                <span className="contact-link__arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
