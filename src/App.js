import React, { Component } from 'react';
import "./App.css"

/*
class Convertisseur extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      euro: "",
      dollar: ""
    };
    this.convertToEuro = this.convertToEuro.bind(this);
    this.convertToDollar = this.convertToDollar.bind(this);
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
    return (
      <div>
        <fieldset>
          <legend>Convertisseur euro/dollar</legend>
          <p>
            <input
              value={this.state.euro}
              placeholder="€"
              onChange={this.convertToEuro}
            />{" "}
            €
          </p>
          <p>
            <input
              value={this.state.dollar}
              placeholder="$"
              onChange={this.convertToDollar}
            />{" "}
            $
          </p>
        </fieldset>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Convertisseur />
      </div>
    );
  }
}

export default App;
*/


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
