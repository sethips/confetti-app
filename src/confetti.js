import React, { Component } from "react";

import "./confetti.scss";

class App extends Component {
  render() {
    return (
      <div>
        {Array.from({ length: 150 }, (e, i) => i).map(index => (
          <div key={index} className={`confetti-${index}`} />
        ))}
      </div>
    );
  }
}

export default App;
