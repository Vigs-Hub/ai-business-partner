'use client'
import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <section className="hero" style={{ minHeight: '50vh', paddingBottom: '3rem' }}>
        <div className="hero-badge">Contact</div>
        <h1>
          Get in<br />
          <span className="gradient">touch.</span>
        </h1>
        <p className="hero-sub">
          Questions, feedback, partnerships, or just want to say hello — we would love to hear from you.
        </p>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="contact-grid">
            <div>
              {submitted ? (
                <div className="form-card" style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h2 style={{ marginBottom: '1rem' }}>Message Sent</h2>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    Thanks for reaching out. We will get back to you within 1-2 business days.
                  </p>
                </div>
              ) : (
                <form className="form-card" onSubmit={handleSubmit}>
                  <h2>Send a Message</h2>
                  <p className="sub">We respond within 1-2 business days.</p>

                  <div className="form-group">
                    <label>Your Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="John Smith"
                      value={form.name}
                      onChange={(e) => setForm({...form, name: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) => setForm({...form, email: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <select 
                      value={form.subject}
                      onChange={(e) => setForm({...form, subject: e.target.value})}
                    >
                      <option value="">Select a topic</option>
                      <option value="general">General Enquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="affiliate">Affiliate Programme</option>
                      <option value="press">Press / Media</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Message *</label>
                    <textarea 
                      required 
                      placeholder="How can we help?"
                      value={form.message}
                      onChange={(e) => setForm({...form, message: e.target.value})}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    Send Message
                  </button>
                </form>
              )}

              <div style={{ marginTop: '2rem' }}>
                <div className="feature-card" style={{ marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Affiliate Programme</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    Interested in earning recurring commission? <a href="/affiliate" style={{ color: 'var(--accent)' }}>Join our affiliate programme.</a>
                  </p>
                </div>
                <div className="feature-card">
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>For Partnerships</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    Interested in a strategic partnership? Select "Partnership" in the subject and we will respond promptly.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="section-header">
                <p className="section-label">Other Ways to Reach Us</p>
                <h2 className="section-title" style={{ fontSize: '1.5rem' }}>Frequently asked questions.</h2>
              </div>
              <div>
                {[
                  { q: 'How do I cancel my subscription?', a: 'Log into your account, go to Settings > Subscription > Cancel. No fees, no questions asked.' },
                  { q: 'Do you offer refunds?', a: 'Yes — if you are not satisfied within 7 days of a Pro subscription, contact us for a full refund.' },
                  { q: 'Can I upgrade or downgrade my plan?', a: 'Yes. Upgrade or downgrade anytime from your account settings. Changes take effect on your next billing cycle.' },
                  { q: 'Is there a team or enterprise plan?', a: 'Not yet — but it is on our roadmap. Contact us if you need a team plan and we can discuss early access.' },
                ].map((faq, i) => (
                  <div key={i} className="faq-item">
                    <div className="faq-question" style={{ cursor: 'default', pointerEvents: 'none', fontSize: '0.9rem' }}>
                      {faq.q}
                    </div>
                    <div className="faq-answer" style={{ fontSize: '0.85rem' }}>{faq.a}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
