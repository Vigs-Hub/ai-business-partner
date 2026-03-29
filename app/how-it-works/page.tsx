export default function HowItWorks() {
  return (
    <main>
      <section className="hero" style={{ minHeight: '60vh', paddingBottom: '3rem' }}>
        <div className="hero-badge">How It Works</div>
        <h1>
          Simple structure.<br />
          <span className="accent">Flexible delivery.</span>
        </h1>
        <p className="hero-sub">
          We keep the model simple. You get the systems, the backend support, 
          and practical monthly help in one structured package — designed to generate 
          more leads and reduce the drag that slows businesses down.
        </p>
      </section>

      {/* Steps */}
      <section className="section">
        <div className="container">
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Set Up the Systems</h3>
              <p>We help establish the marketing system and SEO system so your business has stronger lead-generation foundations that actually work.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Add Backend Support</h3>
              <p>We add the backend support needed to help the systems run properly, keep follow-up moving, and reduce the support gaps behind the scenes.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Apply Monthly Support</h3>
              <p>You get up to 20 hours per month of practical help to move work forward, support the systems, and keep things progressing without the business grinding to a halt.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Why This Model Works */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <p className="section-label">Why This Model Works</p>
            <h2 className="section-title">Systems alone do not get results.<br />Advice alone does not get results.</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Support alone does not get results. The combination of system plus execution 
              plus ongoing support is what actually moves a business forward.
            </p>
          </div>
          <div className="card-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {[
              { title: 'System', desc: 'Structured marketing + SEO that captures, follows up, and generates leads consistently.', icon: '📣' },
              { title: 'Execution', desc: 'Backend support that runs the systems properly and keeps follow-up moving.', icon: '⚙️' },
              { title: 'Support', desc: 'Up to 20 hours per month of practical help to reduce drag and move work forward.', icon: '🕐' },
            ].map(c => (
              <div key={c.title} className="card" style={{ textAlign: 'center' }}>
                <div className="card-icon" style={{ margin: '0 auto 1rem' }}>{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Flexible Model */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="model-split">
            <div className="model-box">
              <h3>Done For You</h3>
              <p>We handle the marketing systems, SEO work, backend tasks, and execution — so you can focus on your business. We build it, run it, and keep it moving.</p>
            </div>
            <div className="model-box">
              <h3>Done With You</h3>
              <p>We support you while you stay more hands-on. We set up the systems, train you on them, and provide the monthly support to help you run it properly.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Scalable */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <p className="section-label">Scalable Support</p>
            <h2 className="section-title">Support that fits your business.</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Support can be adjusted up or down depending on:
            </p>
          </div>
          <div className="card-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {['Budget', 'Availability', 'Support Requirements', 'Growth Stage'].map((item, i) => (
              <div key={item} className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--accent)', marginBottom: '0.75rem', fontFamily: 'monospace' }}>{i + 1}</div>
                <h3 style={{ fontSize: '1rem' }}>{item}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-3">
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Start at the level that fits now. Adjust as your business grows and needs change.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to get <span className="text-accent">started</span>?</h2>
          <p>Apply now or book a call to see if AI Business Partner is right for your business.</p>
          <div className="cta-buttons">
            <a href="/apply" className="btn btn-primary btn-lg">Get Started</a>
            <a href="/faq" className="btn btn-secondary btn-lg">View FAQ</a>
          </div>
        </div>
      </section>
    </main>
  )
}
