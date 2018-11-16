import React, { Component } from "react";

import Confetti from "./components/Confetti";

class App extends Component {
  render() {
    return (
      <div>
        Hello World!
        <Confetti numberOfItems={150} />
      </div>
    );
  }
}

export default App;
