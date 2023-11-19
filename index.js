const hamburger = document.querySelector(".hamburger");
const missionElements = document.querySelectorAll(".mission");

let prevScrollPos = window.scrollY;

const toggleMenu = () => {
  const sideNavigation = document.querySelector(".side-navigation");
  const backdrop = document.querySelector(".backdrop");
  backdrop.classList.toggle("backdrop--active");
  sideNavigation.classList.toggle("side-navigation--active");
  hamburger.classList.toggle("hamburger--active");
};

const handleScroll = () => {
  const header = document.querySelector("header");
  const currentScrollPosition = window.scrollY;
  const halfScreenHeight = Math.floor(window.innerHeight / 2);

  if (hamburger.classList.contains("hamburger--active")) {
    toggleMenu();
  }

  if (currentScrollPosition > halfScreenHeight) {
    header.classList.add("background");
  } else {
    header.classList.remove("background");
  }

  if (currentScrollPosition > prevScrollPos) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  prevScrollPos = currentScrollPosition;
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((section) => {
      if (section.isIntersecting) {
        section.target.classList.add("active");
      }
    });
  },
  { threshold: 0.8 }
);

hamburger.addEventListener("click", toggleMenu);

window.addEventListener("scroll", handleScroll);

missionElements.forEach((section) => {
  observer.observe(section);
});
