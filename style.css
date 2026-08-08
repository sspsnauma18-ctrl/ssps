/* =========================================================
   SSPS PREMIUM 3D WEBSITE
   style.css
   ========================================================= */

/* =========================
   1. ROOT
========================= */

:root {
  --primary: #0b3d91;
  --primary-dark: #06265d;
  --secondary: #f4b400;
  --accent: #35b7ff;

  --dark: #07111f;
  --dark-2: #0c1b2d;
  --light: #f7faff;
  --white: #ffffff;
  --text: #243247;
  --muted: #6d7b8f;

  --border: rgba(255, 255, 255, 0.14);
  --shadow: 0 20px 60px rgba(5, 20, 45, 0.14);

  --radius: 24px;

  --transition: 0.35s ease;
}


/* =========================
   2. RESET
========================= */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", sans-serif;
  background: var(--light);
  color: var(--text);
  overflow-x: hidden;
}

body.no-scroll {
  overflow: hidden;
}

a {
  text-decoration: none;
  color: inherit;
}

button,
input,
textarea {
  font-family: inherit;
}

button {
  cursor: pointer;
}

img {
  max-width: 100%;
  display: block;
}

::selection {
  background: var(--primary);
  color: var(--white);
}


/* =========================
   3. CONTAINER
========================= */

.container {
  width: min(1180px, calc(100% - 40px));
  margin: auto;
}

.section-padding {
  padding: 120px 0;
}


/* =========================
   4. PRELOADER
========================= */

#preloader {
  position: fixed;
  inset: 0;
  background: #06101e;
  display: grid;
  place-items: center;
  z-index: 99999;
  transition:
    opacity 0.6s ease,
    visibility 0.6s ease;
}

#preloader.hide {
  opacity: 0;
  visibility: hidden;
}

.loader-box {
  text-align: center;
}

.loader-logo {
  font-family: "Playfair Display", serif;
  font-size: 58px;
  font-weight: 800;
  letter-spacing: 4px;
  color: var(--white);
}

.loader-line {
  width: 180px;
  height: 3px;
  background: rgba(255,255,255,0.12);
  margin: 20px auto;
  overflow: hidden;
  position: relative;
}

.loader-line::after {
  content: "";
  position: absolute;
  inset: 0;
  width: 45%;
  background: var(--secondary);
  animation: loading 1.2s infinite ease-in-out;
}

.loader-box p {
  color: rgba(255,255,255,0.55);
  font-size: 13px;
  letter-spacing: 2px;
}

@keyframes loading {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(300%);
  }
}


/* =========================
   5. NAVBAR
========================= */

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 20px 0;
  transition: var(--transition);
}

.navbar.scrolled {
  padding: 12px 0;
  background: rgba(6, 17, 31, 0.78);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.nav-container {
  width: min(1240px, calc(100% - 40px));
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
}


/* Logo */

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--white);
}

.logo-mark {
  width: 48px;
  height: 48px;
  border-radius: 14px;

  display: grid;
  place-items: center;

  background:
    linear-gradient(
      145deg,
      var(--secondary),
      #ffd86a
    );

  color: #14233c;

  box-shadow:
    0 10px 30px rgba(244, 180, 0, 0.25);

  transform: rotate(-4deg);
}

.logo-mark span {
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 1px;
  transform: rotate(4deg);
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.logo-text strong {
  font-family: "Playfair Display", serif;
  font-size: 15px;
}

.logo-text small {
  font-size: 10px;
  opacity: 0.6;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}


/* Navigation */

.nav-links {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-links a {
  position: relative;
  color: rgba(255,255,255,0.72);
  font-size: 13px;
  font-weight: 600;
  transition: var(--transition);
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--white);
}

.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 0;
  height: 2px;
  background: var(--secondary);
  transition: var(--transition);
}

.nav-links a:hover::after,
.nav-links a.active::after {
  width: 100%;
}


/* Navbar Button */

.nav-button {
  display: flex;
  align-items: center;
  gap: 9px;

  background: var(--white);
  color: var(--dark);

  padding: 12px 17px;
  border-radius: 100px;

  font-size: 12px;
  font-weight: 700;

  transition: var(--transition);
}

.nav-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(255,255,255,0.15);
}

.nav-button i {
  color: var(--primary);
}


