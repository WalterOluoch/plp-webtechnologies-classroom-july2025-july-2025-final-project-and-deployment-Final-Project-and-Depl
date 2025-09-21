// ===== Smooth Scroll to Info Section =====
function scrollToInfo() {
    document.getElementById("info").scrollIntoView({ behavior: "smooth" });
}

// ===== Auto Image Slider =====
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach(slide => slide.classList.remove("active"));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
}

if (slides.length > 0) {
    setInterval(showSlides, 4000); // Change every 4 seconds
}

// ===== Navbar Active State on Scroll =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// ===== Form Validation =====
const form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const formMessage = document.getElementById("formMessage");

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "⚠️ All fields are required!";
            formMessage.style.color = "red";
        } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
            formMessage.textContent = "⚠️ Please enter a valid email!";
            formMessage.style.color = "red";
        } else {
            formMessage.textContent = "✅ Message sent successfully!";
            formMessage.style.color = "green";
            form.reset();
        }
    });
}
