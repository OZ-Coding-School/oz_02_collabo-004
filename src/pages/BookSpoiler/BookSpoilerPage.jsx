import { useState } from 'react';
import BookInfoCard from '../../components/BookInfoCard';
import Location from '../../components/@common/Location';

const BookSpoilerPage = () => {
  const [count, setCount] = useState(1);

  const handleClicked = () => {
    setCount(count + 1);
    // console.log(count);
  };
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="flex pt-[100px] md">
          <Location
            number={2}
            link1="/"
            depth1="Home"
            linkLast="/bookspoiler"
            depthLast="북스포일러"
          />
        </div>
      </div>
      <div className="flex justify-center flex-wrap py-10">
        <div className="flex flex-col md gap-y-7">
          <div className="font800 font30 flex textHighlight w-[8.5rem]">
            북스포일러
          </div>
          <BookInfoCard onClick={handleClicked} count={count} />
        </div>
      </div>
    </>
  );
};

export default BookSpoilerPage;
