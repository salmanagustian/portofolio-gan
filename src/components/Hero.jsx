import { useEffect } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

export default function Hero() {
  const { displayed, done } = useTypewriter(
    '// BACKEND_ENGINEER / DISTRIBUTED_SYSTEMS',
    32,
    500
  );

  useEffect(() => {
    document.querySelectorAll('.svg-measure').forEach(el => {
      let len;
      const tag = el.tagName.toLowerCase();
      if (tag === 'rect') {
        const w = parseFloat(el.getAttribute('width') || 0);
        const h = parseFloat(el.getAttribute('height') || 0);
        len = Math.ceil(2 * (w + h));
      } else {
        len = Math.ceil(el.getTotalLength());
      }
      el.style.setProperty('--dash-len', len);
      el.style.strokeDasharray = len;
      el.style.strokeDashoffset = len;
    });
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-inner">

          <div className="hero-content">
            <p className="hero-text hero-annotation">
              {displayed}
              {done && <span className="typewriter-cursor" aria-hidden="true" />}
            </p>
            <h1 className="hero-text hero-name">
              Salman<br /><span>Agustian.</span>
            </h1>
            <p className="hero-text hero-title">
              Backend Engineer &amp; Technical Lead
            </p>
            <p className="hero-text hero-desc">
              Building the distributed systems and high-throughput APIs that modern
              platforms depend on. Node.js &amp; NestJS engineer with 5+ years shipping
              real-time, event-driven architectures for 500K+ users.
            </p>
            <div className="hero-text hero-cta">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="mailto:salmanmuhammad1976@gmail.com" className="btn-ghost">Get in Touch</a>
            </div>
          </div>

          <div className="hero-schematic">
            <svg
              viewBox="0 0 380 320"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              style={{ width: '100%', maxWidth: '420px' }}
              aria-label="System architecture diagram"
            >
              <defs>
                <pattern id="hgrid" width="24" height="24" patternUnits="userSpaceOnUse">
                  <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(26,58,107,0.45)" strokeWidth="0.5"/>
                </pattern>
                <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L6,3 z" fill="#7EC8E3" opacity="0.85"/>
                </marker>
                <marker id="arr-dim" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L6,3 z" fill="#6A8FA8" opacity="0.7"/>
                </marker>
              </defs>

              <rect width="380" height="320" fill="url(#hgrid)"/>

              {/* Outer frame */}
              <rect className="svg-draw svg-draw-d1 svg-measure" x="10" y="10" width="360" height="300"
                    stroke="#1A3A6B" strokeWidth="1"/>

              {/* Corner ticks */}
              <g stroke="#7EC8E3" strokeWidth="1" opacity="0.5">
                <line x1="10" y1="10" x2="22" y2="10"/><line x1="10" y1="10" x2="10" y2="22"/>
                <line x1="370" y1="10" x2="358" y2="10"/><line x1="370" y1="10" x2="370" y2="22"/>
                <line x1="10" y1="310" x2="22" y2="310"/><line x1="10" y1="310" x2="10" y2="298"/>
                <line x1="370" y1="310" x2="358" y2="310"/><line x1="370" y1="310" x2="370" y2="298"/>
              </g>

              {/* CLIENT */}
              <rect className="svg-draw svg-draw-d2 svg-measure" x="20" y="136" width="64" height="32"
                    stroke="#6A8FA8" strokeWidth="1"/>
              <text className="svg-fade svg-fade-d2" x="52" y="156"
                    fontFamily="'IBM Plex Mono',monospace" fontSize="8.5" fill="#6A8FA8"
                    textAnchor="middle" letterSpacing="0.08em">CLIENT</text>

              {/* CLIENT → API_GATEWAY */}
              <line className="svg-draw svg-draw-d3 svg-measure" x1="84" y1="152" x2="116" y2="152"
                    stroke="#7EC8E3" strokeWidth="1" markerEnd="url(#arr)"/>
              <text className="svg-fade svg-fade-d3" x="100" y="146" fontFamily="'IBM Plex Mono',monospace"
                    fontSize="7" fill="#7EC8E3" textAnchor="middle" letterSpacing="0.06em">HTTP/2</text>

              {/* API_GATEWAY */}
              <rect className="svg-draw svg-draw-d3 svg-measure" x="116" y="120" width="100" height="64"
                    stroke="#7EC8E3" strokeWidth="1.5"/>
              <text className="svg-fade svg-fade-d3" x="166" y="146" fontFamily="'IBM Plex Mono',monospace"
                    fontSize="8.5" fill="#C4E1F0" textAnchor="middle" letterSpacing="0.08em">API_GATEWAY</text>
              <text className="svg-fade svg-fade-d3" x="166" y="162" fontFamily="'IBM Plex Mono',monospace"
                    fontSize="7" fill="#6A8FA8" textAnchor="middle">NestJS v10</text>
              <circle className="svg-fade svg-fade-d3" cx="116" cy="152" r="3" fill="#0A1628" stroke="#7EC8E3" strokeWidth="1"/>
              <circle className="svg-fade svg-fade-d3" cx="216" cy="152" r="3" fill="#0A1628" stroke="#7EC8E3" strokeWidth="1"/>

              {/* API_GATEWAY → AUTH_SERVICE */}
              <line className="svg-draw svg-draw-d4 svg-measure" x1="166" y1="120" x2="166" y2="76"
                    stroke="#7EC8E3" strokeWidth="1" markerEnd="url(#arr)"/>
              <text className="svg-fade svg-fade-d4" x="178" y="100" fontFamily="'IBM Plex Mono',monospace"
                    fontSize="7" fill="#7EC8E3" letterSpacing="0.06em">JWT</text>

              {/* AUTH_SERVICE */}
              <rect className="svg-draw svg-draw-d4 svg-measure" x="116" y="40" width="100" height="36"
                    stroke="#7EC8E3" strokeWidth="1"/>
              <text className="svg-fade svg-fade-d4" x="166" y="62" fontFamily="'IBM Plex Mono',monospace"
                    fontSize="8.5" fill="#C4E1F0" textAnchor="middle" letterSpacing="0.08em">AUTH_SERVICE</text>

              {/* API_GATEWAY → MSG_BROKER */}
              <line className="svg-draw svg-draw-d4 svg-measure" x1="216" y1="152" x2="252" y2="152"
                    stroke="#7EC8E3" strokeWidth="1" markerEnd="url(#arr)"/>
              <text className="svg-fade svg-fade-d4" x="234" y="146" fontFamily="'IBM Plex Mono',monospace"
                    fontSize="7" fill="#7EC8E3" textAnchor="middle" letterSpacing="0.06em">gRPC</text>

              {/* MSG_BROKER */}
              <rect className="svg-draw svg-draw-d5 svg-measure" x="252" y="120" width="100" height="64"
                    stroke="#7EC8E3" strokeWidth="1.5"/>
              <text className="svg-fade svg-fade-d5" x="302" y="146" fontFamily="'IBM Plex Mono',monospace"
                    fontSize="8.5" fill="#C4E1F0" textAnchor="middle" letterSpacing="0.08em">MSG_BROKER</text>
              <text className="svg-fade svg-fade-d5" x="302" y="162" fontFamily="'IBM Plex Mono',monospace"
                    fontSize="7" fill="#6A8FA8" textAnchor="middle">Kafka</text>

              {/* MSG_BROKER → DATABASE */}
              <line className="svg-draw svg-draw-d6 svg-measure" x1="302" y1="184" x2="302" y2="224"
                    stroke="#7EC8E3" strokeWidth="1" markerEnd="url(#arr)"/>
              <text className="svg-fade svg-fade-d6" x="316" y="206" fontFamily="'IBM Plex Mono',monospace"
                    fontSize="7" fill="#7EC8E3" letterSpacing="0.06em">TCP</text>

              {/* API_GATEWAY → DATABASE (dashed) */}
              <path className="svg-draw svg-draw-d5 svg-measure"
                    d="M 166 184 L 166 254 L 252 254"
                    stroke="#6A8FA8" strokeWidth="1" strokeDasharray="4 3"
                    markerEnd="url(#arr-dim)"/>
              <text className="svg-fade svg-fade-d5" x="196" y="248" fontFamily="'IBM Plex Mono',monospace"
                    fontSize="7" fill="#6A8FA8" letterSpacing="0.06em">SQL/TCP</text>

              {/* DATABASE */}
              <rect className="svg-draw svg-draw-d6 svg-measure" x="252" y="224" width="100" height="60"
                    stroke="#7EC8E3" strokeWidth="1.5"/>
              <ellipse className="svg-fade svg-fade-d6" cx="302" cy="236" rx="38" ry="6"
                       stroke="#7EC8E3" strokeWidth="1" fill="none"/>
              <text className="svg-fade svg-fade-d6" x="302" y="262" fontFamily="'IBM Plex Mono',monospace"
                    fontSize="8.5" fill="#C4E1F0" textAnchor="middle" letterSpacing="0.08em">DATABASE</text>
              <text className="svg-fade svg-fade-d6" x="302" y="276" fontFamily="'IBM Plex Mono',monospace"
                    fontSize="7" fill="#6A8FA8" textAnchor="middle">PostgreSQL</text>

              {/* CACHE */}
              <rect className="svg-draw svg-draw-d7 svg-measure" x="84" y="240" width="72" height="32"
                    stroke="#6A8FA8" strokeWidth="1"/>
              <text className="svg-fade svg-fade-d7" x="120" y="260" fontFamily="'IBM Plex Mono',monospace"
                    fontSize="8.5" fill="#6A8FA8" textAnchor="middle" letterSpacing="0.08em">CACHE</text>
              <text className="svg-fade svg-fade-d7" x="120" y="272" fontFamily="'IBM Plex Mono',monospace"
                    fontSize="7" fill="#6A8FA8" textAnchor="middle">Redis</text>
              <line className="svg-draw svg-draw-d7 svg-measure" x1="166" y1="256" x2="156" y2="256"
                    stroke="#6A8FA8" strokeWidth="1" markerEnd="url(#arr-dim)"/>

              {/* Title block */}
              <rect className="svg-fade svg-fade-d7" x="18" y="276" width="58" height="26"
                    stroke="#1A3A6B" strokeWidth="1" fill="rgba(10,22,40,0.85)"/>
              <text className="svg-fade svg-fade-d7" x="47" y="287" fontFamily="'IBM Plex Mono',monospace"
                    fontSize="6" fill="#6A8FA8" textAnchor="middle" letterSpacing="0.1em">SYS.ARCH</text>
              <text className="svg-fade svg-fade-d7" x="47" y="297" fontFamily="'IBM Plex Mono',monospace"
                    fontSize="6" fill="#6A8FA8" textAnchor="middle" letterSpacing="0.08em">REV.01/2024</text>
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}
