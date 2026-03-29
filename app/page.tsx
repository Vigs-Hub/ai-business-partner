export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-badge">◆ AI Business Partner — Australia</div>
        <h1>
          More Leads.<br />
          Better <span className="accent">Systems.</span><br />
          Real Support.
        </h1>
        <p className="hero-sub">
          AI Business Partner gives your business the marketing system, SEO system, 
          backend support, and up to 20 hours per month of practical help — 
          all in one structured, focused package.
        </p>
        <div className="hero-cta">
          <a href="/apply" className="btn btn-primary btn-lg">Get Started</a>
          <a href="/how-it-works" className="btn btn-secondary btn-lg">See How It Works</a>
        </div>
        <p className="hero-meta">
          Done with you. Done for you. Flexible support that scales with your business.
        </p>
      </section>

      {/* Pain Strip */}
      <section className="pain-strip">
        <div className="container">
          <div className="pain-grid">
            {[
              'Leads are inconsistent',
              'Follow-up gets missed',
              'SEO is ignored',
              'Marketing lacks structure',
              'Backend support is weak',
              'Systems do not get used',
            ].map(p => (
              <div key={p} className="pain-item">
                <span className="icon">✕</span>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Big Value Proposition */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <p className="section-label">The Problem With Most Businesses</p>
            <h2 className="section-title">
              Most businesses do not need more random tools.<br />
              They need a <span className="text-accent">working system</span>.
            </h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              You need the marketing system that captures and follows up leads properly. 
              The SEO system that builds visibility and authority. Backend support that keeps 
              things moving. And practical monthly help that makes sure it does not stall.
            </p>
          </div>

          <div className="card-grid">
            {[
              {
                icon: '📣',
                title: 'Marketing System',
                desc: 'A structured system that captures, manages, and follows up leads properly — so nothing falls through the cracks.'
              },
              {
                icon: '🔍',
                title: 'SEO System',
                desc: 'A system that improves your visibility, builds organic authority, and generates a steady flow of inbound leads.'
              },
              {
                icon: '⚙️',
                title: 'Backend Support',
                desc: 'The support layer that keeps things moving behind the scenes — so the systems are actually used properly.'
              },
              {
                icon: '🕐',
                title: 'Up to 20 Hours Per Month',
                desc: 'Practical monthly help to move work forward, support the systems, and reduce the drag inside the business.'
              },
            ].map(card => (
              <div key={card.title} className="card">
                <div className="card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Done With / Done For */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <p className="section-label">Flexible Delivery</p>
            <h2 className="section-title">Not one rigid service model.</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Some businesses want more done for them. Others want to stay hands-on and 
              have support alongside them. AI Business Partner works as a mix — 
              depending on what suits your business.
            </p>
          </div>
          <div className="model-split">
            <div className="model-box">
              <h3>Done For You</h3>
              <p>We handle the marketing systems, SEO work, backend tasks, and execution — 
              so you can focus on your business. We build it, run it, and keep it moving.</p>
            </div>
            <div className="model-box">
              <h3>Done With You</h3>
              <p>We support you while you stay more hands-on. We set up the systems, 
              train you on them, and provide the monthly support to help you run it properly.</p>
            </div>
          </div>
          <div className="text-center mt-3">
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Support can be <strong style={{ color: 'var(--accent)' }}>increased or reduced</strong> depending on availability, budget, and growth stage.
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Who This Is For */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header text-center">
            <p className="section-label">Who This Is For</p>
            <h2 className="section-title">Built for operators who need results.</h2>
          </div>
          <div className="who-grid">
            {[
              { icon: '🏗️', text: 'Trades Businesses' },
              { icon: '🔧', text: 'Service Businesses' },
              { icon: '📈', text: 'Growth-Stage SMEs' },
              { icon: '🎯', text: 'Operators Who Need More Leads' },
              { icon: '🧭', text: 'Businesses That Want Systems + Support' },
              { icon: '⚡', text: 'Businesses Scaling Without a Big Team' },
            ].map(item => (
              <div key={item.text} className="who-card">
                <span className="icon">{item.icon}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Outcomes */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">What You Get</p>
            <h2 className="section-title">Outcomes that actually matter.</h2>
            <p className="section-sub">
              More leads. Stronger follow-up. Better marketing structure. 
              Cleaner backend execution. Less operational drag.
            </p>
          </div>
          <div className="outcomes-grid">
            {[
              'More consistent leads',
              'Stronger follow-up process',
              'Better marketing structure',
              'Cleaner backend execution',
              'Improved SEO visibility',
              'Less admin and operational drag',
            ].map(o => (
              <div key={o} className="outcome-item">
                <span className="check">✓</span>
                <p>{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Objection Handling */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <p className="section-label">Not Just Another Agency</p>
            <h2 className="section-title">What this is. And what it is not.</h2>
          </div>
          <div className="objection-grid">
            {[
              'Not just software — we set up and run the systems',
              'Not just advice — we help execute and support',
              'Not just marketing — we handle the backend too',
              'Not a one-size-fits-all — flexible support that scales',
              'Not random tools — structured systems that work together',
              'Not a large team to manage — one partner focused on results',
            ].map(o => (
              <div key={o} className="objection-item">
                <span className="icon">◆</span>
                <p>{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Final CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Get the systems and support behind <span className="text-accent">more leads</span>.</h2>
          <p>
            If your business needs better lead generation, stronger SEO structure, 
            backend support, and practical monthly help to keep it moving — 
            AI Business Partner is built for that.
          </p>
          <div className="cta-buttons">
            <a href="/apply" className="btn btn-primary btn-lg">Apply Now</a>
            <a href="/how-it-works" className="btn btn-secondary btn-lg">Book a Call</a>
          </div>
        </div>
      </section>
    </main>
  )
}
