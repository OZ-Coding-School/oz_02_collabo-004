import { Link } from 'react-router-dom';
import BookCardLink from './BookCardLink';
import BookCardKeyword from './BookCardKeyword';
import BookCardLinkNone from './BookCardLinkNone';
import { useState } from 'react';
import Modal from './Modal';

const BookInfoCard = ({
  onClick,
  count,
  book_img,
  name,
  author,
  published,
}) => {
  // 미리보기로 3개 넣어놨습니다.
  // 추후에 데이터 받으면 1개로 줄여서 수정 할 예정입니다.
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
                {author}
                <span className="font-bold text-gray8"> · {published}</span>
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
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default BookInfoCard;
