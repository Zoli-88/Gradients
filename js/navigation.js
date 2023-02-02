// Constants / Variables
const sectionColors = {
  one: "#4e86a7",
  two: "#518eb1",
  three: "#5798bd",
  four: "#5fa8d3ff",
  five: "#62b6cbff",
  six: "#bee9e8ff"
}

const SCROLL_TOP_DISTANCE = 100;

// DOM elements
const sectionTitles = document.querySelectorAll("h2");
const navComponent = document.querySelector(".navigation-component");
const logo = document.querySelector(".logo");

// Functions
function changeSectionColorsOnScroll() {
  sectionTitles.forEach((sectionTitle, index) => {
    sectionTitle.style.setProperty("--sectionTitleText", sectionColors[sectionTitle.dataset.headingNumber]);
    sectionTitle.style.setProperty("background", `rgba(255, 255, 255, .${index + 1})`);
  });
}

function changeNavBackgroundOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navComponent.style.setProperty("--navBackground", sectionColors[entry.target.dataset.headingNumber]);
          if (entry.target.dataset.headingNumber === "one") {
            logo.classList.add("bounce");
          } else {
            logo.classList.remove("bounce");
          }
        }
      });
    });
    sectionTitles.forEach(sectionTitle => {
      observer.observe(sectionTitle);
    });
  };
  
  // Events
  function changeNavbarPaddingOnScroll() {
    document.addEventListener("scroll", function() {
      if (document.body.scrollTop > SCROLL_TOP_DISTANCE || document.documentElement.scrollTop > SCROLL_TOP_DISTANCE) {
        navComponent.classList.add("nav-scroll-padding");
      }
      else {
        navComponent.classList.remove("nav-scroll-padding");
      }
    });
  }
  
  changeNavbarPaddingOnScroll();

  // On load
  changeSectionColorsOnScroll();
  changeNavBackgroundOnScroll();
  