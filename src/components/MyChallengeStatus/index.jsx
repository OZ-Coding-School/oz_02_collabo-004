import Button from '../@common/Button';

const MyChallengeStatus = () => {
  return (
    <div className="relative w-[800px] h-[260px]">
      <div className="absolute -z-10 w-[800px] h-[175px] top-[85px] bg-gray-300"></div>
      <div className="grid grid-cols-[210px_minmax(260px,_0fr)_300px] grid-rows-3 gap-2 w-[800px] h-[260px]">
        <div className="flex items-center justify-center row-span-3 font-bold">
          <div className="flex items-center justify-center w-[180px] h-[225px] bg-gray-500 text-white">
            책 이미지
          </div>
        </div>

        <div className="flex items-end col-span-2 text-2xl font-extrabold">
          인스타브레인
        </div>

        <div className="flex flex-col w-[240px]">
          <div className="">
            <span className="text-xl font-bold">안데르스 한센&nbsp;</span>
            <span className="text-xl text-gray-500">・ 동양북스</span>
          </div>
          <div className="flex justify-between py-2">
            <div className="flex items-center justify-center rounded-[4px] w-[72px] h-9 bg-green-500 font-bold">
              뇌과학
            </div>
            <div className="flex items-center justify-center rounded-[4px] w-[72px] h-9 bg-red-500 font-bold text-white">
              자청
            </div>
            <div className="flex items-center justify-center rounded-[4px] w-[72px] h-9 bg-keygreen font-bold text-white">
              모니카
            </div>
          </div>
        </div>

        <div className="py-2">
          <div className="w-full h-0.5 bg-white rounded-full">
            <div className="w-4/5 h-0.5 bg-secondary rounded-full"></div>
          </div>
          <div className="flex justify-between text-xl">
            <span className="text-blue-800 font-bold">D-2</span>
            <span className="font-light">
              <span className="text-blue-800">80%</span>&nbsp;챌린지 완료
            </span>
          </div>
          <div className="flex flex-col font-light">
            <span>
              <span className="text-blue-900">2024.04.27</span>
              &nbsp;까지 챌린지 종료
            </span>
            <span>
              <span className="text-blue-900">2024.05.27</span>
              &nbsp;까지 열람 가능
            </span>
          </div>
        </div>

        <div className="flex items-center col-span-2">
          <Button width="500px" height="50px" fontSize="26px" fontWeight="bold">
            챌린지 하러가기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyChallengeStatus;
