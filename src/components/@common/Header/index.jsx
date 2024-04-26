import React, { useState } from "react";
import Avatar from "../Avatar";
import { Link } from "react-router-dom";
import logo_noText from "../../../assets/images/icons/logo_noText.png";

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  return (
    <div className="w-full bg-white flex items-center justify-center">
      <div className="md h-[80px] flex justify-between items-center">
        <div>
          <img
            className="w-14 cursor-pointer"
            onClick={() => {
              window.location.href = "/";
            }}
            src={logo_noText}
            alt="로고 이미지"
          ></img>
        </div>
        <div className="flex justify-between w-2/12 items-center">
          <a
            className="cursor-pointer"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            북스포일러
          </a>
          <a
            onClick={() => {
              window.location.href = "/challenge";
            }}
          >
            챌린지
          </a>
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
