import React, {Component} from 'react'
import Header from './components/Header'

class Appclass extends Component {

    constructor() {
        super()
        this.state = {
            quantidade : 0,
            buttonName: 'Meu botão'
        }
    }

    handleChange = () => {
        this.setState({quantidade: this.state.quantidade + 1})
        console.log(this.state)
    }

    render () {
        return (
            <div>
                <Header titulo="Compras do mês com class component"/>
                <div>
                <ul>
                    <h2>Lista compras: </h2>
                    <li>Ovos</li>
                    <li>Tomate</li>
                    <li>Cenoura</li>
                </ul>
                </div>
                <div>
                    <p>Você clicou {this.state.quantidade}</p>
                    <button onClick={this.handleChange}>{this.state.buttonName}</button>
                </div>
            </div>
        )
    }

}

export default Appclass