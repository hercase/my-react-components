import "./styles.scss";
import { createElement, useState } from "react";
import * as Components from "./components";

export default function App() {
  const [currentComponent, setCurrentComponent] = useState();

  return (
    <div className="container">
      <h1>Testing Components </h1>
      <div className="select-wrapper">
        <select
          className="select"
          defaultValue="--"
          onChange={(e) => setCurrentComponent(e.target.value)}
        >
          <option value="">--</option>
          {Object.values(Components).map((comp, i) => {
            return <option key={`${i}-${comp.name}`}>{comp.name}</option>;
          })}
        </select>
      </div>
      {currentComponent && createElement(Components[currentComponent])}
    </div>
  );
}
