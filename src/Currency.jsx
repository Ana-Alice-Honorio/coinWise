import React, { Component } from "react";
import CurrencyDisplay from "./DisplayCoins";
import { cx, css } from "@emotion/css";

const cls1 = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: black solid 1px;
  margin: 200px;
  padding: 16px;
  box-sizing: border-box;

  @media (max-width: 820px) {
    flex-direction: column;
    margin: 50px;
  }
`;

const cls2 = css`
  display: flex;
  padding: 20px;
  flex: 1;
  margin: 10px;
  align-items: center;

  @media (max-width: 820px) {
    width: 100%;
  }
`;

const cls3 = css`
  @media (max-width: 768px) {
    width: 100%;
  }
`;
class CurrencyRate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rates: {},
      loading: true,
      amountBRL: 1,
    };
  }

  componentDidMount() {
    fetch("https://api.exchangerate-api.com/v4/latest/BRL")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ rates: data.rates, loading: false });
      });
  }

  handleAmountChange = (event) => {
    this.setState({ amountBRL: event.target.value });
  };

  render() {
    const { rates, loading, amountBRL } = this.state;

    const amountInUSD = (amountBRL * rates.USD).toFixed(2);
    const amountInEUR = (amountBRL * rates.EUR).toFixed(2);
    const amountInJPY = (amountBRL * rates.JPY).toFixed(2);
    const amountInARS = (amountBRL * rates.ARS).toFixed(2);
    const amountInCAD = (amountBRL * rates.CAD).toFixed(2);

    return (
      <div>
        <h2>Cotações de Moedas em tempo real</h2>
        {loading ? (
          <p>Carregando cotações...</p>
        ) : (
          <div className={cx(cls1)}>
            <div className={cx(cls2)}>
              <label>Digite o valor em BRL:</label>
              <input
                className={cx(cls3)}
                type="number"
                value={amountBRL}
                onChange={this.handleAmountChange}
              />
            </div>

            <div>
              <CurrencyDisplay
                currencyName="USD - Dólar Americano"
                value={amountInUSD}
              />
              <CurrencyDisplay currencyName="EUR - Euro" value={amountInEUR} />
              <CurrencyDisplay
                currencyName="JPY - Iene Japonês"
                value={amountInJPY}
              />
              <CurrencyDisplay
                currencyName="ARS - Peso Argentino"
                value={amountInARS}
              />
              <CurrencyDisplay
                currencyName="CAD - Dólar Canadense"
                value={amountInCAD}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CurrencyRate;
