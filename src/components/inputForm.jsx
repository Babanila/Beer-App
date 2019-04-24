import React from "react";

// Stateless Functional Component
const InputForm = props => {
  const formHidden = props.hideForm ? "hidden" : "";

  return (
    <div className={formHidden}>
      <form onSubmit={e => props.onSubmit(e)}>
        <h5> {props.value !== "" && "Please enter your Sandbox Key"}</h5>

        <input
          type="text"
          className="navbar-brand w-50 mt-2 mb-2"
          name="sandboxKey"
          value={props.value}
          onChange={e => props.onChange(e)}
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
};

export default InputForm;
