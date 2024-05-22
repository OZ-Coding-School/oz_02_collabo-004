import { useState } from 'react';
import BookInfoCard from '../../components/BookInfoCard';
import Location from '../../components/@common/Location';
// import { BOOK_DATA } from '../../components/BookInfoCard/data';
import useFetch from '../../hooks/useFetch';

const BookSpoilerPage = () => {
  const [count, setCount] = useState(1);

  const handleClicked = () => {
    setCount(count + 1);
  };

  // let response = {
  //   data: {},
  //   ok: true,
  // };
  // response.data = BOOK_DATA;
  const { data: book } = useFetch('/books/all');
  console.log(book + '북 리스트 출력 확인 !!!!!!!!');

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="flex pt-[120px] md">
          <Location
            number={2}
            link1="/"
            depth1="Home"
            linkLast="/bookspoiler"
            depthLast="북스포일러"
          />
        </div>
      </div>
      <div className="flex justify-center flex-wrap pt-10 pb-20">
        <div className="flex flex-col md gap-y-7">
          <div className="font800 font30 flex textHighlight w-[9rem] justify-center text-nowrap">
            북스포일러
          </div>
          <div className="flex gap-14 justify-around flex-wrap">
            {book &&
              book.map((item) => (
                <BookInfoCard
                  onClick={handleClicked}
                  count={count}
                  {...item}
                  key={item.name}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookSpoilerPage;
