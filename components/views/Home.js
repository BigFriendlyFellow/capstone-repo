import html from "html-literal";
import climateMap from "../../pictures/_map.jpg";
import { Links } from "../../store";

export default () => html`
  <section class="mapAndAround">
    <h1 id="mainTitle">Find out more about your planting zone!</h1>
    <img id="usMap" src="${climateMap}" />

    <section class="zip">
      <p>Enter your zip code to find your planting zone:</p>
      <form id="form1">
        <input type:"text" placeholder="Zip code here" id="entry1"> <button type:"submit" id="submit1"
      >Submit</button>
      </form>
      <br/>
    </section>
    <p id="answer1"></p>
    <br>
    <p class="zip2">Once your zone info has loaded choose one of the zones below:</p>
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
      Welcome to Planter's Pal!  In the United States there a total of thirteen climate zones.  Each climate zone is calculated by taking the historic yearly temperature lows for an area and averaging them together.  When you enter your zip code above, this site takes the past 30 yearly lows to calculate your average annual extreme minimum temperature.
      <br>
      <br>
      This piece of information can be pretty handy when determining plants to grow in your garden.  Some plants are much better suited to low temperatures than others.  When you click on a zone on Planter's Pal, you will be shown plants well adapted to your locality.  You will also be shown a variety of other plant traits to help you make a selection that fits your growing area like a glove!
      <br>
      <br>
      Happy Planting!
    </p>
  </article>
  <div id="deadzone">

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
  </div>
`;
