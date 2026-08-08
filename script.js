/* =========================================================
   SSPS PREMIUM 3D WEBSITE
   script.js
   ========================================================= */


/* =========================================================
   1. PRELOADER
========================================================= */

window.addEventListener("load", () => {

  const preloader = document.getElementById("preloader");

  setTimeout(() => {

    if (preloader) {
      preloader.classList.add("hide");
    }

  }, 700);

});


/* =========================================================
   2. CURRENT YEAR
========================================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* =========================================================
   3. NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.getElementById("navbar");

function updateNavbar() {

  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

}

window.addEventListener("scroll", updateNavbar);

updateNavbar();


/* =========================================================
   4. MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

  menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    document.body.classList.toggle("no-scroll");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("open")) {

      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");

    } else {

      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");

    }

  });


  /* Close menu after clicking link */

  const links = navLinks.querySelectorAll("a");

  links.forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("open");

      document.body.classList.remove("no-scroll");

      const icon = menuBtn.querySelector("i");

      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");

    });

  });

}


/* =========================================================
   5. SMOOTH ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

function updateActiveNavigation() {

  let currentSection = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {

      currentSection = section.getAttribute("id");

    }

  });


  navigationLinks.forEach(link => {

    link.classList.remove("active");

    const href = link.getAttribute("href");

    if (href === `#${currentSection}`) {
      link.classList.add("active");
    }

  });

}

window.addEventListener("scroll", updateActiveNavigation);


/* =========================================================
   6. NUMBER COUNTER ANIMATION
========================================================= */

const counters = document.querySelectorAll("[data-count]");

let countersStarted = false;

function animateCounters() {

  if (countersStarted) return;

  const statsSection = document.querySelector(".stats-section");

  if (!statsSection) return;

  const sectionTop =
    statsSection.getBoundingClientRect().top;

  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight * 0.85) {

    countersStarted = true;

    counters.forEach(counter => {

      const target =
        Number(counter.getAttribute("data-count"));

      let current = 0;

      const duration = 1800;

      const startTime = performance.now();

      function updateCounter(currentTime) {

        const progress =
          Math.min(
            (currentTime - startTime) / duration,
            1
          );

        const easedProgress =
          1 - Math.pow(1 - progress, 3);

        current =
          Math.floor(target * easedProgress);

        counter.textContent =
          current.toLocaleString();

        if (progress < 1) {

          requestAnimationFrame(updateCounter);

        } else {

          counter.textContent =
            target.toLocaleString() + "+";

        }

      }

      requestAnimationFrame(updateCounter);

    });

  }

}

window.addEventListener("scroll", animateCounters);

animateCounters();


/* =========================================================
   7. SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
  ".about-content, .facility-card, .achievement-content, " +
  ".achievement-visual, .principal-box, .gallery-item, " +
  ".contact-content, .contact-form"
);

revealElements.forEach(element => {
  element.classList.add("reveal");
});


const revealObserver =
  new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach(element => {
  revealObserver.observe(element);
});


/* =========================================================
   8. THREE.JS 3D HERO
========================================================= */

const canvas = document.getElementById("heroCanvas");