/* Menu */

.menu-btn {
  width: 45px;
  height: 45px;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 12px;
  background: rgba(255,255,255,0.08);
  color: var(--white);
  display: none;
  font-size: 18px;
}


/* =========================
   6. HERO
========================= */

.hero {
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;

  background:
    radial-gradient(
      circle at 75% 35%,
      rgba(53,183,255,0.20),
      transparent 30%
    ),
    radial-gradient(
      circle at 20% 20%,
      rgba(11,61,145,0.45),
      transparent 35%
    ),
    #06101e;

  color: var(--white);
}


/* Three.js canvas */

#heroCanvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}


/* Background */

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;

  background:
    linear-gradient(
      90deg,
      rgba(6,16,30,0.98) 0%,
      rgba(6,16,30,0.80) 42%,
      rgba(6,16,30,0.25) 100%
    );
}

.hero-grid {
  position: absolute;
  inset: 0;
  z-index: 0;

  opacity: 0.16;

  background-image:
    linear-gradient(
      rgba(255,255,255,0.08) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(255,255,255,0.08) 1px,
      transparent 1px
    );

  background-size: 70px 70px;

  mask-image: linear-gradient(
    to right,
    black,
    transparent
  );
}


/* Hero content */

.hero-container {
  width: min(1180px, calc(100% - 40px));
  margin: auto;

  position: relative;
  z-index: 5;

  display: grid;
  grid-template-columns: 1.2fr 0.8fr;

  align-items: center;

  gap: 70px;

  padding-top: 80px;
}


/* Hero main */

.hero-content {
  max-width: 720px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;

  padding: 8px 14px;

  border-radius: 100px;

  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);

  color: rgba(255,255,255,0.78);

  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;

  margin-bottom: 25px;
}

.badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #46dc8a;

  box-shadow:
    0 0 0 5px rgba(70,220,138,0.1);
}


.hero h1 {
  font-family: "Playfair Display", serif;

  font-size: clamp(52px, 6vw, 82px);

  line-height: 0.98;

  letter-spacing: -3px;

  max-width: 800px;

  margin-bottom: 28px;
}

.hero h1 span {
  display: block;

  background:
    linear-gradient(
      90deg,
      #ffffff,
      #6bd1ff,
      #f4b400
    );

  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}


.hero-description {
  max-width: 600px;

  color: rgba(255,255,255,0.62);

  font-size: 16px;
  line-height: 1.8;

  margin-bottom: 35px;
}


/* Buttons */

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.btn {
  min-height: 52px;

  padding: 0 22px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  border-radius: 100px;

  font-size: 13px;
  font-weight: 700;

  transition: var(--transition);
}

.btn-primary {
  background:
    linear-gradient(
      135deg,
      var(--secondary),
      #ffd55e
    );

  color: #111c2e;

  box-shadow:
    0 15px 40px rgba(244,180,0,0.22);
}

.btn-primary:hover {
  transform: translateY(-4px);
  box-shadow:
    0 20px 50px rgba(244,180,0,0.32);
}

.btn-outline {
  border: 1px solid rgba(255,255,255,0.2);
  color: var(--white);
  background: rgba(255,255,255,0.04);
}

.btn-outline:hover {
  background: rgba(255,255,255,0.1);
  transform: translateY(-4px);
}


/* Trust */

.hero-trust {
  margin-top: 45px;

  display: flex;
  align-items: center;
  gap: 14px;
}

.trust-avatars {
  display: flex;
}

.avatar {
  width: 34px;
  height: 34px;

  border-radius: 50%;

  border: 2px solid #06101e;

  margin-left: -7px;

  display: grid;
  place-items: center;

  background:
    linear-gradient(
      135deg,
      #173c70,
      #35b7ff
    );

  font-size: 10px;
  font-weight: 800;
}

.avatar:first-child {
  margin-left: 0;
}

.hero-trust strong {
  display: block;
  font-size: 12px;
}

.hero-trust span {
  display: block;
  margin-top: 4px;
  color: rgba(255,255,255,0.45);
  font-size: 10px;
}


/* =========================
   HERO INFO CARD
========================= */

