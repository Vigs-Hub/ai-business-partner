export default function Affiliate() {
  return (
    <main>
      <section className="hero" style={{ minHeight: '50vh', paddingBottom: '3rem' }}>
        <div className="hero-badge">Affiliate Program</div>
        <h1>
          Earn while you<br />
          <span className="gradient">recommend smarter search.</span>
        </h1>
        <p className="hero-sub">
          Join the AISEOsearch affiliate program and earn commissions every month 
          your referrals use our Pro plan — and ongoing revenue as they stay.
        </p>
      </section>

      <section className="section">
        <div className="container">
          <div className="affiliate-grid">
            <div>
              <div className="section-header">
                <p className="section-label">Earn</p>
                <h2 className="section-title">30% recurring commission.</h2>
                <p className="section-sub">
                  You earn 30% of every Pro subscription your referrals pay — 
                  every month, for as long as they stay. Refer one Pro user and earn 
                  $5.97/month. Refer 50 and earn $298/month recurring.
                </p>
              </div>
              <div className="affiliate-stats">
                {[
                  { n: '30%', l: 'Recurring Commission' },
                  { n: '$5.97', l: 'Per Pro User / Month' },
                  { n: '$149', l: 'Per Annual Subscriber' },
                  { n: '∞', l: 'No Referral Caps' },
                ].map(s => (
                  <div key={s.l} className="stat-card">
                    <div className="number" style={{ fontSize: '1.5rem' }}>{s.n}</div>
                    <div className="label">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="form-card">
                <h2>Apply to Join</h2>
                <p className="sub">Tell us about yourself and how you plan to promote AISEOsearch.</p>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input type="text" placeholder="John Smith" required />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="form-group">
                    <label>Website / Platform</label>
                    <input type="text" placeholder="www.yourwebsite.com" />
                  </div>
                  <div className="form-group">
                    <label>How will you promote AISEOsearch?</label>
                    <textarea placeholder="Tell us about your audience and promotion strategy..." />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Apply Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <p className="section-label">How It Works</p>
            <h2 className="section-title">Simple to <span className="text-accent">get started</span>.</h2>
          </div>
          <div className="steps-grid" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              { n: '1', title: 'Apply', desc: 'Fill in the form and tell us about your platform or audience.' },
              { n: '2', title: 'Get Approved', desc: 'We review applications and approve within 1-2 business days.' },
              { n: '3', title: 'Get Your Link', desc: 'Receive a unique affiliate link to share with your audience.' },
              { n: '4', title: 'Earn Commission', desc: 'Get paid 30% recurring for every Pro subscriber you refer.' },
            ].map(s => (
              <div key={s.n} className="step">
                <div className="step-number">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Who It's For */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <p className="section-label">Who It's For</p>
            <h2 className="section-title">Perfect for <span className="text-accent">AI tool reviewers</span>.</h2>
          </div>
          <div className="feature-grid">
            {[
              { title: 'AI Tool Reviewers', desc: 'Content creators who review AI tools and want to monetise their audience with relevant product recommendations.' },
              { title: 'SEO Bloggers', desc: 'Bloggers covering SEO, search, and digital marketing who want a credible AI search product to recommend.' },
              { title: 'Tech Communities', desc: 'Community owners and moderators who want to offer members a smarter search tool plus revenue.' },
              { title: 'Newsletter Writers', desc: 'Writers who publish AI news and insights who can naturally recommend AISEOsearch to their subscribers.' },
            ].map(f => (
              <div key={f.title} className="feature-card">
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to start <span className="text-accent">earning</span>?</h2>
          <p>Apply now — approved within 1-2 business days.</p>
          <div className="cta-buttons">
            <a href="#apply" className="btn btn-primary btn-lg">Apply to Join</a>
          </div>
        </div>
      </section>
    </main>
  )
}
