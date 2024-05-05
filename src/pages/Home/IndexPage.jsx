import Button from "../../components/@common/Button";
import mainBanner from "../../assets/images/mainBanner.png";
import BookCaroussel from "../../components/BookCaroussel/BookCarrousel";

const IndexPage = () => (
  <div className="w-full flex justify-center pt-[60px]">
    <div className="flex flex-col items-center pb-20 gap-20">
      <div className="w-full">
        <img src={mainBanner} alt="메인 배너 이미지" className="w-full" />
      </div>
      <div className="w-[1080px]">
        <span className="textHighlight font30 font800">
          북스포일러
        </span>
      </div>
      <div className="flex flex-col items-center slide_container gap-10">
        <div className="justify-evenly flex items-center slide_carrousel w-[1080px] h-[490px]">
          <p></p>
          <div className="justify-evenly flex items-center slide_carrousel w-[980px] h-[490px] overflow-hidden">
            <BookCaroussel></BookCaroussel>
            <BookCaroussel></BookCaroussel>
            <BookCaroussel></BookCaroussel>
            <BookCaroussel></BookCaroussel>
            <BookCaroussel></BookCaroussel>
          </div>
          <p></p>
        </div>
        <Button
          onClick={() => {
            window.location.href = "/bookspoiler";
          } }
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
          className="w-[1080px]" />
      </div>
      {/* 권한이 관리자일 때만 보이도록 수정 */}
      <div
        className="fixed bottom-10 right-10"
        style={{ zIndex: 999 }}
      >
        <Button
          onClick={() => {
            window.location.href = "/admin";
          } }
          outline
          width="200px"
          height="50px"
          fontSize="18px"
        >
          관리자페이지 가기
        </Button>
      </div>
    </div>
  </div>
);

export default IndexPage;
