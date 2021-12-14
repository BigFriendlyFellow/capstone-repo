import { Header, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";

const router = new Navigo(window.location.origin);
// or new Navigo("/")

router
  .on({
    // this is an object with keys and data
    "/": () => render(state.Home),
    // : below means something comes before it
    ":page": params => {
      let page = capitalize(params.page);
      render(state[page]);
    }
  })
  .resolve();

function render(st) {
  document.querySelector("#root").innerHTML = `
    ${Header(state.Links)}
    ${Main(st)}
    ${Footer()}
  `;
  router.updatePageLinks();
  // addEventListeners(st);
}

// function render(st) {
//   document.getElementById("root").innerHTML = `
//   ${Header(st)}
//   ${Main(st)}
//   ${Footer()}
//   `
// };

// render(state.home);
// just for fun

// function addEventListeners(st) {
//   document.querySelectorAll("nav a").forEach(navLink =>
//     navLink.addEventListener("click", event => {
//       event.preventDefault();
//       render(state[event.target.title]);
//     })
//   );

//   // add menu toggle to bars icon in nav bar
//   // when you click hamburger, this function makes the menu come down
//   document
//     .querySelector(".fa-bars")
//     .addEventListener("click", () =>
//       document.querySelector("nav > ul").classList.toggle("hidden--mobile")
//     );

//   // event listener for the the photo form
//   if (st.view === "Register") {
//     document.querySelector("form").addEventListener("submit", event => {
//       event.preventDefault();
//       // convert HTML elements to Array
//       let inputList = Array.from(event.target.elements);
//       // remove submit button from list
//       inputList.pop();
//       // construct new picture object
//       let newPic = inputList.reduce((pictureObject, input) => {
//         pictureObject[input.name] = input.value;
//         return pictureObject;
//       }, {});
//       // add new picture to state.Gallery.pictures
//       state.Gallery.pictures.push(newPic);
//       render(state.Gallery);
//     });
//   }
// }
