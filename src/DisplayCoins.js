import React from "react";

class CurrencyDisplay extends React.Component {
  render() {
    const { currencyName, value } = this.props;

    return (
      <div>
        <p>
          {value} {currencyName}
        </p>
      </div>
    );
  }
}

export default CurrencyDisplay;
