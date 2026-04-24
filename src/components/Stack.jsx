import { stackCols, proficiency } from '../data/stack';

export default function Stack() {
  return (
    <section id="stack">
      <div className="container">
        <div className="section-divider reveal">
          <span className="section-label">// SECTION_03 — TECH_STACK</span>
        </div>
        <h2 className="section-title reveal">Technology <span>spec sheet.</span></h2>

        <div className="stack-diagram-wrapper">
          <div className="stack-grid reveal-group">
            {stackCols.map(col => (
              <div className="stack-col reveal" key={col.header}>
                <div className="stack-col-header">{col.header}</div>
                <div className="stack-items">
                  {col.items.map(item => {
                    const cls = [
                      'stack-item',
                      item.variant === 'primary' ? 'stack-item--primary' : 'stack-item--secondary',
                      item.featured ? 'stack-item--featured' : '',
                    ].filter(Boolean).join(' ');
                    return (
                      <span className={cls} key={item.label}>{item.label}</span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="stack-proficiency reveal">
            <p className="stack-prof-label">// PROFICIENCY_INDEX</p>
            <div className="prof-bars">
              {proficiency.map(({ name, pct }) => (
                <div className="prof-row" key={name}>
                  <span className="prof-name">{name}</span>
                  <div className="prof-track">
                    <div className="prof-fill" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="prof-pct">{pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
