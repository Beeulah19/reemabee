document.addEventListener("DOMContentLoaded", () => {
  /* Hero: animate immediately when page opens */
  const heroItems = document.querySelectorAll(
    ".hero .eyebrow, " +
    ".hero h1, " +
    ".hero .lede, " +
    ".hero .case-hero-image, " +
    ".hero .project-meta > div"
  );

  heroItems.forEach((item, index) => {
    item.classList.add("hero-load-item");
    item.style.setProperty("--animation-delay", `${index * 120}ms`);
  });

  setTimeout(() => {
    heroItems.forEach((item) => {
      item.classList.add("is-visible");
    });
  }, 80);

  /* Remaining sections: animate while scrolling */
  const scrollItems = document.querySelectorAll(
    ".case-study > section, " +
    ".choice-card, " +
    ".metric-card, " +
    ".flow-step, " +
    ".astra-wire-grid article, " +
    ".physical-grid figure, " +
    ".image-pair figure, " +
    ".before-after-grid figure"
  );

  scrollItems.forEach((item) => {
    item.classList.add("scroll-reveal");
  });

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -6% 0px"
    }
  );

  scrollItems.forEach((item) => {
    observer.observe(item);
  });
});