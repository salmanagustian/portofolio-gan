import { useState } from 'react';

const EMAIL = 'salmanmuhammad1976@gmail.com';

const contactLinks = [
  { label: 'Email',    value: EMAIL,                         href: `mailto:${EMAIL}`,                          copyable: true },
  { label: 'LinkedIn', value: 'linkedin.com/in/salmanagustian', href: 'https://www.linkedin.com/in/salmanagustian/', external: true },
  { label: 'GitHub',   value: 'github.com/salmanagustian',   href: 'https://github.com/salmanagustian',        external: true },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="section-bg-surface">
      <div className="container">
        <div className="section-divider reveal">
          <span className="dim-tick" aria-hidden="true" />
          <span className="section-label">05 / CONTACT</span>
          <span className="dim-tick" aria-hidden="true" />
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
            <a href={`mailto:${EMAIL}`} className="btn-primary">
              Send an Email
            </a>
          </div>

          <div className="contact-links reveal">
            <p className="contact-links-label">// CONTACT_ENDPOINTS</p>
            {contactLinks.map(({ label, value, href, external, copyable }) => (
              <div key={label} className="contact-link-row">
                <a
                  href={href}
                  className="contact-link"
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className="contact-link__label">{label}</span>
                  <span className="contact-link__value">{value}</span>
                  <span className="contact-link__arrow">→</span>
                </a>
                {copyable && (
                  <button className="copy-btn" onClick={handleCopy} aria-label="Copy email address">
                    {copied ? 'COPIED' : 'COPY'}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
