import "./LoanForm.css";

export default function LoadForm() {
  return (
    <div className="form-container">
      <form>
        <h1 style={{ marginBottom: "30px" }}>Requesting a Loan</h1>
        <div class="inputbox">
          <input required="required" type="text" />
          <span>Name</span>
          <i></i>
        </div>
        <div class="inputbox">
          <input required="required" type="text" />
          <span>Phone Number</span>
          <i></i>
        </div>
        <div class="inputbox">
          <input required="required" type="text" />
          <span>Age</span>
          <i></i>
        </div>
        <div class="inputbox">
          <labal>Are you a employee ?</labal>
          <br></br>
          <br></br>
          <input type="checkbox" />
        </div>
        <div class="inputbox">
          <labal>Salary</labal>
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
  );
}
