import { useContext } from "react";
import { loanInpputsContext } from "./contexts/loan_form_inputs";

export default function Input() {
  const {title, handle_change} = useContext(loanInpputsContext)

  return (
    <div className="inputbox">
      <input
        required="required"
        type="text"
        onChange={(e) => {
          handle_change(e.target.value);
        }}
      />
      <span>{title}</span>
      <i></i>
    </div>
  );
}
