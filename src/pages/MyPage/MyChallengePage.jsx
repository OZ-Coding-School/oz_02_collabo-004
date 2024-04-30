import Location from '../../components/@common/Location';
import MyChallengeStatus from '../../components/MyChallengeStatus';
import MyPageSidebar from '../../components/MyPageSidebar';

const MyChallengePage = () => {
  return (
    <div className="w-full flex justify-center pt-[80px]">
      <div className="flex flex-col md justify-start pt-10 pb-20">
        <Location
          number={3}
          link1="/"
          link2="/mychallenge"
          depth1="Home"
          depth2="마이페이지"
          linkLast="/mychallenge"
          depthLast="내 챌린지"
        />

        <div className="flex justify-between w-full pt-10">
          <div className="">
            <MyPageSidebar />
          </div>
          <div className="flex flex-col items-end w-[850px]">
            <div className="w-full">
              <p className="text-xl font-semibold">
                지금 Rose님 포함 총&nbsp;
                <span className="text-secondary text-2xl font-extrabold">
                  54개
                </span>
                의 챌린지가 진행중입니다!
              </p>
              <hr className="border border-solid" />
              <div className="py-5 ml-5 w-[130px]">
                <p className="flex items-center justify-center font30 font800 w-full textHighlight">
                  내 챌린지
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <MyChallengeStatus />
              <MyChallengeStatus />
              <MyChallengeStatus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyChallengePage;
