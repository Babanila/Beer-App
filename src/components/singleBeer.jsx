import React, { Component } from "react";
import axios from "axios";

class SingleBeer extends Component {
  state = {
    singleBeer: {}
  };

  async componentDidUpdate(prevProps) {
    if (this.props.keyValue === prevProps.keyValue) {
      if (this.props.idValue !== prevProps.idValue) {
        const url = `http://localhost:5000/${this.props.keyValue}/${
          this.props.idValue
        }`;
        const result = await axios.get(url);
        const { data } = result;
        this.setState({
          singleBeer: data
        });
      }
    }
  }

  beerDetails = singleBeer =>
    Object.entries(singleBeer).map(([k, value], i) => {
      return typeof value !== "object" ? (
        <div key={i} className="list-group-item">
          <b>{k}</b>: {value}
        </div>
      ) : (
        <div key={i} className="list-group-item">
          <b>{k}</b>:{this.beerDetails(value)}
        </div>
      );
    });

  render() {
    const beerDetailsHidden = this.props.hideBeerDetails ? "hidden" : "";

    return (
      <div className={beerDetailsHidden}>
        <div className="list-group">
          {this.beerDetails(this.state.singleBeer)}
          <button
            className="btn bg-light btn-lg w50 font-weight-bold"
            onClick={e => {
              this.props.onClick();
            }}
          >
            back
          </button>
        </div>
      </div>
    );
  }
}

export default SingleBeer;
