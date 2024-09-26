import React, { Component } from "react";
import CurrencyDisplay from "./DisplayCoins";

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

    return (
      <div>
        <h2>Cotações de Moedas</h2>
        {loading ? (
          <p>Carregando cotações...</p>
        ) : (
          <div>
            <div>
              <label>Digite o valor em BRL:</label>
              <input
                type="number"
                value={amountBRL}
                onChange={this.handleAmountChange}
              />
            </div>

            <CurrencyDisplay currencyName="USD" value={amountInUSD} />
            <CurrencyDisplay currencyName="EUR" value={amountInEUR} />
            <CurrencyDisplay currencyName="JPY" value={amountInJPY} />
            <CurrencyDisplay currencyName="ARS" value={amountInARS} />
          </div>
        )}
      </div>
    );
  }
}

export default CurrencyRate;
