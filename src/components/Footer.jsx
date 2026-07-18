import { useState, useEffect } from 'react';

export default function Footer() {
  const [hovered, setHovered] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="contact" className="relative overflow-hidden px-6 md:px-20 pt-16 md:pt-28 pb-12"
      style={{ background: '#fff' }}>

      {/* Fading divider line */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(249,166,108,0.4) 30%, rgba(249,166,108,0.4) 70%, transparent 100%)',
      }} />


      <div className="max-w-7xl mx-auto relative" style={{ zIndex: 1 }}>

        {/* Top: two-column CTA + form */}
        <div className="footer-top-grid mb-16">

          {/* Left: CTA */}
          <div>
            <p style={{
              fontFamily: '"Caveat", cursive',
              fontSize: 'clamp(14px, 2.5vw, 18px)',
              color: '#888',
              marginBottom: 16,
              letterSpacing: '0.02em',
            }}>
              got a project in mind? let's make it happen ✦
            </p>
            <a
              href="mailto:sanikadalal3@gmail.com"
              className="interactive"
              style={{
                display: 'inline-block',
                fontSize: 'clamp(1.8rem, 6vw, 6rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1,
                color: '#F9A66C',
                transition: 'color 0.6s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#F17A7E'}
              onMouseLeave={e => e.currentTarget.style.color = '#F9A66C'}
            >
              Let's Talk →
            </a>
            <p style={{ marginTop: 14, fontSize: 13, color: '#888', letterSpacing: '0.02em' }}>
              sanikadalal3@gmail.com
            </p>
          </div>

          {/* Right: message form */}
          <div className="contact-form-card" style={{
            background: '#faf8f5',
            border: '1px solid #f0ece8',
            borderRadius: '1.4rem',
            padding: '28px 28px 24px',
          }}>
            <p style={{
              fontFamily: '"Caveat", cursive',
              fontSize: 17,
              color: '#F9A66C',
              marginBottom: 16,
              letterSpacing: '0.02em',
            }}>drop me a message ✦</p>

            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={e => setName(e.target.value)}
              style={{
                width: '100%',
                background: '#fff',
                border: '1px solid #ede9e4',
                borderRadius: '0.75rem',
                padding: '12px 16px',
                fontSize: 14,
                color: '#333',
                outline: 'none',
                marginBottom: 12,
                boxSizing: 'border-box',
                fontFamily: 'Inter, sans-serif',
                transition: 'border-color 0.2s ease',
              }}
              onFocus={e => e.target.style.borderColor = '#F9A66C'}
              onBlur={e => e.target.style.borderColor = '#ede9e4'}
            />

            <textarea
              placeholder="What's on your mind?"
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={4}
              style={{
                width: '100%',
                background: '#fff',
                border: '1px solid #ede9e4',
                borderRadius: '0.75rem',
                padding: '12px 16px',
                fontSize: 14,
                color: '#333',
                outline: 'none',
                resize: 'none',
                marginBottom: 16,
                boxSizing: 'border-box',
                fontFamily: 'Inter, sans-serif',
                lineHeight: 1.6,
                transition: 'border-color 0.2s ease',
              }}
              onFocus={e => e.target.style.borderColor = '#F9A66C'}
              onBlur={e => e.target.style.borderColor = '#ede9e4'}
            />

            <a
              href={`mailto:sanikadalal3@gmail.com?subject=Hey from ${encodeURIComponent(name || 'your website')}&body=${encodeURIComponent(message)}`}
              className="interactive"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 24px',
                borderRadius: '100px',
                background: 'linear-gradient(135deg, #F9A66C, #F17A7E)',
                color: '#fff',
                fontSize: 13,
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(249,166,108,0.3)',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Send Message ✦
            </a>
          </div>

        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'linear-gradient(90deg, #F9A66C22, #F17A7E22, transparent)', marginBottom: 28 }} />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <a
              href="#"
              onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="interactive"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', position: 'relative', fontSize: 22, fontWeight: 800, color: '#1a1a1a', textDecoration: 'none' }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <span style={{
                position: 'absolute',
                inset: '-6px',
                borderRadius: '50%',
                background: '#111',
                opacity: hovered ? 0.08 : pulse ? 0.05 : 0,
                transform: hovered ? 'scale(1.3)' : pulse ? 'scale(1.15)' : 'scale(1)',
                transition: 'opacity 0.4s ease, transform 0.4s ease',
                pointerEvents: 'none',
              }} />
              <span className="footer-devanagari" style={{
                display: 'inline-block',
                transform: hovered ? 'scale(1.25) rotate(-8deg)' : pulse ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
                position: 'relative',
                zIndex: 1,
              }}>स</span>
            </a>
            <p style={{ fontSize: 12, color: '#888', letterSpacing: '0.04em' }}>
              © 2026 Sanika Dalal. All rights reserved.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            {[
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/sanikadalal03',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ),
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Sanikadalal',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                ),
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="interactive footer-social-icon"
                style={{
                  color: '#888',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease, transform 0.2s ease',
                  display: 'inline-flex',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#F9A66C'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#888'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
