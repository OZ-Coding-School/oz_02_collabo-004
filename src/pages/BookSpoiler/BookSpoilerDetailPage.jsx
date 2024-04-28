import BookComment from "../../components/BookComment"
import comment from "../../assets/images/comment.png"
import BookSnsContent from "../../components/BookSnsContent";
import BookQuratorSpoiler from "../../components/BookQuratorSpoiler";
import bookstep from "../../assets/images/bookstep.png";
import Button from "../../components/@common/Button";
import Location from "../../components/@common/Location";
import arrow_right from "../../assets/images/icons/arrow_right.svg"
import booksample from "../../assets/images/booksample.png"

const BookSpoilerDetailPage = () => {
  //댓글 임시리스트
  const comments = [
    { id: 1, text: '1' },
    { id: 2, text: '2' },
    { id: 3, text: '3' },
    { id: 3, text: '4' },
    { id: 3, text: '5' },
  ];

  return (
    <div className="w-full flex justify-center pt-[80px]">
      <div className="flex flex-col md justify-center pt-10 pb-20">
      <Location
        number={3}
        link1="/"
        link2="/bookspoiler"
        depth1="Home"
        depth2="북스포일러"
        linkLast="/bookspoilerdetail"
        depthLast="북스포일러 상세페이지"
        />
        <div className="flex flex-col gap-14 pt-10">
          <p className="font30 font800">도서명 북스포일러</p>
          <div className="flex-col flex items-center gap-14">
            <div className="flex gap-10 justify-center">
              <img src={booksample} className="w-48"/>
              <div className="flex flex-col gap-3">
                <p className="font900 font22 secondary">당신은 사업가입니까</p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center">
                    <p className="font600">캐럴 로스 저 ·</p>
                    <p className="gray5">알에이치코리아</p>
                  </div>
                  <div className="flex white items-center gap-1">
                    <div className="keypurple rounded-md px-2 py-1 w-[65px] text-center">창업</div>
                    <div className="keyred rounded-md px-2 py-1 w-[65px] text-center">자청</div>
                    <div className="keydeepblue rounded-md px-2 py-1 w-[65px] text-center">김성공</div>
                  </div>
                </div>
                <div 
                  className="flex gap-2 items-center cursor-pointer pt-5"
                  onClick={() => open('https://www.coupang.com/', '_blank')}
                >
                  <p className="font600 font12 grayb">책 사러가기</p>
                  <img src={arrow_right} className="w-2"/>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center md gap-14 pt-4 pb-6 rounded-3xl border-2">
              <div className="flex items-center w-[1040px] bg-primary justify-between px-8 py-7 rounded-2xl">
                <div className="flex items-center gap-5">
                  <img src={bookstep} className="w-20"/>
                  <p className="font22 font700">독서의 깊이를 한층 더 높여보세요!</p>
                </div>
                <Button 
                  onClick={() => {location.href = "/challenge"}} 
                  width="200px" height="45px" fontSize="18px" fontWeight="600"
                >
                  챌린지 신청하기
                </Button>
              </div>
              <BookQuratorSpoiler />
              <BookSnsContent />
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <img src={comment} alt="comment" className="w-20 h-18"/>
                  <p className="font20 font600">내 생각 공유하기</p>
                </div> 
                <BookComment comments={comments} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookSpoilerDetailPage