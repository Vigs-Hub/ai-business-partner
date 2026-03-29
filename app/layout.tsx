import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AISEOsearch — AI Search with Real-Time Web Results',
  description: 'AISEOsearch delivers AI-powered answers with real-time web results and citations. The smarter way to search — combine AI intelligence with live web data.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <div className="nav-inner">
            <a href="/" className="nav-logo">
              AISEO<span className="dot">.</span>search
            </a>
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/how-it-works">How It Works</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/affiliate">Affiliate</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            <div className="nav-cta">
              <a href="/pricing" className="btn btn-secondary btn-sm">Start Free</a>
              <a href="/pricing" className="btn btn-primary btn-sm">Try Pro</a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="footer">
          <div className="footer-inner container">
            <p>© 2026 AISEOsearch. All rights reserved.</p>
            <p>AI-Powered Search. Real-Time Results. Citations Included.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
