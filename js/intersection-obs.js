const sectionColors = {
  six: "#bee9e8ff",
  five: "#62b6cbff",
  four: "#5fa8d3ff",
  three: "#5798bd",
  two: "#518eb1",
  one: "#4e86a7",
}

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry, index) => {
//       const intersecting = entry.isIntersecting;
//       console.log(entry)
//       if (intersecting) {
//         entry.target.style.setProperty("--sectionTitleText", sectionColors[entry.target.getAttribute("id")]);
//         entry.target.style.setProperty("background", `rgba(255, 255, 255, .${entry.target.dataset.alpha})`);
//       }
//     })
//   }
// );

const sectionTitles = document.querySelectorAll("h2");
sectionTitles.forEach(sectionTitle => {
  // observer.observe(sectionTitle);
  sectionTitle.style.setProperty("--sectionTitleText", sectionColors[sectionTitle.getAttribute("id")]);
  sectionTitle.style.setProperty("background", `rgba(255, 255, 255, .${sectionTitle.dataset.alpha})`);
});


// {
//   event.target.classList.add(sectionColors[event.target.getAttribute("id")]);
// }
// </script>