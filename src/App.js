import React, { Component } from "react";
import NavBar from "../src/components/navbar";
import InputForm from "../src/components/inputForm";

class App extends Component {
  state = {
    value: ""
  };

  handleInputChange = event => {
    console.log(event.target.value);
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const sKey = this.state.value;
    console.log(sKey);
  };

  render() {
    return (
      <div>
        <NavBar />
        <InputForm
          onChange={this.handleInputChange}
          onClick={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
