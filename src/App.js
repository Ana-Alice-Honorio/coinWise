import React from "react";
import "./App.css";
import CurrencyRate from "./Currency";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Bem vindo(a) ao Coin Wise</h1>
        <h3>Veja as cotações em tempo real!!</h3>
      </header>

      <CurrencyRate />
    </div>
  );
}

export default App;
