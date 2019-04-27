import React, { useState, useEffect } from "react";
import axios from "axios";

function Beer(props) {
  const [beerList, setBeerList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const url = `http://localhost:5000/${props.keyValue}`;
      try {
        const {
          data: { data }
        } = await axios.get(url);
        setBeerList(data);
      } catch (_) {}
    };
    getData();
  }, [props.keyValue]);

  const listOfBeer = beerList =>
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

  const tableHidden = props.hideTable ? "hidden" : "";

  return (
    <div
      className={tableHidden}
      onClick={e => {
        props.onClick(e);
      }}
    >
      <h1 className="btn btn-lg font-weight-bold d-flex justify-content-center">
        The list of beers
      </h1>
      <div>
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
          <tbody>{listOfBeer(beerList)}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Beer;
