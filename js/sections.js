// Constants / Variables

// DOM elements
const subHeading = document.querySelector(".section-component.two h3");
const paragraph = document.querySelector(".section-component.two p");

// Functions
function changeSectionColorsOnScroll() {
  sectionTitles.forEach((sectionTitle, index) => {
    sectionTitle.style.setProperty("--sectionTitleText", sectionColors[sectionTitle.dataset.headingNumber]);
    sectionTitle.style.setProperty("background", `rgba(255, 255, 255, .${index + 1})`);
    });
  }
  function textElementsReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
            (entry.isIntersecting) && entry.target.dataset.headingNumber === "one" && subHeading.classList.remove("slide-in");
            (entry.isIntersecting) && entry.target.dataset.headingNumber === "one" && paragraph.classList.remove("fade-in");
            (entry.isIntersecting) && entry.target.dataset.headingNumber === "two" && subHeading.classList.add("slide-in");
            (entry.isIntersecting) && entry.target.dataset.headingNumber === "two" && paragraph.classList.add("fade-in");
          });
      });
      sectionTitles.forEach(sectionTitle => {
        observer.observe(sectionTitle);
      });
    };

// On load
textElementsReveal();
changeSectionColorsOnScroll();
