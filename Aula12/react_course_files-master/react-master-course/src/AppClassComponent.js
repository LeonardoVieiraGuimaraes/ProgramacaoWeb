import React, { Component } from "react";
import MyInternalHeader from "./components/MyInternalHeader";
import ItensCompra from "./ItensCompraData";
import Home from "./pages/Home";
import CalculoImposto from "./components/CalculoImposto";

export default class AppClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      quantidade: 1,
      itensCompra: ItensCompra,
      valorTotalCompras: ItensCompra.reduce(
        (prev, current) => prev + current.valor,
        0
      )
    };
  }

  myCbFunctionAfterCalc = () => console.log("Realizou a operação de CB");

  render() {
    console.log(this.state);

    return (
      <div>
        <MyInternalHeader />

        <main>
          <Home /> <br />
          <CalculoImposto
            valorA={this.state.quantidade}
            valorB={this.state.valorTotalCompras}
            cbFunction={this.myCbFunctionAfterCalc}
          />
          <br />
          <div>
            <ol>
              {this.state.itensCompra.map(item => {
                return <li key={item.id}>{item.name}</li>;
              })}
            </ol>
          </div>
          <button onClick={() => this.setState({quantidade: this.state.quantidade + 1})}>Calcula</button>
        </main>
      </div>
    );
  }
}
