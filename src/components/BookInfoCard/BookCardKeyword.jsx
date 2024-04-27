const BookCardKeyword = () => {
  // 미리보기로 3개 넣어놨습니다.
  // 추후에 데이터 받으면 1개로 줄여서 수정 할 예정입니다.

  return (
    <>
      <div className="bg-keyred w-[4.5rem] h-8 flex items-center justify-center text-white font-bold rounded">
        <p>
          {/* kw */}
          키워드
        </p>
      </div>
      <div className="bg-keyred w-[4.5rem] h-8 flex items-center justify-center text-white font-bold rounded">
        <p>
          {/* kw */}
          키워드
        </p>
      </div>
      <div className="bg-keyred w-[4.5rem] h-8 flex items-center justify-center text-white font-bold rounded">
        <p>
          {/* kw */}
          키워드
        </p>
      </div>
    </>
  );
};

export default BookCardKeyword;
