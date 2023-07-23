import Input from "./Input";
import "./LoanForm.css";
import Model from "./Model";
import { useState } from "react";

export default function LoadForm() {
  const [error_message, set_error_message] = useState(null);
  const [show_model, set_show_model] = useState(false);
  const [loan_form, set_loan_form] = useState({
    name: "",
    phone: "",
    age: 0,
    is_employee: false,
    salary: "",
  });

  const handle_loan_form = (e) => {
    e.preventDefault();
    set_error_message(null);
    const { phone, age } = loan_form;
    if (age < 18 || age > 100) {
      set_error_message("The age is not allowed");
    } else if (phone.length < 10 || phone.length > 12) {
      set_error_message("The phone number is incorrect");
    }

    set_show_model(true);
  };

  const handle_name_input_change = (name) => {
    set_loan_form({ ...loan_form, name: name });
  };
  const handle_phone_input_change = (phone) => {
    set_loan_form({ ...loan_form, phone: phone });
  };
  const handle_age_input_change = (age) => {
    set_loan_form({ ...loan_form, age: +age });
  };

  return (
    <div
      id="container"
      onClick={() => {
        if (show_model) set_show_model(false);
      }}
    >
      <div id="form-container">
        <form>
          <h1 style={{ marginBottom: "30px" }}>Requesting a Loan</h1>
          <Input title="Name" handle_change={handle_name_input_change} />
          <Input
            title="Phone Number"
            handle_change={handle_phone_input_change}
          />
          <Input title="Age" handle_change={handle_age_input_change} />
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
          <button onClick={handle_loan_form}>Submit</button>
        </form>
      </div>
      <Model error_message={error_message} is_visible={show_model} />
    </div>
  );
}
