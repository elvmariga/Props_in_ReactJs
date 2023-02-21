import React from "react";
import Card from "./Card";
import details from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        <Card
          // id = {details[0].emoji}
          emoji={details[0].emoji}
          name={details[0].name}
          meaning={details[0].meaning}
        />
        <Card
          // id = {details[0].emoji}
          emoji={details[1].emoji}
          name={details[1].name}
          meaning={details[1].meaning}
        />
        <Card
          // id = {details[0].emoji}
          emoji={details[2].emoji}
          name={details[2].name}
          meaning={details[2].meaning}
        />
      </dl>
    </div>
  );
}

export default App;
