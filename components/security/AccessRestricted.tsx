import "./AccessRestricted.css";

export default function AccessRestricted() {
  return (
    <div className="overlay">
      <div className="card">
        {/* LEFT SIDE (Content) */}
        <div className="card-content">
          <span className="badge">ACCESS RESTRICTED</span>

          <h1 className="title">
            DEV TOOLS <em>detected</em>
          </h1>

          <p className="text">
            Curious about how Wrestle AI was built?
            <br />
            Let’s connect and chat about it.
          </p>

          <div className="links">
            <a href="/privacy" aria-label="privacy">
              Privacy
            </a>
            <a href="/terms" aria-label="terms">
              Terms
            </a>
            <a href="/contact" aria-label="contact">
              Contact
            </a>
          </div>

          <div className="footer">Wrestle AI © 2026 all rights reserved.</div>
        </div>

        {/* RIGHT SIDE (Actions) */}
        <div className="card-actions">
          <a href="/" className="primary-btn" aria-label="return home">
            Return Home
          </a>

          <a
            href="https://wa.me/918959690529"
            className="secondary-btn"
            aria-label="get in touch via whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>

          <a
            href="mailto:draftworks000@gmail.com"
            className="email-link"
            aria-label="get in touch via email"
          >
            draftworks000@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
