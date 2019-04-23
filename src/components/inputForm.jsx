import React, { Component } from "react";

class InputForm extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={e => this.props.onClick(e)}>
          <h5> Please enter your Sandbox Key</h5>
          <input
            type="text"
            className="navbar-brand w-50 mt-2 mb-2"
            name="sandboxKey"
            value={this.props.value}
            onChange={e => this.props.onChange(e)}
          />
          <br />
          <input
            className="btn btn-primary btn-sm"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default InputForm;
