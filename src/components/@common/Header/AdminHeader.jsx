import { useEffect, useState } from 'react';
import Avatar from '../Avatar';
import { Link } from 'react-router-dom';
import logo_noText from '../../../assets/images/logo_noText.png';

const AdminHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrollShadow, setScrollShadow] = useState(false);

  const handleScroll = () => {
    const bottomShadow = window.scrollY > 0;
    setScrollShadow(bottomShadow);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full h-[80px] bg-white flex items-center justify-center fixed top-0 z-50 ${
        scrollShadow ? 'shadow-md' : ''
      }`}
    >
      <div className="md h-[80px] flex justify-between items-center">
        <div>
          <img
            className="w-14 cursor-pointer"
            onClick={() => {
              window.location.href = '/';
            }}
            src={logo_noText}
            alt="로고 이미지"
          ></img>
        </div>
        <div>
          {isLoggedIn ? (
            <Link to={'/logout'}>
              <Avatar>나가기</Avatar>
            </Link>
          ) : (
            <Link to={'/login'}>
              <Avatar>로그인</Avatar>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
