import fullLogo from "../assets/logo-full.png";
import iconLogo from "../assets/logo-icon.png";
import heroWoman from "../assets/hero-woman.png";
import heroMan from "../assets/hero-man.png";
import { useNavigate } from "react-router-dom";

function Home(){
        const navigate = useNavigate();

    return(
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Anmacwin Technologies | Smart Billing. Better Collections.</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n  :root{\n    --navy:#122a4d;\n    --navy-dark:#0d2038;\n    --blue:#1e5fa8;\n    --teal:#1aa79e;\n    --teal-light:#e7f6f4;\n    --ice:#eef5fb;\n    --text:#2b3648;\n    --muted:#647184;\n    --white:#ffffff;\n    --border:#e4ebf2;\n  }\n  *{box-sizing:border-box;margin:0;padding:0;}\n  body{\n    font-family:'Segoe UI',Arial,Helvetica,sans-serif;\n    color:var(--text);\n    background:var(--white);\n    line-height:1.5;\n  }\n  img{max-width:100%;display:block;}\n  .icon-svg{width:20px;height:20px;stroke:currentColor;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;}\n  a{text-decoration:none;color:inherit;}\n  ul{list-style:none;}\n  .container{\n    max-width:1180px;\n    margin:0 auto;\n    padding:0 24px;\n  }\n  .eyebrow{\n    color:var(--teal);\n    font-weight:700;\n    letter-spacing:1.5px;\n    font-size:13px;\n    text-transform:uppercase;\n    margin-bottom:8px;\n    display:block;\n  }\n  h1,h2,h3{\n    color:var(--navy);\n    font-weight:800;\n  }\n  .btn{\n    display:inline-block;\n    padding:13px 26px;\n    border-radius:6px;\n    font-weight:600;\n    font-size:15px;\n    cursor:pointer;\n    border:2px solid transparent;\n    transition:all .2s ease;\n  }\n  .btn-primary{\n    background:var(--blue);\n    color:#fff;\n  }\n  .btn-primary:hover{background:var(--navy);}\n  .btn-outline{\n    background:transparent;\n    border-color:var(--blue);\n    color:var(--blue);\n  }\n  .btn-outline:hover{background:var(--blue);color:#fff;}\n\n  /* ===== Brand Banner ===== */\n  .brand-banner{\n    text-align:center;\n    padding:30px 0 26px;\n    background:linear-gradient(180deg,#fbfdff 0%, #ffffff 100%);\n  }\n  .brand-banner-img{\n    height:110px;\n    width:auto;\n    margin:0 auto;\n  }\n\n  /* ===== Nav ===== */\n  header.nav{\n    background:#fff;\n    border-bottom:1px solid var(--border);\n    position:sticky;\n    top:0;\n    z-index:100;\n  }\n  .nav-inner{\n    display:flex;\n    align-items:center;\n    justify-content:space-between;\n    padding:14px 24px;\n  }\n  .nav-logo{\n    display:flex;\n    align-items:center;\n    gap:8px;\n    font-weight:800;\n    color:var(--navy);\n    font-size:14px;\n    line-height:1.1;\n  }\n  .nav-logo img{width:38px;height:38px;object-fit:contain;}\n  .nav-logo .sub{\n    display:block;\n    font-size:9px;\n    letter-spacing:1px;\n    color:var(--muted);\n    font-weight:600;\n  }\n  .nav-links{\n    display:flex;\n    gap:26px;\n    font-size:14.5px;\n    font-weight:600;\n    color:var(--text);\n  }\n  .nav-links li a{\n    display:flex;\n    align-items:center;\n    gap:4px;\n  }\n  .burger svg{display:block;}\n  .nav-links li a:hover{color:var(--blue);}\n  .nav-cta{\n    background:var(--blue);\n    color:#fff;\n    padding:11px 20px;\n    border-radius:6px;\n    font-weight:600;\n    font-size:14px;\n    white-space:nowrap;\n  }\n  .nav-cta:hover{background:var(--navy);}\n  .burger{display:none;background:none;border:none;font-size:24px;color:var(--navy);cursor:pointer;}\n\n  /* ===== Mobile slide-out menu ===== */\n  .mobile-overlay{\n    position:fixed;\n    inset:0;\n    background:rgba(13,32,56,.55);\n    opacity:0;\n    visibility:hidden;\n    transition:opacity .3s ease, visibility .3s ease;\n    z-index:199;\n  }\n  .mobile-overlay.active{opacity:1;visibility:visible;}\n  .mobile-drawer{\n    position:fixed;\n    top:0;\n    right:0;\n    height:100%;\n    width:80%;\n    max-width:320px;\n    background:#fff;\n    z-index:200;\n    box-shadow:-8px 0 30px rgba(18,42,77,.2);\n    transform:translateX(100%);\n    transition:transform .35s cubic-bezier(.4,0,.2,1);\n    display:flex;\n    flex-direction:column;\n    overflow-y:auto;\n  }\n  .mobile-drawer.active{transform:translateX(0);}\n  .mobile-drawer-head{\n    display:flex;\n    align-items:center;\n    justify-content:space-between;\n    padding:18px 20px;\n    border-bottom:1px solid var(--border);\n  }\n  .mobile-drawer-head .nav-logo{font-size:13px;}\n  .mobile-drawer-head .nav-logo img{width:32px;height:32px;}\n  .mobile-close{\n    background:var(--ice);\n    border:none;\n    width:34px;height:34px;\n    border-radius:50%;\n    display:flex;align-items:center;justify-content:center;\n    color:var(--navy);\n    cursor:pointer;\n    flex-shrink:0;\n  }\n  .mobile-drawer-links{\n    display:flex;\n    flex-direction:column;\n    padding:10px 8px;\n  }\n  .mobile-drawer-links li a{\n    display:flex;\n    align-items:center;\n    justify-content:space-between;\n    padding:15px 14px;\n    font-size:15.5px;\n    font-weight:600;\n    color:var(--navy);\n    border-bottom:1px solid var(--border);\n  }\n  .mobile-drawer-links li a:active,\n  .mobile-drawer-links li a:hover{color:var(--blue);}\n  .mobile-drawer-links li a svg{color:#b7c2d1;}\n  .mobile-drawer-cta{\n    margin:20px;\n    text-align:center;\n  }\n  .mobile-drawer-cta .btn{width:100%;}\n  body.drawer-open{overflow:hidden;}\n\n  /* ===== Hero ===== */\n  .hero{\n    background:var(--ice);\n    padding:56px 0 60px;\n  }\n  .hero-grid{\n    display:grid;\n    grid-template-columns:1fr 1.15fr;\n    gap:40px;\n    align-items:center;\n  }\n  .hero h2{\n    font-size:40px;\n    line-height:1.18;\n  }\n  .hero h2 .accent{color:var(--teal);}\n  .hero p.lead{\n    margin-top:18px;\n    font-size:16px;\n    color:var(--text);\n    font-weight:600;\n    max-width:460px;\n  }\n  .hero p.sub{\n    margin-top:10px;\n    color:var(--muted);\n    font-size:14.5px;\n    max-width:460px;\n  }\n  .hero-actions{\n    display:flex;\n    gap:14px;\n    margin-top:26px;\n  }\n  .hero-trust{\n    display:flex;\n    gap:26px;\n    margin-top:34px;\n    flex-wrap:wrap;\n  }\n  .hero-trust li{\n    display:flex;\n    align-items:center;\n    gap:8px;\n    font-size:13px;\n    font-weight:600;\n    color:var(--navy);\n  }\n  .hero-trust li .dot{\n    width:30px;height:30px;\n    border-radius:50%;\n    background:var(--teal-light);\n    color:var(--teal);\n    display:flex;align-items:center;justify-content:center;\n    font-size:15px;\n  }\n  .hero-visual{\n    position:relative;\n  }\n  .hero-photo{\n    position:relative;\n    isolation:isolate;\n  }\n  .hero-photo img{\n    width:100%;height:340px;object-fit:cover;object-position:top center;display:block;\n    border-radius:16px;\n    -webkit-mask-image: radial-gradient(ellipse 68% 62% at 50% 46%, #000 55%, rgba(0,0,0,.55) 72%, transparent 96%);\n    mask-image: radial-gradient(ellipse 68% 62% at 50% 46%, #000 55%, rgba(0,0,0,.55) 72%, transparent 96%);\n    filter:drop-shadow(0 20px 35px rgba(18,42,77,.18));\n  }\n  .stat-card{\n    position:absolute;\n    right:-10px;\n    background:#fff;\n    border-radius:14px;\n    padding:14px 20px 14px 16px;\n    box-shadow:0 10px 24px rgba(18,42,77,.10), 0 2px 6px rgba(18,42,77,.06);\n    display:flex;\n    align-items:center;\n    gap:13px;\n    min-width:190px;\n    border:1px solid rgba(18,42,77,.05);\n    isolation:isolate;\n    overflow:hidden;\n    transition:transform .3s ease, box-shadow .3s ease;\n    animation:statPop .6s ease backwards;\n  }\n  .stat-card::before{\n    content:\"\";\n    position:absolute;\n    left:0;top:0;bottom:0;\n    width:4px;\n    border-radius:0 4px 4px 0;\n  }\n  .stat-card:hover{\n    transform:translateY(-4px) scale(1.02);\n    box-shadow:0 18px 34px rgba(18,42,77,.16), 0 4px 10px rgba(18,42,77,.08);\n  }\n  @keyframes statPop{\n    from{opacity:0; transform:translateY(10px) scale(.96);}\n    to{opacity:1; transform:translateY(0) scale(1);}\n  }\n  .stat-card .icon{\n    width:40px;height:40px;\n    border-radius:11px;\n    display:flex;align-items:center;justify-content:center;\n    flex-shrink:0;\n    box-shadow:inset 0 0 0 1px rgba(255,255,255,.5);\n  }\n  .stat-card .icon svg{width:20px;height:20px;stroke-width:2.1;}\n  .stat-card .label{font-size:10.5px;color:var(--muted);font-weight:700;letter-spacing:.3px;text-transform:uppercase;}\n  .stat-card .value{font-size:19px;font-weight:800;color:var(--navy);letter-spacing:.2px;margin-top:1px;}\n  .stat-1{top:0; animation-delay:.05s;}\n  .stat-1 .icon{background:linear-gradient(135deg,#e6f7ee,#c9f0da);color:#1aa76b;}\n  .stat-2{top:120px; animation-delay:.2s;}\n  .stat-2 .icon{background:linear-gradient(135deg,var(--teal-light),#c9ece8);color:var(--teal);}\n  .stat-3{top:240px; animation-delay:.35s;}\n  .stat-3 .icon{background:linear-gradient(135deg,#eaf1fb,#cfe1f6);color:var(--blue);}\n\n  /* ===== Section shared ===== */\n  section{padding:70px 0;}\n  .section-head{\n    text-align:center;\n    max-width:640px;\n    margin:0 auto 44px;\n  }\n  .section-head h2{font-size:30px;line-height:1.3;}\n\n  /* ===== Services ===== */\n  .services{background:var(--ice);}\n  .service-grid{\n    display:grid;\n    grid-template-columns:repeat(4,1fr);\n    gap:20px;\n  }\n  .service-card{\n    background:#fff;\n    border-radius:12px;\n    padding:26px 20px;\n    text-align:center;\n    border:1px solid var(--border);\n    transition:transform .2s ease, box-shadow .2s ease;\n  }\n  .service-card:hover{\n    transform:translateY(-4px);\n    box-shadow:0 14px 30px rgba(18,42,77,.1);\n    border-color:transparent;\n  }\n  .service-card .ico{\n    width:52px;height:52px;\n    margin:0 auto 14px;\n    border-radius:12px;\n    background:var(--teal-light);\n    color:var(--teal);\n    display:flex;align-items:center;justify-content:center;\n    font-size:22px;\n  }\n  .service-card h3{font-size:15.5px;margin-bottom:6px;}\n  .service-card p{font-size:13px;color:var(--muted);}\n\n  /* ===== Why choose ===== */\n  .why{background:#fff;}\n  .why-grid{\n    display:grid;\n    grid-template-columns:1fr 1fr;\n    gap:50px;\n    align-items:center;\n  }\n  .why-list{margin-top:18px;}\n  .why-list li{\n    display:flex;\n    align-items:flex-start;\n    gap:10px;\n    margin-bottom:12px;\n    font-size:14.5px;\n    font-weight:600;\n    color:var(--navy);\n  }\n  .why-list li .check{\n    color:var(--teal);\n    font-weight:800;\n  }\n  .why p.desc{color:var(--muted);font-size:14.5px;margin:14px 0 6px;max-width:480px;}\n  .why-visual{position:relative;}\n  .why-photo{\n    position:relative;\n    isolation:isolate;\n  }\n  .why-photo img{\n    width:100%;height:360px;object-fit:cover;\n    border-radius:16px;\n    -webkit-mask-image: radial-gradient(ellipse 66% 60% at 50% 48%, #000 55%, rgba(0,0,0,.5) 74%, transparent 97%);\n    mask-image: radial-gradient(ellipse 66% 60% at 50% 48%, #000 55%, rgba(0,0,0,.5) 74%, transparent 97%);\n    filter:drop-shadow(0 18px 30px rgba(18,42,77,.16));\n  }\n  .quote-card{\n    position:absolute;\n    left:-30px;\n    bottom:-24px;\n    background:#fff;\n    border-radius:12px;\n    padding:20px 24px;\n    box-shadow:0 16px 34px rgba(18,42,77,.16);\n    max-width:290px;\n    display:flex;\n    gap:14px;\n    align-items:flex-start;\n  }\n  .quote-card .mark{\n    color:var(--teal);\n    font-size:26px;\n    font-weight:800;\n  }\n  .quote-card p{\n    font-size:14px;\n    font-weight:700;\n    color:var(--navy);\n    line-height:1.4;\n  }\n  .quote-card .rule{\n    width:34px;height:3px;\n    background:var(--teal);\n    margin-top:10px;\n    border-radius:2px;\n  }\n\n  /* ===== Divider band ===== */\n  .band{\n    background:var(--navy-dark);\n    height:70px;\n  }\n\n  /* ===== Process ===== */\n  .process{background:#fff;padding-top:60px;}\n  .steps-row{\n    display:grid;\n    grid-template-columns:repeat(4,1fr);\n    gap:20px;\n    position:relative;\n  }\n  .step{\n    text-align:center;\n    position:relative;\n  }\n  .step .circle{\n    width:64px;height:64px;\n    border-radius:50%;\n    background:var(--teal-light);\n    color:var(--teal);\n    display:flex;align-items:center;justify-content:center;\n    font-size:24px;\n    margin:0 auto 16px;\n    border:1px solid #d8ede9;\n  }\n  .step h3{font-size:15px;margin-bottom:8px;}\n  .step p{font-size:13px;color:var(--muted);padding:0 8px;}\n  .arrow{\n    position:absolute;\n    top:32px;\n    right:-30px;\n    color:#c7d3e0;\n    font-size:20px;\n  }\n\n  /* ===== Footer ===== */\n  footer{\n    background:var(--navy-dark);\n    color:#c7d3e0;\n    padding:60px 0 26px;\n  }\n  .footer-grid{\n    display:grid;\n    grid-template-columns:1.4fr 1fr 1fr 1.2fr;\n    gap:32px;\n    padding-bottom:36px;\n    border-bottom:1px solid rgba(255,255,255,.1);\n  }\n  .footer-logo{\n    display:flex;\n    align-items:center;\n    gap:10px;\n    color:#fff;\n    font-weight:800;\n    font-size:15px;\n    margin-bottom:14px;\n  }\n  .footer-logo-badge{\n    width:42px;height:42px;\n    border-radius:10px;\n    background:#fff;\n    display:flex;align-items:center;justify-content:center;\n    padding:5px;\n    flex-shrink:0;\n  }\n  .footer-logo-badge img{width:100%;height:100%;object-fit:contain;}\n  .footer-logo .sub{display:block;font-size:9px;color:#9fb0c6;font-weight:600;}\n  footer p{font-size:13px;line-height:1.7;color:#9fb0c6;}\n  .footer-social{display:flex;gap:10px;margin-top:16px;}\n  .footer-social a{\n    width:32px;height:32px;\n    border-radius:50%;\n    background:rgba(255,255,255,.08);\n    display:flex;align-items:center;justify-content:center;\n    font-size:14px;\n  }\n  footer h4{color:#fff;font-size:14.5px;margin-bottom:16px;}\n  footer .col ul li{margin-bottom:10px;}\n  footer .col ul li a{font-size:13.5px;color:#c7d3e0;}\n  footer .col ul li a:hover{color:var(--teal);}\n  .contact-item{\n    display:flex;\n    gap:10px;\n    margin-bottom:14px;\n    font-size:13.5px;\n    color:#c7d3e0;\n  }\n  .contact-item .ic{color:var(--teal);flex-shrink:0;}\n  .footer-bottom{\n    display:flex;\n    justify-content:space-between;\n    padding-top:22px;\n    font-size:12.5px;\n    color:#8595ac;\n    flex-wrap:wrap;\n    gap:10px;\n  }\n  .footer-bottom a{color:#8595ac;}\n  .footer-bottom a:hover{color:#fff;}\n\n  /* ===== Responsive ===== */\n  @media(max-width:900px){\n    .brand-banner{display:none;}\n  }\n  @media(max-width:960px){\n    .hero-grid{grid-template-columns:1fr;}\n    .hero-visual{margin-top:30px;}\n    .stat-card{\n      position:static;\n      width:100%;\n      min-width:0;\n      margin-bottom:12px;\n      animation:none;\n    }\n    .stat-card:hover{transform:translateY(-2px);}\n    .hero-visual > div.stat-card:first-of-type{margin-top:16px;}\n    .service-grid{grid-template-columns:repeat(2,1fr);}\n    .why-grid{grid-template-columns:1fr;}\n    .why-visual{margin-bottom:60px;}\n    .steps-row{grid-template-columns:repeat(2,1fr);row-gap:36px;}\n    .arrow{display:none;}\n    .footer-grid{grid-template-columns:1fr 1fr;}\n  }\n  @media(max-width:700px){\n    .nav-links{display:none;}\n    .burger{display:block;}\n    .nav-cta{display:none;}\n    .hero h2{font-size:30px;}\n    .stat-card{padding:12px 16px;gap:11px;}\n    .stat-card .icon{width:36px;height:36px;}\n    .stat-card .value{font-size:17px;}\n    .service-grid{grid-template-columns:1fr;}\n    .steps-row{grid-template-columns:1fr;}\n    .footer-grid{grid-template-columns:1fr;}\n  }\n"
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
      <a href="#" className="nav-logo">
        <img src={iconLogo} alt="Anmacwin Technologies" />
        <span>
          ANMACWIN<span className="sub">TECHNOLOGIES</span>
        </span>
      </a>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a >About Us</a>
          </li>
          <li>
            <a href="#services">
              Services{" "}
              <svg
                style={{
                  width: 10,
                  height: 10,
                  stroke: "currentColor",
                  fill: "none",
                  strokeWidth: 2
                }}
                viewBox="0 0 24 24"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#solutions">Solutions</a>
          </li>
          <li>
            <a href="#why">Why Us</a>
          </li>
          <li>
            <a href="#resources">
              Resources{" "}
              <svg
                style={{
                  width: 10,
                  height: 10,
                  stroke: "currentColor",
                  fill: "none",
                  strokeWidth: 2
                }}
                viewBox="0 0 24 24"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </nav>
      <a href="#contact" className="nav-cta">
        Get a Free Consultation
      </a>
      <button className="burger" id="menuOpenBtn" aria-label="Open menu">
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
  <div className="mobile-overlay" id="menuOverlay" />
  <aside className="mobile-drawer" id="mobileDrawer">
    <div className="mobile-drawer-head">
      <a href="#" className="nav-logo">
        <img src={iconLogo} alt="Anmacwin Technologies" />
        <span>
          ANMACWIN<span className="sub">TECHNOLOGIES</span>
        </span>
      </a>
      <button
        className="mobile-close"
        id="menuCloseBtn"
        aria-label="Close menu"
      >
        <svg
          style={{
            width: 16,
            height: 16,
            stroke: "currentColor",
            strokeWidth: "2.4",
            strokeLinecap: "round"
          }}
          viewBox="0 0 24 24"
        >
          <line x1={4} y1={4} x2={20} y2={20} />
          <line x1={20} y1={4} x2={4} y2={20} />
        </svg>
      </button>
    </div>
    <ul className="mobile-drawer-links">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About Us</a>
      </li>
      <li>
        <a href="#services">
          Services{" "}
          <svg
            style={{ width: 11, height: 11, fill: "none", strokeWidth: 2 }}
            viewBox="0 0 24 24"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
      </li>
      <li>
        <a href="#solutions">Solutions</a>
      </li>
      <li>
        <a href="#why">Why Us</a>
      </li>
      <li>
        <a href="#resources">
          Resources{" "}
          <svg
            style={{ width: 11, height: 11, fill: "none", strokeWidth: 2 }}
            viewBox="0 0 24 24"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
      </li>
      <li>
        <a href="#contact">Contact Us</a>
      </li>
    </ul>
    <div className="mobile-drawer-cta">
      <a href="#contact" className="btn btn-primary">
        Get a Free Consultation
      </a>
    </div>
  </aside>
  {/* Hero */}
  <section className="hero" id="home">
    <div className="container hero-grid">
      <div className="hero-copy">
        <h2>
          Maximize Revenue.
          <br />
          <span className="accent">Minimize Stress.</span>
        </h2>
        <p className="lead">
          End-to-end Medical Billing Solutions that Power Your Practice.
        </p>
        <p className="sub">
          We handle the complexities of billing so you can focus on what matters
          most – your patients.
        </p>
        <div className="hero-actions">
          <a href="#services" className="btn btn-primary">
            Our Services
          </a>
          <a href="#contact" className="btn btn-outline">
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
              <rect x={3} y={4} width={18} height={18} rx={2} />
              <line x1={16} y1={2} x2={16} y2={6} />
              <line x1={8} y1={2} x2={8} y2={6} />
              <line x1={3} y1={10} x2={21} y2={10} />
            </svg>
            Schedule a Call
          </a>
        </div>
        <ul className="hero-trust">
          <li>
            <span className="dot">
              <svg
                className="icon-svg"
                style={{ width: 16, height: 16 }}
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </span>{" "}
            HIPAA Compliant
          </li>
          <li>
            <span className="dot">
              <svg
                className="icon-svg"
                style={{ width: 16, height: 16 }}
                viewBox="0 0 24 24"
              >
                <path d="M3 3v18h18" />
                <path d="M7 15l4-6 3 3 5-7" />
              </svg>
            </span>{" "}
            98% Clean Claim Rate
          </li>
          <li>
            <span className="dot">
              <svg
                className="icon-svg"
                style={{ width: 16, height: 16 }}
                viewBox="0 0 24 24"
              >
                <path d="M3 18v-6a9 9 0 0118 0v6" />
                <path d="M21 19a2 2 0 01-2 2h-1v-6h3z" />
                <path d="M3 19a2 2 0 002 2h1v-6H3z" />
              </svg>
            </span>{" "}
            24/7 Support
          </li>
        </ul>
      </div>
      <div className="hero-visual">
        <div className="hero-photo">
          <img
            src={heroWoman}
            alt="Medical billing professional working on laptop"
          />
        </div>
        <div className="stat-card stat-1">
          <div className="icon">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <polyline points="3 17 9 11 13 15 21 6" />
              <polyline points="15 6 21 6 21 12" />
            </svg>
          </div>
          <div>
            <div className="label">Increase Collections</div>
            <div className="value">
              Up to{" "}
              <span className="count-up" data-target={30} data-suffix="%">
                0%
              </span>
            </div>
          </div>
        </div>
        <div className="stat-card stat-2">
          <div className="icon">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <circle cx={12} cy={12} r={9} />
              <polyline points="8 12.5 11 15.5 16 9" />
            </svg>
          </div>
          <div>
            <div className="label">Claim Approval Rate</div>
            <div className="value">
              <span className="count-up" data-target={98} data-suffix="%">
                0%
              </span>
            </div>
          </div>
        </div>
        <div className="stat-card stat-3">
          <div className="icon">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <rect x={3} y={4} width={18} height={18} rx={2} />
              <line x1={16} y1={2} x2={16} y2={6} />
              <line x1={8} y1={2} x2={8} y2={6} />
              <line x1={3} y1={10} x2={21} y2={10} />
            </svg>
          </div>
          <div>
            <div className="label">Days in A/R</div>
            <div className="value">
              <span className="count-up" data-target={18} data-suffix="">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Services */}
  <section className="services" id="services">
    <div className="container">
      <div className="section-head">
        <span className="eyebrow">What we do</span>
        <h2>
          Comprehensive RCM Solutions
          <br />
          Tailored to Your Practice Needs
        </h2>
      </div>
      <div className="service-grid">
        <div className="service-card">
          <div className="ico">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <path d="M6 2.5h9l4 4v14a1 1 0 01-1 1H6a1 1 0 01-1-1v-17a1 1 0 011-1z" />
              <polyline points="15 2.5 15 6.5 19 6.5" />
              <line x1="7.5" y1={11} x2="12.5" y2={11} />
              <line x1="7.5" y1={14} x2="10.5" y2={14} />
              <circle cx={16} cy={16} r="3.2" fill="var(--teal-light)" />
              <path d="M14.6 16.1l1 1 1.9-2.1" />
            </svg>
          </div>
          <h3>Medical Billing</h3>
          <p>
            Accurate billing, timely submissions and maximum reimbursements.
          </p>
        </div>
        <div className="service-card">
          <div className="ico">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <rect x={2} y={5} width={20} height="14.5" rx={2} />
              <circle cx="8.7" cy="10.6" r={2} />
              <path d="M5.3 16c.6-1.6 1.8-2.3 3.4-2.3s2.8.7 3.4 2.3" />
              <line x1="14.5" y1={9} x2="18.5" y2={9} />
              <line x1="14.5" y1={12} x2="18.5" y2={12} />
              <path
                d="M14.5 16.3l1.2 5-1.7-1-1.7 1 1.2-5z"
                fill="var(--teal-light)"
              />
            </svg>
          </div>
          <h3>Credentialing Services</h3>
          <p>Fast and hassle-free provider credentialing with all payers.</p>
        </div>
        <div className="service-card">
          <div className="ico">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <circle cx={12} cy={12} r="9.2" />
              <path d="M14.7 9.2c-.5-1-1.5-1.5-2.9-1.5-1.9 0-3.1.9-3.1 2.1 0 1.3 1.3 1.8 3.1 2.1 1.9.3 3.1.8 3.1 2.1 0 1.2-1.2 2.1-3.1 2.1-1.4 0-2.5-.5-2.9-1.5" />
              <line x1={12} y1="5.6" x2={12} y2="7.7" />
              <line x1={12} y1="16.3" x2={12} y2="18.4" />
              <polyline points="9 4.5 12 1.8 15 4.5" strokeWidth="1.6" />
            </svg>
          </div>
          <h3>AR Recovery</h3>
          <p>Recover your unpaid claims and improve cash flow.</p>
        </div>
        <div className="service-card">
          <div className="ico">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <path d="M6 2.5h9l4 4v14a1 1 0 01-1 1H6a1 1 0 01-1-1v-17a1 1 0 011-1z" />
              <polyline points="15 2.5 15 6.5 19 6.5" />
              <line x1="7.5" y1="10.5" x2={13} y2="10.5" />
              <circle cx="15.5" cy="15.5" r="3.6" fill="var(--teal-light)" />
              <line x1={14} y1={14} x2={17} y2={17} />
              <line x1={17} y1={14} x2={14} y2={17} />
            </svg>
          </div>
          <h3>Denial Management</h3>
          <p>Identify, appeal and overturn denials effectively.</p>
        </div>
        <div className="service-card">
          <div className="ico">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <rect x={2} y="5.5" width={20} height={14} rx="2.2" />
              <line x1={2} y1="9.5" x2={22} y2="9.5" />
              <line x1={5} y1="14.5" x2="9.5" y2="14.5" />
              <line x1={5} y1={17} x2="7.5" y2={17} />
              <circle cx="17.5" cy="15.5" r="3.3" fill="var(--teal-light)" />
              <path d="M16.1 15.5l1 1 1.9-2.1" />
            </svg>
          </div>
          <h3>Payment Posting</h3>
          <p>Accurate and timely posting for zero balance accuracy.</p>
        </div>
        <div className="service-card">
          <div className="ico">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <path d="M12 2.5l7.5 3v6c0 5.5-3.6 9.2-7.5 10.5-3.9-1.3-7.5-5-7.5-10.5v-6z" />
              <path d="M9 12.2l2.1 2.1 4-4.4" />
              <path d="M12 2.5v20" strokeOpacity=".35" />
            </svg>
          </div>
          <h3>Eligibility Verification</h3>
          <p>Real-time insurance verification to reduce claim rejections.</p>
        </div>
        <div className="service-card">
          <div className="ico">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <rect x="3.5" y="2.5" width={12} height={16} rx="1.6" />
              <line x1="6.3" y1="6.3" x2="12.7" y2="6.3" />
              <line x1="6.3" y1="9.3" x2="12.7" y2="9.3" />
              <path d="M6.3 12.3l1.4 1.4 2.6-2.8" />
              <circle cx="16.3" cy="16.3" r="4.3" fill="var(--teal-light)" />
              <line x1="19.4" y1="19.4" x2="21.7" y2="21.7" />
            </svg>
          </div>
          <h3>Medical Billing Audit</h3>
          <p>Detailed audits to find gaps, errors and new opportunities.</p>
        </div>
        <div className="service-card">
          <div className="ico">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <line x1={3} y1={21} x2={21} y2={21} />
              <rect x="4.5" y={14} width="3.2" height={7} rx=".6" />
              <rect x="10.4" y={9} width="3.2" height={12} rx=".6" />
              <rect x="16.3" y="12.5" width="3.2" height="8.5" rx=".6" />
              <polyline
                points="4.5 8.5 10 4.5 14.5 6.8 19.5 2.5"
                stroke="var(--teal)"
                strokeWidth="1.8"
              />
              <polyline
                points="16 2.5 19.5 2.5 19.5 6"
                stroke="var(--teal)"
                strokeWidth="1.8"
              />
            </svg>
          </div>
          <h3>Reporting &amp; Analytics</h3>
          <p>Actionable reports to track performance and growth.</p>
        </div>
      </div>
    </div>
  </section>
  {/* Why Choose Us */}
  <section className="why" id="why">
    <div className="container why-grid">
      <div className="why-copy">
        <span className="eyebrow">The Anmacwin Advantage</span>
        <h2>
          Your Success is
          <br />
          Our Priority
        </h2>
        <p className="desc">
          We combine technology, expertise and transparency to deliver superior
          RCM results.
        </p>
        <ul className="why-list">
          <li>
            <span className="check">
              <svg
                className="icon-svg"
                style={{ width: 16, height: 16 }}
                viewBox="0 0 24 24"
              >
                <circle cx={12} cy={12} r={10} />
                <polyline points="8 12.5 11 15.5 16 8.5" />
              </svg>
            </span>{" "}
            Experienced U.S. Based Billing Experts
          </li>
          <li>
            <span className="check">
              <svg
                className="icon-svg"
                style={{ width: 16, height: 16 }}
                viewBox="0 0 24 24"
              >
                <circle cx={12} cy={12} r={10} />
                <polyline points="8 12.5 11 15.5 16 8.5" />
              </svg>
            </span>{" "}
            Advanced Technology &amp; Secure Systems
          </li>
          <li>
            <span className="check">
              <svg
                className="icon-svg"
                style={{ width: 16, height: 16 }}
                viewBox="0 0 24 24"
              >
                <circle cx={12} cy={12} r={10} />
                <polyline points="8 12.5 11 15.5 16 8.5" />
              </svg>
            </span>{" "}
            Transparent Processes &amp; Real-time Reporting
          </li>
          <li>
            <span className="check">
              <svg
                className="icon-svg"
                style={{ width: 16, height: 16 }}
                viewBox="0 0 24 24"
              >
                <circle cx={12} cy={12} r={10} />
                <polyline points="8 12.5 11 15.5 16 8.5" />
              </svg>
            </span>{" "}
            Dedicated Account Managers
          </li>
          <li>
            <span className="check">
              <svg
                className="icon-svg"
                style={{ width: 16, height: 16 }}
                viewBox="0 0 24 24"
              >
                <circle cx={12} cy={12} r={10} />
                <polyline points="8 12.5 11 15.5 16 8.5" />
              </svg>
            </span>{" "}
            HIPAA Compliant &amp; Data Secured Focused
          </li>
        </ul>
        <a href="#about" className="btn btn-primary" style={{ marginTop: 10 }}>
          Learn More About Us
        </a>
      </div>
      <div className="why-visual">
        <div className="why-photo">
          <img
            src={heroMan}
            alt="Billing account manager on a call"
          />
        </div>
        <div className="quote-card">
          <span className="mark">
            <svg
              style={{ width: 22, height: 22, fill: "var(--teal)" }}
              viewBox="0 0 24 24"
            >
              <path d="M9.5 6C6.5 7 4.5 9.5 4.5 13c0 2.8 1.8 4.5 4 4.5 1.9 0 3.3-1.4 3.3-3.2 0-1.7-1.2-3-2.8-3-.3 0-.6 0-.8.1.2-1.8 1.6-3.4 3.3-4l-1-1.4zm9 0c-3 1-5 3.5-5 7 0 2.8 1.8 4.5 4 4.5 1.9 0 3.3-1.4 3.3-3.2 0-1.7-1.2-3-2.8-3-.3 0-.6 0-.8.1.2-1.8 1.6-3.4 3.3-4l-1-1.4z" />
            </svg>
          </span>
          <div>
            <p>We don't just process claims, we optimize your revenue cycle.</p>
            <div className="rule" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="band" />
  {/* Process */}
  <section className="process">
    <div className="container">
      <div className="section-head">
        <span className="eyebrow">Our Process</span>
        <h2>A Simple, Transparent Workflow</h2>
      </div>
      <div className="steps-row">
        <div className="step">
          <div className="circle">
            <svg
              className="icon-svg"
              style={{ width: 26, height: 26 }}
              viewBox="0 0 24 24"
            >
              <path d="M3 12l3-8h12l3 8" />
              <path d="M3 12v6a1 1 0 001 1h16a1 1 0 001-1v-6" />
              <path d="M3 12h5l1 3h6l1-3h5" />
            </svg>
          </div>
          <h3>1. Receive &amp; Review</h3>
          <p>We collect and review your patient and insurance information.</p>
          <span className="arrow">
            <svg
              style={{
                width: 20,
                height: 20,
                stroke: "currentColor",
                fill: "none",
                strokeWidth: 2,
                strokeLinecap: "round"
              }}
              viewBox="0 0 24 24"
            >
              <line x1={4} y1={12} x2={20} y2={12} />
              <polyline points="14 6 20 12 14 18" />
            </svg>
          </span>
        </div>
        <div className="step">
          <div className="circle">
            <svg
              className="icon-svg"
              style={{ width: 26, height: 26 }}
              viewBox="0 0 24 24"
            >
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <path d="M8 13l2 2 4-5" />
            </svg>
          </div>
          <h3>2. Verify &amp; Submit</h3>
          <p>Insurance verification and accurate claim submission.</p>
          <span className="arrow">
            <svg
              style={{
                width: 20,
                height: 20,
                stroke: "currentColor",
                fill: "none",
                strokeWidth: 2,
                strokeLinecap: "round"
              }}
              viewBox="0 0 24 24"
            >
              <line x1={4} y1={12} x2={20} y2={12} />
              <polyline points="14 6 20 12 14 18" />
            </svg>
          </span>
        </div>
        <div className="step">
          <div className="circle">
            <svg
              className="icon-svg"
              style={{ width: 26, height: 26 }}
              viewBox="0 0 24 24"
            >
              <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8 9.9a16 16 0 006 6l1.4-1.3a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.8 2.1z" />
            </svg>
          </div>
          <h3>3. Follow Up</h3>
          <p>We follow up on claims and resolve denials.</p>
          <span className="arrow">
            <svg
              style={{
                width: 20,
                height: 20,
                stroke: "currentColor",
                fill: "none",
                strokeWidth: 2,
                strokeLinecap: "round"
              }}
              viewBox="0 0 24 24"
            >
              <line x1={4} y1={12} x2={20} y2={12} />
              <polyline points="14 6 20 12 14 18" />
            </svg>
          </span>
        </div>
        <div className="step">
          <div className="circle">
            <svg
              className="icon-svg"
              style={{ width: 26, height: 26 }}
              viewBox="0 0 24 24"
            >
              <circle cx={12} cy={12} r={9} />
              <polyline points="12 7 12 12 15.5 14" />
            </svg>
          </div>
          <h3>4. Get Paid</h3>
          <p>Payments are posted and you get real-time reports.</p>
        </div>
      </div>
    </div>
  </section>
  {/* Footer */}
  <footer id="contact">
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
            helping healthcare providers improve cash flow, reduce denials and
            focus on patient care.
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
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#solutions">Solutions</a>
            </li>
            <li>
              <a href="#resources">Resources</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
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
          © 2026 Anmacwin Technologies Private Limited. All Rights Reserved.
        </span>
        <span>
          <a href="#">Privacy Policy</a> &nbsp;|&nbsp;{" "}
          <a href="#">Terms of Service</a>
        </span>
      </div>
    </div>
  </footer>
</>

    )
}

export default Home;