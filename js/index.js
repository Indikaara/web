document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("main-header");

  // Handle scroll behavior
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("bg-[#331211]/85", "backdrop-blur-sm", "shadow-lg");
      header.classList.remove(
        "bg-transparent",
        "backdrop-blur-0",
        "shadow-none"
      );
    } else {
      header.classList.remove(
        "bg-[#331211]/85",
        "backdrop-blur-sm",
        "shadow-lg"
      );
      header.classList.add("bg-transparent", "backdrop-blur-0", "shadow-none");
    }
  });

  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  animatedElements.forEach((el) => {
    observer.observe(el);
  });

  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }
});
