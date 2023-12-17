//here i am going to write all my react code

const root = ReactDOM.createRoot(document.querySelector(".root"));

// const h1 = React.createElement("h1",{id:"heading", 
// class:"hello",
// style:{
//     fontSize:"100px",
//     textAlign:"center",
// }},"Hi😎");

// root.render(h1);
//This render method is converting h1 element to a h1 tag and put it inside the root.
//It replaces anything that is already present in the root container.



//<div id="parent">
//    <div id="child">
//        <h1>Hello World</h1>
//        <h1>Hi, everyone</h1>
//    </div>
//</div>

const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"Hello World"),React.createElement("h1",{},"Hi, everyone")]));

console.log(parent)
root.render(parent);