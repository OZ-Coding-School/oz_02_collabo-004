const MyBookSpoiler = () => {
  return (
    <div className="flex items-end justify-between w-[850px] h-[180px]">
      <div className="flex items-center justify-center w-[120px] h-[150px] bg-gray-500 text-white font-bold">
        책 이미지
      </div>
      <div className="flex flex-col justify-center rounded-3xl w-[710px] h-[130px] bg-[#fcf2c9] pl-6">
        <span className="text-xl font-bold">
          당신은 사업가입니까 | 캐럴 로스 저
        </span>
        <span className="text-2xl font-bold text-secondary py-4">
          퇴사하기 전에 이 책을 봤었더라면...
        </span>
      </div>
    </div>
  );
};

export default MyBookSpoiler;
