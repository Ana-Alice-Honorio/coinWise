import React from "react";
import { cx, css } from "@emotion/css";

const cls3 = css`
  display: flex;
  padding: 4px;
  flex: 1;
  margin: 10px;

  @media (max-width: 820px) {
    width: 100%;
  }
`;

// onde recebo nome e valor da moeda
class CurrencyDisplay extends React.Component {
  render() {
    const { currencyName, value } = this.props;

    return (
      <div>
        <p className={cx(cls3)}>
          {value} {currencyName}
        </p>
      </div>
    );
  }
}

export default CurrencyDisplay;
