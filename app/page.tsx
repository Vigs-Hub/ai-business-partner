export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-badge">◆ AI Search Engine</div>
        <h1>
          AI Answers.<br />
          <span className="gradient">Real-Time Results.</span><br />
          Citations Included.
        </h1>
        <p className="hero-sub">
          AISEOsearch combines the intelligence of AI with the accuracy of live web data.
          Get instant answers with transparent citations — no more guessing where the information comes from.
        </p>
        <div className="hero-cta">
          <a href="/pricing" className="btn btn-primary btn-lg">Start Free</a>
          <a href="/how-it-works" className="btn btn-secondary btn-lg">How It Works</a>
        </div>

        {/* Search Demo */}
        <div className="search-demo">
          <div className="search-box">
            <span className="icon">◎</span>
            <input type="text" placeholder="Ask anything..." />
            <button className="btn btn-primary btn-sm">Search</button>
          </div>
          <div className="search-tags">
            {['Latest SEO trends 2026', 'How does AI search work', 'Best AI tools for content', 'Compare AI search engines', 'Real-time data in AI'].map(tag => (
              <span key={tag} className="search-tag">{tag}</span>
            ))}
          </div>
        </div>

        <p className="hero-meta">
          Free to use. No credit card required.
        </p>
      </section>

      <div className="divider" />

      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <p className="section-label">Why AISEOsearch</p>
            <h2 className="section-title">Search that actually <span className="text-accent">answers</span> questions.</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Most AI search tools give you outdated summaries. AISEOsearch pulls live data 
              from across the web and shows you exactly where every fact comes from.
            </p>
          </div>

          <div className="feature-grid">
            {[
              {
                icon: '◎',
                title: 'Real-Time Web Results',
                desc: 'Every answer is grounded in current web data — not outdated training data. You get what is happening right now, not what was true six months ago.'
              },
              {
                icon: '§',
                title: 'Full Citations',
                desc: 'Every claim, statistic, and fact is cited with a direct link to the source. Click any citation to verify the information yourself.'
              },
              {
                icon: '◉',
                title: 'SEO Intelligence',
                desc: 'Built with SEO in mind — results include authority signals, content freshness, and relevance scores so you know the quality of what you are reading.'
              },
              {
                icon: '◈',
                title: 'Multi-Source Synthesis',
                desc: 'We pull from multiple authoritative sources and synthesise them into a single, coherent answer — saving you hours of manual research.'
              },
              {
                icon: '◐',
                title: 'Follow-Up Questions',
                desc: 'Drill deeper into any answer with follow-up questions. The context carries through so you do not have to repeat yourself.'
              },
              {
                icon: '◇',
                title: 'Privacy First',
                desc: 'No tracking, no personalisation bubbles, no data selling. Your searches are yours — we do not build profiles on our users.'
              },
            ].map(f => (
              <div key={f.title} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* How It Works Preview */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header text-center">
            <p className="section-label">Simple</p>
            <h2 className="section-title">Three steps to <span className="text-accent">better answers</span>.</h2>
          </div>
          <div className="steps-grid" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              { n: '1', title: 'Ask a Question', desc: 'Type any question in natural language — as specific or broad as you like.' },
              { n: '2', title: 'Get an Answer', desc: 'Receive an AI-powered answer drawn from real-time web sources with full citations.' },
              { n: '3', title: 'Verify or Deepen', desc: 'Click citations to verify, or ask follow-up questions to go deeper.' },
            ].map(s => (
              <div key={s.n} className="step">
                <div className="step-number">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-3">
            <a href="/how-it-works" className="btn btn-secondary">See Full Details</a>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Use Cases */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <p className="section-label">Use Cases</p>
            <h2 className="section-title">Built for <span className="text-accent">real research</span>.</h2>
          </div>
          <div className="feature-grid">
            {[
              { icon: '◎', title: 'Content Research', desc: 'Find current data, statistics, and trends for your content — with sources you can actually cite.' },
              { icon: '◎', title: 'SEO Analysis', desc: 'Understand what is ranking, why pages rank, and what content strategies are working right now.' },
              { icon: '◎', title: 'Competitive Research', desc: 'Get real-time intelligence on competitors — their strategy, positioning, and recent activity.' },
              { icon: '◎', title: 'Market Intelligence', desc: 'Monitor market shifts, emerging trends, and industry developments as they happen.' },
              { icon: '◎', title: 'Technical Research', desc: 'Deep-dive technical questions with sources from documentation, forums, and expert communities.' },
              { icon: '◎', title: 'Academic Research', desc: 'Find peer-reviewed sources, statistics, and expert analysis — all with verifiable citations.' },
            ].map(c => (
              <div key={c.title} className="feature-card">
                <div className="feature-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready for <span className="text-accent">search that works</span>?</h2>
          <p>Join thousands of researchers, content creators, and marketers who use AISEOsearch every day.</p>
          <div className="cta-buttons">
            <a href="/pricing" className="btn btn-primary btn-lg">Start Free</a>
            <a href="/pricing" className="btn btn-secondary btn-lg">Try Pro — $19.99/mo</a>
          </div>
        </div>
      </section>
    </main>
  )
}
