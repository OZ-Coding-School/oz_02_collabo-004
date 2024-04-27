import PropTypes from 'prop-types';

const Button = ({
  type,
  children,
  onClick,
  width,
  height,
  fontSize,
  fontWeight,
}) => {
  const buttonType = type === 'submit' ? 'submit' : 'button';

  const buttonStyle = {
    width: width,
    height: height,
    fontSize: fontSize,
    fontWeight: fontWeight,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <button
      type={buttonType}
      style={buttonStyle}
      onClick={onClick}
      className={
        'p-2 rounded-[10px] bg-secondary text-primary hover:bg-[#649EF4] active:bg-[#3A5DAB]'
      }
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
};

export default Button;
