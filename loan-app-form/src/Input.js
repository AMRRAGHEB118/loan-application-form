export default function Input({ title, handle_change }) {
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
