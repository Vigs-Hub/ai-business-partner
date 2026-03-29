export default function Pricing() {
  return (
    <main>
      <section className="hero" style={{ minHeight: '50vh', paddingBottom: '3rem' }}>
        <div className="hero-badge">Pricing</div>
        <h1>
          Simple pricing.<br />
          <span className="gradient">No surprises.</span>
        </h1>
        <p className="hero-sub">
          Start free and upgrade when you need more. No long-term contracts.
        </p>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="pricing-grid">
            {/* Free */}
            <div className="pricing-card">
              <h3>Free</h3>
              <div className="price">$0<span>/month</span></div>
              <p className="desc">Perfect for occasional research and discovery.</p>
              <ul className="pricing-features">
                {[
                  '10 searches per day',
                  'Real-time web results',
                  'Standard citations',
                  'Basic SEO signals',
                  'Follow-up questions',
                  'Email support',
                ].map(f => (
                  <li key={f}><span className="check">✓</span> {f}</li>
                ))}
              </ul>
              <a href="#" className="btn btn-secondary" style={{ width: '100%' }}>Start Free</a>
            </div>

            {/* Pro */}
            <div className="pricing-card featured">
              <span className="pricing-badge">Most Popular</span>
              <h3>Pro</h3>
              <div className="price">$19.99<span>/month</span></div>
              <p className="desc">For researchers, content creators, and professionals.</p>
              <ul className="pricing-features">
                {[
                  'Unlimited searches',
                  'Real-time web results',
                  'Priority processing',
                  'Advanced SEO intelligence',
                  'Full citation analytics',
                  'Export results to PDF',
                  'API access (coming soon)',
                  'Priority email support',
                ].map(f => (
                  <li key={f}><span className="check">✓</span> {f}</li>
                ))}
              </ul>
              <a href="#" className="btn btn-primary" style={{ width: '100%' }}>Try Pro — $19.99/mo</a>
              <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Or $149/year (save $91)
              </p>
            </div>
          </div>

          <div className="text-center mt-3">
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              All plans include real-time search, citations, and follow-up questions.
              <br />
              No credit card required for free tier.
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '700px' }}>
          <div className="section-header">
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Common questions.</h2>
          </div>
          {[
            { q: 'Do I need an account to start?', a: 'The free tier works without an account — just start searching. Creating an account saves your search history and preferences.' },
            { q: 'What counts as a search?', a: 'Each question you ask counts as one search, whether it takes 10 seconds or 10 minutes to answer.' },
            { q: 'Can I cancel anytime?', a: 'Yes. Cancel anytime from your account settings. No cancellation fees or notice periods.' },
            { q: 'What happens if I hit the free limit?', a: 'You will see a message when you hit your daily limit. Upgrade to Pro for unlimited searches.' },
            { q: 'Is my data used for training?', a: 'No. Your searches are never used to train our AI models. Your data stays yours.' },
          ].map((faq, i) => (
            <div key={i} className="faq-item">
              <div className="faq-question" style={{ cursor: 'default', pointerEvents: 'none' }}>
                {faq.q}
              </div>
              <div className="faq-answer">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Start searching <span className="text-accent">smarter</span> today.</h2>
          <p>Free to start. Upgrade when you need more.</p>
          <div className="cta-buttons">
            <a href="/" className="btn btn-primary btn-lg">Try Free</a>
            <a href="/affiliate" className="btn btn-secondary btn-lg">Join Affiliate Program</a>
          </div>
        </div>
      </section>
    </main>
  )
}
