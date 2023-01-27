// Constants / Variables
const sectionColors = {
  one: "#4e86a7",
  two: "#518eb1",
  three: "#5798bd",
  four: "#5fa8d3ff",
  five: "#62b6cbff",
  six: "#bee9e8ff"
}

// DOM elements
const sectionTitles = document.querySelectorAll("h2");
const navComponent = document.querySelector(".navigation-component");

// Functions
function changeSectionColorsOnScroll() {
  sectionTitles.forEach((sectionTitle, index) => {
    sectionTitle.style.setProperty("--sectionTitleText", sectionColors[sectionTitle.getAttribute("id")]);
    sectionTitle.style.setProperty("background", `rgba(255, 255, 255, .${index + 1})`);
  });
}

function changeNavBackgroundOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navComponent.style.setProperty("--navBackground", sectionColors[entry.target.getAttribute("id")])
        }
      })
    })
    sectionTitles.forEach(sectionTitle => {
      observer.observe(sectionTitle);
    })
  };

  // Events
  function changeNavbarPaddingOnScroll() {
    window.addEventListener("scroll", function() {
      console.log("hi");
//       if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
// console.log(document.style);
//       } 
//       else {
//         navComponent.style.setProperty("padding", "20px");
//       }
    });
  }   
  changeNavbarPaddingOnScroll();

  // On load
  changeSectionColorsOnScroll();
  changeNavBackgroundOnScroll();
  