.hero-info-card {
  justify-self: end;

  width: min(340px, 100%);

  padding: 25px;

  border-radius: 28px;

  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,0.12),
      rgba(255,255,255,0.035)
    );

  border: 1px solid rgba(255,255,255,0.14);

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  box-shadow:
    0 30px 100px rgba(0,0,0,0.35);

  animation:
    floatingCard 5s ease-in-out infinite;
}

@keyframes floatingCard {

  0%,
  100% {
    transform: translateY(0) rotateY(0);
  }

  50% {
    transform: translateY(-12px) rotateY(3deg);
  }

}

.info-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: rgba(255,255,255,0.5);

  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
}

.live-dot {
  display: flex;
  align-items: center;
  gap: 7px;

  color: #67e7a0;
  letter-spacing: 0;
}

.live-dot span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #67e7a0;
  box-shadow: 0 0 15px #67e7a0;
}


/* Emblem */

.school-emblem {
  display: grid;
  place-items: center;

  margin: 40px 0;
}

.emblem-ring {
  width: 160px;
  height: 160px;

  border-radius: 50%;

  display: grid;
  place-items: center;

  background:
    conic-gradient(
      from 0deg,
      var(--secondary),
      var(--accent),
      var(--secondary)
    );

  padding: 2px;

  animation:
    rotateRing 12s linear infinite;
}

@keyframes rotateRing {
  to {
    transform: rotate(360deg);
  }
}

.emblem-inner {
  width: 100%;
  height: 100%;

  border-radius: inherit;

  display: grid;
  place-items: center;

  background: #0a1a2d;

  font-size: 50px;

  color: var(--secondary);

  animation:
    rotateRingReverse 12s linear infinite;
}

@keyframes rotateRingReverse {
  to {
    transform: rotate(-360deg);
  }
}

.hero-info-card h3 {
  font-family: "Playfair Display", serif;
  font-size: 27px;
  margin-bottom: 10px;
}

.hero-info-card > p {
  color: rgba(255,255,255,0.55);
  font-size: 12px;
  line-height: 1.7;
}

.card-line {
  height: 1px;
  background: rgba(255,255,255,0.1);
  margin: 25px 0;
}

.card-stat {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-stat strong {
  display: block;
  font-size: 13px;
}

.card-stat span {
  display: block;
  margin-top: 4px;
  color: rgba(255,255,255,0.4);
  font-size: 10px;
}

.card-stat i {
  width: 35px;
  height: 35px;
  border-radius: 50%;

  display: grid;
  place-items: center;

  background: rgba(255,255,255,0.08);

  font-size: 11px;
}


/* Scroll */

.scroll-down {
  position: absolute;

  left: 50%;
  bottom: 25px;

  transform: translateX(-50%);

  z-index: 8;

  display: flex;
  align-items: center;
  gap: 12px;

  color: rgba(255,255,255,0.4);

  font-size: 9px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.scroll-icon {
  width: 30px;
  height: 30px;

  display: grid;
  place-items: center;

  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 50%;

  animation:
    scrollBounce 1.5s infinite;
}

@keyframes scrollBounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(5px);
  }

}


/* =========================
   7. STATS
========================= */

.stats-section {
  background: var(--white);

  position: relative;
  z-index: 10;

  border-bottom: 1px solid #e8edf4;
}

.stats-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 0;
}

.stat-card {
  padding: 35px 25px;

  display: flex;
  align-items: center;

  gap: 17px;

  border-right: 1px solid #e9eef5;
}

.stat-card:last-child {
  border-right: 0;
}

.stat-icon {
  width: 52px;
  height: 52px;

  border-radius: 16px;

  display: grid;
  place-items: center;

  background: #edf5ff;

  color: var(--primary);

  font-size: 18px;
}

.stat-card strong {
  display: block;

  font-family: "Playfair Display", serif;

  font-size: 30px;

  color: var(--dark);
}

.stat-card span {
  color: var(--muted);
  font-size: 11px;
}


/* =========================
   8. SECTION LABEL
========================= */

.section-label {
  display: flex;
  align-items: center;
  gap: 12px;

  color: var(--primary);

  font-size: 10px;
  font-weight: 800;

  text-transform: uppercase;

  letter-spacing: 2px;

  margin-bottom: 22px;
}

.section-label span {
  width: 31px;
  height: 31px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background: #eaf2ff;

  color: var(--primary);

  font-size: 9px;
}


