import fullLogo from "../assets/logo-full.png";
import iconLogo from "../assets/logo-icon.png";


function About(){
    return(
        <><>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About Us | Anmacwin Technologies</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n  :root{\n    --navy:#122a4d;\n    --navy-dark:#0d2038;\n    --blue:#1e5fa8;\n    --teal:#1aa79e;\n    --teal-light:#e7f6f4;\n    --ice:#eef5fb;\n    --text:#2b3648;\n    --muted:#647184;\n    --white:#ffffff;\n    --border:#e4ebf2;\n  }\n  *{box-sizing:border-box;margin:0;padding:0;}\n  body{\n    font-family:\'Segoe UI\',Arial,Helvetica,sans-serif;\n    color:var(--text);\n    background:var(--white);\n    line-height:1.5;\n  }\n  img{max-width:100%;display:block;}\n  .icon-svg{width:20px;height:20px;stroke:currentColor;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;}\n  a{text-decoration:none;color:inherit;}\n  ul{list-style:none;}\n  .container{\n    max-width:1180px;\n    margin:0 auto;\n    padding:0 24px;\n  }\n  .eyebrow{\n    color:var(--teal);\n    font-weight:700;\n    letter-spacing:1.5px;\n    font-size:13px;\n    text-transform:uppercase;\n    margin-bottom:8px;\n    display:block;\n  }\n  h1,h2,h3{\n    color:var(--navy);\n    font-weight:800;\n  }\n  .btn{\n    display:inline-block;\n    padding:13px 26px;\n    border-radius:6px;\n    font-weight:600;\n    font-size:15px;\n    cursor:pointer;\n    border:2px solid transparent;\n    transition:all .2s ease;\n  }\n  .btn-primary{background:var(--blue);color:#fff;}\n  .btn-primary:hover{background:var(--navy);}\n  .btn-outline{background:transparent;border-color:var(--blue);color:var(--blue);}\n  .btn-outline:hover{background:var(--blue);color:#fff;}\n\n  /* ===== Brand Banner ===== */\n  .brand-banner{text-align:center;padding:30px 0 26px;background:linear-gradient(180deg,#fbfdff 0%, #ffffff 100%);}\n  .brand-banner-img{height:110px;width:auto;margin:0 auto;}\n\n  /* ===== Nav ===== */\n  header.nav{background:#fff;border-bottom:1px solid var(--border);position:sticky;top:0;z-index:100;}\n  .nav-inner{display:flex;align-items:center;justify-content:space-between;padding:14px 24px;}\n  .nav-logo{display:flex;align-items:center;gap:8px;font-weight:800;color:var(--navy);font-size:14px;line-height:1.1;}\n  .nav-logo img{width:38px;height:38px;object-fit:contain;}\n  .nav-logo .sub{display:block;font-size:9px;letter-spacing:1px;color:var(--muted);font-weight:600;}\n  .nav-links{display:flex;gap:26px;font-size:14.5px;font-weight:600;color:var(--text);}\n  .nav-links li a{display:flex;align-items:center;gap:4px;}\n  .nav-links li a.active{color:var(--blue);}\n  .nav-links li a:hover{color:var(--blue);}\n  .burger svg{display:block;}\n  .nav-cta{background:var(--blue);color:#fff;padding:11px 20px;border-radius:6px;font-weight:600;font-size:14px;white-space:nowrap;}\n  .nav-cta:hover{background:var(--navy);}\n  .burger{display:none;background:none;border:none;font-size:24px;color:var(--navy);cursor:pointer;}\n\n  /* ===== Mobile slide-out menu ===== */\n  .mobile-overlay{position:fixed;inset:0;background:rgba(13,32,56,.55);opacity:0;visibility:hidden;transition:opacity .3s ease, visibility .3s ease;z-index:199;}\n  .mobile-overlay.active{opacity:1;visibility:visible;}\n  .mobile-drawer{position:fixed;top:0;right:0;height:100%;width:80%;max-width:320px;background:#fff;z-index:200;box-shadow:-8px 0 30px rgba(18,42,77,.2);transform:translateX(100%);transition:transform .35s cubic-bezier(.4,0,.2,1);display:flex;flex-direction:column;overflow-y:auto;}\n  .mobile-drawer.active{transform:translateX(0);}\n  .mobile-drawer-head{display:flex;align-items:center;justify-content:space-between;padding:18px 20px;border-bottom:1px solid var(--border);}\n  .mobile-drawer-head .nav-logo{font-size:13px;}\n  .mobile-drawer-head .nav-logo img{width:32px;height:32px;}\n  .mobile-close{background:var(--ice);border:none;width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:var(--navy);cursor:pointer;flex-shrink:0;}\n  .mobile-drawer-links{display:flex;flex-direction:column;padding:10px 8px;}\n  .mobile-drawer-links li a{display:flex;align-items:center;justify-content:space-between;padding:15px 14px;font-size:15.5px;font-weight:600;color:var(--navy);border-bottom:1px solid var(--border);}\n  .mobile-drawer-links li a.active,\n  .mobile-drawer-links li a:hover{color:var(--blue);}\n  .mobile-drawer-links li a svg{color:#b7c2d1;}\n  .mobile-drawer-cta{margin:20px;text-align:center;}\n  .mobile-drawer-cta .btn{width:100%;}\n  body.drawer-open{overflow:hidden;}\n\n  section{padding:70px 0;}\n  .section-head{text-align:center;max-width:640px;margin:0 auto 44px;}\n  .section-head h2{font-size:30px;line-height:1.3;}\n\n  /* ===== About Hero ===== */\n  .about-hero{background:var(--ice);padding:56px 0 70px;overflow:hidden;}\n  .about-hero-grid{display:grid;grid-template-columns:1.05fr 1fr;gap:48px;align-items:center;}\n  .about-hero h1{font-size:38px;line-height:1.2;}\n  .about-hero h1 .accent{color:var(--teal);}\n  .about-hero p.lead{margin-top:18px;font-size:16px;color:var(--text);font-weight:600;max-width:480px;}\n  .about-hero p.sub{margin-top:10px;color:var(--muted);font-size:14.5px;max-width:480px;}\n  .about-hero-actions{display:flex;gap:14px;margin-top:26px;}\n\n  /* Dashboard illustration (no photo dependency) */\n  .dash-wrap{position:relative;}\n  .dash-card{\n    background:#fff;border-radius:18px;padding:22px 22px 20px;\n    box-shadow:0 24px 50px rgba(18,42,77,.16), 0 4px 12px rgba(18,42,77,.06);\n    border:1px solid rgba(18,42,77,.05);\n  }\n  .dash-card-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;}\n  .dash-card-head .dots{display:flex;gap:6px;}\n  .dash-card-head .dots span{width:8px;height:8px;border-radius:50%;background:#d8e0ea;}\n  .dash-card-head .title{font-size:12.5px;font-weight:700;color:var(--muted);letter-spacing:.3px;}\n  .dash-ring-row{display:flex;align-items:center;gap:18px;margin-bottom:18px;}\n  .ring{position:relative;width:76px;height:76px;flex-shrink:0;}\n  .ring svg{transform:rotate(-90deg);}\n  .ring .pct{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:800;color:var(--navy);}\n  .dash-ring-copy .label{font-size:11px;color:var(--muted);font-weight:700;text-transform:uppercase;letter-spacing:.3px;}\n  .dash-ring-copy .value{font-size:20px;font-weight:800;color:var(--navy);margin-top:2px;}\n  .dash-bars{display:flex;align-items:flex-end;gap:8px;height:64px;margin-bottom:18px;padding:0 2px;}\n  .dash-bars .bar{flex:1;background:linear-gradient(180deg,var(--teal),#0f8079);border-radius:5px 5px 2px 2px;transform:scaleY(0);transform-origin:bottom;transition:transform 1s cubic-bezier(.16,1,.3,1);}\n  .dash-bars .bar.in-view{transform:scaleY(1);}\n  .dash-bars .bar:nth-child(1){height:38%;}\n  .dash-bars .bar:nth-child(2){height:55%;transition-delay:.06s;}\n  .dash-bars .bar:nth-child(3){height:70%;transition-delay:.12s;}\n  .dash-bars .bar:nth-child(4){height:60%;transition-delay:.18s;}\n  .dash-bars .bar:nth-child(5){height:88%;background:linear-gradient(180deg,var(--blue),#123d76);transition-delay:.24s;}\n  .dash-bars .bar:nth-child(6){height:78%;transition-delay:.3s;}\n  .dash-bars .bar:nth-child(7){height:100%;background:linear-gradient(180deg,var(--blue),#123d76);transition-delay:.36s;}\n  .dash-rows{border-top:1px solid var(--border);padding-top:14px;}\n  .dash-row{display:flex;align-items:center;justify-content:space-between;padding:6px 0;font-size:12.5px;}\n  .dash-row .name{color:var(--navy);font-weight:600;}\n  .dash-row .tag{padding:3px 9px;border-radius:20px;font-size:10.5px;font-weight:700;}\n  .tag-paid{background:#e6f7ee;color:#1aa76b;}\n  .tag-review{background:#fff4e0;color:#c98a12;}\n  .float-badge{\n    position:absolute;background:#fff;border-radius:12px;padding:12px 16px;\n    box-shadow:0 12px 26px rgba(18,42,77,.14);display:flex;align-items:center;gap:10px;\n    font-size:12px;font-weight:700;color:var(--navy);\n  }\n  .float-badge .ic{width:30px;height:30px;border-radius:8px;background:var(--teal-light);color:var(--teal);display:flex;align-items:center;justify-content:center;flex-shrink:0;}\n  .float-badge span.small{display:block;font-size:9.5px;color:var(--muted);font-weight:700;text-transform:uppercase;}\n  .badge-1{top:-18px;left:-24px;}\n  .badge-2{bottom:-16px;right:-18px;}\n\n  /* ===== Stats band ===== */\n  .stats-band{background:var(--navy-dark);padding:46px 0;}\n  .stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;text-align:center;}\n  .stats-grid .stat{border-right:1px solid rgba(255,255,255,.12);}\n  .stats-grid .stat:last-child{border-right:none;}\n  .stats-grid .num{font-size:34px;font-weight:800;color:#fff;line-height:1;}\n  .stats-grid .num .accent{color:var(--teal);}\n  .stats-grid .lbl{margin-top:8px;font-size:12.5px;color:#9fb0c6;font-weight:600;letter-spacing:.3px;text-transform:uppercase;}\n\n  /* ===== Story ===== */\n  .story{background:#fff;}\n  .story-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;}\n  .story-copy p{color:var(--muted);font-size:14.5px;margin-bottom:14px;max-width:500px;}\n  .story-copy p strong{color:var(--navy);}\n  .story-visual{position:relative;}\n  .story-panel{\n    background:linear-gradient(150deg,var(--navy) 0%, var(--navy-dark) 100%);\n    border-radius:18px;padding:34px 30px;color:#fff;position:relative;overflow:hidden;\n  }\n  .story-panel::after{\n    content:"";position:absolute;width:220px;height:220px;border-radius:50%;\n    background:radial-gradient(circle,rgba(26,167,158,.35),transparent 70%);\n    top:-70px;right:-70px;\n  }\n  .story-panel .mark{color:var(--teal);font-size:30px;font-weight:800;position:relative;z-index:1;}\n  .story-panel p{position:relative;z-index:1;font-size:17px;font-weight:600;line-height:1.55;margin-top:10px;}\n  .story-panel .attrib{margin-top:20px;display:flex;align-items:center;gap:12px;position:relative;z-index:1;}\n  .avatar-sm{width:42px;height:42px;border-radius:50%;background:var(--teal);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px;color:#0d2038;}\n  .story-panel .attrib .who{font-size:13px;font-weight:700;}\n  .story-panel .attrib .role{font-size:11.5px;color:#9fb0c6;}\n\n  /* ===== Values ===== */\n  .values{background:var(--ice);}\n  .value-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}\n  .value-card{background:#fff;border-radius:12px;padding:26px 22px;border:1px solid var(--border);transition:transform .2s ease, box-shadow .2s ease;}\n  .value-card:hover{transform:translateY(-4px);box-shadow:0 14px 30px rgba(18,42,77,.1);border-color:transparent;}\n  .value-card .ico{width:46px;height:46px;border-radius:11px;background:var(--teal-light);color:var(--teal);display:flex;align-items:center;justify-content:center;margin-bottom:14px;}\n  .value-card h3{font-size:15.5px;margin-bottom:6px;}\n  .value-card p{font-size:13px;color:var(--muted);}\n\n  /* ===== Timeline ===== */\n  .timeline{background:#fff;}\n  .tl{position:relative;max-width:840px;margin:0 auto;}\n  .tl::before{content:"";position:absolute;left:20px;top:6px;bottom:6px;width:2px;background:var(--border);}\n  .tl-item{position:relative;padding-left:60px;margin-bottom:38px;}\n  .tl-item:last-child{margin-bottom:0;}\n  .tl-item .yr-dot{\n    position:absolute;left:0;top:0;width:42px;height:42px;border-radius:50%;\n    background:var(--teal-light);color:var(--teal);font-weight:800;font-size:11.5px;\n    display:flex;align-items:center;justify-content:center;border:3px solid #fff;box-shadow:0 0 0 2px var(--teal-light);\n  }\n  .tl-item h3{font-size:15.5px;margin-bottom:6px;}\n  .tl-item p{font-size:13.5px;color:var(--muted);max-width:560px;}\n\n  /* ===== Leadership ===== */\n  .leadership{background:var(--ice);}\n  .team-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;}\n  .team-card{background:#fff;border-radius:14px;padding:26px 20px;text-align:center;border:1px solid var(--border);}\n  .avatar-lg{\n    width:70px;height:70px;border-radius:50%;margin:0 auto 14px;\n    display:flex;align-items:center;justify-content:center;font-weight:800;font-size:22px;color:#fff;\n  }\n  .team-card h3{font-size:15px;margin-bottom:3px;}\n  .team-card .role{font-size:12.5px;color:var(--teal);font-weight:700;margin-bottom:10px;}\n  .team-card p{font-size:12.5px;color:var(--muted);}\n\n  /* ===== CTA band ===== */\n  .cta-band{background:var(--navy-dark);padding:60px 0;}\n  .cta-inner{display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;}\n  .cta-inner h2{color:#fff;font-size:26px;max-width:480px;}\n  .cta-inner p{color:#9fb0c6;font-size:14px;margin-top:8px;max-width:440px;}\n  .cta-actions{display:flex;gap:14px;flex-shrink:0;}\n\n  /* ===== Footer ===== */\n  footer{background:var(--navy-dark);color:#c7d3e0;padding:60px 0 26px;}\n  .footer-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr 1.2fr;gap:32px;padding-bottom:36px;border-bottom:1px solid rgba(255,255,255,.1);}\n  .footer-logo{display:flex;align-items:center;gap:10px;color:#fff;font-weight:800;font-size:15px;margin-bottom:14px;}\n  .footer-logo-badge{width:42px;height:42px;border-radius:10px;background:#fff;display:flex;align-items:center;justify-content:center;padding:5px;flex-shrink:0;}\n  .footer-logo-badge img{width:100%;height:100%;object-fit:contain;}\n  .footer-logo .sub{display:block;font-size:9px;color:#9fb0c6;font-weight:600;}\n  footer p{font-size:13px;line-height:1.7;color:#9fb0c6;}\n  .footer-social{display:flex;gap:10px;margin-top:16px;}\n  .footer-social a{width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;font-size:14px;}\n  footer h4{color:#fff;font-size:14.5px;margin-bottom:16px;}\n  footer .col ul li{margin-bottom:10px;}\n  footer .col ul li a{font-size:13.5px;color:#c7d3e0;}\n  footer .col ul li a:hover{color:var(--teal);}\n  .contact-item{display:flex;gap:10px;margin-bottom:14px;font-size:13.5px;color:#c7d3e0;}\n  .contact-item .ic{color:var(--teal);flex-shrink:0;}\n  .footer-bottom{display:flex;justify-content:space-between;padding-top:22px;font-size:12.5px;color:#8595ac;flex-wrap:wrap;gap:10px;}\n  .footer-bottom a{color:#8595ac;}\n  .footer-bottom a:hover{color:#fff;}\n\n  /* ===== Responsive ===== */\n  @media(max-width:900px){ .brand-banner{display:none;} }\n  @media(max-width:980px){\n    .about-hero-grid{grid-template-columns:1fr;}\n    .about-hero-visual{margin-top:40px;max-width:420px;}\n    .stats-grid{grid-template-columns:repeat(2,1fr);row-gap:24px;}\n    .stats-grid .stat:nth-child(2){border-right:none;}\n    .story-grid{grid-template-columns:1fr;}\n    .story-visual{order:-1;}\n    .value-grid{grid-template-columns:repeat(2,1fr);}\n    .team-grid{grid-template-columns:repeat(2,1fr);}\n    .footer-grid{grid-template-columns:1fr 1fr;}\n    .cta-inner{flex-direction:column;align-items:flex-start;}\n  }\n  @media(max-width:700px){\n    .nav-links{display:none;}\n    .burger{display:block;}\n    .nav-cta{display:none;}\n    .about-hero h1{font-size:29px;}\n    .stats-grid{grid-template-columns:1fr 1fr;}\n    .value-grid{grid-template-columns:1fr;}\n    .team-grid{grid-template-columns:1fr 1fr;}\n    .footer-grid{grid-template-columns:1fr;}\n    .cta-actions{flex-direction:column;width:100%;}\n    .cta-actions .btn{width:100%;text-align:center;}\n  }\n'
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
      <a href="index.html" className="nav-logo">
        <img src={iconLogo} alt="Anmacwin Technologies" />
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
            <a href="about.html" className="active">
              About Us
            </a>
          </li>
          <li>
            <a href="index.html#services">
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
        <a href="index.html#home">Home</a>
      </li>
      <li>
        <a href="about.html" className="active">
          About Us
        </a>
      </li>
      <li>
        <a href="index.html#services">
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
  {/* About Hero */}
  <section className="about-hero" id="about">
    <div className="container about-hero-grid">
      <div className="about-hero-copy">
        <span className="eyebrow">About Anmacwin</span>
        <h1>
          Billing built by people
          <br />
          who've <span className="accent">sat in your chair.</span>
        </h1>
        <p className="lead">
          We started Anmacwin because we watched too many good practices lose
          revenue to billing they never had time to fix.
        </p>
        <p className="sub">
          Today we manage the full revenue cycle for clinics and practices
          around the country — the claims, the follow-ups, the denials — so
          providers can get back to the part of the job that brought them into
          medicine in the first place.
        </p>
        <div className="about-hero-actions">
          <a href="#leadership" className="btn btn-primary">
            Meet the Team
          </a>
          <a href="index.html#contact" className="btn btn-outline">
            Get a Free Consultation
          </a>
        </div>
      </div>
      <div className="about-hero-visual dash-wrap">
        <div className="dash-card">
          <div className="dash-card-head">
            <span className="title">CLAIMS OVERVIEW · THIS MONTH</span>
            <span className="dots">
              <span />
              <span />
              <span />
            </span>
          </div>
          <div className="dash-ring-row">
            <div className="ring" data-ring="" data-target={96}>
              <svg width={76} height={76} viewBox="0 0 76 76">
                <circle
                  cx={38}
                  cy={38}
                  r={32}
                  fill="none"
                  stroke="#e7f6f4"
                  strokeWidth={8}
                />
                <circle
                  className="ring-progress"
                  cx={38}
                  cy={38}
                  r={32}
                  fill="none"
                  stroke="#1aa79e"
                  strokeWidth={8}
                  strokeLinecap="round"
                  strokeDasharray={201}
                  strokeDashoffset={201}
                />
              </svg>
              <span className="pct">
                <span
                  className="count-num"
                  data-target={96}
                  data-duration={1600}
                >
                  0
                </span>
                %
              </span>
            </div>
            <div className="dash-ring-copy">
              <div className="label">Clean Claim Rate</div>
              <div className="value">
                <span
                  className="count-num"
                  data-target={1204}
                  data-format="comma"
                  data-duration={1800}
                >
                  0
                </span>{" "}
                Claims Filed
              </div>
            </div>
          </div>
          <div className="dash-bars">
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
          <div className="dash-rows">
            <div className="dash-row">
              <span className="name">Cardiology Group — Batch #4471</span>
              <span className="tag tag-paid">Paid</span>
            </div>
            <div className="dash-row">
              <span className="name">Family Care Clinic — Batch #4472</span>
              <span className="tag tag-review">In Review</span>
            </div>
            <div className="dash-row">
              <span className="name">Ortho Associates — Batch #4473</span>
              <span className="tag tag-paid">Paid</span>
            </div>
          </div>
        </div>
        <div className="float-badge badge-1">
          <span className="ic">
            <svg
              className="icon-svg"
              style={{ width: 16, height: 16 }}
              viewBox="0 0 24 24"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </span>
          <span>
            <span className="small">Founded</span>2016
          </span>
        </div>
        <div className="float-badge badge-2">
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
            <span className="small">Providers</span>
            <span className="count-num" data-target={450} data-duration={1400}>
              0
            </span>
            +
          </span>
        </div>
      </div>
    </div>
  </section>
  {/* Stats band */}
  <section className="stats-band">
    <div className="container">
      <div className="stats-grid">
        <div className="stat">
          <div className="num">
            <span
              className="count-num accent"
              data-target={9}
              data-duration={1200}
            >
              0
            </span>
            +
          </div>
          <div className="lbl">Years in Business</div>
        </div>
        <div className="stat">
          <div className="num">
            <span className="count-num" data-target={450} data-duration={1600}>
              0
            </span>
            <span className="accent">+</span>
          </div>
          <div className="lbl">Providers Served</div>
        </div>
        <div className="stat">
          <div className="num">
            <span className="count-num" data-target={32} data-duration={1200}>
              0
            </span>
          </div>
          <div className="lbl">States Covered</div>
        </div>
        <div className="stat">
          <div className="num">
            <span className="count-num" data-target={98} data-duration={1400}>
              0
            </span>
            <span className="accent">%</span>
          </div>
          <div className="lbl">Client Retention</div>
        </div>
      </div>
    </div>
  </section>
  {/* Story */}
  <section className="story">
    <div className="container story-grid">
      <div className="story-copy">
        <span className="eyebrow">Our Story</span>
        <h2 style={{ fontSize: 28, marginBottom: 16 }}>
          Started at a kitchen table.
          <br />
          Built for practices like yours.
        </h2>
        <p>
          Anmacwin Technologies was founded in 2016 by two revenue cycle
          specialists who'd spent years inside hospital billing departments and
          watched the same problem repeat itself:{" "}
          <strong>
            great clinical care, undone by slow, error-prone billing.
          </strong>
        </p>
        <p>
          So they built the company they wished existed — one where every claim
          gets the same attention whether it's your first or your
          ten-thousandth, and every provider gets a real person who knows their
          account, not a ticket number.
        </p>
        <p>
          Nearly a decade later, that's still the whole model. We've added
          technology, reporting, and a much bigger team — but the standard
          hasn't changed.
        </p>
      </div>
      <div className="story-visual">
        <div className="story-panel">
          <span className="mark">"</span>
          <p>
            We don't measure ourselves by claims processed. We measure ourselves
            by how little our clients have to think about billing.
          </p>
          <div className="attrib">
            <div className="avatar-sm">MA</div>
            <div>
              <div className="who">Meera Anand</div>
              <div className="role">Co-Founder &amp; CEO</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Values */}
  <section className="values">
    <div className="container">
      <div className="section-head">
        <span className="eyebrow">What We Stand For</span>
        <h2>The Principles Behind Every Claim</h2>
      </div>
      <div className="value-grid">
        <div className="value-card">
          <div className="ico">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12.2l2.1 2.1 4-4.4" />
            </svg>
          </div>
          <h3>Integrity First</h3>
          <p>
            We bill exactly what was earned — no upcoding, no shortcuts, no
            surprises at audit time.
          </p>
        </div>
        <div className="value-card">
          <div className="ico">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <circle cx={12} cy={12} r={9} />
              <circle cx={12} cy={12} r="4.5" />
              <circle cx={12} cy={12} r="0.8" fill="currentColor" />
            </svg>
          </div>
          <h3>Precision</h3>
          <p>
            Clean claims start with clean data. We double-check what others rush
            past.
          </p>
        </div>
        <div className="value-card">
          <div className="ico">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx={9} cy={7} r={4} />
              <path d="M23 21v-2a4 4 0 00-3-3.87" />
              <path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
          </div>
          <h3>True Partnership</h3>
          <p>
            You get a named account manager who knows your specialty, payers,
            and pain points.
          </p>
        </div>
        <div className="value-card">
          <div className="ico">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <rect x={3} y={4} width={18} height={16} rx={2} />
              <line x1={3} y1={9} x2={21} y2={9} />
              <path d="M7 13h4" />
              <path d="M7 16.5h7" />
            </svg>
          </div>
          <h3>Radical Transparency</h3>
          <p>
            Real-time dashboards mean you always know exactly where your revenue
            stands.
          </p>
        </div>
        <div className="value-card">
          <div className="ico">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <path d="M13 2L4.5 13.5H11L9 22l10-13.5H12.5L13 2z" />
            </svg>
          </div>
          <h3>Constant Improvement</h3>
          <p>
            We invest in better tooling and training every year so your
            clean-claim rate keeps climbing.
          </p>
        </div>
        <div className="value-card">
          <div className="ico">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <path d="M12 2.5l7.5 3v6c0 5.5-3.6 9.2-7.5 10.5-3.9-1.3-7.5-5-7.5-10.5v-6z" />
              <path d="M9 12.2l2.1 2.1 4-4.4" />
            </svg>
          </div>
          <h3>Compliance-Minded</h3>
          <p>
            HIPAA-compliant processes and secure systems protect your practice
            and your patients.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Timeline */}
  <section className="timeline">
    <div className="container">
      <div className="section-head">
        <span className="eyebrow">Our Journey</span>
        <h2>Nearly a Decade of Getting Providers Paid</h2>
      </div>
      <div className="tl">
        <div className="tl-item">
          <div className="yr-dot">2016</div>
          <h3>Anmacwin is founded</h3>
          <p>
            Two billing specialists start the company in Naperville, IL, with
            three local clients and a shared spreadsheet.
          </p>
        </div>
        <div className="tl-item">
          <div className="yr-dot">2018</div>
          <h3>Crosses 100 providers</h3>
          <p>
            Expands beyond primary care into multi-specialty practices and
            builds a dedicated credentialing team.
          </p>
        </div>
        <div className="tl-item">
          <div className="yr-dot">2021</div>
          <h3>Launches real-time reporting</h3>
          <p>
            Rolls out a client-facing analytics platform so practices can track
            claims and A/R without picking up the phone.
          </p>
        </div>
        <div className="tl-item">
          <div className="yr-dot">2023</div>
          <h3>450+ providers, 32 states</h3>
          <p>
            Reaches national scale while keeping a dedicated account manager on
            every single account.
          </p>
        </div>
        <div className="tl-item">
          <div className="yr-dot">2026</div>
          <h3>Today</h3>
          <p>
            A full-service RCM partner offering billing, credentialing, denial
            management, and 24/7 support.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Leadership */}
  <section className="leadership" id="leadership">
    <div className="container">
      <div className="section-head">
        <span className="eyebrow">Leadership</span>
        <h2>The People Behind the Process</h2>
      </div>
      <div className="team-grid">
        <div className="team-card">
          <div
            className="avatar-lg"
            style={{ background: "linear-gradient(135deg,#1e5fa8,#123d76)" }}
          >
            MA
          </div>
          <h3>Meera Anand</h3>
          <div className="role">Co-Founder &amp; CEO</div>
          <p>
            13 years in revenue cycle management before co-founding Anmacwin in
            2016.
          </p>
        </div>
        <div className="team-card">
          <div
            className="avatar-lg"
            style={{ background: "linear-gradient(135deg,#1aa79e,#0f6f68)" }}
          >
            DC
          </div>
          <h3>David Cole</h3>
          <div className="role">Co-Founder &amp; Head of Operations</div>
          <p>
            Oversees claims operations and payer relationships across every
            region we serve.
          </p>
        </div>
        <div className="team-card">
          <div
            className="avatar-lg"
            style={{ background: "linear-gradient(135deg,#122a4d,#0d2038)" }}
          >
            PR
          </div>
          <h3>Priya Raman</h3>
          <div className="role">VP, Client Success</div>
          <p>
            Leads the account management team and our client onboarding process.
          </p>
        </div>
        <div className="team-card">
          <div
            className="avatar-lg"
            style={{ background: "linear-gradient(135deg,#647184,#3d4759)" }}
          >
            JO
          </div>
          <h3>James Okafor</h3>
          <div className="role">Director of Compliance</div>
          <p>
            Keeps every process HIPAA-aligned as regulations and payer rules
            evolve.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* CTA band */}
  <section className="cta-band">
    <div className="container cta-inner">
      <div>
        <h2>Ready to see what better billing looks like?</h2>
        <p>
          Talk to our team about your practice, your payers, and where revenue
          is slipping through the cracks.
        </p>
      </div>
      <div className="cta-actions">
        <a href="index.html#contact" className="btn btn-primary">
          Get a Free Consultation
        </a>
        <a
          href="index.html#services"
          className="btn btn-outline"
          style={{ borderColor: "#fff", color: "#fff" }}
        >
          See Our Services
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
              <a href="index.html#home">Home</a>
            </li>
            <li>
              <a href="about.html">About Us</a>
            </li>
            <li>
              <a href="index.html#services">Services</a>
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
              <a href="index.html#services">Medical Billing</a>
            </li>
            <li>
              <a href="index.html#services">Credentialing Services</a>
            </li>
            <li>
              <a href="index.html#services">AR Recovery</a>
            </li>
            <li>
              <a href="index.html#services">Denial Management</a>
            </li>
            <li>
              <a href="index.html#services">Payment Posting</a>
            </li>
            <li>
              <a href="index.html#services">Eligibility Verification</a>
            </li>
            <li>
              <a href="index.html#services">Medical Billing Audit</a>
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

export default About;