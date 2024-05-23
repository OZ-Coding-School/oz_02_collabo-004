import React, { useState } from 'react';
import BookCardKeyword from '../BookInfoCard/BookCardKeyword';
import { Link, useLocation } from 'react-router-dom';
import Button from '../@common/Button';
import leftArrow from '../../assets/images/challenge_left_arrow.png';
import rightArrow from '../../assets/images/challenge_right_arrow.png';
import useFetch from '../../hooks/useFetch';
import { BOOK_DATA } from '../../components/BookInfoCard/data';

const BookCaroussel = ({
  bookId,
  userId,
  challengeSpoilerId,
  challengeInfoId,
}) => {
  // let response = {
  //   data: {},
  //   ok: true,
  // };
  // response.data = BOOK_DATA;
  // const { data: book } = useFetch(
  //   'http://ec2-13-209-68-37.ap-northeast-2.compute.amazonaws.com//books',
  //   response
  // );

  const location = useLocation();
  const [counter, setCounter] = useState(0);
  const [isLoggedIn, setisLoggedIn] = useState(userId);

  const handleLeftClick = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleRightClick = () => {
    if (counter < BOOK_DATA.length / 3 - 1) {
      setCounter(counter + 1);
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
        {BOOK_DATA &&
          BOOK_DATA.map((book) => (
            <>
              <div
                key={book.Id}
                className="h-[520px] w-[280px] flex justify-center items-center z-10 mx-4 transition-all ease-in-out duration-500"
                style={{
                  transform: `translateX(-${936 * counter}px)`,
                }}
              >
                <div className="z-20">
                  {location.pathname === '/challenge' ? (
                    <div className="bg-primary w-[280px] h-[400px] absolute top-[160px] z-20"></div>
                  ) : (
                    <div className="bg-primary w-[280px] h-[340px] absolute top-[160px] z-20"></div>
                  )}
                </div>
                <div className="flex flex-col relative z-30 items-center gap-4">
                  <div className="z-30 border">
                    <img
                      src={book.book_img}
                      className=" w-[200px]"
                      alt="book"
                    />
                  </div>
                  <div key={book.id} className="w-[280px] flex flex-col ">
                    <p className="font-black text-2xl text-center z-30">
                      {book.name}
                    </p>
                  </div>
                  <div
                    key={book.id}
                    className="flex justify-evenly w-[270px] z-30"
                  >
                    <p className="font-bold">{book.author}</p>
                    <p className="font-bold text-gray8">{book.published}</p>
                  </div>
                  <div className="flex gap-2 justify-center w-[230px] z-30">
                    <BookCardKeyword />
                  </div>
                  {location.pathname === '/challenge' ? (
                    <div className="w-[240px] z-30 flex justify-center">
                      <Link to={isLoggedIn ? '/payment' : '/login'}>
                        <Button>챌린지용 북스포일러 열람하기</Button>
                      </Link>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </>
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