/* =========================
   9. ABOUT
========================= */

.about-section {
  background: var(--light);
}

.about-grid {
  display: grid;

  grid-template-columns:
    0.7fr 1.3fr;

  gap: 80px;
}

.about-content h2,
.section-heading h2,
.achievement-content h2,
.principal-content h2,
.cta-content h2,
.contact-content h2 {

  font-family: "Playfair Display", serif;

  font-size: clamp(42px, 5vw, 64px);

  line-height: 1.05;

  color: var(--dark);

  letter-spacing: -2px;

  margin-bottom: 25px;
}

.about-content h2 span,
.section-heading h2 span,
.achievement-content h2 span,
.principal-content h2 span,
.cta-content h2 span,
.contact-content h2 span {

  color: var(--primary);
}

.about-content p {
  max-width: 700px;

  color: var(--muted);

  font-size: 15px;
  line-height: 1.9;

  margin-bottom: 20px;
}

.text-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;

  margin-top: 15px;

  color: var(--primary);

  font-size: 12px;
  font-weight: 800;
}

.text-link i {
  transition: var(--transition);
}

.text-link:hover i {
  transform: translateX(5px);
}


/* =========================
   10. FACILITIES
========================= */

.facilities-section {
  background: #eef4fb;
}

.section-heading {
  max-width: 720px;
  margin-bottom: 55px;
}

.section-heading p {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.8;
}

.facility-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 18px;
}

.facility-card {
  position: relative;

  padding: 32px 27px;

  min-height: 300px;

  background: var(--white);

  border-radius: var(--radius);

  border: 1px solid #e2eaf4;

  overflow: hidden;

  transition:
    transform var(--transition),
    box-shadow var(--transition);
}

.facility-card:hover {
  transform:
    translateY(-10px)
    rotateX(2deg)
    rotateY(-2deg);

  box-shadow:
    0 30px 60px rgba(14,45,82,0.13);
}

.facility-card.featured {
  background:
    linear-gradient(
      145deg,
      #0b3d91,
      #08295e
    );

  color: var(--white);
}

.facility-card.featured p {
  color: rgba(255,255,255,0.6);
}

.facility-number {
  position: absolute;

  top: 20px;
  right: 22px;

  font-size: 10px;
  font-weight: 800;

  color: #a8b7ca;
}

.featured .facility-number {
  color: rgba(255,255,255,0.3);
}

.facility-icon {
  width: 58px;
  height: 58px;

  display: grid;
  place-items: center;

  border-radius: 18px;

  background: #edf5ff;

  color: var(--primary);

  font-size: 21px;

  margin-bottom: 30px;
}

.featured .facility-icon {
  background: rgba(255,255,255,0.1);
  color: var(--secondary);
}

.facility-card h3 {
  font-family: "Playfair Display", serif;

  font-size: 23px;

  margin-bottom: 14px;
}

.facility-card p {
  color: var(--muted);

  font-size: 12px;

  line-height: 1.7;
}

.facility-card a {
  position: absolute;

  bottom: 25px;
  left: 27px;

  display: flex;
  align-items: center;
  gap: 8px;

  color: var(--primary);

  font-size: 11px;
  font-weight: 800;
}

.featured a {
  color: var(--secondary);
}


/* =========================
   11. ACHIEVEMENT
========================= */

.achievement-section {
  background: var(--white);
}

.achievement-grid {
  display: grid;

  grid-template-columns:
    1fr 1fr;

  align-items: center;

  gap: 100px;
}

.achievement-content > p {
  color: var(--muted);

  max-width: 520px;

  font-size: 15px;

  line-height: 1.8;

  margin-bottom: 30px;
}

.achievement-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.achievement-list div {
  display: flex;
  align-items: center;
  gap: 12px;

  font-size: 13px;
  font-weight: 600;
}

.achievement-list i {
  width: 27px;
  height: 27px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background: #e8f7ee;

  color: #1a9c59;

  font-size: 10px;
}


/* Achievement visual */

.achievement-visual {
  min-height: 500px;

  position: relative;

  display: grid;
  place-items: center;
}

.achievement-circle {
  width: 330px;
  height: 330px;

  border-radius: 50%;

  padding: 2px;

  background:
    conic-gradient(
      var(--primary),
      var(--accent),
      var(--secondary),
      var(--primary)
    );

  animation:
    rotateRing 15s linear infinite;
}

