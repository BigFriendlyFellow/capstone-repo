import html from "html-literal";
import climateMap from "../../pictures/_map.jpg";
import { Links } from "../../store";

{
  /* <p>${st.Home.weather.feelsLike}</p> */
}

export default () => html`
  <section class="mapAndAround">
    <h1 class="mainTitle">Find out more about your planting zone.</h1>
    <img id="usMap" src="${climateMap}" />

    <section class="zip">
      <p>Enter your zip code to find your planting zone:</p>
      <form>
        <input type:"text" value="Zip">
      </form>
    </section>
    <p><br />or choose one of the zones below:</p>
  </section>
  <section class="background">
    <nav class="buttonRows">
      ${Links.slice(4, 17).map(
        link =>
          `<a href="${link.title}" class="buttonRows2" data-navigo >${link.text}</a>`
      )}
    </nav>
    <nav class="allZones">
      <input
        type="button"
        onclick="window.location.href='https://tinyurl.com/3y87ypbw';"
        value="All Zones"
      />
    </nav>
  </section>
  <article>
    <h2>Your Guide to Climate Zones in America</h2>
    <p>
      This is placeholder text.
    </p>
  </article>
  <div id="deadzone">
    <p>-------------DEADZONE-------------</p>
  </div>
`;

// ${st.Links.slice(3, 6).map(
//   link => `<li><a href="${link.title}" data-navigo >${link.text}</a></li>`
// )}
