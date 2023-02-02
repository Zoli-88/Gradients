// Constants / Variables

// DOM elements
const subHeadings = document.querySelectorAll("h3");
const paragraphs = document.querySelectorAll("p");

// Functions
function changeSectionColorsOnScroll() {
    sectionTitles.forEach((sectionTitle, index) => {
      sectionTitle.style.setProperty("--sectionTitleText", sectionColors[sectionTitle.dataset.headingNumber]);
      sectionTitle.style.setProperty("background", `rgba(255, 255, 255, .${index + 1})`);
    });
  }

  function subHeadingSlideInOnScroll() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
              if (entry.target.dataset.headingNumber === "two") {
                subHeadings[0].classList.add("slide-in");
              }
              else {
                subHeadings[0].classList.remove("slide-in");
              }
            }
        });
      });
      sectionTitles.forEach(sectionTitle => {
        observer.observe(sectionTitle);
      });
    };

// On load
subHeadingSlideInOnScroll();
changeSectionColorsOnScroll();
