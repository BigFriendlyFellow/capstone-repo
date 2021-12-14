import html from "html-literal";
import climateMap from "../../pictures/_map.jpg";

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
      <input
        type="button"
        onclick="window.location.href='https://tinyurl.com/3y87ypbw';"
        value="Zone 1"
      />
      <input
        type="button"
        onclick="window.location.href='https://tinyurl.com/3y87ypbw';"
        value="Zone 2"
      />
      <input
        type="button"
        onclick="window.location.href='https://tinyurl.com/3y87ypbw';"
        value="Zone 3"
      />
      <input
        type="button"
        onclick="window.location.href='https://tinyurl.com/3y87ypbw';"
        value="Zone 4"
      />
      <input
        type="button"
        onclick="window.location.href='https://tinyurl.com/3y87ypbw';"
        value="Zone 5"
      />
      <input
        type="button"
        onclick="window.location.href='https://tinyurl.com/3y87ypbw';"
        value="Zone 6"
      />
      <input
        type="button"
        onclick="window.location.href='https://tinyurl.com/3y87ypbw';"
        value="Zone 7"
      />
      <input
        type="button"
        onclick="window.location.href='https://tinyurl.com/3y87ypbw';"
        value="Zone 8"
      />
      <input
        type="button"
        onclick="window.location.href='https://tinyurl.com/3y87ypbw';"
        value="Zone 9"
      />
      <input
        type="button"
        onclick="window.location.href='https://tinyurl.com/3y87ypbw';"
        value="Zone 10"
      />
      <input
        type="button"
        onclick="window.location.href='https://tinyurl.com/3y87ypbw';"
        value="Zone 11"
      />
      <input
        type="button"
        onclick="window.location.href='https://tinyurl.com/3y87ypbw';"
        value="Zone 12"
      />
      <input
        type="button"
        onclick="window.location.href='https://tinyurl.com/3y87ypbw';"
        value="Zone 13"
      />
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