.circle-content {
  width: 100%;
  height: 100%;

  border-radius: inherit;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background:
    radial-gradient(
      circle,
      #173b6b,
      #07172b
    );

  color: var(--white);

  animation:
    rotateRingReverse 15s linear infinite;
}

.circle-content i {
  font-size: 50px;
  color: var(--secondary);
  margin-bottom: 20px;
}

.circle-content strong {
  font-family: "Playfair Display", serif;
  font-size: 35px;
}

.circle-content span {
  color: rgba(255,255,255,0.5);
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
}


/* Floating cards */

.floating-card {
  position: absolute;

  padding: 13px 17px;

  border-radius: 14px;

  display: flex;
  align-items: center;
  gap: 10px;

  background: var(--white);

  box-shadow:
    0 20px 50px rgba(8,35,70,0.13);

  font-size: 11px;
  font-weight: 700;

  animation:
    floatingCard 4s ease-in-out infinite;
}

.floating-card i {
  color: var(--secondary);
}

.card-one {
  top: 70px;
  left: 0;
}

.card-two {
  right: 0;
  bottom: 70px;
  animation-delay: -2s;
}


/* =========================
   12. PRINCIPAL
========================= */

.principal-section {
  background: #f0f5fa;
}

.principal-box {
  display: grid;

  grid-template-columns:
    0.7fr 1.3fr;

  gap: 80px;

  align-items: center;

  padding: 60px;

  background: var(--white);

  border-radius: 32px;

  box-shadow:
    0 25px 70px rgba(14,40,70,0.08);
}

.principal-image {
  height: 390px;

  border-radius: 25px;

  background:
    linear-gradient(
      145deg,
      #0b3d91,
      #07182d
    );

  display: grid;
  place-items: center;

  overflow: hidden;
}

.principal-placeholder {
  width: 170px;
  height: 170px;

  border-radius: 50%;

  display: grid;
  place-items: center;

  background: rgba(255,255,255,0.08);

  border: 1px solid rgba(255,255,255,0.16);

  color: var(--secondary);

  font-size: 65px;
}

.principal-content blockquote {
  font-family: "Playfair Display", serif;

  font-size: 24px;

  line-height: 1.6;

  color: #35455b;

  margin-bottom: 30px;
}

.principal-name strong {
  display: block;
  color: var(--dark);
  font-size: 13px;
}

.principal-name span {
  display: block;

  margin-top: 5px;

  color: var(--muted);

  font-size: 11px;
}


/* =========================
   13. GALLERY
========================= */

.gallery-section {
  background: var(--white);
}

.gallery-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;

  max-width: none;
}

.gallery-heading .btn {
  color: var(--primary);
  border-color: #dce5f0;
  margin-bottom: 15px;
}

.gallery-grid {
  display: grid;

  grid-template-columns:
    1.5fr 1fr 1fr;

  grid-template-rows:
    230px 230px;

  gap: 15px;
}

.gallery-item {
  border-radius: 22px;

  overflow: hidden;

  background:
    linear-gradient(
      145deg,
      #0b3d91,
      #0b1e36
    );
}

.gallery-item.large {
  grid-row: span 2;
}

.gallery-placeholder {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 12px;

  color: rgba(255,255,255,0.85);

  background:
    radial-gradient(
      circle at 50% 40%,
      rgba(53,183,255,0.22),
      transparent 35%
    );

  transition: var(--transition);
}

.gallery-placeholder i {
  font-size: 40px;
  color: var(--secondary);
}

.gallery-placeholder span {
  font-size: 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.gallery-item:hover .gallery-placeholder {
  transform: scale(1.05);
}


/* =========================
   14. CTA
========================= */

.cta-section {
  position: relative;

  overflow: hidden;

  padding: 120px 0;

  background:
    linear-gradient(
      135deg,
      #06101e,
      #0b3d91
    );

  color: var(--white);

  text-align: center;
}

.cta-glow {
  position: absolute;

  width: 500px;
  height: 500px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(53,183,255,0.18),
      transparent 65%
    );

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
}

.cta-content {
  position: relative;
  z-index: 2;
}

.cta-content .section-label {
  justify-content: center;
  color: var(--secondary);
}

