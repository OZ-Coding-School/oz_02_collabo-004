import Location from '../../components/@common/Location';
import Pagination from '../../components/@common/Pagination';
import MyBookSpoiler from '../../components/MyBookSpoiler';
import MyPageSidebar from '../../components/MyPageSidebar';

const MyBookSpoilerPage = () => {
  return (
    <div className="w-full flex justify-center pt-[80px]">
      <div className="flex flex-col md justify-start pt-10 pb-20">
        <Location
          number={3}
          link1="/"
          link2="/mychallenge"
          depth1="Home"
          depth2="마이페이지"
          linkLast="/mybookspoiler"
          depthLast="내 스포일러"
        />

        <div className="flex justify-between w-full pt-10">
          <div className="">
            <MyPageSidebar />
          </div>
          <div className="flex flex-col w-[850px]">
            <div className="w-full">
              <p className="text-xl font-semibold">
                지금 모든 회원분들이&nbsp;
                <span className="text-secondary text-2xl font-extrabold">
                  36개
                </span>
                의 북스포일러로 혜안을 얻고 있어요!
              </p>
              <hr className="border border-solid" />
              <div className="py-5 ml-5 w-[230px]">
                <p className="flex items-center justify-center font30 font800 w-full textHighlight">
                  저장한 북스포일러
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <MyBookSpoiler />
              <MyBookSpoiler />
              <MyBookSpoiler />
              <MyBookSpoiler />
              <MyBookSpoiler />
            </div>
            <div className="flex items-center justify-center">
              <Pagination totalElements={5} pagePerNumber={5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookSpoilerPage;
