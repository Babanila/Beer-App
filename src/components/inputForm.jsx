import React from "react";

const InputForm = props => {
  const formHidden = props.hideForm ? "hidden" : "";
  return (
    <div className={formHidden}>
      <form
        className="form-control-lg ml-5 mt-5"
        onSubmit={e => props.onSubmit(e)}
      >
        <label className="btn col-sm-7">
          <h3> Get the list of beers</h3>
        </label>
        <br />
        <input
          type="text"
          className="btn btn-lg col-sm-10 w-50 ml-5 mr-3 border border-dark"
          placeholder="Please click here to enter your sandbox key."
          value={props.value}
          onChange={e => props.onChange(e)}
        />
        <input
          className="btn btn-primary btn-lg mt-2 mb-2"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default InputForm;
