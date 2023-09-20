const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is a child h1"),
    React.createElement("h1", {}, "this is a child h1"),
    React.createElement("h1", {}, "this is a child h1"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is a child h1"),
    React.createElement("h1", {}, "this is a child h1"),
    React.createElement("h1", {}, "this is a child h1"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is a child h1"),
    React.createElement("h1", {}, "this is a child h1"),
    React.createElement("h1", {}, "this is a child h1"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
