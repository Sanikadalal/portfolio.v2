const accent = '#F9A66C';
const pink = '#F17A7E';

const posts = [
  {
    num: '01',
    title: 'Designing for Accessibility: What Most Designers Miss',
    description: 'A deep dive into how inclusive design principles can elevate your work and reach a wider audience without compromising aesthetics.',
    category: 'UX Design · Accessibility',
    date: 'June 2025',
    bg: 'linear-gradient(145deg, #F9A66C 0%, #F17A7E 100%)',
    textColor: '#fff',
  },
  {
    num: '02',
    title: 'From Figma to Print: Bridging the Digital–Physical Gap',
    description: 'Lessons learned from designing magazine layouts and how digital-first designers can think more intentionally about print production.',
    category: 'Visual Design · Print',
    date: 'April 2025',
    bg: 'linear-gradient(145deg, #667eea 0%, #764ba2 100%)',
    textColor: '#fff',
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <p style={{
            fontFamily: '"Caveat", cursive',
            fontSize: 'clamp(14px, 2.5vw, 18px)',
            color: '#888',
            marginBottom: 10,
            letterSpacing: '0.02em',
          }}>
            thoughts & learnings ✦
          </p>
          <h2 className="font-bold text-gray-900 leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', letterSpacing: '-0.02em' }}>
            From the{' '}
            <em style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: accent,
              fontStyle: 'italic',
              fontWeight: 400,
            }}>blog ✦</em>
          </h2>
        </div>

        {/* Cards grid — centered with max width for 2 cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24, maxWidth: 760, margin: '0 auto' }}>
          {posts.map((post) => (
            <div
              key={post.num}
              className="interactive"
              style={{
                borderRadius: '1.5rem',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease',
                boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.13)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.07)';
              }}
            >
              {/* Coloured top band */}
              <div style={{
                background: post.bg,
                padding: '28px 28px 24px',
                position: 'relative',
              }}>
                <span style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.65)',
                }}>{post.category}</span>

                <div style={{
                  position: 'absolute',
                  top: 20,
                  right: 24,
                  fontSize: 48,
                  fontWeight: 800,
                  color: 'rgba(255,255,255,0.12)',
                  lineHeight: 1,
                  fontVariantNumeric: 'tabular-nums',
                }}>{post.num}</div>

                <p style={{
                  marginTop: 36,
                  fontSize: 'clamp(15px, 2vw, 18px)',
                  fontWeight: 700,
                  color: post.textColor,
                  lineHeight: 1.35,
                  letterSpacing: '-0.01em',
                }}>{post.title}</p>
              </div>

              {/* White bottom */}
              <div style={{
                background: '#fff',
                padding: '20px 28px 24px',
              }}>
                <p style={{
                  fontSize: 13,
                  color: '#888',
                  lineHeight: 1.7,
                  marginBottom: 16,
                }}>{post.description}</p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{
                    fontSize: 12,
                    fontFamily: '"Caveat", cursive',
                    color: '#aaa',
                    letterSpacing: '0.04em',
                  }}>{post.date}</span>

                  <span style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: accent,
                    letterSpacing: '0.04em',
                  }}>Read more →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
