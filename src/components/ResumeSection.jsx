import { useTheme } from '../context/ThemeContext';

const accent = '#F9A66C';
const pink   = '#F17A7E';

const experience = [
  { title: 'Software Engineer', place: 'Capgemini', period: '2025 – Present', type: 'work' },
  { title: 'Backend Development Intern', place: 'InnoTech Innovations', period: '2024', type: 'work' },
  { title: 'Bachelor of Computer Engineering', place: 'Sinhgad College of Engineering', period: '2022 – 2025', type: 'edu' },
  { title: 'Diploma in Computer Technology', place: 'Government Polytechnic, Nashik', period: '2019 – 2022', type: 'edu' },
];

const BriefcaseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    <line x1="12" y1="12" x2="12" y2="12"/>
    <path d="M2 12h20"/>
  </svg>
);

const GradCapIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
  </svg>
);

export default function ResumeSection() {
  const { isDark } = useTheme();

  const bg         = isDark ? '#0f0f0f' : '#ffffff';
  const cardBg     = '#111111';
  const cardBorder = 'rgba(255,255,255,0.07)';
  const titleColor = '#ffffff';
  const subColor   = 'rgba(255,255,255,0.4)';
  const divider    = isDark ? 'rgba(255,255,255,0.1)' : '#f0ece8';
  const ringColor  = isDark ? '#0f0f0f' : '#ffffff';

  return (
    <section className="py-16 md:py-24 px-6 md:px-20" style={{ background: bg, transition: 'background 0.3s ease' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-bold leading-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', color: titleColor }}>
            Here's a{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", color: accent, fontStyle: 'italic', fontWeight: 400 }}>
              quick look ✦
            </em>
          </h2>
          <p style={{ fontFamily: '"Caveat", cursive', fontSize: 'clamp(14px, 2.5vw, 18px)', color: subColor, letterSpacing: '0.02em' }}>
            if you haven't gone through my resume yet —
          </p>
        </div>

        {/* Section label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
          <div style={{ flex: 1, height: 1, background: divider }} />
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: accent, whiteSpace: 'nowrap' }}>
            Experience
          </p>
          <div style={{ flex: 1, height: 1, background: divider }} />
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: 44 }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: 15, top: 8, bottom: 8, width: 2,
            background: 'linear-gradient(to bottom, #F9A66C, #F17A7E)',
            borderRadius: 2, opacity: 0.25,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {experience.map((item, i) => (
              <div key={i} style={{ position: 'relative' }}>
                {/* Icon badge */}
                <div style={{
                  position: 'absolute', left: -44, top: '50%', transform: 'translateY(-50%)',
                  width: 32, height: 32, borderRadius: '50%',
                  background: item.type === 'work'
                    ? `linear-gradient(135deg, ${accent}, ${pink})`
                    : 'linear-gradient(135deg, #667eea, #764ba2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff',
                  boxShadow: `0 0 0 3px ${ringColor}, 0 0 0 4px rgba(249,166,108,0.2)`,
                  flexShrink: 0,
                  transition: 'box-shadow 0.3s ease',
                }}>
                  {item.type === 'work' ? <BriefcaseIcon /> : <GradCapIcon />}
                </div>

                {/* Card */}
                <div style={{
                  background: cardBg,
                  borderRadius: '1rem',
                  padding: '18px 22px',
                  border: `1px solid ${cardBorder}`,
                  transition: 'background 0.3s ease, border-color 0.3s ease',
                }}>
                  <p style={{ fontSize: 15, fontWeight: 700, color: titleColor, marginBottom: 5, transition: 'color 0.3s ease' }}>
                    {item.title}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 12px', alignItems: 'center' }}>
                    <p style={{ fontSize: 13, color: subColor }}>{item.place}</p>
                    <span style={{ color: isDark ? '#444' : '#ddd', fontSize: 12 }}>·</span>
                    <p style={{
                      fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
                      color: item.type === 'work' ? accent : '#764ba2',
                    }}>{item.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
