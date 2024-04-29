import { useState } from 'react';
import BookInfoCard from '../../components/BookInfoCard';

const BookSpoilerPage = () => {
  const [count, setCount] = useState(1);

  const handleClicked = () => {
    setCount(count + 1);
    // console.log(count);
  };
  return (
    <>
      <div className="flex justify-center flex-wrap">
        <div className="flex flex-col md gap-y-7">
          <div className="font-bold text-3xl flex">북스포일러</div>
          <BookInfoCard onClick={handleClicked} count={count} />
        </div>
      </div>
    </>
  );
};

export default BookSpoilerPage;
