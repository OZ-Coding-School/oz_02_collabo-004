import PropTypes from 'prop-types';

const Avatar = ({ 
  source = null, 
  size = "small", 
  style = {}, 
  children 
}) => {

  let diameter = size === "large" ? 58 : 44;
  if (size === "large") {
    diameter = 58;
    style.height = 59;
  } else {
    diameter = 44;
    style.height = 42; 
  }

  const containerStyle = {
    position: "relative",
    display: "flex",
    justifyContent: "center", 
    alignItems: "center", 
    width: diameter,
    height: diameter,
    borderRadius: "50%", 
    backgroundColor: source ? "transparent" : "#2f2f2f", 
    objectFit: "cover",
    cursor: "pointer",
    ...style 
  };

  const textStyle = {
    fontSize: size === "large" ? "16px" : "12px",
    color: "#fff"
  };

  return (
    <div style={containerStyle}>
      {source ? (
        <img
          src={source}
          style={{ width: diameter, height: diameter, borderRadius: "50%" }} 
        />
      ) : (
        <span style={textStyle}>{children}</span>
      )}
    </div>
  );
};

Avatar.propTypes = {
  source: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']), 
  style: PropTypes.object, 
  children: PropTypes.node
};

export default Avatar;


