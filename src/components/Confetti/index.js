import React, { Component } from "react";
import PropTypes from "prop-types";

import "./styles.scss";

class Confetti extends Component {
  render() {
    return (
      <div>
        {Array.from({ length: this.props.numberOfItems }, (e, i) => i).map(
          index => (
            <div key={index} className={`confetti-${index}`} />
          )
        )}
      </div>
    );
  }
}

Confetti.propTypes = {
  numberOfItems: PropTypes.number
};

Confetti.defaultProps = {
  numberOfItems: 100
};

export default Confetti;
