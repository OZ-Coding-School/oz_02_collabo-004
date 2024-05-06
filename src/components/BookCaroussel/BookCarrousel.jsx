import React, { useState } from "react";
import bookimage from "../../assets/images/bookimage.jpg";
import BookCardKeyword from "../BookInfoCard/BookCardKeyword";
import { useLocation } from "react-router-dom";
import Button from "../@common/Button";
import leftArrow from "../../assets/images/challenge_left_arrow.png";
import rightArrow from "../../assets/images/challenge_right_arrow.png";

const BookCaroussel = () => {
  const bookData = [
    {
      id: 1,
      img: bookimage,
      title: "인스타브레인",
      Author: "안데르스 한센",
      publisher: "동양북스",
    },
    {
      id: 2,
      img: bookimage,
      title: "당신은 사업가입니까",
      Author: "캐럴 로스",
      publisher: "알에이지코리아",
    },
    {
      id: 3,
      img: bookimage,
      title: "미치지 않고서야",
      Author: "미노와 고스케",
      publisher: "21세기 북스",
    },
    {
      id: 4,
      img: bookimage,
      title: "무기가되는 스토리",
      Author: "도널드 밀더",
      publisher: "월북",
    },
    {
      id: 5,
      img: bookimage,
      title: "부의 추월차선",
      Author: "엠제이 드마코",
      publisher: "토트",
    },
    {
      id: 6,
      img: bookimage,
      title: "마케팅 설계자",
      Author: "러셀 브런슨",
      publisher: "월북",
    },
  ];

  const location = useLocation();
  const [counter, setCounter] = useState(0);

  const handleLeftClick = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      console.log(counter);
    }
  };

  const handleRightClick = () => {
    if (counter < bookData.length / 3 - 1) {
      setCounter(counter + 1);
      console.log(counter);
      console.log(bookData.length);
    }
  };

  return (
    <div className="w-[1080px] h-[500px] flex flex-row items-center justify-evenly">
      <div>
        <img
          src={leftArrow}
          className="w-[0.8rem] h-[5rem] cursor-pointer z-50"
          onClick={handleLeftClick}
        />
      </div>
      <div className="flex relative z-10 w-[936px] overflow-hidden">
        {bookData.map((book) => (
          <div
            key={book.id}
            className="h-[500px] w-[280px] flex justify-center items-center z-10 mx-4 transition-all ease-in-out duration-500"
            style={{
              transform: `translateX(-${936 * counter}px)`,
            }}
          >
            <div className="z-20">
              {location.pathname === "/challenge" ? (
                <div className="bg-primary w-[280px] h-[340px] absolute top-[160px] z-20"></div>
              ) : (
                <div className="bg-primary w-[280px] h-[320px] absolute top-[160px] z-20"></div>
              )}
            </div>
            <div className="flex flex-col relative z-30 items-center gap-4">
              <div className="z-30 border">
                <img src={book.img} className=" w-[200px]" alt="book" />
              </div>
              <div key={book.id} className="w-[280px] flex flex-col ">
                <p className="font-black text-2xl text-center z-30">
                  {book.title}
                </p>
              </div>
              <div key={book.id} className="flex justify-evenly w-[270px] z-30">
                <p className="font-bold">{book.Author}</p>
                <p className="font-bold text-gray8">{book.publisher}</p>
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
          </div>
        ))}
      </div>
      <div>
        <img
          src={rightArrow}
          className="w-[0.8rem] h-[5rem] cursor-pointer"
          onClick={handleRightClick}
        />
      </div>
    </div>
  );
};

export default BookCaroussel;