if (canvas && typeof THREE !== "undefined") {

  /* -------------------------
     Scene
  ------------------------- */

  const scene = new THREE.Scene();


  /* -------------------------
     Camera
  ------------------------- */

  const camera =
    new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );

  camera.position.set(0, 1.8, 8);


  /* -------------------------
     Renderer
  ------------------------- */

  const renderer =
    new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true
    });

  renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 2)
  );

  renderer.setSize(
    window.innerWidth,
    window.innerHeight
  );


  /* -------------------------
     Lights
  ------------------------- */

  const ambientLight =
    new THREE.AmbientLight(
      0xffffff,
      1.3
    );

  scene.add(ambientLight);


  const directionalLight =
    new THREE.DirectionalLight(
      0xffffff,
      2
    );

  directionalLight.position.set(
    5,
    8,
    5
  );

  scene.add(directionalLight);


  const blueLight =
    new THREE.PointLight(
      0x35b7ff,
      5,
      20
    );

  blueLight.position.set(
    -4,
    3,
    3
  );

  scene.add(blueLight);


  const goldLight =
    new THREE.PointLight(
      0xf4b400,
      4,
      15
    );

  goldLight.position.set(
    4,
    1,
    2
  );

  scene.add(goldLight);


  /* =====================================================
     3D SCHOOL BUILDING
  ===================================================== */

  const schoolGroup =
    new THREE.Group();

  schoolGroup.position.set(
    2.3,
    -1.5,
    0
  );

  schoolGroup.rotation.y = -0.18;

  scene.add(schoolGroup);


  /* -------------------------
     Materials
  ------------------------- */

  const wallMaterial =
    new THREE.MeshStandardMaterial({
      color: 0x173c70,
      roughness: 0.55,
      metalness: 0.15
    });


  const roofMaterial =
    new THREE.MeshStandardMaterial({
      color: 0x0b1f3b,
      roughness: 0.4,
      metalness: 0.2
    });


  const windowMaterial =
    new THREE.MeshStandardMaterial({
      color: 0x35b7ff,
      emissive: 0x35b7ff,
      emissiveIntensity: 0.7,
      transparent: true,
      opacity: 0.85
    });


  const goldMaterial =
    new THREE.MeshStandardMaterial({
      color: 0xf4b400,
      emissive: 0xf4b400,
      emissiveIntensity: 0.15,
      roughness: 0.35,
      metalness: 0.45
    });


  /* -------------------------
     Main Building
  ------------------------- */

  const buildingGeometry =
    new THREE.BoxGeometry(
      4.8,
      2.8,
      2
    );

  const building =
    new THREE.Mesh(
      buildingGeometry,
      wallMaterial
    );

  building.position.y = 1.4;

  schoolGroup.add(building);


  /* -------------------------
     Second Floor
  ------------------------- */

  const upperGeometry =
    new THREE.BoxGeometry(
      3.7,
      1.4,
      1.8
    );

  const upperFloor =
    new THREE.Mesh(
      upperGeometry,
      wallMaterial
    );

  upperFloor.position.set(
    0,
    3.45,
    0
  );

  schoolGroup.add(upperFloor);


  /* -------------------------
     Roof
  ------------------------- */

  const roofGeometry =
    new THREE.ConeGeometry(
      3.1,
      1.2,
      4
    );

  const roof =
    new THREE.Mesh(
      roofGeometry,
      roofMaterial
    );

  roof.rotation.y =
    Math.PI / 4;

  roof.position.set(
    0,
    4.75,
    0
  );

  schoolGroup.add(roof);


  /* -------------------------
     Entrance
  ------------------------- */

  const entranceGeometry =
    new THREE.BoxGeometry(
      1.1,
      1.9,
      0.15
    );

  const entrance =
    new THREE.Mesh(
      entranceGeometry,
      goldMaterial
    );

  entrance.position.set(
    0,
    0.95,
    1.08
  );

  schoolGroup.add(entrance);


  /* -------------------------
     Windows
  ------------------------- */

  function createWindow(
    x,
    y,
    z,
    scaleX = 1,
    scaleY = 1
  ) {

    const geometry =
      new THREE.BoxGeometry(
        0.48 * scaleX,
        0.58 * scaleY,
        0.12
      );

    const windowMesh =
      new THREE.Mesh(
        geometry,
        windowMaterial
      );

    windowMesh.position.set(
      x,
      y,
      z
    );

    schoolGroup.add(windowMesh);

  }


  /* Ground floor windows */

  const windowPositions = [
    -1.8,
    -1.2,
    -0.6,
    0.6,
    1.2,
    1.8
  ];

  windowPositions.forEach(x => {

    createWindow(
      x,
      1.7,
      1.08
    );

  });


  /* Upper floor windows */

  [-1.2, -0.4, 0.4, 1.2].forEach(x => {

    createWindow(
      x,
      3.55,
      0.98,
      0.8,
      0.9
    );

  });


  /* -------------------------
     Columns
  ------------------------- */

  [-2.15, 2.15].forEach(x => {

    const columnGeometry =
      new THREE.BoxGeometry(
        0.22,
        3.3,
        0.25
      );

    const column =
      new THREE.Mesh(
        columnGeometry,
        goldMaterial
      );

    column.position.set(
      x,
      1.65,
      1.03
    );

    schoolGroup.add(column);

  });


  /* -------------------------
     School Flag
  ------------------------- */

  const poleGeometry =
    new THREE.CylinderGeometry(
      0.025,
      0.025,
      2.2,
      12
    );

  const pole =
    new THREE.Mesh(
      poleGeometry,
      goldMaterial
    );

  pole.position.set(
    0,
    5.8,
    0
  );

  schoolGroup.add(pole);


  const flagGeometry =
    new THREE.PlaneGeometry(
      0.9,
      0.5
    );

  const flagMaterial =
    new THREE.MeshBasicMaterial({
      color: 0xf4b400,
      side: THREE.DoubleSide
    });

  const flag =
    new THREE.Mesh(
      flagGeometry,
      flagMaterial
    );

  flag.position.set(
    0.45,
    6.3,
    0
  );

  flag.rotation.y =
    Math.PI / 2;

  schoolGroup.add(flag);


  /* =====================================================
     FLOATING PARTICLES
  ===================================================== */

  const particleCount = 500;

  const particleGeometry =
    new THREE.BufferGeometry();

  const particlePositions =
    new Float32Array(
      particleCount * 3
    );


  for (
    let i = 0;
    i < particleCount * 3;
    i += 3
  ) {

    particlePositions[i] =
      (Math.random() - 0.5) * 14;

    particlePositions[i + 1] =
      (Math.random() - 0.5) * 9;

    particlePositions[i + 2] =
      (Math.random() - 0.5) * 8;

  }


  particleGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(
      particlePositions,
      3
    )
  );


  const particleMaterial =
    new THREE.PointsMaterial({
      color: 0x72cfff,
      size: 0.025,
      transparent: true,
      opacity: 0.65
    });


  const particles =
    new THREE.Points(
      particleGeometry,
      particleMaterial
    );

  scene.add(particles);


  /* =====================================================
     MOUSE MOVEMENT
  ===================================================== */

  let mouseX = 0;
  let mouseY = 0;

  let targetMouseX = 0;
  let targetMouseY = 0;


  window.addEventListener(
    "mousemove",
    event => {

      targetMouseX =
        (event.clientX /
          window.innerWidth -
          0.5) * 2;

      targetMouseY =
        (event.clientY /
          window.innerHeight -
          0.5) * 2;

    }
  );


  /* =====================================================
     TOUCH MOVEMENT
  ===================================================== */

  window.addEventListener(
    "touchmove",
    event => {

      if (!event.touches.length) return;

      targetMouseX =
        (event.touches[0].clientX /
          window.innerWidth -
          0.5) * 2;

      targetMouseY =
        (event.touches[0].clientY /
          window.innerHeight -
          0.5) * 2;

    },
    {
      passive: true
    }
  );


  /* =====================================================
     ANIMATION LOOP
  ===================================================== */

  const clock =
    new THREE.Clock();


  function animate() {

    requestAnimationFrame(animate);


    const elapsed =
      clock.getElapsedTime();


    /* Smooth mouse */

    mouseX +=
      (targetMouseX - mouseX) * 0.04;

    mouseY +=
      (targetMouseY - mouseY) * 0.04;


    /* School movement */

    schoolGroup.rotation.y =
      -0.18 +
      mouseX * 0.12;

    schoolGroup.rotation.x =
      mouseY * 0.04;

    schoolGroup.position.y =
      -1.5 +
      Math.sin(elapsed * 1.2) * 0.08;


    /* Particles */

    particles.rotation.y =
      elapsed * 0.015;

    particles.rotation.x =
      mouseY * 0.03;


    /* Camera */

    camera.position.x =
      mouseX * 0.15;

    camera.position.y =
      1.8 -
      mouseY * 0.12;

    camera.lookAt(
      1.2,
      2,
      0
    );


    renderer.render(
      scene,
      camera
    );

  }


  animate();


  /* =====================================================
     RESIZE
  ===================================================== */

  window.addEventListener(
    "resize",
    () => {

      camera.aspect =
        window.innerWidth /
        window.innerHeight;

      camera.updateProjectionMatrix();

      renderer.setSize(
        window.innerWidth,
        window.innerHeight
      );

      renderer.setPixelRatio(
        Math.min(
          window.devicePixelRatio,
          2
        )
      );

    }
  );

}


