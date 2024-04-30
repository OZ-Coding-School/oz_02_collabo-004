import React from "react";
import bookimage from "../../assets/images/bookimage.jpg";
import BookCardKeyword from "../BookInfoCard/BookCardKeyword";
import { useLocation } from "react-router-dom";
import Button from "../@common/Button";

const BookCaroussel = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div className="flex flex-col items-center justify-center gap-3 relative z-10 mx-11">
      {location.pathname === "/challenge" ? (
        <div className="bg-primary w-[280px] h-[360px] absolute top-[100px] z-20"></div>
      ) : (
        <div className="bg-primary w-[280px] h-[320px] absolute top-[100px] z-20"></div>
      )}
      <div className="z-30">
        <img src={bookimage} className=" w-[200px]"></img>
      </div>
      <div className="flex z-30">
        <p className="font-black text-2xl">인스타브레인</p>
      </div>
      <div className="flex justify-evenly w-[230px] z-30">
        <p className="font-bold">캐럴 로스 저</p>
        <p className="font-bold text-gray8">알에이치코리아</p>
      </div>
      <div className="flex flex-row justify-evenly w-[230px] z-30">
        <BookCardKeyword></BookCardKeyword>
      </div>
      {location.pathname === "/challenge" ? (
        <div className="w-[240px] z-30 flex justify-center">
          <Button>챌린지용 북스포일러 열람하기</Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BookCaroussel;
