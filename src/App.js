import React, { Component } from 'react';
import "./App.css"

class Simulateur extends Component {
  constructor(props) {
    super(props);
    this.convertToDollar = this.convertToDollar.bind(this);
    this.convertToEuro = this.convertToEuro.bind(this);
    this.state = {
      euro: "",
      dollar: ""
    };
  }
  
  convertToEuro(e) {
    const euro = e.target.value;
    const euroToDollar = euro * 1.08;
    this.setState({
      euro: euro,
      dollar: euroToDollar
    });
  }

  convertToDollar(e) {
    const dollar = e.target.value;
    const dollarToEuro = dollar * 0.93;
    this.setState({
      dollar: dollar,
      euro: dollarToEuro
    });
  }
  render() {

    return(
      <div>
        <fieldset>
          <legend>Revenu en Euros (€)</legend>
          <input value={this.state.euro} onChange={this.convertToEuro} />
        </fieldset>
        <fieldset>
          <legend>Revenu en Dollars ($)</legend>
          <input value={this.state.dollar} onChange={this.convertToDollar} /> 
        </fieldset>
      </div>
    );
  }
}
class App extends Component {
  render() {
    return <div>
      <Simulateur />
    </div>;
  }
}

export default App;