/* =========================================================
   9. CONTACT FORM
========================================================= */

const contactForm =
  document.getElementById("contactForm");

if (contactForm) {

  contactForm.addEventListener(
    "submit",
    event => {

      event.preventDefault();

      const button =
        contactForm.querySelector(
          "button[type='submit']"
        );

      const originalHTML =
        button.innerHTML;

      button.innerHTML =
        `
          <i class="fa-solid fa-check"></i>
          Message Ready
        `;

      button.disabled = true;

      setTimeout(() => {

        contactForm.reset();

        button.innerHTML =
          originalHTML;

        button.disabled = false;

      }, 2500);

    }
  );

}


/* =========================================================
   10. 3D CARD TILT EFFECT
========================================================= */

const cards =
  document.querySelectorAll(
    ".facility-card, .hero-info-card"
  );


cards.forEach(card => {

  card.addEventListener(
    "mousemove",
    event => {

      if (window.innerWidth < 800) {
        return;
      }

      const rect =
        card.getBoundingClientRect();

      const x =
        event.clientX - rect.left;

      const y =
        event.clientY - rect.top;

      const centerX =
        rect.width / 2;

      const centerY =
        rect.height / 2;

      const rotateX =
        (y - centerY) /
        25;

      const rotateY =
        (centerX - x) /
        25;

      card.style.transform =
        `
          perspective(900px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          translateY(-8px)
        `;

    }
  );


  card.addEventListener(
    "mouseleave",
    () => {

      card.style.transform = "";

    }
  );

});


