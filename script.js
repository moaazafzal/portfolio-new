const revealElements = document.querySelectorAll(".reveal");
const progressBar = document.getElementById("scroll-progress-bar");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.getElementById("site-nav");
const year = document.getElementById("year");
const tiltCard = document.querySelector(".tilt-card");
const copyEmailButton = document.getElementById("copy-email");
const emailAddress = "afzalmoaaz3@gmail.com";

if (year) {
  year.textContent = new Date().getFullYear();
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const updateScrollProgress = () => {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;

  if (progressBar) {
    progressBar.style.width = `${progress}%`;
  }
};

updateScrollProgress();
window.addEventListener("scroll", updateScrollProgress, { passive: true });

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (tiltCard) {
  const resetTilt = () => {
    tiltCard.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg)";
  };

  tiltCard.addEventListener("pointermove", (event) => {
    const bounds = tiltCard.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const rotateY = ((x / bounds.width) - 0.5) * 8;
    const rotateX = ((y / bounds.height) - 0.5) * -8;

    tiltCard.style.transform =
      `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  tiltCard.addEventListener("pointerleave", resetTilt);
  tiltCard.addEventListener("pointercancel", resetTilt);
}

if (copyEmailButton) {
  copyEmailButton.addEventListener("click", async () => {
    const originalLabel = copyEmailButton.textContent;

    try {
      await navigator.clipboard.writeText(emailAddress);
      copyEmailButton.textContent = "Email copied";
    } catch (error) {
      copyEmailButton.textContent = "Copy failed";
    }

    window.setTimeout(() => {
      copyEmailButton.textContent = originalLabel;
    }, 1800);
  });
}
