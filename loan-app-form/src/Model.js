import "./Model.css";

export default function Model({ is_visible, error_message }) {
  if (is_visible) {
    return (
      <div id="model">
        <div id="model-content">
          <h1 style={{ color: error_message ? "red" : "white" }}>
            {error_message
              ? error_message
              : "The Form Has Been Submitted Successfully"}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
