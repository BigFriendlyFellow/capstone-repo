// do i even need this?
import html from "html-literal";
import * as views from "./views";

export default st => html`
  ${views[st.view](st)}
`;
// (st) at the end is passing state info along if it needs to be accessed

// <!-- All at once below.  Stateless. -->
// export default () => `
// ${views["Home"]()}, ${views["About"]()}, ${views["Contact"]()},
//   ${views["Facebook"]()}, ${views["Zone1"]()}
// `;
