import Button from "../../components/@common/Button";
import mainBanner from "../../assets/images/mainBanner.png";
import BookCaroussel from "../../components/BookCaroussel/BookCarrousel";

const IndexPage = () => {
  return (
    <div className="w-full flex justify-center pt-[60px]">
      <div className="flex flex-col items-center pt-10 pb-20 gap-20">
        <div className="w-full">
          <img src={mainBanner} alt="메인 배너 이미지" className="w-full"></img>
        </div>
        <div className="w-[1080px]">
          <span className="textHighlight BlackHanSans fon text-5xl	">
            북스포일러
          </span>
        </div>
        <div className="flex flex-col items-center slide_container gap-10">
          <div
            className="
        justify-evenly flex items-center slide_carrousel w-[1080px] h-[490px]"
          >
            <BookCaroussel></BookCaroussel>
          </div>
          <Button
            onClick={() => {
              window.location.href = "/bookspoiler";
            }}
            width="220px"
            height="50px"
            fontSize="20px"
          >
            북스포일러 더보기
          </Button>
        </div>
        <div>
          <img
            src={mainBanner}
            alt="메인 배너 이미지"
            className="w-[1080px]"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
