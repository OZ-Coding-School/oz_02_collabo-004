import useFetch from '../../hooks/useFetch';
import { KEYWORD_DATA } from './KeywordData';

const BookCardKeyword = () => {
  // 미리보기로 3개 넣어놨습니다.
  // 추후에 데이터 받으면 1개로 줄여서 수정 할 예정입니다.

  let response = {
    data: {},
    ok: true,
  };
  response.data = KEYWORD_DATA;
  const { data: keyword } = useFetch('/books/all', response);
  console.log(keyword);

  return (
    <>
      {keyword &&
        keyword.map((item) => (
          <div
            key={item.id}
            style={{ background: item.color }}
            className="w-[4.5rem] h-8 flex items-center justify-center text-white font-bold rounded"
          >
            <p>{item.keyword}</p>
          </div>
        ))}
    </>
  );
};

export default BookCardKeyword;
