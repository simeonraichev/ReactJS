let rootElement = document.getElementById("root");

let reactElement = React.createElement(
  "header",
  { class: "site-header" },
  React.createElement("h1", { id: "main-heading" }, "Hello React"),
  React.createElement("h2", {}, "The best framework in the world!")
);

ReactDOM.render(reactElement, rootElement);
