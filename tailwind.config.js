export default {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:           '#0A1628',
        surface:      '#0F2040',
        'surface-2':  '#142850',
        accent:       '#7EC8E3',
        'accent-soft':'#C4E1F0',
        'accent-dim': 'rgba(126,200,227,0.12)',
        text:         '#E8F4F8',
        'text-muted': '#6A8FA8',
        border:       'rgba(126,200,227,0.25)',
        'grid-major': 'rgba(26,58,107,0.5)',
        'grid-minor': 'rgba(26,58,107,0.25)',
      },
      fontFamily: {
        display: ["'Space Grotesk'", 'sans-serif'],
        mono:    ["'IBM Plex Mono'", 'monospace'],
      },
      fontSize: {
        hero:       'clamp(40px, 5.5vw, 68px)',
        h2:         'clamp(28px, 3.5vw, 44px)',
        h3:         '20px',
        body:       '15px',
        label:      '12px',
        annotation: '10px',
      },
      spacing: {
        s1: '8px', s2: '16px', s3: '24px', s4: '32px',
        s5: '40px', s6: '48px', s8: '64px',
        s10: '80px', s12: '96px', s15: '120px',
      },
      maxWidth: { container: '1280px' },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.16, 1, 0.3, 1)',
        hover:  'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        fast: '200ms',
        base: '400ms',
        draw: '800ms',
      },
    },
  },
  plugins: [],
};