/* =========================================================
   11. PARALLAX EFFECT
========================================================= */

const heroContent =
  document.querySelector(".hero-content");

if (heroContent) {

  window.addEventListener(
    "scroll",
    () => {

      if (window.innerWidth < 800) {
        return;
      }

      const scroll =
        window.scrollY;

      if (scroll < window.innerHeight) {

        heroContent.style.transform =
          `translateY(${scroll * 0.08}px)`;

        heroContent.style.opacity =
          Math.max(
            0,
            1 - scroll / 700
          );

      }

    }
  );

}


/* =========================================================
   12. BUTTON RIPPLE EFFECT
========================================================= */

const buttons =
  document.querySelectorAll(
    ".btn, .nav-button"
  );


buttons.forEach(button => {

  button.addEventListener(
    "click",
    function(event) {

      const ripple =
        document.createElement("span");

      ripple.classList.add("ripple");

      const rect =
        button.getBoundingClientRect();

      ripple.style.left =
        `${event.clientX - rect.left}px`;

      ripple.style.top =
        `${event.clientY - rect.top}px`;

      button.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);

    }
  );

});


/* =========================================================
   13. CONSOLE MESSAGE
========================================================= */

console.log(
  "%c SSPS 3D Website ",
  "background:#0b3d91;color:#fff;font-size:18px;padding:10px;"
);

console.log(
  "Welcome to Swami Shantanand Public School."
);
