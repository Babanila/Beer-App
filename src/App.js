import React, { Component } from "react";
// import axios from "axios";
import NavBar from "../src/components/navbar";
import InputForm from "../src/components/inputForm";
import Beer from "../src/components/beer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      beerValue: "",
      hideForm: false,
      hideTable: true
    };
  }

  handleInputChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      beerValue: this.state.value,
      hideForm: true,
      hideTable: false
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <InputForm
          onChange={this.handleInputChange}
          onSubmit={this.handleSubmit}
          hideForm={this.state.hideForm}
        />
        <Beer
          keyValue={this.state.beerValue}
          hideTable={this.state.hideTable}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
