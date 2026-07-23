// ==========================================
// Typing Animation
// ==========================================

const roles = [
    "QA Engineer",
    "Automation Tester",
    "Software Test Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const roleElement = document.querySelector(".hero h2");

function typeEffect() {

    if (!roleElement) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        roleElement.textContent =
            currentRole.substring(0, charIndex++);

        if (charIndex > currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }

    } else {

        roleElement.textContent =
            currentRole.substring(0, charIndex--);

        if (charIndex < 0) {
            deleting = false;
            roleIndex++;

            if (roleIndex >= roles.length)
                roleIndex = 0;
        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


// ==========================================
// Navbar Background on Scroll
// ==========================================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "#08111f";
        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.4)";

    } else {

        navbar.style.background = "rgba(8,17,31,.85)";
        navbar.style.boxShadow = "none";

    }

});


// ==========================================
// Scroll Reveal Animation
// ==========================================

const revealElements = document.querySelectorAll(
".skill-card,.experience-card,.education-card,.certificate-card,.about-text"
);

function revealOnScroll() {

    revealElements.forEach(function (element) {

        const top = element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (top < windowHeight - 120) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(function(element){

    element.style.opacity="0";
    element.style.transform="translateY(40px)";
    element.style.transition=".8s";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ==========================================
// Active Navigation
// ==========================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==========================================
// Smooth Scroll
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({

            behavior: "smooth"

        });

    });

});


// ==========================================
// Back To Top Button
// ==========================================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.cssText = `
position:fixed;
bottom:25px;
right:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#2196f3;
color:#fff;
font-size:22px;
cursor:pointer;
display:none;
box-shadow:0 8px 20px rgba(0,0,0,.3);
transition:.3s;
z-index:999;
`;

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topButton.style.display="block";

    }

    else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ==========================================
// Footer Year
// ==========================================

const footer = document.querySelector("footer");

if(footer){

footer.innerHTML =
"© "+new Date().getFullYear()+
" Vigneshkumar S | QA Engineer";

}