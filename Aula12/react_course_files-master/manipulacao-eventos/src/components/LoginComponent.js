import React, { Component } from "react";

export default class LoginComponent extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            isLogado: false
        }
    }

    autenticar = () => {
      this.setState(state => ({
          isLogado: !state.isLogado
      }))
    }
    
    render() {
      return (
        <button onClick={this.autenticar}>
          {this.state.isLogado ? 'Bem vindo' : 'Favor autenticar'}
        </button>
      );
    }

}
