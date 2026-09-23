// Method-2 (VANNILLA SCRIPT)

const h2 = document.createElement("h2");
h2.innerText = "I 'M H2 FROM JAVASCRIPT";
document.querySelector("body").insertAdjacentElement("afterbegin", h2);

//TARGET TO MAKE THIS STRUCTURE USING REACT JS
// <div>
//     <h1></h1>
//     <h2></h2>
//     <div>
//             <h1> </h1>
//             <h2> </h2>
//      </div>
// </div>

//METHOD-3
const parent = React.createElement("div", { id: "div1-react" }, [
  React.createElement("h1", {}, "HI! Iam H1 from ReactJS"),
  React.createElement("h2", {}, "HI! Im H2 FROM REACT JS"),
  React.createElement("div", { id: "div-child" }, [
    React.createElement("h1", {}, "HI! IM H1 FROM CHILD-DIV "),
    React.createElement("h2", {}, "HI! IM H2 FROM CHILD-DIV "),
  ]),
]);