/* =========================================
   SSPS 3D WEBSITE JAVASCRIPT
========================================= */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");

const navbar = document.getElementById("navbar");


menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("active");

});


/* CLOSE MENU AFTER CLICK */

document.querySelectorAll("#navbar a").forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

    });

});



/* ================= HERO 3D MOVEMENT ================= */

const heroBackground =
    document.querySelector(".hero-background");


document.addEventListener("mousemove", function (event) {

    if (!heroBackground) return;


    const x =
        (event.clientX / window.innerWidth - 0.5) * 2;


    const y =
        (event.clientY / window.innerHeight - 0.5) * 2;


    heroBackground.style.transform =
        `scale(1.08) translate(${x * -8}px, ${y * -5}px)`;

});



/* ================= 3D TILT EFFECT ================= */

const tiltCards =
    document.querySelectorAll(".tilt");


tiltCards.forEach(function (card) {


    card.addEventListener("mousemove", function (event) {


        const rect =
            card.getBoundingClientRect();


        const x =
            (event.clientX - rect.left) /
            rect.width - 0.5;


        const y =
            (event.clientY - rect.top) /
            rect.height - 0.5;


        const rotateX =
            y * -6;


        const rotateY =
            x * 6;


        card.style.transform =

            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });



    card.addEventListener("mouseleave", function () {

        card.style.transform = "";

    });

});



/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(
        ".section-title, .about-container, .facility-card, .service-card, .contact-item"
    );


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    observer.observe(element);

});



/* ================= CONSOLE ================= */

console.log(
    "Swami Shantanand Public School - 3D Website Loaded"
);
