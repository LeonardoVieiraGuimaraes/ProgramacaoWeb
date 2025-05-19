import React, {Component} from "react"

class Appclass extends Component {

    constructor() {
        super()
        this.state = {
            firstName: "Carlos",
            lastName: "",
            informed: true,
            details: "",
            gender: "Feminino",
            cor: "red"
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type==="checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }

    render() {
        return (
            <div>
                <input type="text" 
                    name="firstName" 
                    placeholder="Primeiro Nome" 
                    value={this.state.firstName}
                    onChange={this.handleChange} />
                <br />
                <input type="text" 
                    name="lastName" 
                    placeholder="Último Nome" 
                    value={this.state.lastName}
                    onChange={this.handleChange} />
                <br />
                <label>
                <input 
                    type="checkbox"
                    name="informed"
                    checked={this.state.informed} 
                    onChange={this.handleChange}/> Informado?
                </label>
                <br />
                <textarea name="details" value={this.state.details} onChange={this.handleChange}/>
                <br /><label>
                <input 
                    type="radio"
                    name="gender"
                    value="Masculino"
                    onChange={this.handleChange}
                    checked={this.state.gender === "Masculino"}/> Masculino
                </label>
                <label>
                <input 
                    type="radio"
                    name="gender"
                    value="Feminino"
                    onChange={this.handleChange}
                    checked={this.state.gender === "Feminino"}/> Feminino
                </label>
                <br/>
                <label>Cor: </label>
                <select name="cor" value={this.state.cor} onChange={this.handleChange}>
                    <option value="">Selecione...</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </select>
                <h3>{this.state.firstName} {this.state.lastName} {this.state.informed? "Informado": "Desinformado"} {this.state.details} {this.state.gender} {this.state.cor}</h3>

            </div>
        )
    }
}

export default Appclass
