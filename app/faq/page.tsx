'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'What is AI Business Partner?',
    a: 'AI Business Partner is a structured business growth support service that gives businesses the marketing system, SEO system, backend support, and up to 20 hours per month of practical help — all in one package focused on generating more leads.'
  },
  {
    q: 'What is included in the offer?',
    a: 'You get four core components: a marketing system (to capture and follow up leads properly), an SEO system (to build visibility and inbound lead flow), backend support (to keep things moving behind the scenes), and up to 20 hours per month of practical monthly help.'
  },
  {
    q: 'What do you mean by a marketing system?',
    a: 'A marketing system is a structured approach to capturing, managing, and following up with leads. It is not just a set of tools — it is the process, the structure, and the follow-up discipline that makes lead generation actually work.'
  },
  {
    q: 'What do you mean by an SEO system?',
    a: 'An SEO system is a structured approach to improving your business visibility in search, building organic authority, and generating a steady flow of inbound leads over time. It is not a one-off optimisation — it is an ongoing system.'
  },
  {
    q: 'What does backend support include?',
    a: 'Backend support covers the behind-the-scenes work that keeps your marketing and SEO systems running properly — data management, follow-up coordination, system maintenance, and the execution tasks that sit underneath your lead generation activity.'
  },
  {
    q: 'Is the support done for us or done with us?',
    a: 'It is a mix of both. Some businesses want more done for them. Others want to stay more hands-on with our support alongside them. The model is flexible and can be adjusted to suit your preference and availability.'
  },
  {
    q: 'Is there up to 20 hours of support each month?',
    a: 'Yes. You get up to 20 hours per month of practical support to move work forward, execute tasks, support the systems, and reduce the operational drag inside your business.'
  },
  {
    q: 'Can the support level be adjusted?',
    a: 'Yes. Support can be increased or reduced depending on your budget, availability, support requirements, and the pace of rollout you want. The model is designed to flex with your business as it grows.'
  },
  {
    q: 'Who is this best suited for?',
    a: 'AI Business Partner is best suited for trades businesses, service businesses, growth-stage SMEs, and operators who need more leads, better marketing structure, and backend support — without building a large internal team.'
  },
  {
    q: 'How do we get started?',
    a: 'Apply using the form on this page or book a call. We will review your business needs and, if it is a fit, set up the initial systems and support structure. From there, monthly support begins.'
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <main>
      <section className="hero" style={{ minHeight: '50vh', paddingBottom: '2rem' }}>
        <div className="hero-badge">FAQ</div>
        <h1>
          Frequently Asked<br />
          <span className="accent">Questions</span>
        </h1>
        <p className="hero-sub">
          Practical answers to the questions businesses have before getting started.
        </p>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
                {faq.q}
                <span style={{ 
                  fontSize: '1.5rem', color: 'var(--accent)', 
                  transform: open === i ? 'rotate(45deg)' : 'none', 
                  transition: 'transform 0.2s' 
                }}>+</span>
              </button>
              {open === i && (
                <div className="faq-answer">{faq.a}</div>
              )}
            </div>
          ))}

          <div className="cta-section" style={{ marginTop: '3rem', borderRadius: '16px', border: '1px solid var(--border)' }}>
            <div className="container">
              <h2 style={{ fontSize: '1.5rem' }}>Ready to apply?</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Get started or book a call to see if AI Business Partner is right for you.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="/apply" className="btn btn-primary">Apply Now</a>
                <a href="/how-it-works" className="btn btn-secondary">See How It Works</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
