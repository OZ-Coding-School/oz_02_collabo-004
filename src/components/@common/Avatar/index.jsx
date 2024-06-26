import PropTypes from "prop-types";

const Avatar = ({ source = null, size = "small", style = {}, children }) => {
  let width, height;
  if (size === "large") {
    width = 58;
    height = 60;
  } else if (size === "xlarge") {
    width = 92;
    height = 90;
  } else {
    width = 44;
    height = 42;
  }

  const containerStyle = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: width,
    height: height,
    borderRadius: "50%",
    backgroundColor: source ? "transparent" : "#2f2f2f",
    objectFit: "cover",
    cursor: "pointer",
    ...style,
  };

  const textStyle = {
    fontSize: size === "large" ? "16px" : "12px",
    color: "#fff",
  };

  return (
    <div style={containerStyle}>
      {source ? (
        <img
          src={source}
          style={{ width: width, height: height, borderRadius: "50%" }}
        />
      ) : (
        <span style={textStyle}>{children}</span>
      )}
    </div>
  );
};

Avatar.propTypes = {
  source: PropTypes.string,
  size: PropTypes.oneOf(["small", "large"]),
  style: PropTypes.object,
  children: PropTypes.node,
};

export default Avatar;
