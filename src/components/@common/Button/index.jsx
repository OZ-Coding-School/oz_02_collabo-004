import PropTypes from 'prop-types';
import { useState } from 'react';

const Button = ({
  type,
  children,
  onClick,
  width,
  height,
  fontSize,
  fontWeight,
  outline = false,
}) => {
  const buttonType = type === 'submit' ? 'submit' : 'button';
  const [isHover, setIsHover] = useState(false);
  const hoverStyle = {
    backgroundColor: outline ? (isHover ? '#eee' : 'transparent') : (isHover ? '#649EF4' : '#517cce'),
  };

  const buttonStyle = {
    width: width,
    height: height,
    fontSize: fontSize,
    fontWeight: fontWeight,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: outline ? 'transparent' : '#517cce', 
    color: outline ? '#517cce' : '#fcf2c9', 
    border: outline ? '1px solid #517cce' : 'none', 
    ...hoverStyle,
  };

  return (
    <button
      type={buttonType}
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)} 
      onMouseLeave={() => setIsHover(false)}
      className="p-2 rounded-[10px] bg-secondary text-primary hover:bg-[#649EF4] active:bg-[#3A5DAB]"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  children: PropTypes.node,
  onClick: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  outline: PropTypes.bool,
};

export default Button;
