import Avatar from "../@common/Avatar";
import Button from "../@common/Button";
import Pagination from "../@common/Pagination";
import more from "../../assets/images/icons/more.svg";
import { useState } from "react";
// import Modal from "../@common/Modal";

const BookComment = ({ comments, setModalOpen }) => {
  const [newComment, setNewComment] = useState(""); 
  const [currentPage, setCurrentPage] = useState(1);
  const [hoverCommentIndex, setHoverCommentIndex] = useState(-1); 
  const [isMoreVisible, setIsMoreVisible] = useState(false); 

  const perPage = 5;
  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;
  const currentComments = comments.slice(firstIndex, lastIndex);

  const handleSubmitComment = () => {
    console.log("댓글 작성 후 제출", newComment);
    // TODO: 댓글 로직 작성
    setNewComment("");
  };

  //TODO: 저장해놓은 페이지 넘버(몇페이지?) 로 페이지에 잘라서 보여줄 라스트,퍼스트 로직 

  const handleMouseEnter = (index) => {
    setHoverCommentIndex(index);
  };
  const handleMouseLeave = () => {
    setHoverCommentIndex(-1);
    setIsMoreVisible(false);
  };

  const handleMoreClick = () => {
    setIsMoreVisible(true); 
  };
  
  // const handleEditClick = () => {
  //   setModalOpen(true); 
  // };

  const handleDeleteModalClick = () => {
    setModalOpen(true);
  };

  // const handleConfirm = () => {
  //   // TODO: 댓글 삭제하는 로직
  //   setModalOpen(true);
  //   setDeleteMessage(true); 
  // };

  const commentList = currentComments.map((comment, index) => ( 
    <div 
      key={index} 
      className="flex flex-row px-4 py-3 rounded-lg bg-white justify-between"
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex gap-5 items-center">
        <Avatar 
          size="large" 
          source="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/1a92/image/_9FUTEe2WluHy6oMjq-hQ77RlEE.JPG"
        />
        <div className="flex flex-col justify-center">
          <p className="font600">{comment.username}</p>
          <p className="font14 grayb">5시간 전</p>
        </div>
        <div className="w-[480px] font14">
          <p>{comment.comment_content}</p>
        </div>
      </div>
      <div className="relative flex">
        <div className="cursor-pointer pt-1 pr-1" onClick={handleMoreClick}>
          <img src={more} />
          { hoverCommentIndex === index && isMoreVisible && ( 
            <div className="absolute top-0 left-15 mt-3 bg-white shadow-lg rounded-md z-10">
              <ul className="flex items-center w-40">
                <li className="flex justify-center cursor-pointer w-20 px-6 py-3 hover:bg-graylight hover:rounded-l-md hover:font700 font14"
                >
                  수정
                </li>
                <li className="flex justify-center cursor-pointer w-20 px-6 py-3 hover:bg-graylight hover:rounded-r-md hover:font700 font14"
                    onClick={handleDeleteModalClick}
                >
                  삭제
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>  
  ));
  

  return (
    <>
      <div className="flex w-[860px]">
        <div className="flex flex-col gap-3 pt-7 pb-3 md bg-primary items-center justify-center rounded-2xl shadow-lg">
          <div className="flex flex-col gap-4 w-[800px]">
            <div className="flex items-center bg-white justify-between rounded-lg p-5">
              <textarea 
                className="w-4/5 font14 resize-none px-5 placeholder-multiline whitespace-pre-line focus:outline-none overflow-hidden" 
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
          <Pagination />
        </div>
      </div>
    </>
  )
}

export default BookComment;