import fullLogo from "../assets/logo-full.png";
import iconLogo from "../assets/logo-icon.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Contact() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    practice: "",
    email: "",
    phone: "",
    volume: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your backend / form service.
    setSubmitted(true);
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Contact Us | Anmacwin Technologies</title>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  :root{\n    --navy:#122a4d;\n    --navy-dark:#0d2038;\n    --blue:#1e5fa8;\n    --teal:#1aa79e;\n    --teal-light:#e7f6f4;\n    --ice:#eef5fb;\n    --text:#2b3648;\n    --muted:#647184;\n    --white:#ffffff;\n    --border:#e4ebf2;\n  }\n  *{box-sizing:border-box;margin:0;padding:0;}\n  body{\n    font-family:'Segoe UI',Arial,Helvetica,sans-serif;\n    color:var(--text);\n    background:var(--white);\n    line-height:1.5;\n  }\n  img{max-width:100%;display:block;}\n  .icon-svg{width:20px;height:20px;stroke:currentColor;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;}\n  a{text-decoration:none;color:inherit;}\n  ul{list-style:none;}\n  .container{\n    max-width:1180px;\n    margin:0 auto;\n    padding:0 24px;\n  }\n  .eyebrow{\n    color:var(--teal);\n    font-weight:700;\n    letter-spacing:1.5px;\n    font-size:13px;\n    text-transform:uppercase;\n    margin-bottom:8px;\n    display:block;\n  }\n  h1,h2,h3{\n    color:var(--navy);\n    font-weight:800;\n  }\n  .btn{\n    display:inline-block;\n    padding:13px 26px;\n    border-radius:6px;\n    font-weight:600;\n    font-size:15px;\n    cursor:pointer;\n    border:2px solid transparent;\n    transition:all .2s ease;\n  }\n  .btn-primary{\n    background:var(--blue);\n    color:#fff;\n  }\n  .btn-primary:hover{background:var(--navy);}\n  .btn-outline{\n    background:transparent;\n    border-color:var(--blue);\n    color:var(--blue);\n  }\n  .btn-outline:hover{background:var(--blue);color:#fff;}\n\n  /* ===== Brand Banner ===== */\n  .brand-banner{\n    text-align:center;\n    padding:30px 0 26px;\n    background:linear-gradient(180deg,#fbfdff 0%, #ffffff 100%);\n  }\n  .brand-banner-img{\n    height:110px;\n    width:auto;\n    margin:0 auto;\n  }\n\n  /* ===== Nav ===== */\n  header.nav{\n    background:#fff;\n    border-bottom:1px solid var(--border);\n    position:sticky;\n    top:0;\n    z-index:100;\n  }\n  .nav-inner{\n    display:flex;\n    align-items:center;\n    justify-content:space-between;\n    padding:14px 24px;\n  }\n  .nav-logo{\n    display:flex;\n    align-items:center;\n    gap:8px;\n    font-weight:800;\n    color:var(--navy);\n    font-size:14px;\n    line-height:1.1;\n  }\n  .nav-logo img{width:38px;height:38px;object-fit:contain;}\n  .nav-logo .sub{\n    display:block;\n    font-size:9px;\n    letter-spacing:1px;\n    color:var(--muted);\n    font-weight:600;\n  }\n  .nav-links{\n    display:flex;\n    gap:26px;\n    font-size:14.5px;\n    font-weight:600;\n    color:var(--text);\n  }\n  .nav-links li a{\n    display:flex;\n    align-items:center;\n    gap:4px;\n  }\n  .nav-links li a.active{color:var(--blue);}\n  .nav-links li a:hover{color:var(--blue);}\n  .nav-cta{\n    background:var(--blue);\n    color:#fff;\n    padding:11px 20px;\n    border-radius:6px;\n    font-weight:600;\n    font-size:14px;\n    white-space:nowrap;\n  }\n  .nav-cta:hover{background:var(--navy);}\n  .burger{display:none;background:none;border:none;font-size:24px;color:var(--navy);cursor:pointer;}\n\n  /* ===== Section shared ===== */\n  section{padding:70px 0;}\n  .section-head{\n    text-align:center;\n    max-width:640px;\n    margin:0 auto 44px;\n  }\n  .section-head h2{font-size:30px;line-height:1.3;}\n\n  /* ===== Contact Hero ===== */\n  .c-hero{\n    background:var(--ice);\n    padding:56px 0 64px;\n  }\n  .c-hero-grid{\n    display:grid;\n    grid-template-columns:1.1fr .9fr;\n    gap:44px;\n    align-items:center;\n  }\n  .c-hero h1{\n    font-size:38px;\n    line-height:1.18;\n  }\n  .c-hero h1 .accent{color:var(--teal);}\n  .c-hero p.lead{\n    margin-top:16px;\n    color:var(--muted);\n    font-size:15.5px;\n    max-width:460px;\n  }\n  .c-hero-actions{\n    display:flex;\n    gap:14px;\n    margin-top:26px;\n    flex-wrap:wrap;\n  }\n  .response-pill{\n    display:inline-flex;\n    align-items:center;\n    gap:8px;\n    background:#fff;\n    border:1px solid var(--border);\n    border-radius:999px;\n    padding:8px 16px 8px 8px;\n    font-size:13px;\n    font-weight:700;\n    color:var(--navy);\n    margin-top:28px;\n    box-shadow:0 6px 16px rgba(18,42,77,.06);\n  }\n  .response-pill .pulse-wrap{\n    width:22px;height:22px;\n    border-radius:50%;\n    background:var(--teal-light);\n    display:flex;align-items:center;justify-content:center;\n    position:relative;\n  }\n  .response-pill .pulse-dot{\n    width:8px;height:8px;\n    border-radius:50%;\n    background:var(--teal);\n    position:relative;\n  }\n  .response-pill .pulse-dot::after{\n    content:\"\";\n    position:absolute;\n    inset:-6px;\n    border-radius:50%;\n    border:2px solid var(--teal);\n    opacity:.55;\n    animation:pulseRing 2.2s ease-out infinite;\n  }\n  @keyframes pulseRing{\n    0%{transform:scale(.6);opacity:.6;}\n    70%{transform:scale(1.8);opacity:0;}\n    100%{opacity:0;}\n  }\n\n  /* Quick reach card */\n  .reach-card{\n    background:#fff;\n    border-radius:16px;\n    padding:28px 26px;\n    box-shadow:0 20px 40px rgba(18,42,77,.10), 0 2px 8px rgba(18,42,77,.06);\n    border:1px solid rgba(18,42,77,.05);\n  }\n  .reach-card h3{\n    font-size:16px;\n    margin-bottom:4px;\n  }\n  .reach-card p.small{\n    color:var(--muted);\n    font-size:13px;\n    margin-bottom:20px;\n  }\n  .reach-row{\n    display:flex;\n    align-items:center;\n    gap:14px;\n    padding:14px 0;\n    border-top:1px solid var(--border);\n  }\n  .reach-row:first-of-type{border-top:none;}\n  .reach-row .icon{\n    width:42px;height:42px;\n    border-radius:11px;\n    background:var(--teal-light);\n    color:var(--teal);\n    display:flex;align-items:center;justify-content:center;\n    flex-shrink:0;\n  }\n  .reach-row .label{\n    font-size:11px;\n    color:var(--muted);\n    font-weight:700;\n    text-transform:uppercase;\n    letter-spacing:.3px;\n  }\n  .reach-row .value{\n    font-size:14.5px;\n    font-weight:700;\n    color:var(--navy);\n  }\n  .reach-row .value a:hover{color:var(--blue);}\n\n  /* ===== Info + Form section ===== */\n  .cf-section{background:#fff;}\n  .cf-grid{\n    display:grid;\n    grid-template-columns:.85fr 1.15fr;\n    gap:40px;\n    align-items:start;\n  }\n  .info-tiles{\n    display:grid;\n    grid-template-columns:1fr 1fr;\n    gap:16px;\n  }\n  .info-tile{\n    background:var(--ice);\n    border-radius:12px;\n    padding:22px 18px;\n    border:1px solid var(--border);\n  }\n  .info-tile .ico{\n    width:40px;height:40px;\n    border-radius:10px;\n    background:#fff;\n    color:var(--teal);\n    display:flex;align-items:center;justify-content:center;\n    margin-bottom:12px;\n    box-shadow:0 2px 6px rgba(18,42,77,.08);\n  }\n  .info-tile h4{\n    font-size:14px;\n    color:var(--navy);\n    margin-bottom:4px;\n  }\n  .info-tile p, .info-tile a{\n    font-size:13px;\n    color:var(--muted);\n    line-height:1.5;\n  }\n  .info-note{\n    margin-top:18px;\n    padding:18px 20px;\n    background:var(--navy-dark);\n    border-radius:12px;\n    color:#fff;\n  }\n  .info-note .eyebrow{color:#7fd6ce;margin-bottom:6px;}\n  .info-note p{font-size:13.5px;color:#c7d3e0;line-height:1.6;}\n\n  /* Form card */\n  .form-card{\n    background:#fff;\n    border:1px solid var(--border);\n    border-radius:16px;\n    padding:34px 36px;\n    box-shadow:0 14px 30px rgba(18,42,77,.06);\n  }\n  .form-card h3{font-size:20px;margin-bottom:6px;}\n  .form-card p.small{color:var(--muted);font-size:13.5px;margin-bottom:24px;}\n  .form-row{\n    display:grid;\n    grid-template-columns:1fr 1fr;\n    gap:16px;\n    margin-bottom:16px;\n  }\n  .field{display:flex;flex-direction:column;gap:6px;}\n  .field.full{grid-column:1 / -1;}\n  .field label{\n    font-size:12.5px;\n    font-weight:700;\n    color:var(--navy);\n  }\n  .field input, .field select, .field textarea{\n    border:1.5px solid var(--border);\n    border-radius:8px;\n    padding:11px 13px;\n    font-size:14px;\n    font-family:inherit;\n    color:var(--text);\n    background:#fbfdff;\n    transition:border-color .2s ease, background .2s ease;\n  }\n  .field input:focus, .field select:focus, .field textarea:focus{\n    outline:none;\n    border-color:var(--blue);\n    background:#fff;\n  }\n  .field textarea{resize:vertical;min-height:110px;}\n  .form-foot{\n    display:flex;\n    align-items:center;\n    justify-content:space-between;\n    margin-top:22px;\n    flex-wrap:wrap;\n    gap:14px;\n  }\n  .form-foot .fine{font-size:12px;color:var(--muted);max-width:280px;}\n  .submit-btn{\n    background:var(--blue);\n    color:#fff;\n    border:none;\n    padding:13px 30px;\n    border-radius:6px;\n    font-weight:700;\n    font-size:15px;\n    cursor:pointer;\n    transition:background .2s ease;\n  }\n  .submit-btn:hover{background:var(--navy);}\n  .success-box{\n    background:var(--teal-light);\n    border:1px solid #bfe6e1;\n    border-radius:12px;\n    padding:26px;\n    text-align:center;\n  }\n  .success-box .ico{\n    width:52px;height:52px;\n    border-radius:50%;\n    background:#fff;\n    color:var(--teal);\n    display:flex;align-items:center;justify-content:center;\n    margin:0 auto 14px;\n  }\n  .success-box h3{font-size:17px;margin-bottom:6px;}\n  .success-box p{color:var(--muted);font-size:13.5px;}\n\n  /* ===== Map band ===== */\n  .map-section{background:var(--ice);padding-top:0;}\n  .map-wrap{\n    border-radius:16px;\n    overflow:hidden;\n    border:1px solid var(--border);\n    box-shadow:0 14px 30px rgba(18,42,77,.08);\n  }\n  .map-wrap iframe{\n    width:100%;\n    height:340px;\n    border:0;\n    display:block;\n  }\n  .map-caption{\n    display:flex;\n    align-items:center;\n    justify-content:space-between;\n    background:#fff;\n    padding:16px 22px;\n    flex-wrap:wrap;\n    gap:10px;\n    border-top:1px solid var(--border);\n  }\n  .map-caption .addr{\n    display:flex;\n    align-items:center;\n    gap:10px;\n    font-size:13.5px;\n    font-weight:600;\n    color:var(--navy);\n  }\n  .map-caption .addr .ic{color:var(--teal);}\n\n  /* ===== CTA band ===== */\n  .cta-band{\n    background:var(--navy-dark);\n    padding:54px 0;\n  }\n  .cta-band .container{\n    display:flex;\n    align-items:center;\n    justify-content:space-between;\n    flex-wrap:wrap;\n    gap:22px;\n  }\n  .cta-band h3{color:#fff;font-size:22px;margin-bottom:6px;}\n  .cta-band p{color:#9fb0c6;font-size:14px;}\n  .cta-band .actions{display:flex;gap:12px;flex-wrap:wrap;}\n  .btn-white{background:#fff;color:var(--navy);}\n  .btn-white:hover{background:var(--teal);color:#fff;}\n  .btn-ghost{background:transparent;border-color:rgba(255,255,255,.35);color:#fff;}\n  .btn-ghost:hover{background:rgba(255,255,255,.1);border-color:#fff;}\n\n  /* ===== Footer ===== */\n  footer{\n    background:var(--navy-dark);\n    color:#c7d3e0;\n    padding:60px 0 26px;\n  }\n  .footer-grid{\n    display:grid;\n    grid-template-columns:1.4fr 1fr 1fr 1.2fr;\n    gap:32px;\n    padding-bottom:36px;\n    border-bottom:1px solid rgba(255,255,255,.1);\n  }\n  .footer-logo{\n    display:flex;\n    align-items:center;\n    gap:10px;\n    color:#fff;\n    font-weight:800;\n    font-size:15px;\n    margin-bottom:14px;\n  }\n  .footer-logo-badge{\n    width:42px;height:42px;\n    border-radius:10px;\n    background:#fff;\n    display:flex;align-items:center;justify-content:center;\n    padding:5px;\n    flex-shrink:0;\n  }\n  .footer-logo-badge img{width:100%;height:100%;object-fit:contain;}\n  .footer-logo .sub{display:block;font-size:9px;color:#9fb0c6;font-weight:600;}\n  footer p{font-size:13px;line-height:1.7;color:#9fb0c6;}\n  .footer-social{display:flex;gap:10px;margin-top:16px;}\n  .footer-social a{\n    width:32px;height:32px;\n    border-radius:50%;\n    background:rgba(255,255,255,.08);\n    display:flex;align-items:center;justify-content:center;\n    font-size:14px;\n  }\n  footer h4{color:#fff;font-size:14.5px;margin-bottom:16px;}\n  footer .col ul li{margin-bottom:10px;}\n  footer .col ul li a{font-size:13.5px;color:#c7d3e0;}\n  footer .col ul li a:hover{color:var(--teal);}\n  .contact-item{\n    display:flex;\n    gap:10px;\n    margin-bottom:14px;\n    font-size:13.5px;\n    color:#c7d3e0;\n  }\n  .contact-item .ic{color:var(--teal);flex-shrink:0;}\n  .footer-bottom{\n    display:flex;\n    justify-content:space-between;\n    padding-top:22px;\n    font-size:12.5px;\n    color:#8595ac;\n    flex-wrap:wrap;\n    gap:10px;\n  }\n  .footer-bottom a{color:#8595ac;}\n  .footer-bottom a:hover{color:#fff;}\n\n  /* ===== Responsive ===== */\n  @media(max-width:900px){\n    .brand-banner{display:none;}\n  }\n  @media(max-width:960px){\n    .c-hero-grid{grid-template-columns:1fr;}\n    .cf-grid{grid-template-columns:1fr;}\n    .footer-grid{grid-template-columns:1fr 1fr;}\n  }\n  @media(max-width:700px){\n    .nav-links{display:none;}\n    .burger{display:block;}\n    .nav-cta{display:none;}\n    .c-hero h1{font-size:28px;}\n    .info-tiles{grid-template-columns:1fr;}\n    .form-row{grid-template-columns:1fr;}\n    .form-card{padding:26px 20px;}\n    .cta-band .container{flex-direction:column;align-items:flex-start;}\n    .footer-grid{grid-template-columns:1fr;}\n    .map-wrap iframe{height:240px;}\n  }\n"
        }}
      />

      {/* Brand Banner */}
      <div className="brand-banner">
        <img
          src={fullLogo}
          alt="Anmacwin Technologies - Smart Billing. Better Collections."
          className="brand-banner-img"
        />
      </div>

      {/* Nav */}
      <header className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-logo" onClick={() => navigate("/")}>
            <img src={iconLogo} alt="Anmacwin Technologies" />
            <span>
              ANMACWIN<span className="sub">TECHNOLOGIES</span>
            </span>
          </a>
          <nav>
            <ul className="nav-links">
              <li>
                <a onClick={() => navigate("/")}>Home</a>
              </li>
              <li>
                <a onClick={() => navigate("/about")}>About Us</a>
              </li>
              <li>
                <a onClick={() => navigate("/")}>Services</a>
              </li>
              <li>
                <a onClick={() => navigate("/")}>Solutions</a>
              </li>
              <li>
                <a onClick={() => navigate("/")}>Why Us</a>
              </li>
              <li>
                <a className="active">Contact Us</a>
              </li>
            </ul>
          </nav>
          <a href="#form" className="nav-cta">
            Get a Free Consultation
          </a>
          <button className="burger" aria-label="Open menu">
            <svg
              style={{
                width: 22,
                height: 22,
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round"
              }}
              viewBox="0 0 24 24"
            >
              <line x1={3} y1={6} x2={21} y2={6} />
              <line x1={3} y1={12} x2={21} y2={12} />
              <line x1={3} y1={18} x2={21} y2={18} />
            </svg>
          </button>
        </div>
      </header>

      {/* Contact Hero */}
      <section className="c-hero">
        <div className="container c-hero-grid">
          <div>
            <span className="eyebrow">Contact Us</span>
            <h1>
              Let's Talk About
              <br />
              <span className="accent">Your Revenue Cycle.</span>
            </h1>
            <p className="lead">
              Whether you have a question about a claim, want a free billing
              audit, or you're ready to switch RCM partners, our team is one
              message away.
            </p>
            <div className="c-hero-actions">
              <a href="#form" className="btn btn-primary">
                Send a Message
              </a>
              <a href="tel:+16301234567" className="btn btn-outline">
                <svg
                  className="icon-svg"
                  style={{
                    width: 16,
                    height: 16,
                    verticalAlign: "-3px",
                    marginRight: 4
                  }}
                  viewBox="0 0 24 24"
                >
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8 9.9a16 16 0 006 6l1.4-1.3a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.8 2.1z" />
                </svg>
                Call Us Now
              </a>
            </div>
            <div className="response-pill">
              <span className="pulse-wrap">
                <span className="pulse-dot" />
              </span>
              Average reply time: under 2 business hours
            </div>
          </div>

          <div className="reach-card">
            <h3>Quick Reach</h3>
            <p className="small">Pick whichever works best for you.</p>

            <div className="reach-row">
              <div className="icon">
                <svg className="icon-svg" viewBox="0 0 24 24">
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8 9.9a16 16 0 006 6l1.4-1.3a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.8 2.1z" />
                </svg>
              </div>
              <div>
                <div className="label">Phone</div>
                <div className="value">
                  <a href="tel:+16301234567">+1 (630) 123-4567</a>
                </div>
              </div>
            </div>

            <div className="reach-row">
              <div className="icon">
                <svg className="icon-svg" viewBox="0 0 24 24">
                  <rect x={2} y={4} width={20} height={16} rx={2} />
                  <polyline points="2 6 12 13 22 6" />
                </svg>
              </div>
              <div>
                <div className="label">Email</div>
                <div className="value">
                  <a href="mailto:info@anmacwintech.com">
                    info@anmacwintech.com
                  </a>
                </div>
              </div>
            </div>

            <div className="reach-row">
              <div className="icon">
                <svg className="icon-svg" viewBox="0 0 24 24">
                  <circle cx={12} cy={12} r={9} />
                  <polyline points="12 7 12 12 15.5 14" />
                </svg>
              </div>
              <div>
                <div className="label">Office Hours</div>
                <div className="value">Mon - Fri, 8:00 AM - 6:00 PM CST</div>
              </div>
            </div>

            <div className="reach-row">
              <div className="icon">
                <svg className="icon-svg" viewBox="0 0 24 24">
                  <path d="M12 21s7-7.5 7-12a7 7 0 00-14 0c0 4.5 7 12 7 12z" />
                  <circle cx={12} cy={9} r="2.3" />
                </svg>
              </div>
              <div>
                <div className="label">Office</div>
                <div className="value">Naperville, IL</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info + Form */}
      <section className="cf-section" id="form">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Get In Touch</span>
            <h2>Tell Us About Your Practice</h2>
          </div>

          <div className="cf-grid">
            <div>
              <div className="info-tiles">
                <div className="info-tile">
                  <div className="ico">
                    <svg
                      className="icon-svg"
                      style={{ width: 18, height: 18 }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8 9.9a16 16 0 006 6l1.4-1.3a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.8 2.1z" />
                    </svg>
                  </div>
                  <h4>Call Sales</h4>
                  <p>
                    <a href="tel:+16301234567">+1 (630) 123-4567</a>
                  </p>
                </div>
                <div className="info-tile">
                  <div className="ico">
                    <svg
                      className="icon-svg"
                      style={{ width: 18, height: 18 }}
                      viewBox="0 0 24 24"
                    >
                      <rect x={2} y={4} width={20} height={16} rx={2} />
                      <polyline points="2 6 12 13 22 6" />
                    </svg>
                  </div>
                  <h4>Email Support</h4>
                  <p>
                    <a href="mailto:support@anmacwintech.com">
                      support@anmacwintech.com
                    </a>
                  </p>
                </div>
                <div className="info-tile">
                  <div className="ico">
                    <svg
                      className="icon-svg"
                      style={{ width: 18, height: 18 }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21s7-7.5 7-12a7 7 0 00-14 0c0 4.5 7 12 7 12z" />
                      <circle cx={12} cy={9} r="2.3" />
                    </svg>
                  </div>
                  <h4>Visit Us</h4>
                  <p>123 Health Park Drive, Suite 200, Naperville, IL 60563</p>
                </div>
                <div className="info-tile">
                  <div className="ico">
                    <svg
                      className="icon-svg"
                      style={{ width: 18, height: 18 }}
                      viewBox="0 0 24 24"
                    >
                      <circle cx={12} cy={12} r={9} />
                      <polyline points="12 7 12 12 15.5 14" />
                    </svg>
                  </div>
                  <h4>Response Time</h4>
                  <p>Under 2 business hours, guaranteed</p>
                </div>
              </div>

              <div className="info-note">
                <span className="eyebrow">Before You Reach Out</span>
                <p>
                  For fastest support on an existing claim, please have your
                  practice NPI and the patient account number ready. This
                  helps our team locate your file immediately.
                </p>
              </div>
            </div>

            <div className="form-card">
              {submitted ? (
                <div className="success-box">
                  <div className="ico">
                    <svg
                      className="icon-svg"
                      style={{ width: 24, height: 24 }}
                      viewBox="0 0 24 24"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <polyline points="8 12.5 11 15.5 16 8.5" />
                    </svg>
                  </div>
                  <h3>Message Sent</h3>
                  <p>
                    Thank you, {form.name || "there"}. A member of our team
                    will reach out to you within 2 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3>Request a Free Consultation</h3>
                  <p className="small">
                    Fill out the form and a billing specialist will follow up
                    shortly.
                  </p>

                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="name">Full Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Dr. Jane Smith"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="practice">Practice Name</label>
                      <input
                        id="practice"
                        name="practice"
                        type="text"
                        placeholder="Smith Family Clinic"
                        value={form.practice}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="jane@smithclinic.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="field full">
                      <label htmlFor="volume">Monthly Claim Volume</label>
                      <select
                        id="volume"
                        name="volume"
                        value={form.volume}
                        onChange={handleChange}
                      >
                        <option value="">Select a range</option>
                        <option value="0-100">0 - 100 claims</option>
                        <option value="100-500">100 - 500 claims</option>
                        <option value="500-1500">500 - 1,500 claims</option>
                        <option value="1500+">1,500+ claims</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="field full">
                      <label htmlFor="message">How Can We Help?</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell us a bit about your billing needs..."
                        value={form.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-foot">
                    <p className="fine">
                      By submitting, you agree to be contacted by Anmacwin
                      Technologies regarding your inquiry.
                    </p>
                    <button type="submit" className="submit-btn">
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="map-section">
        <div className="container">
          <div className="map-wrap">
            <iframe
              title="Anmacwin Technologies Office Location"
              src="https://www.google.com/maps?q=Naperville,IL&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-caption">
              <div className="addr">
                <span className="ic">
                  <svg
                    className="icon-svg"
                    style={{ width: 16, height: 16 }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21s7-7.5 7-12a7 7 0 00-14 0c0 4.5 7 12 7 12z" />
                    <circle cx={12} cy={9} r="2.3" />
                  </svg>
                </span>
                123 Health Park Drive, Suite 200, Naperville, IL 60563, USA
              </div>
              <a
                href="https://www.google.com/maps?q=Naperville,IL"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
                style={{ padding: "9px 18px", fontSize: 13 }}
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="cta-band" style={{ padding: "54px 0" }}>
        <div className="container">
          <div>
            <h3>Prefer to talk it through first?</h3>
            <p>Book a free 20-minute revenue cycle assessment call.</p>
          </div>
          <div className="actions">
            <a href="tel:+16301234567" className="btn btn-white">
              Call Us Now
            </a>
            <a href="#form" className="btn btn-ghost">
              Schedule a Call
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">
                <span className="footer-logo-badge">
                  <img src={iconLogo} alt="Anmacwin Technologies" />
                </span>
                <span>
                  ANMACWIN<span className="sub">TECHNOLOGIES</span>
                </span>
              </div>
              <p>
                We are a medical billing and revenue cycle management company
                helping healthcare providers improve cash flow, reduce
                denials and focus on patient care.
              </p>
              <div className="footer-social">
                <a href="#" aria-label="Facebook">
                  <svg
                    style={{ width: 15, height: 15, fill: "#fff" }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.5 22v-8.4h2.8l.4-3.3h-3.2V8c0-1 .3-1.6 1.7-1.6h1.6V3.4C16.5 3.3 15.4 3.2 14.2 3.2c-2.6 0-4.4 1.6-4.4 4.5v2.6H7v3.3h2.8V22z" />
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <svg
                    style={{ width: 15, height: 15, fill: "#fff" }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.94 8.5H3.56V21h3.38zM5.25 3a2 2 0 100 4 2 2 0 000-4zM21 21h-3.38v-6.4c0-1.5-.03-3.5-2.14-3.5-2.14 0-2.47 1.6-2.47 3.4V21H9.63V8.5H12.9v1.7h.05c.45-.86 1.55-1.76 3.2-1.76 3.4 0 4.03 2.24 4.03 5.15z" />
                  </svg>
                </a>
                <a href="#" aria-label="X (Twitter)">
                  <svg
                    style={{ width: 15, height: 15, fill: "#fff" }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-6.7L4.5 22H1.4l8.1-9.3L1 2h7l4.9 6.1zM17.6 20h1.9L6.5 3.9H4.4z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="col">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a onClick={() => navigate("/")}>Home</a>
                </li>
                <li>
                  <a onClick={() => navigate("/about")}>About Us</a>
                </li>
                <li>
                  <a onClick={() => navigate("/")}>Services</a>
                </li>
                <li>
                  <a onClick={() => navigate("/")}>Solutions</a>
                </li>
                <li>
                  <a onClick={() => navigate("/")}>Resources</a>
                </li>
                <li>
                  <a className="active">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#">Medical Billing</a>
                </li>
                <li>
                  <a href="#">Credentialing Services</a>
                </li>
                <li>
                  <a href="#">AR Recovery</a>
                </li>
                <li>
                  <a href="#">Denial Management</a>
                </li>
                <li>
                  <a href="#">Payment Posting</a>
                </li>
                <li>
                  <a href="#">Eligibility Verification</a>
                </li>
                <li>
                  <a href="#">Medical Billing Audit</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>Contact Us</h4>
              <div className="contact-item">
                <span className="ic">
                  <svg
                    className="icon-svg"
                    style={{ width: 15, height: 15 }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8 9.9a16 16 0 006 6l1.4-1.3a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.8 2.1z" />
                  </svg>
                </span>{" "}
                +1 (630) 123-4567
              </div>
              <div className="contact-item">
                <span className="ic">
                  <svg
                    className="icon-svg"
                    style={{ width: 15, height: 15 }}
                    viewBox="0 0 24 24"
                  >
                    <rect x={2} y={4} width={20} height={16} rx={2} />
                    <polyline points="2 6 12 13 22 6" />
                  </svg>
                </span>{" "}
                info@anmacwintech.com
              </div>
              <div className="contact-item">
                <span className="ic">
                  <svg
                    className="icon-svg"
                    style={{ width: 15, height: 15 }}
                    viewBox="0 0 24 24"
                  >
                    <circle cx={12} cy={12} r={9} />
                    <line x1={3} y1={12} x2={21} y2={12} />
                    <path d="M12 3a15 15 0 010 18 15 15 0 010-18z" />
                  </svg>
                </span>{" "}
                www.anmacwintech.com
              </div>
              <div className="contact-item">
                <span className="ic">
                  <svg
                    className="icon-svg"
                    style={{ width: 15, height: 15 }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21s7-7.5 7-12a7 7 0 00-14 0c0 4.5 7 12 7 12z" />
                    <circle cx={12} cy={9} r="2.3" />
                  </svg>
                </span>{" "}
                123 Health Park Drive, Suite 200, Naperville, IL 60563, USA
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © 2026 Anmacwin Technologies Private Limited. All Rights
              Reserved.
            </span>
            <span>
              <a href="#">Privacy Policy</a> &nbsp;|&nbsp;{" "}
              <a href="#">Terms of Service</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;