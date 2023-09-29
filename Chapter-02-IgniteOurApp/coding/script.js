import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is a child h1"),
    React.createElement("h2", {}, "this line have been changed"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "this line has also been changed"),
    React.createElement("h1", {}, "this is a child h1"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
