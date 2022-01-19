import html from "html-literal";

export default st => html`
  <p>
    Here is a list of Climate Zone 1 appropriate plants and some of their
    traits.
  </p>
  <section class="zoneContent">
    <table id="zoneNumberTable">
      <tr id="zoneNumberTableHeadings">
        <th>Name</th>
        <th>Min. Temp</th>
        <th>Min. Frost Free Days</th>
        <th>Min-Max Rainfall</th>
        <th>Drought Tolerance</th>
        <th>Shade Tolerance</th>
        <th>Edible Bits</th>
      </tr>
      ${st.plants
        .filter(item => item.climateZone === 1)
        .map(z => {
          return `<tr>
          <td>${z.plantName}</td><td>${z.temperatureMinimum}</td><td>${z.frostFreeDaysMinimum}</td><td>${z.precipitationMinimumInInches}-${z.precipitationMaximumInInches}</td><td>${z.droughtTolerance}</td><td>${z.shadeTolerance}</td><td>${z.edibleForHumans}</td>
        </tr>`;
        })}
    </table>
  </section>
  <br />
  <br />
  <br />
  <br />
`;
