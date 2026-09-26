import React from "react";
import ReactDOM from "react-dom/client";

//method-1 using react in js

// const parentElem= React.createElement("div", {},[
//     React.createElement("p", {key:"p1"}, "IM para from react"),
//     React.createElement("p", {key:"p2"}, "IM para from react"),
//     React.createElement("h6", {key:"h6"}, "IM H6 from react")
// ])
// let root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(parentElem);

//method-2 using package (Bable.js) it convert JSX (JavaScript XML into pure react.js)

// const heading = (
//   <div>
//     <h1>IM HEADING-1 FROM DIV-1</h1>
//     <p>IM PARAGRAPH-1 FROM DIV-1</p>
//   </div>
// );

// const button = (
//   <div>
//     <button>Click Me!</button>
//     <p style={{ color: "blue", backgroundColor: "rgb(242, 242, 236)" }}>
//       Button Was Clicked!
//     </p>
//   </div>
// );

// const layout = (
//   <div>
//     {heading}, {button}
//   </div>
// );
// let root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(layout);

//part --2

// example:1

function sum(a, b) {
  return a + b;
}
const addition = sum(1, 2);

const Heading = () => {
  return (
    <div>
      {/* <p>{addition}</p> */}
      <h1>I m HEADING </h1>
    </div>
  );
};

//params  {abcd:iphone}

const Cart = (parms) => {
  return <div className="cart"></div>;
  <h4>{parms.productName}</h4>;
};

function Body() {
  <div>
    <p>I'm PARAGRAPH of body component</p>
    <cart productName=" iPhone " />
    <cart productName=" Samsung " />
    <cart productName=" Nokai " />
    <cart productName=" Lenovo " />
    <cart productName=" RedMe " />
    <cart productName=" Vivo " />
  </div>;
}

const Footer = () => {
  return (
    <div>
      <h4>I am footer</h4>
      <p>All rights reserved</p>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Heading />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);
