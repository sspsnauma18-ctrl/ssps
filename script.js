/* =====================================================
   SSPS WEBSITE SCRIPT
===================================================== */


/* =====================================================
   1. CURRENT YEAR
===================================================== */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/* =====================================================
   2. NAVBAR
===================================================== */

const navbar =
    document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =====================================================
   3. MOBILE MENU
===================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("open");

        const icon =
            menuBtn.querySelector("i");

        if (icon) {

            if (
                navLinks.classList.contains("open")
            ) {

                icon.classList.remove(
                    "fa-bars"
                );

                icon.classList.add(
                    "fa-xmark"
                );

            } else {

                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }

        }

    });


    navLinks
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "open"
                    );

                }
            );

        });

}


/* =====================================================
   4. NAVIGATION ACTIVE LINK
===================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const links =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const top =
                section.offsetTop - 180;

            const height =
                section.offsetHeight;

            if (
                window.scrollY >= top &&
                window.scrollY <
                top + height
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        links.forEach(link => {

            link.classList.remove(
                "active"
            );

            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }
);


/* =====================================================
   5. PRINCIPAL + DIRECTOR 3D EFFECT
===================================================== */

const leaderCards =
    document.querySelectorAll(
        ".leader-card"
    );


leaderCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            if (window.innerWidth < 800) {
                return;
            }


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;

            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;


            const rotateX =
                (centerY - y) / 100;

            const rotateY =
                (x - centerX) / 100;


            card.style.transform =
                `
                perspective(1200px)
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


/* =====================================================
   6. FACILITY CARD 3D EFFECT
===================================================== */

const facilityCards =
    document.querySelectorAll(
        ".facility-card"
    );


facilityCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            if (window.innerWidth < 800) {
                return;
            }

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX -
                rect.left;

            const y =
                event.clientY -
                rect.top;

            const rotateX =
                (rect.height / 2 - y) / 30;

            const rotateY =
                (x - rect.width / 2) / 30;


            card.style.transform =
                `
                perspective(800px)
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


/* =====================================================
   7. SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".about-box, " +
        ".facility-card, " +
        ".leader-card, " +
        ".gallery-item, " +
        ".contact-box"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =====================================================
   8. THREE.JS HERO
===================================================== */

const canvas =
    document.getElementById(
        "heroCanvas"
    );


if (
    canvas &&
    typeof THREE !== "undefined"
) {

    const scene =
        new THREE.Scene();


    const camera =
        new THREE.PerspectiveCamera(
            45,
            window.innerWidth /
            window.innerHeight,
            0.1,
            100
        );


    camera.position.set(
        0,
        1.5,
        7
    );


    const renderer =
        new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: true
        });


    renderer.setPixelRatio(
        Math.min(
            window.devicePixelRatio,
            2
        )
    );


    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );


    /* Lights */

    const ambient =
        new THREE.AmbientLight(
            0xffffff,
            1.4
        );

    scene.add(ambient);


    const light =
        new THREE.PointLight(
            0x35b7ff,
            5,
            20
        );

    light.position.set(
        3,
        4,
        5
    );

    scene.add(light);


    /* Building */

    const building =
        new THREE.Mesh(

            new THREE.BoxGeometry(
                3.5,
                2.5,
                2
            ),

            new THREE.MeshStandardMaterial({
                color: 0x173c70,
                roughness: 0.5
            })

        );


    building.position.set(
        1.8,
        0,
        0
    );


    scene.add(building);


    /* Roof */

    const roof =
        new THREE.Mesh(

            new THREE.ConeGeometry(
                2.6,
                1,
                4
            ),

            new THREE.MeshStandardMaterial({
                color: 0x0b1f3b
            })

        );


    roof.position.set(
        1.8,
        1.75,
        0
    );


    roof.rotation.y =
        Math.PI / 4;


    scene.add(roof);


    /* Animation */

    function animate() {

        requestAnimationFrame(
            animate
        );


        building.rotation.y +=
            0.0015;

        roof.rotation.y =
            Math.PI / 4 +
            building.rotation.y;


        renderer.render(
            scene,
            camera
        );

    }


    animate();


    /* Resize */

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

        }
    );

}


/* =====================================================
   9. BUTTON EFFECT
===================================================== */

document
    .querySelectorAll(".btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                button.style.transform =
                    "translateY(-3px)";

                setTimeout(() => {

                    button.style.transform =
                        "";

                }, 250);

            }
        );

    });


/* =====================================================
   10. WELCOME MESSAGE
===================================================== */

console.log(
    "SSPS Premium 3D Website Loaded Successfully."
);

console.log(
    "Principal: Ujjwal"
);

console.log(
    "Director: Er. Chandan"
);
