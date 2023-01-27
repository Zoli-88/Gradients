const sectionColors = {
  one: "#4e86a7",
  two: "#518eb1",
  three: "#5798bd",
  four: "#5fa8d3ff",
  five: "#62b6cbff",
  six: "#bee9e8ff"
}

function changeSectionColorsOnScroll() {
  const sectionTitles = document.querySelectorAll("h2");
  sectionTitles.forEach((sectionTitle, index) => {
    sectionTitle.style.setProperty("--sectionTitleText", sectionColors[sectionTitle.getAttribute("id")]);
    sectionTitle.style.setProperty("background", `rgba(255, 255, 255, .${index + 1})`);
  });
}

changeSectionColorsOnScroll();


function changeNavBackgroundOnScroll() {

  const navComponent = document.querySelector(".navigation-component");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navComponent.style.setProperty("--navBackground", sectionColors[entry.target.getAttribute("id")])
        }
      })
    })
  const sections = document.querySelectorAll("h2");
  sections.forEach(section => {
    observer.observe(section);
  })
};
changeNavBackgroundOnScroll();
