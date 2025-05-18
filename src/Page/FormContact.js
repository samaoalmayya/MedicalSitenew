import React, { useState } from "react";
import "./Contact.css";
function FormContact() {
  const [name, setname] = useState("");
  const [show, setshow] = useState(true);
  const changename = (event) => {
    setname(event.target.value);
  };
  const FormHandler = (e) => {
    e.preventDefault();
    if (name.length == "") {
      setshow(false);
      return;
    }
    console.log(name);
    setshow(true);
  };

  return (
    <>
      <form onSubmit={FormHandler}>
        <div className="form-control">
          <input placeholder="Your Name" onChange={changename}></input>
          {!show && <p>not empty</p>}
        </div>
        <div className="form-control">
          <input placeholder="Your Email"></input>
        </div>
        <div className="form-control">
          <input placeholder="Your Number"></input>
        </div>
        <select>
          <option> Select Department</option>
          <option> one </option>
          <option> two</option>
          <option> three</option>
        </select>
        <div className="form-control">
          <textarea placeholder="Message "></textarea>
        </div>
        <button> Submit</button>
      </form>
    </>
  );
}
export default FormContact;
