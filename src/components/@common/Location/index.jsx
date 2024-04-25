import { forwardRef } from "react";
import PropTypes from 'prop-types'; 
import home from '../../../assets/images/icons/home.svg'; 
import arrow_right from '../../../assets/images/icons/arrow_right.svg'; 

const Location = forwardRef(function LocationComponent(props, ref) {
  const {
    number = 2,
    link1 = '/',
    link2 = '/',
    link3 = '/',
    link4 = '/',
    linkLast = '/',
    depth1 = 'Home',
    depth2 = 'Depth2',
    depth3 = 'Depth3',
    depth4 = 'Depth4',
    depthLast = 'Last',
    icon,
    ...restProps
  } = props;

  const locationWrap = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '15px',
    color: '#888'
  }
  const light = {
    fontSize: '12px',
    textDecoration: 'none', 
    transition: 'color 0.3s',
  }
  const bold = {
    fontWeight: 'bold',
    fontSize: '12px',
  }
  const icons = {
    width: '20px',
    height: '20px',
    backgroundColor: '#888'
  }

  return (
    <>
      <div style={{...locationWrap, ...(restProps.style || {})}} 
        id={restProps.id}
        ref={ref}
        {...restProps}
      >
        <img src={home} alt="Home" className={icons} />
        <a href={link1} style={light}>{depth1}</a>
        {icon ? icon : <img src={arrow_right} className={icons} />}

        {number > 2 &&
          <>
            <a href={link2} style={light}>{depth2}</a>
            {icon ? icon : <img src={arrow_right} className={icons} />}
          </>
        }
        {number > 3 &&
          <>
            <a href={link3} style={light}>{depth3}</a>
            {icon ? icon : <img src={arrow_right} className={icons} />}
          </>
        }
        {number > 4 &&
          <>
            <a href={link4} style={light}>{depth4}</a>
            {icon ? icon : <img src={arrow_right} className={icons} />}
          </>
        }
        <a href={linkLast} style={bold}>{depthLast}</a>
      </div>
    </>
  );
});

Location.propTypes = {
  number: PropTypes.number, 
  link1: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  link4: PropTypes.string,
  linkLast: PropTypes.string,
  depth1: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  depth2: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  depth3: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  depth4: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  depthLast: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.node,
};

Location.displayName = 'Location'; 

export default Location;
