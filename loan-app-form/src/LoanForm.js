import "./LoanForm.css";
import Model from "./Model";
import { useState } from "react";

export default function LoadForm() {
  const [loan_form, set_loan_form] = useState({
    name: "",
    phone: "",
    age: "",
    is_employee: false,
    salary: "",
  });

  return (
    <div id="container">
      <div id="form-container">
        <form>
          <h1 style={{ marginBottom: "30px" }}>Requesting a Loan</h1>
          <div className="inputbox">
            <input
              required="required"
              type="text"
              onChange={(e) => {
                set_loan_form({ ...loan_form, name: e.target.value });
              }}
            />
            <span>Name</span>
            <i></i>
          </div>
          <div className="inputbox">
            <input
              required="required"
              type="text"
              onChange={(e) => {
                set_loan_form({ ...loan_form, phone: e.target.value });
              }}
            />
            <span>Phone Number</span>
            <i></i>
          </div>
          <div className="inputbox">
            <input
              required="required"
              type="text"
              onChange={(e) => {
                set_loan_form({ ...loan_form, age: e.target.value });
              }}
            />
            <span>Age</span>
            <i></i>
          </div>
          <div className="inputbox">
            <label>Are you a employee ?</label>
            <br></br>
            <br></br>
            <input
              required
              type="checkbox"
              onChange={(e) => {
                set_loan_form({ ...loan_form, is_employee: e.target.checked });
              }}
            />
          </div>
          <div className="inputbox">
            <label>Salary</label>
            <br></br>
            <br></br>
            <select
              onChange={(e) => {
                set_loan_form({ ...loan_form, salary: e.target.value });
              }}
            >
              <option hidden>Choose Salary</option>
              <option value={"less than 500$"}>less than 500$</option>
              <option value={"between 500$ and 2000$"}>
                between 500$ and 2000$
              </option>
              <option value={"above 2000$"}>above 2000$</option>
            </select>
          </div>
          <button>Submit</button>
        </form>
      </div>
      {/* <Model /> */}
    </div>
  );
}
