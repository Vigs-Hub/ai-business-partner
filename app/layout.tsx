import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Business Partner — More Leads. Better Systems. Real Support.',
  description: 'AI Business Partner gives businesses the marketing system, SEO system, backend support, and up to 20 hours per month of practical help. More leads. Better systems. Real support.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <div className="nav-inner">
            <a href="/" className="nav-logo">AI Business <span>Partner</span></a>
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/how-it-works">How It Works</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/apply">Apply</a></li>
            </ul>
            <div className="nav-cta">
              <a href="/apply" className="btn btn-primary btn-sm">Apply Now</a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="footer">
          <div className="footer-inner container">
            <p>© 2026 AI Business Partner. All rights reserved.</p>
            <p>More Leads. Better Systems. Real Support.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