.cta-content .section-label span {
  background: rgba(255,255,255,0.1);
  color: var(--secondary);
}

.cta-content h2 {
  color: var(--white);
  max-width: 800px;
  margin: 0 auto 20px;
}

.cta-content h2 span {
  color: var(--secondary);
}

.cta-content p {
  max-width: 620px;

  margin: auto auto 30px;

  color: rgba(255,255,255,0.6);

  font-size: 14px;
  line-height: 1.8;
}

.btn-light {
  background: var(--white);
  color: var(--dark);
}

.btn-light:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 50px rgba(0,0,0,0.2);
}


/* =========================
   15. CONTACT
========================= */

.contact-section {
  background: #f3f7fb;
}

.contact-grid {
  display: grid;

  grid-template-columns:
    0.9fr 1.1fr;

  gap: 80px;

  align-items: start;
}

.contact-content > p {
  max-width: 500px;

  color: var(--muted);

  font-size: 14px;
  line-height: 1.8;

  margin-bottom: 35px;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 15px;
}

.contact-icon {
  width: 48px;
  height: 48px;

  border-radius: 15px;

  display: grid;
  place-items: center;

  background: var(--white);

  color: var(--primary);

  box-shadow:
    0 10px 30px rgba(10,40,80,0.06);
}

.contact-item strong {
  display: block;

  color: var(--dark);

  font-size: 12px;
}

.contact-item span {
  display: block;

  margin-top: 4px;

  color: var(--muted);

  font-size: 11px;
}


/* Form */

.contact-form {
  padding: 35px;

  background: var(--white);

  border-radius: 25px;

  box-shadow:
    0 25px 70px rgba(8,35,70,0.08);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.form-group {
  margin-bottom: 18px;
}

.form-group label {
  display: block;

  margin-bottom: 8px;

  color: var(--dark);

  font-size: 11px;
  font-weight: 700;
}

.form-group input,
.form-group textarea {
  width: 100%;

  border: 1px solid #dce5ef;

  background: #f9fbfd;

  padding: 14px 15px;

  border-radius: 12px;

  outline: none;

  font-size: 12px;

  color: var(--dark);

  transition: var(--transition);
}

.form-group textarea {
  resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--primary);

  background: var(--white);

  box-shadow:
    0 0 0 4px rgba(11,61,145,0.08);
}

.form-button {
  border: 0;
  width: 100%;
}


/* =========================
   16. FOOTER
========================= */

.footer {
  background: #06101e;

  color: var(--white);
}

.footer-grid {
  padding: 75px 0;

  display: grid;

  grid-template-columns:
    1.5fr 0.7fr 0.7fr 1fr;

  gap: 60px;
}

.footer-brand .logo {
  margin-bottom: 20px;
}

.footer-brand p {
  max-width: 330px;

  color: rgba(255,255,255,0.45);

  font-size: 12px;

  line-height: 1.8;
}

.social-links {
  display: flex;

  gap: 9px;

  margin-top: 25px;
}

.social-links a {
  width: 35px;
  height: 35px;

  display: grid;
  place-items: center;

  border-radius: 10px;

  background: rgba(255,255,255,0.07);

  color: rgba(255,255,255,0.65);

  font-size: 12px;

  transition: var(--transition);
}

.social-links a:hover {
  background: var(--secondary);
  color: var(--dark);
  transform: translateY(-4px);
}

.footer-links {
  display: flex;
  flex-direction: column;

  gap: 12px;
}

.footer-links h4 {
  font-size: 12px;

  margin-bottom: 8px;

  color: var(--white);
}

.footer-links a,
.footer-links span {
  color: rgba(255,255,255,0.43);

  font-size: 11px;

  transition: var(--transition);
}

.footer-links a:hover {
  color: var(--secondary);

  transform: translateX(4px);
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.08);

  padding: 22px 0;
}

.footer-bottom .container {
  display: flex;

  justify-content: space-between;

  gap: 20px;
}

.footer-bottom p {
  color: rgba(255,255,255,0.3);

  font-size: 10px;
}


/* =========================
   17. SCROLL REVEAL
========================= */

.reveal {
  opacity: 0;

  transform: translateY(35px);

  transition:
    opacity 0.8s ease,
    transform 0.8s ease;
}

