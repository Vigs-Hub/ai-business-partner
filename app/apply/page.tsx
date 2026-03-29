'use client'
import { useState } from 'react'

export default function Apply() {
  const [form, setForm] = useState({
    name: '', business: '', email: '', phone: '', website: '', mainNeed: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <section className="hero" style={{ minHeight: '50vh', paddingBottom: '2rem' }}>
        <div className="hero-badge">Apply</div>
        <h1>
          Apply for<br />
          <span className="accent">AI Business Partner</span>
        </h1>
        <p className="hero-sub">
          If your business needs a stronger marketing system, better SEO structure, 
          backend support, and practical monthly help — apply here.
        </p>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="apply-layout">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="form-card" style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h2 style={{ marginBottom: '1rem' }}>Application Received</h2>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    We will review your application and be in touch within 1 business day 
                    to arrange the next steps.
                  </p>
                </div>
              ) : (
                <form className="form-card" onSubmit={handleSubmit}>
                  <h2>Get Started</h2>
                  <p className="sub">Fill in the form and we will be in touch.</p>

                  <div className="form-group">
                    <label>Your Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Smith" required />
                  </div>
                  <div className="form-group">
                    <label>Business Name *</label>
                    <input type="text" name="business" value={form.business} onChange={handleChange} placeholder="Acme Pty Ltd" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@acme.com" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+61 400 000 000" />
                  </div>
                  <div className="form-group">
                    <label>Website</label>
                    <input type="text" name="website" value={form.website} onChange={handleChange} placeholder="www.yourbusiness.com.au" />
                  </div>
                  <div className="form-group">
                    <label>Main Need *</label>
                    <select name="mainNeed" value={form.mainNeed} onChange={handleChange} required>
                      <option value="">Select your main need</option>
                      <option value="more-leads">More Leads</option>
                      <option value="marketing-system">Better Marketing System</option>
                      <option value="seo-support">Better SEO Support</option>
                      <option value="backend-support">Backend Support</option>
                      <option value="monthly-help">Need Monthly Help</option>
                      <option value="full-support">Full Support Setup</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Tell Us About Your Business</label>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Describe your business and what you are looking for..." />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
                    Apply Now
                  </button>
                </form>
              )}
            </div>

            {/* Offer Summary */}
            <div>
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>What You Get</h2>
                <ul className="offer-list">
                  {[
                    'Marketing system — structured lead capture and follow-up',
                    'SEO system — improved visibility and inbound lead flow',
                    'Backend support — keeps things moving behind the scenes',
                    'Up to 20 hours per month of practical support',
                    'Mix of done with you and done for you',
                    'Flexible support levels depending on budget and availability',
                  ].map(item => (
                    <li key={item}>
                      <span className="icon">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ 
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: '16px', padding: '1.5rem', marginBottom: '2rem'
              }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem' }}>Flexible by Design</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Support can be increased or reduced depending on your budget, 
                  availability, and where your business is at. Start at the level 
                  that fits — adjust as you grow.
                </p>
              </div>

              <div style={{ 
                background: 'var(--accent-light)', border: '1px solid rgba(245,158,11,0.2)',
                borderRadius: '16px', padding: '1.5rem'
              }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--accent)' }}>Book a Call Instead?</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.7 }}>
                  Prefer to talk first? Book a call and we will walk through whether 
                  AI Business Partner is right for your business.
                </p>
                <a href="/how-it-works" className="btn btn-secondary btn-sm">See How It Works</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
