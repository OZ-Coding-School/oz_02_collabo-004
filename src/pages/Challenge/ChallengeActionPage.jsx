import BookComment from "../../components/BookComment"
import ChallengeSpoiler from "../../components/ChallengeSpoiler"
import comment from "../../assets/images/comment.png"
import Location from "../../components/@common/Location";
import arrow_right from "../../assets/images/icons/arrow_right.svg"
import booksample from "../../assets/images/booksample.png"
import ChallengeStatus from "../../components/ChallengeStatus";
import Modal from "../../components/@common/Modal";
import { useEffect, useState } from "react";

const ChallengeActionPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteCommentIndex, setDeleteCommentIndex] = useState(null); 
  const [comments, setComments] = useState(null); 
  const [challengeContent, setChallengeContent] = useState(null);
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);


  useEffect(() => {
    // if (!id) {
    //   return '';
    // }
    const getChallengeComments = async () => {
      try {
        //TODO: 
        // const response = await axiosInstance.get(`/comments/{challengespoiler_id}`); 
        // const data = await response.json();
        const data = [
          { id: 1, challenge_spoiler_id: 1, comment_content: 'comment1', created_at: '2024-04-30T00:00:00Z', update_at: '2024-04-31T00:00:00Z', username: 'name1'},
          { id: 2, challenge_spoiler_id: 2, comment_content: 'comment2', created_at: '2024-04-20T00:00:00Z', update_at: '2024-04-31T00:00:00Z', username: 'name2'},
          { id: 3, challenge_spoiler_id: 3, comment_content: 'comment3', created_at: '2024-03-30T00:00:00Z', update_at: '2024-04-31T00:00:00Z', username: 'name3'},
          { id: 4, challenge_spoiler_id: 4, comment_content: 'comment4', created_at: '2024-03-30T00:00:00Z', update_at: '2024-04-31T00:00:00Z', username: 'name4'},
          { id: 5, challenge_spoiler_id: 5, comment_content: 'comment5', created_at: '2024-03-30T00:00:00Z', update_at: '2024-04-31T00:00:00Z', username: 'name5'},
          { id: 6, challenge_spoiler_id: 6, comment_content: 'comment6', created_at: '2024-02-30T00:00:00Z', update_at: '2024-04-31T00:00:00Z', username: 'name6'},
          { id: 7, challenge_spoiler_id: 7, comment_content: 'comment7', created_at: '2024-01-30T00:00:00Z', update_at: '2024-04-31T00:00:00Z', username: 'name7'},
        ]
        setComments(data);
      } catch (error) {
        console.error("Error challenge comment data", error);
      }
    }
    getChallengeComments();

    const getChallengeSpoiler = async () => {
      try {
        //TODO: 
        // const response = await axiosInstance.get(`/{challenge_info_id}/spoiler/{challenge_spoiler_id}`); 
        // const data = await response.json();
        const data = [
          {id:"1", day:1, title:"1일차 스포일러 제목", content:"1일차 스포일러 내용", challenge_info_id:1},
          {id:"2", day:2, title:"2일차 스포일러 제목", content:"2일차 스포일러 내용", challenge_info_id:2},
          {id:"3", day:3, title:"3일차 스포일러 제목", content:"3일차 스포일러 내용", challenge_info_id:3},
          {id:"4", day:4, title:"4일차 스포일러 제목", content:"4일차 스포일러 내용", challenge_info_id:4},
          {id:"5", day:5, title:"5일차 스포일러 제목", content:"5일차 스포일러 내용", challenge_info_id:5},
          {id:"6", day:6, title:"완주 스포일러 제목", content:"6일차 스포일러 내용", challenge_info_id:6},
        ]
        setChallengeContent(data);
      } catch (error) {
        console.error("Error challenge spoiler data", error);
      }
    };
    getChallengeSpoiler();
  }, []);

  const handleConfirmDelete = () => {
    if (deleteCommentIndex !== null) {
      const updateComments = [...comments];
      updateComments.splice(deleteCommentIndex, 1);
      
      setComments(updateComments);
      setDeleteCommentIndex(null);
      setModalOpen(true);
    }
  };

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
          <p className="font30 font800 textHighlight w-[230px]">챌린지 북스포일러</p>
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
                <ChallengeStatus 
                  setCurrentChallengeIndex={setCurrentChallengeIndex} 
                />
              </div>
            </div>
            <div className="flex flex-col items-center md gap-14 pt-10 pb-14 rounded-3xl border-2">
              <ChallengeSpoiler 
                challengeContent={challengeContent}
                currentChallengeIndex={currentChallengeIndex}
              />
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <img src={comment} alt="comment" className="w-20 h-18"/>
                  <p className="font20 font800">챌린지 완료하기</p>
                </div> 
                <BookComment 
                  comments={comments} 
                  setModalOpen={setModalOpen}
                  setComments={setComments}
                  onDeleteComment={setDeleteCommentIndex}
                  placeholder="댓글을 작성하셔야 오늘의 챌린지가 완료됩니다.
                               망각하지 않도록 꼭 생각을 글로 남겨보세요!"
                  minLength={400}
                  showCharCount={true}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
      {modalOpen ? 
        <Modal 
          setModalOpen={setModalOpen}
          message="댓글을 삭제하시겠습니까?"
          onCancel={() => setModalOpen(false)}
          onConfirm={handleConfirmDelete}
        />
      : null
      }
    </div>
  )
}

export default ChallengeActionPage