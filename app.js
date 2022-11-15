// const panels = document.querySelectorAll(".panel");

// panels.forEach((panel) => {
//   panel.addEventListener("click", () => {
//     removeActiveClasses();
//     panel.classList.add("active");
//   });
// });

// function removeActiveClasses() {
//   panels.forEach((panel) => {
//     panel.classList.remove("active");
//   });
// }

// // grabbing the element from the dom
// const panels = document.querySelectorAll(".panel");

// // // adding a forEach method to make changes
// panels.forEach((panel) => {
//   panel.addEventListener("click", () => {
//     removeClass();
//     panel.classList.add("active");
//   });
// });
// // removefunction
// function removeClass() {
//   panels.forEach((panel) => {
//     panel.classList.remove("active");
//   });
// }

// const panels = document.querySelectorAll(".panel");

// panels.forEach((panel) => {
//   panel.addEventListener("click", () => {
//     removeClass();
//     panel.classList.add("active");
//   });
// });
// function removeClass() {
//   panels.forEach((panel) => {
//     panel.classList.remove("active");
//   });
// }

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeClass();
    panel.classList.add("active");
  });
});

function removeClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
