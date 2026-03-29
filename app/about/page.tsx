export default function About() {
  return (
    <main>
      <section className="hero" style={{ minHeight: '50vh', paddingBottom: '3rem' }}>
        <div className="hero-badge">About</div>
        <h1>
          We got tired of<br />
          <span className="gradient">bad AI search.</span>
        </h1>
        <p className="hero-sub">
          Most AI search tools give outdated answers, no sources, and no way to verify anything. 
          We decided to build something better.
        </p>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="section-header">
                <p className="section-label">Our Story</p>
                <h2 className="section-title">Built by researchers, <br />for researchers.</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                We started AISEOsearch because we kept running into the same problem: 
                AI search tools give confident-sounding answers that are factually wrong, 
                outdated, or impossible to verify.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                We needed a tool that combines the intelligence of AI with the accuracy 
                of real-time web data — and shows its work. Every answer, every time.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                That is what AISEOsearch is. AI-powered answers grounded in live web 
                sources, with full citations so you always know where the information comes from.
              </p>
            </div>
            <div>
              <div className="feature-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                {[
                  { n: 'Real-Time', desc: 'Live web data on every query, not stale training data.' },
                  { n: 'Transparent', desc: 'Full citations on every answer — no black box AI.' },
                  { n: 'SEO-First', desc: 'Built with SEO intelligence for search professionals.' },
                  { n: 'Privacy Safe', desc: 'No tracking, no profiling, no data selling.' },
                ].map(f => (
                  <div key={f.n} className="feature-card" style={{ textAlign: 'center' }}>
                    <h3 style={{ fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>{f.n}</h3>
                    <p style={{ fontSize: '0.85rem' }}>{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Mission */}
      <section className="section">
        <div className="container" style={{ maxWidth: '700px' }}>
          <div className="section-header text-center">
            <p className="section-label">Our Mission</p>
            <h2 className="section-title">Make AI search <span className="text-accent">trustworthy</span>.</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', textAlign: 'center' }}>
            We believe AI should augment human intelligence, not replace it with confident-sounding guesses. 
            Every answer AISEOsearch delivers is grounded in verifiable, live data — because trust is earned, 
            not assumed.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Try AISEOsearch <span className="text-accent">today</span>.</h2>
          <p>Free to start. No credit card required.</p>
          <div className="cta-buttons">
            <a href="/pricing" className="btn btn-primary btn-lg">Start Free</a>
            <a href="/contact" className="btn btn-secondary btn-lg">Get in Touch</a>
          </div>
        </div>
      </section>
    </main>
  )
}
