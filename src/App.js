import React from "react";
import "./App.css";
import CurrencyRate from "./Currency";
import { cx, css } from "@emotion/css";

const cls1 = css`
  font-size: 20px;
  background: #004b6a;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100px;
`;
function App() {
  return (
    <div className="App">
      <header className={cx(cls1)}>
        <h1>Bem vindo(a) ao Coin Wise 💲</h1>
      </header>

      <CurrencyRate />
    </div>
  );
}

export default App;
