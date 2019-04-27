import React, { Component } from "react";
import NavBar from "../src/components/navbar";
import InputForm from "../src/components/inputForm";
import Beer from "../src/components/beer";
import SingleBeer from "../src/components/singleBeer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      beerValue: "",
      idValue: "",
      hideForm: false,
      hideTable: true,
      hideBeerDetails: true
    };
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.state.value === ""
      ? event.preventDefault()
      : this.setState({
          beerValue: this.state.value,
          hideForm: true,
          hideTable: false
        });
  };

  handleClick = event => {
    this.setState({
      idValue: event.target.dataset.value,
      hideTable: true,
      hideBeerDetails: false
    });
  };

  goBack = () => {
    this.setState({
      beerValue: this.state.value,
      hideTable: false,
      hideBeerDetails: true
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
        <SingleBeer
          keyValue={this.state.beerValue}
          idValue={this.state.idValue}
          hideBeerDetails={this.state.hideBeerDetails}
          onClick={this.goBack}
        />
      </div>
    );
  }
}

export default App;
