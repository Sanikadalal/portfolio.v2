import { useNavigate } from 'react-router-dom';

const projects = [
  {
    title: 'Linkora',
    description: 'A secure URL shortening platform that enables users to create, manage, and track shortened links with real-time analytics and authentication.',
    tech: ['Spring Boot', 'JWT', 'PostgreSQL', 'React'],
    github: 'https://github.com/Sanikadalal/url-shortener',
    url: 'https://url-shortener-dusky-two.vercel.app/',
    num: '01',
  },
  {
    title: 'IdeaMe',
    description: 'An AI-powered platform that helps YouTubers discover personalized video ideas based on their channel history, niche, audience, and content trends.',
    tech: ['Next.js', 'Spring Boot', 'Gemini API', 'PostgreSQL'],
    github: 'https://github.com/Sanikadalal/idea-me',
    url: 'https://github.com/Sanikadalal/idea-me',
    num: '02',
  },
  {
    title: 'contaqo-api',
    description: 'A secure contact management API that enables users to create, organize, and manage contacts with JWT-based authentication and RESTful endpoints.',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'REST API'],
    github: 'https://github.com/Sanikadalal/contaqo-api',
    url: 'https://github.com/Sanikadalal/contaqo-api',
    num: '03',
  },
  {
    title: 'Sofy',
    description: 'A comprehensive UI/UX design system built for a modern consumer product brand.',
    tech: ['Design System', 'Figma'],
    github: '',
    url: '/work/sofy',
    num: '04',
  },
];

const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const GlobeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

export default function AboutSection() {
  const navigate = useNavigate();

  return (
    <section id="work" className="py-12 md:py-20 px-6 md:px-20" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-bold text-gray-900 leading-tight mb-3"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 4rem)' }}>
            Selected{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: '#F9A66C', fontStyle: 'italic', fontWeight: 400 }}>
              Work ✦
            </em>
          </h2>
          <p style={{ fontFamily: '"Caveat", cursive', fontSize: 'clamp(14px, 2.5vw, 18px)', color: '#888', letterSpacing: '0.02em' }}>
            a few things i've built and designed
          </p>
        </div>

        {/* 2-column grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))', gap: 24 }}>
          {projects.map((p) => (
            <div
              key={p.num}
              className="interactive"
              style={{
                background: '#111',
                borderRadius: '1.5rem',
                padding: '32px',
                border: '1px solid rgba(255,255,255,0.07)',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)';
                e.currentTarget.style.borderColor = 'rgba(249,166,108,0.25)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
              }}
            >
              {/* Title */}
              <h3 style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 700, color: '#fff', lineHeight: 1.2, letterSpacing: '-0.02em', margin: 0 }}>
                {p.title}
              </h3>

              {/* Description */}
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>
                {p.description}
              </p>

              {/* Bottom row: tech stack + links */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 'auto', gap: 12 }}>
                {/* Tech stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {p.tech.map((t) => (
                    <span key={t} style={{
                      fontSize: 11, fontWeight: 600, letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding: '5px 12px',
                      borderRadius: '100px',
                      background: 'rgba(249,166,108,0.1)',
                      border: '1px solid rgba(249,166,108,0.2)',
                      color: '#F9A66C',
                    }}>{t}</span>
                  ))}
                </div>

                {/* Links — always visible */}
                <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                  {/* GitHub */}
                  <a
                    href={p.github || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive"
                    title="GitHub"
                    style={{
                      width: 30, height: 30, borderRadius: '50%',
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: p.github ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)',
                      transition: 'background 0.2s, color 0.2s',
                      textDecoration: 'none',
                      pointerEvents: p.github ? 'auto' : 'none',
                    }}
                    onMouseEnter={e => { if (p.github) { e.currentTarget.style.background = 'rgba(249,166,108,0.15)'; e.currentTarget.style.color = '#F9A66C'; }}}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = p.github ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)'; }}
                  >
                    <GitHubIcon />
                  </a>
                  {/* Vercel */}
                  <a
                    href={p.url || '#'}
                    target={p.url?.startsWith('/') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="interactive"
                    title="Live URL"
                    style={{
                      width: 30, height: 30, borderRadius: '50%',
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: p.url ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)',
                      transition: 'background 0.2s, color 0.2s',
                      textDecoration: 'none',
                      pointerEvents: p.url ? 'auto' : 'none',
                    }}
                    onMouseEnter={e => { if (p.url) { e.currentTarget.style.background = 'rgba(249,166,108,0.15)'; e.currentTarget.style.color = '#F9A66C'; }}}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = p.url ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)'; }}
                  >
                    <GlobeIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
