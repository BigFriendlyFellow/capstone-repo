import html from "html-literal";
import cartoon from "../pictures/_buckster.png";

// this gives the links
// arr.map((el) => `<li><a href="#">${el}</a></li>`).join();

// ${st.map((link) =>
//   `<li><a href="${link.title}" class="topLink" data-navigo >${link.text}</a></li>`).join()
// };

export default links => html`
  <header>
    <ul class="topLeft">
      <li class="topLeftText">
        <span id="topLeftTitle">Planter's Pal</span><br /><span
          id="topLeftSubtitle"
          >Here's the weather!</span
        >
      </li>
      <li class="flex-container">
        <img class="logoPic" src="${cartoon}" />
      </li>
    </ul>

    <ul class="topRight">
      ${links.map(
        link =>
          `<li><a href="${link.title}" class="topLink" data-navigo >${link.text}</a></li>`
      )}
    </ul>
  </header>
`;
