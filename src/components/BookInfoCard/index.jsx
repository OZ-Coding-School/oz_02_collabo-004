import { Link } from 'react-router-dom';
import BookCardLink from './BookCardLink';
import BookImage from '../../assets/images/bookimage.jpg';
import BookCardKeyword from './BookCardKeyword';
import BookCardLinkNone from './BookCardLinkNone';

const BookInfoCard = ({ onClick, count }) => {
  // 미리보기로 3개 넣어놨습니다.
  // 추후에 데이터 받으면 1개로 줄여서 수정 할 예정입니다.

  return (
    <>
      <div className="flex gap-14 justify-around flex-wrap">
        <div className=" bg-primary w-80 h-[50rem] flex flex-col justify-center items-center">
          <div className="flex flex-col items-center gap-5 ">
            <Link to="/bookspolierdetail">
              <img
                // book_img
                src={BookImage}
                className=" w-56 h-80"
              />
            </Link>
            <div className="text-center flex flex-col">
              <p className="font-black text-2xl">
                {/* name */}
                사람을 좋아하는 헤드헌터
              </p>

              <div className="flex justify-center">
                <span className="font-bold">
                  {/* author */}
                  안데르스 한센 ·
                  <span className="font-bold text-gray8">
                    {/* published */}
                    동양북스
                  </span>
                </span>
              </div>
              <div className="flex gap-2 justify-center">
                <BookCardKeyword />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              {count <= 3 ? (
                <BookCardLink onClick={onClick} />
              ) : (
                <BookCardLinkNone />
              )}
            </div>
          </div>
        </div>

        <div className=" bg-primary w-80 h-[50rem] flex flex-col justify-center items-center">
          <div className="flex flex-col items-center gap-5 relative">
            <Link to="/bookspolierdetail">
              <img
                // book_img
                src={BookImage}
                className=" w-56 h-80"
              />
            </Link>
            <div className="text-center flex flex-col">
              <p className="font-black text-2xl">
                {/* name */}
                사람을 좋아하는 헤드헌터
              </p>

              <div className="flex justify-center">
                <span className="font-bold">
                  {/* author */}
                  안데르스 한센 ·
                  <span className="font-bold text-gray8">
                    {/* published */}
                    동양북스
                  </span>
                </span>
              </div>
              <div className="flex gap-2 justify-center">
                <BookCardKeyword />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              {count <= 3 ? (
                <BookCardLink onClick={onClick} />
              ) : (
                <BookCardLinkNone />
              )}
            </div>
          </div>
        </div>

        <div className="relative bg-primary w-80 h-[50rem] flex flex-col justify-center items-center">
          <div className="flex flex-col items-center gap-5 relative">
            <Link to="/bookspolierdetail">
              <img
                // book_img
                src={BookImage}
                className=" w-56 h-80"
              />
            </Link>
            <div className="text-center flex flex-col">
              <p className="font-black text-2xl">
                {/* name */}
                사람을 좋아하는 헤드헌터
              </p>

              <div className="flex justify-center">
                <span className="font-bold">
                  {/* author */}
                  안데르스 한센 ·
                  <span className="font-bold text-gray8">
                    {/* published */}
                    동양북스
                  </span>
                </span>
              </div>
              <div className="flex gap-2 justify-center">
                <BookCardKeyword />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              {count <= 3 ? (
                <BookCardLink onClick={onClick} />
              ) : (
                <BookCardLinkNone />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookInfoCard;
