/* ===========================
   Back To Top Button
=========================== */
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* ===========================
   Smooth Anchor Scrolling
=========================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

/* ===========================
   Scroll Reveal Animations
=========================== */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll("section, .projects article").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

/* ===========================
   Performance & SEO Boost
   Lazy loading images
=========================== */
document.querySelectorAll("img").forEach(img => {
  img.loading = "lazy";
});
