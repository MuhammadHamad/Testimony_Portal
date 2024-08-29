const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const testimonialBtnWrapper = document.querySelector(".testimonial-btn-wrapper");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    testimonialBtnWrapper.classList.toggle("active");
});

// Back to Top Button
const backToTopButton = document.querySelector(".back-to-top");
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
});

// Submit testimony
const submitTestimony = () => {
    const form = document.getElementById('testimonyForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const testimony = {
            name: form.name.value,
            category: form.category.value,
            text: form.testimony.value
        };

        // You can handle the testimony data here (e.g., send to a server)
        console.log(testimony); // For demonstration purposes

        form.reset(); // Reset the form after submission
        alert("Testimony submitted!"); // Optional: Notify the user
    });
};

// Call the function to set up the form submission
submitTestimony();