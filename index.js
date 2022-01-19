import { Header, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = new Navigo(window.location.origin);
// or new Navigo("/")

function render(st) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Main(st)}
    ${Footer()}
  `;
  router.updatePageLinks();
  addEventListeners(st);
}

function addEventListeners(st) {
  if (st.view === "Home") {
    const form = document.getElementById("submit1");
    form.addEventListener("click", event => {
      event.preventDefault();
      console.log("Form submitted");

      // const input = event.target.elements;
      const input = document.getElementById("entry1").value;
      console.log(input);
      state.Home.zipCode = input;
      console.log("this is ", state.Home.zipCode);

      axios
        .get(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/historysummary?aggregateHours=24&combinationMethod=aggregate&maxStations=-1&maxDistance=-1&minYear=1991&maxYear=2021&chronoUnit=years&breakBy=years&dailySummaries=false&contentType=json&unitGroup=us&locationMode=single&key=${process.env.VC_API_KEY}&dataElements=default&locations=${state.Home.zipCode}`
        )
        .then(response => {
          state.Temp.realWeather = {};
          // console.log(response.data);

          let climateArray = [];
          for (let i = 0; i < 31; i++) {
            climateArray.push(response.data.location.values[i].mint);
          }
          let climateArraySum = 0;
          for (let i = 0; i < climateArray.length; i++) {
            climateArraySum += climateArray[i];
          }
          let climateArrayAverage = climateArraySum / climateArray.length;
          climateArrayAverage = Math.round(climateArrayAverage * 10) / 10;

          state.Temp.realWeather.climateMin = climateArrayAverage;

          console.log(state.Temp.realWeather.climateMin);
          document.getElementById("answer1").innerHTML =
            "Your average annual minimum temperature is " +
            state.Temp.realWeather.climateMin +
            "&deg F";
        })
        .catch(err => console.log(err));
    });
  }
}

//param is the query string after the slash
router.hooks({
  before: (done, params) => {
    const page =
      params && params.hasOwnProperty("page")
        ? capitalize(params.page)
        : "Home";

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st.%20louis`
      )
      .then(response => {
        state.Temp.weather = {};
        state.Temp.weather.city = response.data.name;
        state.Temp.weather.temp = response.data.main.temp;
        state.Temp.weather.feelsLike = response.data.main.feels_like;
        state.Temp.weather.description = response.data.weather[0].main;
        if (state.Temp.weather.description === "Clouds") {
          state.Temp.weather.description = "Cloudy";
        }
        done();
      })
      .catch(err => console.log(err));

    if (page === "Zone1" || "Zone2") {
      axios
        .get(`${process.env.PLANTERS_PAL_API_URL}`)
        .then(response => {
          state.Zone1.plants = response.data;
          console.log(state.Zone1.plants);
          done();
        })
        .catch(error => {
          console.log("It puked", error);
        });
    }
  }
});

// axios
//   .get(
//     `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st.%20louis`
//   )
//   .then(response => {
//     state.Temp.weather = {};
//     state.Temp.weather.city = response.data.name;
//     state.Temp.weather.temp = response.data.main.temp;
//     state.Temp.weather.feelsLike = response.data.main.feels_like;
//     state.Temp.weather.description = response.data.weather[0].main;
//     console.log(state.Temp.weather.feelsLike);
//     // done();
//   })
//   .catch(err => console.log(err));

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

// function addEventListeners(st) {
//   if (st.view === "Home") {
//     const form = document.getElementById("form1");
//     form.addEventListener("submit", event => {
//       event.preventDefault();
//       console.log("Form submitted");

//       const input = event.target.getElementById("entry1");
//       state.Home.zipCode = input.value;
//       console.log("this is ", input);
//     });
//     axios
//       .get(
//         `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/historysummary?aggregateHours=24&combinationMethod=aggregate&maxStations=-1&maxDistance=-1&minYear=1991&maxYear=2021&chronoUnit=years&breakBy=years&dailySummaries=false&contentType=json&unitGroup=us&locationMode=single&key=${process.env.VC_API_KEY}&dataElements=default&locations=${st.zipCode}`
//       )
//       .then(response => {
//         state.Temp.realWeather = {};
//         // console.log(response.data);

//         let climateArray = [];
//         for (let i = 0; i < 31; i++) {
//           climateArray.push(response.data.location.values[i].mint);
//         }
//         let climateArraySum = 0;
//         for (let i = 0; i < climateArray.length; i++) {
//           climateArraySum += climateArray[i];
//         }
//         let climateArrayAverage = climateArraySum / climateArray.length;
//         climateArrayAverage = Math.round(climateArrayAverage * 10) / 10;

//         state.Temp.realWeather.climateMin = climateArrayAverage;

//         console.log(state.Temp.realWeather.climateMin);
//       })
//       .catch(err => console.log(err));
//   }
// }
