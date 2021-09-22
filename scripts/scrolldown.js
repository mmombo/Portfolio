const projectLink = document.querySelector("#project-link");
const projects = document.querySelector("#projects");
projectLink.onclick = function () {
  projects.scrollIntoView({ behavior: "smooth", block: "start" });
};

// const contactLink = document.querySelector("#contact-link");
// const contact = document.querySelector("#contact");
// contactLink.onclick = function () {
//   contact.scrollIntoView({ behavior: "smooth", block: "start" });
// };
