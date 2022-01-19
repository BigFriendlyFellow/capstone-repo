import html from "html-literal";
import cartoon from "../pictures/_buckster4.png";
// import * as state from "../store";
// import { Links } from "../store";

// this gives the links
// arr.map((el) => `<li><a href="#">${el}</a></li>`).join();

// ${st.map((link) =>
//   `<li><a href="${link.title}" class="topLink" data-navigo >${link.text}</a></li>`).join()
// };

// ${st.Temp.weather.feelsLike}

export default st => html`
  <header>
    <ul class="topLeft">
      <li class="topLeftText">
        <span id="topLeftTitle">
          ${st.Links.slice(3, 4).map(
            link => `<a href="${link.title}" data-navigo >${link.text}</a>`
          )}
        </span>

        </br><span id="topLeftSubtitle"
          >Weather: It's ${st.Temp.weather.description} outside!</span
        >

      </li>
      <li class="flex-container">
        <img class="logoPic" src="${cartoon}" />
      </li>
    </ul>

    <ul class="topRight">
      ${st.Links.slice(0, 3).map(
        link =>
          `<li><a href="${link.title}" class="topLink" data-navigo >${link.text}</a></li>`
      )}
    </ul>
  </header>
`;

// ${link.map(
//   link =>
//     `<li><a href="${link.title}" class="topLink" data-navigo >${link.text}</a></li>`
// )}
// ${link.filter(for ( x in link.splice(0, 2)) {
//   `<li><a href="${link.title}" class="topLink" data-navigo >${link.text}</a></li>`
// })}
// ${ for (let x in link.splice(0, 2)) {
//   `<li><a href="${link.title}" class="topLink" data-navigo >${link.text}</a></li>`
//   }}

// ${links
//   .splice(3, 1)
//   .map(
//     link => `<a href="${link.title}" data-navigo >${link.text}</a>`
//   )}

// ${links.filter(link => {
//   for (let i = 0; i < 3; i++) {
//     return `<li><a href="${link[i].title}" class="topLink" data-navigo >${link[i].text}</a></li>`;
//   }
// })}
