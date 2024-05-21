import PropTypes from "prop-types";

const Input = ({ element, placeholder, disabled, value, onChange }) => {
  const InputStyle = {
    border: "1px solid black",
    width: element === "admin" ? "100%" : "300px",
    height: "2rem",
    borderRadius: element === "admin" ? "0px" : "15px",
    padding: element === "admin" ? "0px" : "10px",
  };

  return (
    <>
      <input
        type="text"
        style={InputStyle}
        placeholder={element === "admin" ? "" : placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

Input.propTypes = {
  element: PropTypes.oneOf(["admin", "user"]),
  placeholder: PropTypes.string,
};

export default Input;
