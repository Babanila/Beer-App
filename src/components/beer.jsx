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

  listOfBeer = beerList =>
    beerList.map((beer, i) => (
      <tr key={beer.id}>
        <th scope="row" data-value={beer.id}>
          {i + 1}
        </th>
        <td data-value={beer.id}>{beer.id}</td>
        <td data-value={beer.id}>{beer.name}</td>
        <td data-value={beer.id}>{beer.ibu}</td>
        <td data-value={beer.id}>{beer.abv}</td>
      </tr>
    ));

  render() {
    const { beerList } = this.state;
    const tableHidden = this.props.hideTable ? "hidden" : "";
    return (
      <div
        className={tableHidden}
        onClick={e => {
          this.props.onClick(e);
        }}
      >
        <table className="table table-hover">
          <thead className="thead-ligth">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Ibu</th>
              <th scope="col">Abv</th>
            </tr>
          </thead>
          <tbody>{this.listOfBeer(beerList)}</tbody>
        </table>
      </div>
    );
  }
}

export default Beer;
