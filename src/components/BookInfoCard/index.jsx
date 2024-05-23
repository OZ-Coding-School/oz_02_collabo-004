import { Link } from 'react-router-dom';
import BookCardLink from './BookCardLink';
import BookCardKeyword from './BookCardKeyword';
import BookCardLinkNone from './BookCardLinkNone';

const BookInfoCard = ({
  onClick,
  count,
  book_img,
  name,
  author,
  published,
  openModal,
}) => {
  return (
    <>
      <div className="relative flex justify-center">
        <div className=" bg-primary w-80 h-[38rem] flex flex-col justify-center items-center absolute top-[150px]"></div>
        <div className="flex flex-col items-center gap-5 relative">
          <Link to="/bookspoilerdetail/:id">
            <img src={book_img} className=" w-56 h-80" />
          </Link>
          <div className="text-center flex flex-col">
            <p className="font-black text-2xl">{name}</p>
            <div className="flex justify-center">
              <span className="font-bold">
                {author} ·
                <span className="font-bold text-gray8"> {published}</span>
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
              <BookCardLinkNone onClick={openModal} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookInfoCard;
