import challengeDetail from "../../assets/images/challengeDetail.gif";
import BookCaroussel from "../../components/BookCaroussel/BookCarrousel";
import Location from "../../components/@common/Location";

const ChallengePage = () => {
  return (
    <div className="w-full flex justify-center pt-[80px]">
      <div className="flex flex-col md justify-center pt-10 pb-20">
        {/* <div className="w-full flex justify-center pt-[80px]">
      <div className="flex flex-col items-center pt-10 pb-20 gap-20"> */}
        <Location
          number={2}
          link1="/"
          link2="/challenge"
          depth1="Home"
          depthLast="챌린지"
        />
        <div className="flex flex-col gap-14 pt-10">
          <p className="font30 font800 w-[230px] textHighlight">
            진행가능한 챌린지
          </p>
          <div
            className="
        justify-evenly flex items-center slide_carrousel w-[1080px] h-[490px]"
          >
            <BookCaroussel></BookCaroussel>
          </div>
          <div className="w-full">
            <img
              src={challengeDetail}
              alt="메인 배너 이미지"
              className="w-[1080px]"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengePage;
