const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const testimonialBtnWrapper = document.querySelector(
  ".testimonial-btn-wrapper"
);

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
  testimonialBtnWrapper.classList.toggle("active"); // Toggle the button visibility
});

// Back to Top Button
const backToTopButton = document.createElement("button");
backToTopButton.innerText = "↑";
backToTopButton.classList.add("back-to-top");
document.body.appendChild(backToTopButton);

window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
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
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Collapsible Footer Sections (for smaller screens)
const footerSections = document.querySelectorAll(".footer-section h3");
footerSections.forEach((header) => {
  header.addEventListener("click", function () {
    const section = this.nextElementSibling;
    section.style.display = section.style.display === "none" ? "block" : "none";
  });
});
