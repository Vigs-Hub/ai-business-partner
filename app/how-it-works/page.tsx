export default function HowItWorks() {
  return (
    <main>
      <section className="hero" style={{ minHeight: '50vh', paddingBottom: '3rem' }}>
        <div className="hero-badge">How It Works</div>
        <h1>
          Search evolved.<br />
          <span className="gradient">Here's how it works.</span>
        </h1>
        <p className="hero-sub">
          AISEOsearch takes your question, searches the live web in real-time, 
          synthesises the results with AI, and delivers a complete answer — with citations.
        </p>
      </section>

      {/* Step by Step */}
      <section className="section">
        <div className="container">
          <div className="steps-grid" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {[
              { 
                n: '01', 
                title: 'Ask Your Question', 
                desc: 'Type any question in natural language. Be as specific or broad as you like — the more context you give, the better the answer.',
                detail: 'Example: "What are the latest SEO strategies that are working for e-commerce sites in 2026?"'
              },
              { 
                n: '02', 
                title: 'Real-Time Web Search', 
                desc: 'We search the live web in real-time — not cached data, not training cutoffs. We pull from news, blogs, forums, research papers, and authoritative databases.',
                detail: 'Our crawler scans thousands of sources per query to build a complete picture.'
              },
              { 
                n: '03', 
                title: 'AI Synthesis', 
                desc: 'Our AI processes the search results, identifies the most relevant and authoritative sources, and synthesises them into a coherent, accurate answer.',
                detail: 'We cross-reference claims across multiple sources to ensure accuracy.'
              },
              { 
                n: '04', 
                title: 'Full Citations Delivered', 
                desc: 'Every claim in the answer is backed by a citation. Click any citation to open the original source directly.',
                detail: 'Citations include authority signals so you know the credibility of each source.'
              },
              { 
                n: '05', 
                title: 'Deepen With Follow-Ups', 
                desc: 'Ask follow-up questions to go deeper. The conversation context carries through — you do not have to repeat context.',
                detail: 'Each follow-up builds on the previous answer, narrowing or expanding as needed.'
              },
            ].map(s => (
              <div key={s.n} className="step">
                <div className="step-number" style={{ fontSize: '1.25rem' }}>{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <p style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--accent)', fontStyle: 'italic' }}>{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* What Makes It Different */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <p className="section-label">The Difference</p>
            <h2 className="section-title">What makes <span className="text-accent">AISEOsearch</span> different.</h2>
          </div>
          <div className="feature-grid">
            {[
              { title: 'Live Data, Not Stale Data', desc: 'Most AI tools run on training data that is months or years old. We search the live web every time — you get current information.' },
              { title: 'Actual Citations, Not Hints', desc: 'We provide direct citations with clickable links — not vague references you have to hunt down yourself.' },
              { title: 'SEO Intelligence Built In', desc: 'We understand SEO. Results include authority metrics, content freshness, and relevance signals relevant to search marketers.' },
              { title: 'No Personalisation Bias', desc: 'Traditional search personalises results based on your history — creating bubbles. We give you clean, objective results.' },
            ].map(f => (
              <div key={f.title} className="feature-card">
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Try it <span className="text-accent">free</span> today.</h2>
          <p>No credit card. No account needed for basic searches.</p>
          <div className="cta-buttons">
            <a href="/pricing" className="btn btn-primary btn-lg">Start Free</a>
          </div>
        </div>
      </section>
    </main>
  )
}
