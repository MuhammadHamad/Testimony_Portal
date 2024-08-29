const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const testimonialBtnWrapper = document.querySelector(".testimonial-btn-wrapper");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    testimonialBtnWrapper.classList.toggle("active"); // Toggle the button visibility
});
