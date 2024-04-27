const BookCardLinkNone = () => {
  // 미리보기로 3개 넣어놨습니다.
  // 추후에 데이터 받으면 1개로 줄여서 수정 할 예정입니다.
  // 참고) 이 컴포넌트는 유저가 링크를 3번 초과 클릭했을 때
  // 보여지는 <a> 태그가 빠진 컴포넌트입니다.

  return (
    <>
      <div className="bg-graylight w-[17rem] flex flex-col px-5 py-2 gap-1 rounded-2xl">
        <p className="font-bold text-[0.9rem]">
          우리의 뇌는 아직도 수렵채집인이다
        </p>
        <div>
          <span>`아이콘자리`</span>
          <span className=" text-xs">매일 독서 인사이트</span>
        </div>
        <span className="text-ellipsis text-nowrap overflow-hidden text-xs text-gray8">
          읽은지 꽤 되는데, 큰 감흥을 느끼지 못해서 어쩌구저쩌구
        </span>
      </div>

      <div className="bg-graylight w-[17rem] flex flex-col px-5 py-2 gap-1 rounded-2xl">
        <p className="font-bold text-[0.9rem]">
          우리의 뇌는 아직도 수렵채집인이다
        </p>
        <div>
          <span>`아이콘자리`</span>
          <span className=" text-xs">매일 독서 인사이트</span>
        </div>
        <span className="text-ellipsis text-nowrap overflow-hidden text-xs text-gray8">
          읽은지 꽤 되는데, 큰 감흥을 느끼지 못해서 어쩌구저쩌구
        </span>
      </div>

      <div className="bg-graylight w-[17rem] flex flex-col px-5 py-2 gap-1 rounded-2xl">
        <p className="font-bold text-[0.9rem]">
          우리의 뇌는 아직도 수렵채집인이다
        </p>
        <div>
          <span>`아이콘자리`</span>
          <span className=" text-xs">매일 독서 인사이트</span>
        </div>
        <span className="text-ellipsis text-nowrap overflow-hidden text-xs text-gray8">
          읽은지 꽤 되는데, 큰 감흥을 느끼지 못해서 어쩌구저쩌구
        </span>
      </div>
    </>
  );
};

export default BookCardLinkNone;
