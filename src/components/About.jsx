import meLineImg from '../assets/me-line-2.png';
import iconDota from '../assets/icon-dota.png';
import iconCalisthenics from '../assets/icon-calisthenics.png';
import iconTerminal from '../assets/icon-terminal.png';

export default function About() {
  const facts = [
    { label: 'Location',  value: 'Bandung, Indonesia' },
    { label: 'Stack',     value: 'Node.js / NestJS' },
    { label: 'Domains',   value: 'Gaming · Healthcare · Fintech · EdTech' },
    { label: 'Experience', value: '6+ Years' },
    { label: 'Projects',  value: '10+ shipped' },
    { label: 'Users',     value: '500K+' },
    { label: 'Status',    value: 'Open to Roles', accent: true },
  ];

  return (
    <section id="about">
      <div className="container">
        <div className="section-divider reveal">
          <span className="dim-tick" aria-hidden="true" />
          <span className="section-label">02 / ABOUT</span>
          <span className="dim-tick" aria-hidden="true" />
        </div>
        <h2 className="section-title reveal">About <span>me.</span></h2>

        <div className="about-grid reveal-group">
          <div className="about-col-left reveal">
            <div className="about-portrait">
              <div className="about-portrait__frame">
                <span className="bracket bracket--tl" aria-hidden="true" />
                <span className="bracket bracket--tr" aria-hidden="true" />
                <span className="bracket bracket--bl" aria-hidden="true" />
                <span className="bracket bracket--br" aria-hidden="true" />
                <img src={meLineImg} alt="Portrait of Salman" className="about-portrait__img" />
                <span className="about-portrait__label">M SALMAN AGUSTIAN //</span>
                <div className="about-hobby-icons">
                  <img src={iconDota} alt="Dota 2" className="about-hobby-icon" />
                  <div className="about-hobby-icons__right">
                    <img src={iconCalisthenics} alt="Calisthenics" className="about-hobby-icon" />
                    <img src={iconTerminal} alt="Terminal" className="about-hobby-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-col-right reveal">
            <div className="about-bio">
              <p className="about-text">
                Outside of work: DotA, calisthenics, design, and a recent obsession with <span className="about-nvim">Neovim</span>.
                The common thread is probably one word — <strong>Improve</strong>. Drawn to things
                where the ceiling is high and progress is honest.
              </p>
              <p className="about-text">
                That instinct carries into the work. I specialize in{' '}
                <strong>real-time and event-driven architectures</strong> — systems where consistency
                matters more than cleverness. I&apos;ve shipped across gaming, healthcare,
                fintech, and EdTech — each domain with its own constraints and its own lessons.
              </p>
            </div>

            <div className="section-divider about-divider" aria-hidden="true">
              <span className="dim-tick" />
              <span className="dim-tick" />
            </div>

            <div className="about-facts">
              {facts.map(({ label, value, accent }) => (
                <div className="fact-row" key={label}>
                  <span className="fact-label">{label}</span>
                  <span className={accent ? 'fact-value fact-value--accent' : 'fact-value'}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
