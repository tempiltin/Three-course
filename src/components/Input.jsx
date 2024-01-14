import React from "react";

const Input = ({props}) => {
    
  return (
    <>
      <label htmlFor="exampleDataList" className="form-label">
        Savollarni qidirish
      </label>
      <input
      value={props.query}
      onChange={(e) => props.setQuery(e.target.value)}
      className="form-control p-3" placeholder="Savollarni qidiring......!" />

      <button onClick={props.handleSearch} className="btn btn-primary p-3 position_btn">Qidirish</button>
    </>
  );
};

export default Input;
