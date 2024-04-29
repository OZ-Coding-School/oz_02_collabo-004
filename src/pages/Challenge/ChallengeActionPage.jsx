import BookComment from "../../components/BookComment"
import ChallengeSpoiler from "../../components/ChallengeSpoiler"
import comment from "../../assets/images/comment.png"
import Location from "../../components/@common/Location";
import arrow_right from "../../assets/images/icons/arrow_right.svg"
import booksample from "../../assets/images/booksample.png"
import challenge_spoiler from "../../assets/images/challenge_spoiler.png"
import ChallengeStatus from "../../components/ChallengeStatus";

const ChallengeActionPage = () => {
  // TODO:
  //let comments = await axiosInstance.get(`/comments/{challenge_spoiler_id}`);
  let comments = [
    { id: 1, comment_content: 'comment1' , created_at: '2024-05-30', username: 'name'},
    { id: 13, comment_content: 'comment12' , created_at: '2024-06-30', username: 'name2'},
    { id: 15, comment_content: 'comment13' , created_at: '2024-07-30', username: 'name3'},
    { id: 16, comment_content: 'comment15' , created_at: '2024-08-30', username: 'name4'},
    { id: 81, comment_content: 'comment14' , created_at: '2024-09-30', username: 'name6'},
    { id: 81, comment_content: 'comment15' , created_at: '2024-09-30', username: 'name7'},
    { id: 81, comment_content: 'comment17' , created_at: '2024-09-30', username: 'name8'},
    { id: 81, comment_content: 'comment18' , created_at: '2024-09-30', username: 'name5'},
    { id: 81, comment_content: 'comment19' , created_at: '2024-09-30', username: 'name10'},
    { id: 81, comment_content: 'comment19' , created_at: '2024-09-30', username: 'name11'},
    { id: 81, comment_content: 'comment10' , created_at: '2024-09-30', username: 'name12'},
    { id: 81, comment_content: 'comment16' , created_at: '2024-09-30', username: 'name13'},
  ];

  return (
    <div className="w-full flex justify-center pt-[80px]">
      <div className="flex flex-col md justify-center pt-10 pb-20">
      <Location
        number={3}
        link1="/"
        link2="/challenge"
        depth1="Home"
        depth2="챌린지"
        linkLast="/bookspoilerdetail"
        depthLast="챌린지 북스포일러"
        />
        <div className="flex flex-col gap-14 pt-10">
          <p className="font30 font800">챌린지 북스포일러</p>
          <div className="flex-col flex items-center gap-14">
            <div className="flex gap-10 justify-center">
              <div className="flex flex-col justify-center">
                <img src={booksample} className="w-72"/>
                <div className="flex gap-2 items-center cursor-pointer pt-2"
                     onClick={() => open('https://www.coupang.com/', '_blank')}
                  >
                  <p className="font600 font14 grayb pl-4">책 사러가기</p>
                  <img src={arrow_right} className="w-2 "/>
                </div>
              </div>
              <div className="flex flex-col gap-5 pt-3 items-center">
                <div className="flex flex-col gap-2">
                  <p className="font900 font24 secondary">당신은 사업가입니까</p>
                  <div className="flex items-center justify-center">
                    <p className="font600 font18">캐럴 로스 저 ·</p>
                    <p className="gray5">알에이치코리아</p>
                  </div>
                </div> 
                <div className="flex white items-center justify-center gap-2">
                  <div className="keypurple rounded-md px-2 py-1 w-[80px] text-center">창업</div>
                  <div className="keyred rounded-md px-2 py-1 w-[80px] text-center">자청</div>
                  <div className="keydeepblue rounded-md px-2 py-1 w-[80px] text-center">김성공</div>
                </div>

                <ChallengeStatus />
              </div>
            </div>
            <div className="flex flex-col items-center md gap-14 py-6 rounded-3xl border-2">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 pl-1">
                  <img src={challenge_spoiler} alt="comment" className="w-20 h-18"/>
                  <p className="font20 font800">챌린지 n일차</p>
                </div> 
                <ChallengeSpoiler />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <img src={comment} alt="comment" className="w-20 h-18"/>
                  <p className="font20 font800">챌린지 완료하기</p>
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

export default ChallengeActionPage