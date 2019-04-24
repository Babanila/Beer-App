import React, { Component } from "react";
import axios from "axios";

class Beer extends Component {
  state = {
    beerList: []
  };

  async componentDidUpdate(prevProps) {
    if (this.props.keyValue !== prevProps.keyValue) {
      const url = `http://localhost:5000/${this.props.keyValue}`;
      const result = await axios.get(url);
      const { data } = result.data;
      this.setState({
        beerList: data
      });
    }
  }

  render() {
    const tableHidden = this.props.hideTable ? "hidden" : "";
    return (
      <div className={tableHidden}>
        <table className="table table-hover">
          <thead className="thead-ligth">
            <tr>
              <th>#</th>
              <th>Id</th>
              <th>Name</th>
              <th>Abv</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.beerList.map((beer, i) => (
              <tr
                key={beer.id}
                onClick={e => {
                  this.props.onClick(e);
                }}
              >
                <td>{i + 1}</td>
                <td>{beer.id}</td>
                <td>{beer.name}</td>
                <td>{beer.abv}</td>
                <td>{beer.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Beer;
