import { useEffect, useState } from "react";
import Avatar from "../Avatar";
import { Link } from "react-router-dom";
import logo_noText from "../../../assets/images/logo_noText.png";

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [scrollShadow, setScrollShadow] = useState(false);

  const handleScroll = () => {
    const bottomShadow = window.scrollY > 0;
    setScrollShadow(bottomShadow);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full h-[90px] bg-white flex items-center justify-center fixed top-0 z-50 ${
        scrollShadow ? "shadow-md" : ""
      }`}
    >
      <div className="md h-[90px] flex justify-between items-center">
        <div>
          <Link to={"/"}>
            <img
              className="w-14 cursor-pointer"
              src={logo_noText}
              alt="로고 이미지"
            ></img>
          </Link>
        </div>
        <div className="flex justify-between w-[14rem] items-center">
          <Link to={"/bookspoiler"}>
            <span className="cursor-pointer">북스포일러</span>
          </Link>
          <Link to={"/challenge"}>
            <span className="cursor-pointer">챌린지</span>
          </Link>

          {isLoggedIn ? (
            <Avatar>로그아웃</Avatar>
          ) : (
            <Link to={"/login"}>
              <Avatar>로그인</Avatar>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
