import React, { useState } from "react";
import Avatar from "../Avatar";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  return (
    <div className="max-w-screen-xl h-24 bg-white content-center">
      <div className="flex justify-between px-10 content-center">
        <div>
          {/*  src 로고이미지 받으면 나중에 변경!! */}
          <img
            className="w-16 cursor-pointer"
            onClick={() => {
              window.location.href = "/";
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9pA88aciGeiDLl6EkVV4mEdLgkFJS5feZoEh8ClrXpw&s"
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
