function Services(){
    return(
        <>
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Services | Anmacwin Technologies</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n  :root{\n    --navy:#122a4d;\n    --navy-dark:#0d2038;\n    --blue:#1e5fa8;\n    --teal:#1aa79e;\n    --teal-light:#e7f6f4;\n    --ice:#eef5fb;\n    --text:#2b3648;\n    --muted:#647184;\n    --white:#ffffff;\n    --border:#e4ebf2;\n  }\n  *{box-sizing:border-box;margin:0;padding:0;}\n  body{\n    font-family:\'Segoe UI\',Arial,Helvetica,sans-serif;\n    color:var(--text);\n    background:var(--white);\n    line-height:1.5;\n  }\n  img{max-width:100%;display:block;}\n  .icon-svg{width:20px;height:20px;stroke:currentColor;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;}\n  a{text-decoration:none;color:inherit;}\n  ul{list-style:none;}\n  .container{\n    max-width:1180px;\n    margin:0 auto;\n    padding:0 24px;\n  }\n  .eyebrow{\n    color:var(--teal);\n    font-weight:700;\n    letter-spacing:1.5px;\n    font-size:13px;\n    text-transform:uppercase;\n    margin-bottom:8px;\n    display:block;\n  }\n  h1,h2,h3{\n    color:var(--navy);\n    font-weight:800;\n  }\n  .btn{\n    display:inline-block;\n    padding:13px 26px;\n    border-radius:6px;\n    font-weight:600;\n    font-size:15px;\n    cursor:pointer;\n    border:2px solid transparent;\n    transition:all .2s ease;\n  }\n  .btn-primary{background:var(--blue);color:#fff;}\n  .btn-primary:hover{background:var(--navy);}\n  .btn-outline{background:transparent;border-color:var(--blue);color:var(--blue);}\n  .btn-outline:hover{background:var(--blue);color:#fff;}\n\n  /* ===== Brand Banner ===== */\n  .brand-banner{text-align:center;padding:30px 0 26px;background:linear-gradient(180deg,#fbfdff 0%, #ffffff 100%);}\n  .brand-banner-img{height:110px;width:auto;margin:0 auto;}\n\n  /* ===== Nav ===== */\n  header.nav{background:#fff;border-bottom:1px solid var(--border);position:sticky;top:0;z-index:100;}\n  .nav-inner{display:flex;align-items:center;justify-content:space-between;padding:14px 24px;}\n  .nav-logo{display:flex;align-items:center;gap:8px;font-weight:800;color:var(--navy);font-size:14px;line-height:1.1;}\n  .nav-logo img{width:38px;height:38px;object-fit:contain;}\n  .nav-logo .sub{display:block;font-size:9px;letter-spacing:1px;color:var(--muted);font-weight:600;}\n  .nav-links{display:flex;gap:26px;font-size:14.5px;font-weight:600;color:var(--text);}\n  .nav-links li a{display:flex;align-items:center;gap:4px;}\n  .nav-links li a.active{color:var(--blue);}\n  .nav-links li a:hover{color:var(--blue);}\n  .burger svg{display:block;}\n  .nav-cta{background:var(--blue);color:#fff;padding:11px 20px;border-radius:6px;font-weight:600;font-size:14px;white-space:nowrap;}\n  .nav-cta:hover{background:var(--navy);}\n  .burger{display:none;background:none;border:none;font-size:24px;color:var(--navy);cursor:pointer;}\n\n  /* ===== Mobile slide-out menu ===== */\n  .mobile-overlay{position:fixed;inset:0;background:rgba(13,32,56,.55);opacity:0;visibility:hidden;transition:opacity .3s ease, visibility .3s ease;z-index:199;}\n  .mobile-overlay.active{opacity:1;visibility:visible;}\n  .mobile-drawer{position:fixed;top:0;right:0;height:100%;width:80%;max-width:320px;background:#fff;z-index:200;box-shadow:-8px 0 30px rgba(18,42,77,.2);transform:translateX(100%);transition:transform .35s cubic-bezier(.4,0,.2,1);display:flex;flex-direction:column;overflow-y:auto;}\n  .mobile-drawer.active{transform:translateX(0);}\n  .mobile-drawer-head{display:flex;align-items:center;justify-content:space-between;padding:18px 20px;border-bottom:1px solid var(--border);}\n  .mobile-drawer-head .nav-logo{font-size:13px;}\n  .mobile-drawer-head .nav-logo img{width:32px;height:32px;}\n  .mobile-close{background:var(--ice);border:none;width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:var(--navy);cursor:pointer;flex-shrink:0;}\n  .mobile-drawer-links{display:flex;flex-direction:column;padding:10px 8px;}\n  .mobile-drawer-links li a{display:flex;align-items:center;justify-content:space-between;padding:15px 14px;font-size:15.5px;font-weight:600;color:var(--navy);border-bottom:1px solid var(--border);}\n  .mobile-drawer-links li a.active,\n  .mobile-drawer-links li a:hover{color:var(--blue);}\n  .mobile-drawer-links li a svg{color:#b7c2d1;}\n  .mobile-drawer-cta{margin:20px;text-align:center;}\n  .mobile-drawer-cta .btn{width:100%;}\n  body.drawer-open{overflow:hidden;}\n\n  section{padding:70px 0;}\n  .section-head{text-align:center;max-width:640px;margin:0 auto 44px;}\n  .section-head h2{font-size:30px;line-height:1.3;}\n\n  /* ===== Services Hero ===== */\n  .svc-hero{background:var(--ice);padding:56px 0 64px;overflow:hidden;}\n  .svc-hero-grid{display:grid;grid-template-columns:1.05fr 1fr;gap:48px;align-items:center;}\n  .svc-hero h1{font-size:38px;line-height:1.2;}\n  .svc-hero h1 .accent{color:var(--teal);}\n  .svc-hero p.lead{margin-top:18px;font-size:16px;color:var(--text);font-weight:600;max-width:480px;}\n  .svc-hero p.sub{margin-top:10px;color:var(--muted);font-size:14.5px;max-width:480px;}\n  .svc-hero-actions{display:flex;gap:14px;margin-top:26px;}\n  .svc-hero-chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px;}\n  .svc-hero-chips span{background:#fff;border:1px solid var(--border);color:var(--navy);font-size:12.5px;font-weight:700;padding:7px 14px;border-radius:20px;}\n\n  /* Coverage illustration */\n  .cov-wrap{position:relative;}\n  .cov-card{\n    background:#fff;border-radius:18px;padding:24px 24px 20px;\n    box-shadow:0 24px 50px rgba(18,42,77,.16), 0 4px 12px rgba(18,42,77,.06);\n    border:1px solid rgba(18,42,77,.05);\n  }\n  .cov-card-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;}\n  .cov-card-head .title{font-size:12.5px;font-weight:700;color:var(--muted);letter-spacing:.3px;}\n  .cov-card-head .dots{display:flex;gap:6px;}\n  .cov-card-head .dots span{width:8px;height:8px;border-radius:50%;background:#d8e0ea;}\n  .cov-row{display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:1px solid var(--border);}\n  .cov-row:last-child{border-bottom:none;}\n  .cov-row .left{display:flex;align-items:center;gap:12px;}\n  .cov-row .ic{width:36px;height:36px;border-radius:9px;background:var(--teal-light);color:var(--teal);display:flex;align-items:center;justify-content:center;flex-shrink:0;}\n  .cov-row .name{font-size:13.5px;font-weight:700;color:var(--navy);}\n  .cov-row .desc{font-size:11.5px;color:var(--muted);}\n  .cov-row .stat{font-size:13px;font-weight:800;color:var(--teal);white-space:nowrap;}\n  .float-badge{\n    position:absolute;background:#fff;border-radius:12px;padding:12px 16px;\n    box-shadow:0 12px 26px rgba(18,42,77,.14);display:flex;align-items:center;gap:10px;\n    font-size:12px;font-weight:700;color:var(--navy);\n  }\n  .float-badge .ic{width:30px;height:30px;border-radius:8px;background:var(--teal-light);color:var(--teal);display:flex;align-items:center;justify-content:center;flex-shrink:0;}\n  .float-badge span.small{display:block;font-size:9.5px;color:var(--muted);font-weight:700;text-transform:uppercase;}\n  .badge-1{top:-16px;right:-20px;}\n\n  /* ===== Services grid ===== */\n  .svc-grid-section{background:#fff;}\n  .svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}\n  .svc-card{\n    background:#fff;border:1px solid var(--border);border-radius:14px;padding:28px 24px;\n    transition:transform .2s ease, box-shadow .2s ease, border-color .2s ease;position:relative;\n  }\n  .svc-card:hover{transform:translateY(-4px);box-shadow:0 16px 34px rgba(18,42,77,.1);border-color:transparent;}\n  .svc-card .ico{width:48px;height:48px;border-radius:12px;background:var(--teal-light);color:var(--teal);display:flex;align-items:center;justify-content:center;margin-bottom:16px;}\n  .svc-card h3{font-size:16.5px;margin-bottom:8px;}\n  .svc-card p{font-size:13.5px;color:var(--muted);margin-bottom:14px;}\n  .svc-card .learn{font-size:13px;font-weight:700;color:var(--blue);display:inline-flex;align-items:center;gap:5px;}\n  .svc-card .learn svg{width:13px;height:13px;transition:transform .2s ease;}\n  .svc-card:hover .learn svg{transform:translateX(3px);}\n  .svc-card .num-tag{position:absolute;top:22px;right:24px;font-size:11px;font-weight:800;color:var(--border);}\n\n  /* ===== Process ===== */\n  .process{background:var(--ice);}\n  .process-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;}\n  .process-step{position:relative;padding:0 18px;text-align:center;}\n  .process-step::before{\n    content:"";position:absolute;top:27px;left:calc(-50% + 27px);width:calc(100% - 54px);height:2px;\n    background:repeating-linear-gradient(90deg,var(--border) 0 6px,transparent 6px 12px);\n  }\n  .process-step:first-child::before{display:none;}\n  .process-num{\n    width:54px;height:54px;border-radius:50%;background:#fff;border:2px solid var(--teal);\n    color:var(--teal);font-weight:800;font-size:18px;display:flex;align-items:center;justify-content:center;\n    margin:0 auto 18px;position:relative;z-index:1;\n  }\n  .process-step h3{font-size:15px;margin-bottom:8px;}\n  .process-step p{font-size:13px;color:var(--muted);max-width:230px;margin:0 auto;}\n\n  /* ===== Why band ===== */\n  .why{background:#fff;}\n  .why-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;}\n  .why-list{display:flex;flex-direction:column;gap:20px;}\n  .why-item{display:flex;gap:16px;}\n  .why-item .chk{\n    width:30px;height:30px;border-radius:8px;background:var(--teal-light);color:var(--teal);\n    display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px;\n  }\n  .why-item h3{font-size:15px;margin-bottom:4px;}\n  .why-item p{font-size:13.5px;color:var(--muted);}\n  .why-panel{\n    background:linear-gradient(150deg,var(--navy) 0%, var(--navy-dark) 100%);\n    border-radius:18px;padding:36px 32px;color:#fff;position:relative;overflow:hidden;\n  }\n  .why-panel::after{\n    content:"";position:absolute;width:220px;height:220px;border-radius:50%;\n    background:radial-gradient(circle,rgba(26,167,158,.35),transparent 70%);\n    top:-70px;right:-70px;\n  }\n  .why-panel-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;position:relative;z-index:1;}\n  .why-stat .num{font-size:30px;font-weight:800;color:#fff;line-height:1;}\n  .why-stat .num .accent{color:var(--teal);}\n  .why-stat .lbl{margin-top:6px;font-size:12px;color:#9fb0c6;font-weight:600;}\n\n  /* ===== Specialties ===== */\n  .specialties{background:var(--ice);}\n  .spec-wrap{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;}\n  .spec-wrap span{background:#fff;border:1px solid var(--border);color:var(--navy);font-weight:700;font-size:13.5px;padding:11px 20px;border-radius:9px;}\n\n  /* ===== CTA band ===== */\n  .cta-band{background:var(--navy-dark);padding:60px 0;}\n  .cta-inner{display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;}\n  .cta-inner h2{color:#fff;font-size:26px;max-width:480px;}\n  .cta-inner p{color:#9fb0c6;font-size:14px;margin-top:8px;max-width:440px;}\n  .cta-actions{display:flex;gap:14px;flex-shrink:0;}\n\n  /* ===== Footer ===== */\n  footer{background:var(--navy-dark);color:#c7d3e0;padding:60px 0 26px;}\n  .footer-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr 1.2fr;gap:32px;padding-bottom:36px;border-bottom:1px solid rgba(255,255,255,.1);}\n  .footer-logo{display:flex;align-items:center;gap:10px;color:#fff;font-weight:800;font-size:15px;margin-bottom:14px;}\n  .footer-logo-badge{width:42px;height:42px;border-radius:10px;background:#fff;display:flex;align-items:center;justify-content:center;padding:5px;flex-shrink:0;}\n  .footer-logo-badge img{width:100%;height:100%;object-fit:contain;}\n  .footer-logo .sub{display:block;font-size:9px;color:#9fb0c6;font-weight:600;}\n  footer p{font-size:13px;line-height:1.7;color:#9fb0c6;}\n  .footer-social{display:flex;gap:10px;margin-top:16px;}\n  .footer-social a{width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;font-size:14px;}\n  footer h4{color:#fff;font-size:14.5px;margin-bottom:16px;}\n  footer .col ul li{margin-bottom:10px;}\n  footer .col ul li a{font-size:13.5px;color:#c7d3e0;}\n  footer .col ul li a:hover{color:var(--teal);}\n  .contact-item{display:flex;gap:10px;margin-bottom:14px;font-size:13.5px;color:#c7d3e0;}\n  .contact-item .ic{color:var(--teal);flex-shrink:0;}\n  .footer-bottom{display:flex;justify-content:space-between;padding-top:22px;font-size:12.5px;color:#8595ac;flex-wrap:wrap;gap:10px;}\n  .footer-bottom a{color:#8595ac;}\n  .footer-bottom a:hover{color:#fff;}\n\n  /* ===== Responsive ===== */\n  @media(max-width:900px){ .brand-banner{display:none;} }\n  @media(max-width:980px){\n    .svc-hero-grid{grid-template-columns:1fr;}\n    .cov-wrap{margin-top:40px;max-width:420px;}\n    .svc-grid{grid-template-columns:repeat(2,1fr);}\n    .process-grid{grid-template-columns:repeat(2,1fr);row-gap:40px;}\n    .process-step:nth-child(3)::before{display:none;}\n    .why-grid{grid-template-columns:1fr;}\n    .why-panel{order:-1;}\n    .footer-grid{grid-template-columns:1fr 1fr;}\n    .cta-inner{flex-direction:column;align-items:flex-start;}\n  }\n  @media(max-width:700px){\n    .nav-links{display:none;}\n    .burger{display:block;}\n    .nav-cta{display:none;}\n    .svc-hero h1{font-size:29px;}\n    .svc-grid{grid-template-columns:1fr;}\n    .process-grid{grid-template-columns:1fr;}\n    .process-step::before{display:none;}\n    .why-panel-grid{grid-template-columns:1fr 1fr;}\n    .footer-grid{grid-template-columns:1fr;}\n    .cta-actions{flex-direction:column;width:100%;}\n    .cta-actions .btn{width:100%;text-align:center;}\n  }\n'
    }}
  />
  {/* Brand Banner */}
  <div className="brand-banner">
    <img
      src="../assets/logo-full.png"
      alt="Anmacwin Technologies - Smart Billing. Better Collections."
      className="brand-banner-img"
    />
  </div>
  {/* Nav */}
  <header className="nav">
    <div className="nav-inner">
      <a href="index.html" className="nav-logo">
        <img src="../assets/logo-icon.png" alt="Anmacwin Technologies" />
        <span>
          ANMACWIN<span className="sub">TECHNOLOGIES</span>
        </span>
      </a>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="index.html#home">Home</a>
          </li>
          <li>
            <a href="about.html">About Us</a>
          </li>
          <li>
            <a href="services.html" className="active">
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
            <a href="index.html#solutions">Solutions</a>
          </li>
          <li>
            <a href="index.html#why">Why Us</a>
          </li>
          <li>
            <a href="index.html#resources">
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
            <a href="index.html#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
      <a href="index.html#contact" className="nav-cta">
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
      <a href="index.html" className="nav-logo">
        <img src="../assets/logo-icon.png" alt="Anmacwin Technologies" />
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
        <a href="index.html#home">Home</a>
      </li>
      <li>
        <a href="about.html">About Us</a>
      </li>
      <li>
        <a href="services.html" className="active">
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
        <a href="index.html#solutions">Solutions</a>
      </li>
      <li>
        <a href="index.html#why">Why Us</a>
      </li>
      <li>
        <a href="index.html#resources">
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
        <a href="index.html#contact">Contact Us</a>
      </li>
    </ul>
    <div className="mobile-drawer-cta">
      <a href="index.html#contact" className="btn btn-primary">
        Get a Free Consultation
      </a>
    </div>
  </aside>
  {/* Services Hero */}
  <section className="svc-hero" id="services">
    <div className="container svc-hero-grid">
      <div className="svc-hero-copy">
        <span className="eyebrow">Our Services</span>
        <h1>
          Every piece of your revenue cycle,{" "}
          <span className="accent">handled end to end.</span>
        </h1>
        <p className="lead">
          From the first claim to the last dollar collected, our team manages
          the billing work that keeps practices paid on time.
        </p>
        <p className="sub">
          Pick a single service to fill a gap in your current process, or hand
          us the whole revenue cycle — either way, you get a dedicated account
          manager and full visibility into every claim.
        </p>
        <div className="svc-hero-actions">
          <a href="index.html#contact" className="btn btn-primary">
            Get a Free Consultation
          </a>
          <a href="#svc-grid" className="btn btn-outline">
            Browse Services
          </a>
        </div>
        <div className="svc-hero-chips">
          <span>Multi-Specialty</span>
          <span>All Major Payers</span>
          <span>HIPAA-Compliant</span>
          <span>US-Based Support</span>
        </div>
      </div>
      <div className="cov-wrap">
        <div className="cov-card">
          <div className="cov-card-head">
            <span className="title">SERVICE COVERAGE · LIVE</span>
            <span className="dots">
              <span />
              <span />
              <span />
            </span>
          </div>
          <div className="cov-row">
            <div className="left">
              <span className="ic">
                <svg
                  className="icon-svg"
                  style={{ width: 17, height: 17 }}
                  viewBox="0 0 24 24"
                >
                  <rect x={3} y={4} width={18} height={16} rx={2} />
                  <line x1={3} y1={9} x2={21} y2={9} />
                  <path d="M7 13h4" />
                  <path d="M7 16.5h7" />
                </svg>
              </span>
              <div>
                <div className="name">Medical Billing</div>
                <div className="desc">Charge entry to submission</div>
              </div>
            </div>
            <span className="stat">96% clean</span>
          </div>
          <div className="cov-row">
            <div className="left">
              <span className="ic">
                <svg
                  className="icon-svg"
                  style={{ width: 17, height: 17 }}
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12.2l2.1 2.1 4-4.4" />
                  <path d="M12 2.5l7.5 3v6c0 5.5-3.6 9.2-7.5 10.5-3.9-1.3-7.5-5-7.5-10.5v-6z" />
                </svg>
              </span>
              <div>
                <div className="name">Credentialing</div>
                <div className="desc">Payer enrollment &amp; re-cred</div>
              </div>
            </div>
            <span className="stat">45 days avg</span>
          </div>
          <div className="cov-row">
            <div className="left">
              <span className="ic">
                <svg
                  className="icon-svg"
                  style={{ width: 17, height: 17 }}
                  viewBox="0 0 24 24"
                >
                  <path d="M13 2L4.5 13.5H11L9 22l10-13.5H12.5L13 2z" />
                </svg>
              </span>
              <div>
                <div className="name">Denial Management</div>
                <div className="desc">Appeals &amp; resubmission</div>
              </div>
            </div>
            <span className="stat">72% overturned</span>
          </div>
          <div className="cov-row">
            <div className="left">
              <span className="ic">
                <svg
                  className="icon-svg"
                  style={{ width: 17, height: 17 }}
                  viewBox="0 0 24 24"
                >
                  <circle cx={12} cy={12} r={9} />
                  <circle cx={12} cy={12} r="4.5" />
                  <circle cx={12} cy={12} r="0.8" fill="currentColor" />
                </svg>
              </span>
              <div>
                <div className="name">AR Recovery</div>
                <div className="desc">Aging accounts, 30–120+</div>
              </div>
            </div>
            <span className="stat">21 day cycle</span>
          </div>
        </div>
        <div className="float-badge badge-1">
          <span className="ic">
            <svg
              className="icon-svg"
              style={{ width: 16, height: 16 }}
              viewBox="0 0 24 24"
            >
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx={9} cy={7} r={4} />
              <path d="M23 21v-2a4 4 0 00-3-3.87" />
              <path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
          </span>
          <span>
            <span className="small">Specialties</span>25+ Covered
          </span>
        </div>
      </div>
    </div>
  </section>
  {/* Services grid */}
  <section className="svc-grid-section" id="svc-grid">
    <div className="container">
      <div className="section-head">
        <span className="eyebrow">Our Services</span>
        <h2>Comprehensive RCM Solutions, Tailored to Your Practice Needs</h2>
      </div>
      <div className="svc-grid">
        <div className="svc-card">
          <div className="ico">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <rect x={3} y={4} width={18} height={16} rx={2} />
              <line x1={3} y1={9} x2={21} y2={9} />
              <path d="M7 13h4" />
              <path d="M7 16.5h7" />
            </svg>
          </div>
          <h3>Medical Billing</h3>
          <p>
            Charge entry, coding review, claim scrubbing, and submission handled
            daily so nothing sits in a queue.
          </p>
          <a href="medical-billing.html" className="learn">
            Learn more{" "}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
        <div className="svc-card">
          <div className="ico">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <path d="M9 12.2l2.1 2.1 4-4.4" />
              <path d="M12 2.5l7.5 3v6c0 5.5-3.6 9.2-7.5 10.5-3.9-1.3-7.5-5-7.5-10.5v-6z" />
            </svg>
          </div>
          <h3>Credentialing Services</h3>
          <p>
            Payer enrollment, re-credentialing, and CAQH maintenance so you're
            never left off a network.
          </p>
          <a href="index.html#contact" className="learn">
            Learn more{" "}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
        <div className="svc-card">
          <div className="ico">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <circle cx={12} cy={12} r={9} />
              <circle cx={12} cy={12} r="4.5" />
              <circle cx={12} cy={12} r="0.8" fill="currentColor" />
            </svg>
          </div>
          <h3>AR Recovery</h3>
          <p>
            Aggressive, organized follow-up on aging accounts so revenue doesn't
            quietly age past recovery.
          </p>
          <a href="index.html#contact" className="learn">
            Learn more{" "}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
        <div className="svc-card">
          <div className="ico">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <path d="M13 2L4.5 13.5H11L9 22l10-13.5H12.5L13 2z" />
            </svg>
          </div>
          <h3>Denial Management</h3>
          <p>
            Root-cause analysis on every denial, with appeals filed fast and
            patterns fixed at the source.
          </p>
          <a href="index.html#contact" className="learn">
            Learn more{" "}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
        <div className="svc-card">
          <div className="ico">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12.2l2.1 2.1 4-4.4" />
            </svg>
          </div>
          <h3>Payment Posting</h3>
          <p>
            ERA/EOB posting reconciled daily, so your ledger always reflects
            what's actually been paid.
          </p>
          <a href="index.html#contact" className="learn">
            Learn more{" "}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
        <div className="svc-card">
          <div className="ico">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx={9} cy={7} r={4} />
              <path d="M23 21v-2a4 4 0 00-3-3.87" />
              <path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
          </div>
          <h3>Eligibility Verification</h3>
          <p>
            Coverage and benefits checked before the visit, so surprises don't
            show up after the claim is filed.
          </p>
          <a href="index.html#contact" className="learn">
            Learn more{" "}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
        <div className="svc-card" style={{ gridColumn: "span 1" }}>
          <div className="ico">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8 9.9a16 16 0 006 6l1.4-1.3a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.8 2.1z" />
            </svg>
          </div>
          <h3>Medical Billing Audit</h3>
          <p>
            A full review of your current billing process to find where revenue
            is leaking and why.
          </p>
          <a href="index.html#contact" className="learn">
            Learn more{" "}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* Process */}
  <section className="process">
    <div className="container">
      <div className="section-head">
        <span className="eyebrow">How It Works</span>
        <h2>Onboarding to First Clean Claim in Four Steps</h2>
      </div>
      <div className="process-grid">
        <div className="process-step">
          <div className="process-num">1</div>
          <h3>Audit &amp; Assess</h3>
          <p>
            We review your current billing setup, payer mix, and past denials to
            spot the biggest gaps.
          </p>
        </div>
        <div className="process-step">
          <div className="process-num">2</div>
          <h3>Set Up &amp; Integrate</h3>
          <p>
            We connect to your PM/EHR system and assign a dedicated account
            manager to your practice.
          </p>
        </div>
        <div className="process-step">
          <div className="process-num">3</div>
          <h3>Bill &amp; Follow Up</h3>
          <p>
            Daily claim submission, payment posting, and proactive follow-up on
            anything outstanding.
          </p>
        </div>
        <div className="process-step">
          <div className="process-num">4</div>
          <h3>Report &amp; Improve</h3>
          <p>
            Monthly reviews of your numbers, with adjustments made before small
            issues become patterns.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Why */}
  <section className="why">
    <div className="container why-grid">
      <div className="why-copy">
        <span className="eyebrow">Why Practices Choose Us</span>
        <h2 style={{ fontSize: 28, marginBottom: 20 }}>
          Billing that runs quietly in the background
        </h2>
        <div className="why-list">
          <div className="why-item">
            <span className="chk">
              <svg
                className="icon-svg"
                style={{ width: 16, height: 16 }}
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
            <div>
              <h3>A named account manager</h3>
              <p>
                One person who knows your specialty, payers, and history — not a
                rotating support queue.
              </p>
            </div>
          </div>
          <div className="why-item">
            <span className="chk">
              <svg
                className="icon-svg"
                style={{ width: 16, height: 16 }}
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
            <div>
              <h3>Specialty-specific coding</h3>
              <p>
                Coders trained across 25+ specialties, so charges match
                documentation the first time.
              </p>
            </div>
          </div>
          <div className="why-item">
            <span className="chk">
              <svg
                className="icon-svg"
                style={{ width: 16, height: 16 }}
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
            <div>
              <h3>Real-time dashboards</h3>
              <p>
                Track every claim's status and your A/R aging without waiting on
                a phone call.
              </p>
            </div>
          </div>
          <div className="why-item">
            <span className="chk">
              <svg
                className="icon-svg"
                style={{ width: 16, height: 16 }}
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
            <div>
              <h3>No long-term lock-in</h3>
              <p>
                Month-to-month engagement — we keep your business by earning it,
                not by contract terms.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="why-panel">
        <div className="why-panel-grid">
          <div className="why-stat">
            <div className="num">
              96<span className="accent">%</span>
            </div>
            <div className="lbl">Average Clean Claim Rate</div>
          </div>
          <div className="why-stat">
            <div className="num">
              21<span className="accent">d</span>
            </div>
            <div className="lbl">Average AR Cycle</div>
          </div>
          <div className="why-stat">
            <div className="num">
              72<span className="accent">%</span>
            </div>
            <div className="lbl">Denials Overturned</div>
          </div>
          <div className="why-stat">
            <div className="num">
              98<span className="accent">%</span>
            </div>
            <div className="lbl">Client Retention</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Specialties */}
  <section className="specialties">
    <div className="container">
      <div className="section-head">
        <span className="eyebrow">Specialties We Serve</span>
        <h2>Billing Expertise Across 25+ Specialties</h2>
      </div>
      <div className="spec-wrap">
        <span>Primary Care</span>
        <span>Cardiology</span>
        <span>Orthopedics</span>
        <span>Family Medicine</span>
        <span>Dermatology</span>
        <span>Behavioral Health</span>
        <span>Pediatrics</span>
        <span>OB/GYN</span>
        <span>Gastroenterology</span>
        <span>Urgent Care</span>
        <span>Physical Therapy</span>
        <span>Chiropractic</span>
        <span>Podiatry</span>
        <span>ENT</span>
        <span>Radiology</span>
      </div>
    </div>
  </section>
  {/* CTA band */}
  <section className="cta-band">
    <div className="container cta-inner">
      <div>
        <h2>Not sure which service you need?</h2>
        <p>
          Send us a recent A/R report or claim rejection log and we'll tell you
          exactly where the leak is — free of charge.
        </p>
      </div>
      <div className="cta-actions">
        <a href="index.html#contact" className="btn btn-primary">
          Get a Free Consultation
        </a>
        <a
          href="about.html"
          className="btn btn-outline"
          style={{ borderColor: "#fff", color: "#fff" }}
        >
          About Anmacwin
        </a>
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
              <img src="../assets/logo-icon.png" alt="Anmacwin Technologies" />
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
              <a href="index.html#home">Home</a>
            </li>
            <li>
              <a href="about.html">About Us</a>
            </li>
            <li>
              <a href="services.html">Services</a>
            </li>
            <li>
              <a href="index.html#solutions">Solutions</a>
            </li>
            <li>
              <a href="index.html#resources">Resources</a>
            </li>
            <li>
              <a href="index.html#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h4>Our Services</h4>
          <ul>
            <li>
              <a href="#svc-grid">Medical Billing</a>
            </li>
            <li>
              <a href="#svc-grid">Credentialing Services</a>
            </li>
            <li>
              <a href="#svc-grid">AR Recovery</a>
            </li>
            <li>
              <a href="#svc-grid">Denial Management</a>
            </li>
            <li>
              <a href="#svc-grid">Payment Posting</a>
            </li>
            <li>
              <a href="#svc-grid">Eligibility Verification</a>
            </li>
            <li>
              <a href="#svc-grid">Medical Billing Audit</a>
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
</>
    )
}

export default Services;