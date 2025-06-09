import React, { Component } from "react";

/*
https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes
*/

class Appclass extends Component {
  constructor() {
    super();
    this.state = {
        estados: [],
        cidades: [],
        idEstado: 1
    };
  }

  componentDidMount() {
    this.setState({
        estados: [{id: 1, name: "Bahia"},
            {id: 2, name: "São Paulo"},
            {id: 3, name: "Rio de Janeiro"}],
        cidades: ["Salvador", "Aracajú"]
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.idEstado !== this.state.idEstado) {
      if (parseInt(this.state.idEstado) === 1) {
          this.setState({cidades: ["Salvador", "Aracajú"]})
      } else if (parseInt(this.state.idEstado) === 2) {
        this.setState({cidades: ["São Paulo", "Barueri"]})
      } else if (parseInt(this.state.idEstado) === 3) {
        this.setState({cidades: ["Rio de Janeiro", "Guarujá"]})
      }
    }
    console.log("Executou o efeito...");
  }

  handleChange = event => {
      this.setState({idEstado: event.target.value})
  }

  render() {
    return (
      <div>
        <select onChange={this.handleChange}>
          {this.state.estados.map(estado => (
            <option value={estado.id}>{estado.name}</option>
          ))}
        </select>
        <br />
        <select>
          {this.state.cidades.map(cidade => (
            <option>{cidade}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default Appclass;
