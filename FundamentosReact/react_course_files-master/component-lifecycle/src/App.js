import React from "react"
import "./App.css"
import MyErrorBoundaryComponent from './components/MyErrorBoundaryComponent'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    console.log("Olá a partir do construtor")
    this.state = {
      counter: 0
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("Olá a partir do getDerivedStateFromProps")
    return { ...prevState, ...nextProps }
  }

  shouldComponentUpdate() {
    console.log("Olá a partir do shouldComponentUpdate")
    return true
  }

  render() {
    console.log(this.state)
    console.log("Olá a partir do render")
    return (
      <div>
        <h2>Seja bem vindo!</h2> <br />
        <button onClick={() => this.setState({counter : this.state.counter + 1})}>Soma</button><br />
        <h2>Quantidade: {this.state.counter}</h2> <br/>
        <MyErrorBoundaryComponent />
      </div>
    )
  }

  componentDidMount() {
    console.log("Olá a partir do componentDidMount")
  }

  componentDidUpdate() {
    console.log("Olá a partir do componentDidUpdate")
  }

}
