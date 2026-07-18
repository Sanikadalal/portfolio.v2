const accent = '#F9A66C';

const posts = [
  {
    title: 'JWT Finally Made Sense',
    description: 'Breaking down JSON Web Tokens in a way that actually clicks.',
    date: 'June 2025',
    readTime: '5 min read',
    img: '/blog1.jpg',
    mediumUrl: 'https://medium.com/@sanikadalal3/jwt-finally-made-sense-c89cd45d46ac',
  },
  {
    title: 'RAG Explained Without Buzzwords',
    description: 'Retrieval-Augmented Generation — what it actually is and why it matters.',
    date: 'Coming Soon',
    readTime: '',
    img: '/blog2.svg',
    mediumUrl: '',
    comingSoon: true,
  },
];

const fallbackGradients = [
  'linear-gradient(145deg, #F9A66C 0%, #F17A7E 100%)',
  'linear-gradient(145deg, #667eea 0%, #764ba2 100%)',
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 md:py-24 px-6 md:px-20">
      <style>{`
        .blog-card {
          border-radius: 1.5rem;
          overflow: hidden;
          display: block;
          text-decoration: none;
          background: #111;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 4px 24px rgba(0,0,0,0.12);
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease, border-color 0.3s ease;
        }
        .blog-card:hover {
          transform: translateY(-8px);
          border-color: rgba(249,166,108,0.45);
          box-shadow: 0 24px 60px rgba(249,166,108,0.22);
        }
        .blog-card-img img {
          transition: transform 0.5s ease;
        }
        .blog-card:hover .blog-card-img img {
          transform: scale(1.06);
        }
        .blog-card-title {
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          line-height: 1.3;
          margin-bottom: 6px;
          letter-spacing: -0.01em;
          transition: color 0.3s ease;
        }
        .blog-card:hover .blog-card-title {
          color: #F9A66C !important;
        }
        .blog-card-desc {
          font-size: 12px;
          color: rgba(255,255,255,0.45);
          line-height: 1.5;
          margin-bottom: 12px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: color 0.3s ease;
        }
        .blog-card-read {
          font-size: 12px;
          font-weight: 700;
          color: #F9A66C;
          display: inline-block;
          transition: transform 0.3s ease, letter-spacing 0.3s ease;
        }
        .blog-card:hover .blog-card-read {
          transform: translateX(5px);
          letter-spacing: 0.03em;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <p style={{ fontFamily: '"Caveat", cursive', fontSize: 'clamp(14px, 2.5vw, 18px)', color: '#888', marginBottom: 10, letterSpacing: '0.02em' }}>
            thoughts & learnings ✦
          </p>
          <h2 className="font-bold text-gray-900 leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', letterSpacing: '-0.02em' }}>
            From the{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>blog ✦</em>
          </h2>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 28, maxWidth: 820, margin: '0 auto' }}>
          {posts.map((post, idx) => (
            <a
              key={idx}
              href={post.comingSoon ? undefined : (post.mediumUrl || '#')}
              target={post.mediumUrl && !post.comingSoon ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="blog-card"
              style={{ opacity: post.comingSoon ? 0.72 : 1, cursor: post.comingSoon ? 'default' : 'pointer', pointerEvents: post.comingSoon ? 'none' : 'auto' }}
            >
              {/* Image */}
              <div className="blog-card-img" style={{
                height: 260,
                background: post.img ? 'transparent' : fallbackGradients[idx],
                overflow: 'hidden',
                position: 'relative',
              }}>
                {post.img && (
                  <img
                    src={post.img}
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                  />
                )}
                {post.comingSoon && (
                  <div style={{
                    position: 'absolute', top: 14, left: 14,
                    background: 'rgba(249,166,108,0.15)',
                    border: '1px solid rgba(249,166,108,0.4)',
                    borderRadius: '100px',
                    padding: '4px 12px',
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
                    textTransform: 'uppercase', color: '#F9A66C',
                  }}>Coming Soon</div>
                )}
              </div>

              {/* Info */}
              <div style={{ padding: '16px 20px 18px', background: '#111' }}>
                <p className="blog-card-title" style={{ color: '#fff' }}>{post.title}</p>
                <p className="blog-card-desc" style={{ color: 'rgba(255,255,255,0.45)' }}>{post.description}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: 11, color: post.comingSoon ? '#F9A66C' : 'rgba(255,255,255,0.35)', fontFamily: '"Caveat", cursive' }}>{post.date}</span>
                    {post.readTime && <>
                      <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)' }}>·</span>
                      <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontFamily: '"Caveat", cursive' }}>{post.readTime}</span>
                    </>}
                  </div>
                  {!post.comingSoon && <span className="blog-card-read">Read →</span>}
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