.reveal.show {
  opacity: 1;
  transform: translateY(0);
}


/* =========================
   18. RESPONSIVE
========================= */

@media (max-width: 1050px) {

  .nav-links {
    gap: 18px;
  }

  .nav-button {
    display: none;
  }

  .hero-container {
    grid-template-columns: 1fr 0.7fr;
    gap: 35px;
  }

  .hero-info-card {
    width: 300px;
  }

  .facility-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .stats-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .stat-card:nth-child(2) {
    border-right: 0;
  }

  .stat-card:nth-child(-n+2) {
    border-bottom: 1px solid #e9eef5;
  }

}


/* Tablet */

@media (max-width: 850px) {

  .section-padding {
    padding: 90px 0;
  }

  .menu-btn {
    display: block;
  }

  .nav-links {
    position: fixed;

    top: 75px;
    left: 20px;
    right: 20px;

    padding: 25px;

    border-radius: 20px;

    background: rgba(6,16,30,0.97);

    backdrop-filter: blur(20px);

    border: 1px solid rgba(255,255,255,0.1);

    display: flex;
    flex-direction: column;
    align-items: stretch;

    gap: 0;

    transform:
      translateY(-20px);

    opacity: 0;
    visibility: hidden;

    transition: var(--transition);
  }

  .nav-links.open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-links a {
    padding: 15px 5px;
  }

  .nav-links a::after {
    display: none;
  }

  .hero {
    min-height: auto;
    padding: 150px 0 100px;
  }

  .hero-container {
    grid-template-columns: 1fr;
  }

  .hero-info-card {
    justify-self: start;
  }

  .hero h1 {
    font-size: clamp(46px, 10vw, 70px);
  }

  .about-grid,
  .achievement-grid,
  .principal-box,
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .principal-box {
    padding: 35px;
  }

  .principal-image {
    height: 350px;
  }

  .achievement-visual {
    min-height: 400px;
  }

  .gallery-grid {
    grid-template-columns:
      1fr 1fr;

    grid-template-rows:
      250px 200px 200px;
  }

  .gallery-item.large {
    grid-column: span 2;
    grid-row: span 1;
  }

  .footer-grid {
    grid-template-columns:
      1fr 1fr;
  }

}


/* Mobile */

@media (max-width: 600px) {

  .container,
  .nav-container,
  .hero-container {
    width: min(100% - 28px, 1180px);
  }

  .section-padding {
    padding: 75px 0;
  }

  .logo-text strong {
    font-size: 13px;
  }

  .logo-mark {
    width: 42px;
    height: 42px;
  }

  .hero {
    padding-top: 135px;
  }

  .hero h1 {
    font-size: 46px;
    letter-spacing: -2px;
  }

  .hero-description {
    font-size: 13px;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-buttons .btn {
    width: 100%;
  }

  .hero-info-card {
    width: 100%;
  }

  .scroll-down {
    display: none;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .stat-card {
    border-right: 0;
    border-bottom: 1px solid #e9eef5;
  }

  .stat-card:last-child {
    border-bottom: 0;
  }

  .facility-grid {
    grid-template-columns: 1fr;
  }

  .about-content h2,
  .section-heading h2,
  .achievement-content h2,
  .principal-content h2,
  .cta-content h2,
  .contact-content h2 {
    font-size: 42px;
  }

  .achievement-circle {
    width: 260px;
    height: 260px;
  }

  .card-one {
    left: 0;
    top: 30px;
  }

  .card-two {
    right: 0;
    bottom: 30px;
  }

  .gallery-heading {
    flex-direction: column;
    align-items: flex-start;
  }

  .gallery-grid {
    display: grid;

    grid-template-columns: 1fr;

    grid-template-rows:
      repeat(4, 220px);
  }

  .gallery-item.large {
    grid-column: auto;
  }

  .gallery-item {
    grid-column: auto !important;
  }

  .principal-box {
    padding: 22px;
  }

  .principal-image {
    height: 300px;
  }

  .principal-content blockquote {
    font-size: 19px;
  }

  .contact-form {
    padding: 22px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .footer-bottom .container {
    flex-direction: column;
  }

}


/* =========================
   19. REDUCED MOTION
========================= */

@media (prefers-reduced-motion: reduce) {

  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

}
