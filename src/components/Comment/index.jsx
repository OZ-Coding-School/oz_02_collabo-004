import Avatar from "../@common/Avatar";
import Button from "../@common/Button";
import Pagination from "../@common/Pagination";
import more from "../../assets/images/icons/more.svg";
import { useState } from "react";

const Comment = ({ comments }) => {
  const [newComment, setNewComment] = useState(""); 
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;

  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;
  const currentComments = comments.slice(firstIndex, lastIndex);

  const handleSubmitComment = () => {
    console.log("댓글 작성 후 제출", newComment);
    // TODO: 댓글 로직 작성

    setNewComment("");
  };

  const commentList = currentComments.map((comment, index) => ( 
    <div key={index} className="flex flex-row px-4 py-3 rounded-lg bg-white justify-between">
      <div className="flex gap-5 items-center">
        <Avatar 
          size="large" 
          source="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/1a92/image/_9FUTEe2WluHy6oMjq-hQ77RlEE.JPG"
        />
        <div className="flex flex-col justify-center">
          <p className="font600">namepen7</p>
          <p className="font14 grayb">5시간 전</p>
        </div>
        <div className="w-[550px] font14">
          <p>
            사업가의 길을 가기로 결심했는데, 엄선해준 스포일러 덕분에 좋은 내용 알고 갑니다.
            사업가의 길을 가기로 결심했는데, 엄선해준 스포일러 덕분에 좋은 내용 알고 갑니다.
          </p>
        </div>
      </div>
      <div className="cursor-pointer pt-1 pr-1"><img src={more}/></div>
    </div>
  ));

  return (
    <div className="flex flex-col w-[960px] gap-3 pt-7 pb-3 md bg-primary items-center justify-center rounded-2xl shadow-lg">
      <div className="flex flex-col gap-4 w-[900px]">
       <div className="flex items-center bg-white justify-evenly rounded-lg">
        <textarea 
            className="w-4/5 font14 resize-none p-5 placeholder-multiline whitespace-pre-line focus:outline-none overflow-hidden" 
            placeholder="머릿속에 들어온 내용을 글로 작성함으로써 한번 더 뇌에 새길 수 있습니다. 
                         망각하지 않도록 꼭 생각을 글로 남겨보세요!"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)} 
            />
          <Button onClick={handleSubmitComment} width="130px" height="40px" fontSize="18px" fontWeight="500">
            등록
          </Button>
       </div>
       <div className="flex flex-col gap-2">
        {commentList}
        </div>
      </div>
      <Pagination/>
    </div>
  )
}

export default Comment;