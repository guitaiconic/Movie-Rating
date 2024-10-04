import React from "react";
import ReactDOM from "react-dom/client";
//import StarRating from "./component/StarRating";
//import Test from "./component/State/Test";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    {/*<StarRating
      maxRating={5}
      message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={24} color="red" defaultRating={1} />
    <Test />*/}
  </React.StrictMode>
);
