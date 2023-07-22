import "./LoanForm.css";
import Model from "./Model";
import { useState } from "react";

export default function LoadForm() {
  const [loan_form, set_loan_form] = useState({
    name: "",
    phone: "",
    age: "",
    ask: false,
    salary: "",
  });

  return (
    <div id="container">
      <div id="form-container">
        <form>
          <h1 style={{ marginBottom: "30px" }}>Requesting a Loan</h1>
          <div className="inputbox">
            <input required="required" type="text" />
            <span>Name</span>
            <i></i>
          </div>
          <div className="inputbox">
            <input required="required" type="text" />
            <span>Phone Number</span>
            <i></i>
          </div>
          <div className="inputbox">
            <input required="required" type="text" />
            <span>Age</span>
            <i></i>
          </div>
          <div className="inputbox">
            <label>Are you a employee ?</label>
            <br></br>
            <br></br>
            <input type="checkbox" />
          </div>
          <div className="inputbox">
            <label>Salary</label>
            <br></br>
            <br></br>
            <select>
              <option hidden>Choose Salary</option>
              <option>less than 500$</option>
              <option>between 500$ and 2000$</option>
              <option>above 2000$</option>
            </select>
          </div>
          <button>Submit</button>
        </form>
      </div>
      {/* <Model /> */}
    </div>
  );
}
