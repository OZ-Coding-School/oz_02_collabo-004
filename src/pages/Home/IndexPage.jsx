import Button from '../../components/@common/Button';
import mainBanner from '../../assets/images/bookspoilerMain.png';
import bookspoilerDetail from '../../assets/images/bookspoilerDetail.png';
import BookCaroussel from '../../components/BookCaroussel/BookCarrousel';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

const IndexPage = () => {
  const { data: book } = useFetch('/books/all');

  console.log({ book });

  return (
    <div className="w-full flex justify-center pt-[60px]">
      <div className="flex flex-col items-center pt-10 pb-20 gap-20">
        <div className="w-full">
          <div className="w-[700px] h-[400px] absolute top-[320px] z-50 flex flex-col items-center">
            <p className="text-white text-7xl font-bold mb-6 tracking-tighter">
              BOOK SPOILER
            </p>
            <p className="text-white text-4xl font-medium	">
              경제적 자유를 위한 필독서
            </p>
            <p className="text-white text-3xl">
              고퀄리티 북스포일러만 큐레이팅합니다.
            </p>
          </div>
          <img src={mainBanner} alt="메인 배너 이미지" className="w-full" />
        </div>
        <div className="w-[1080px]">
          <span className="textHighlight font30 font800">북스포일러</span>
        </div>
        <div className="flex flex-col items-center slide_container gap-10">
          <div className="justify-evenly flex items-center slide_carrousel w-[1080px] h-[490px]">
            <BookCaroussel></BookCaroussel>
          </div>
          <Link to={'/bookspoiler'}>
            <Button width="220px" height="50px" fontSize="20px">
              북스포일러 더보기
            </Button>
          </Link>
        </div>
        <div>
          <img
            src={bookspoilerDetail}
            alt="북 스포일러 상세페이지"
            className="w-[1080px]"
          ></img>
        </div>
        {/* 권한이 관리자일 때만 보이도록 수정 */}
        {/* <div className="fixed bottom-10 right-10" style={{ zIndex: 999 }}>
          <Button
            onClick={() => {
              window.location.href = "/manager";
            }}
            outline
            width="200px"
            height="50px"
            fontSize="18px"
          >
            관리자페이지 가기
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default IndexPage;
