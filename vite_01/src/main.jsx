import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//   rendering
// const rendering = <a href='https://google.com'  target='_blank' > visit google </a>
// ReactDOM.createRoot(document.getElementById('root')).render(rendering)

// const reactElement = React.createElement(
// 'a',
// {href:'https://google.com' , target:'_blank'},
// 'click me to visit google here'
// )

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // reactElement
);
