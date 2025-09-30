import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
      <h2>
      <Tooltip text="This is a tooltip">
       <span>Hover over me</span>
       </Tooltip>
       </h2>
       <hr></hr>
         <p>
      <Tooltip text="This is another tooltip">
       <span>Hover me to see another tooltip</span>
       </Tooltip>
       </p>
    </div>
  )
}

export default App
