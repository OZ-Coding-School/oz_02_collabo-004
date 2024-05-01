import Avatar from "../@common/Avatar";
import Button from "../@common/Button";
import Pagination from "../@common/Pagination";
import more from "../../assets/images/icons/more.svg";
import { useEffect, useRef, useState } from "react";


const BookComment = ({ comments, setModalOpen, setComments, onDeleteComment }) => {
  const [newComment, setNewComment] = useState(""); 
  const [currentPage, setCurrentPage] = useState(1);
  const [hoverCommentIndex, setHoverCommentIndex] = useState(-1); 
  const [isMoreVisible, setIsMoreVisible] = useState(false); 
  const [editMode, setEditMode] = useState(-1);
  const [editContent, setEditContent] = useState(""); 
  const [isEditing, setIsEditing] = useState(false);

  const textareaRef = useRef(null); 

  const perPage = 5;
  const firstIndex = (currentPage - 1) * perPage;
  const currentComments = comments.slice(firstIndex, firstIndex + perPage);

  useEffect(() => {
    const handleClickOutsideTextarea = (event) => {
      if (isEditing && textareaRef.current && !textareaRef.current.contains(event.target)) {
        textareaRef.current.style.border = "2px solid red"; 
        textareaRef.current.style.borderRadius = "4px";
        textareaRef.current.classList.add("textarea-shake"); 
      } else {
        if (textareaRef.current) {
          textareaRef.current.style.border = "none"; 
          textareaRef.current.classList.remove("textarea-shake"); 
        }
      }
    };
    document.addEventListener("click", handleClickOutsideTextarea);
    return () => {
      document.removeEventListener("click", handleClickOutsideTextarea);
    };
  }, [isEditing]);
  

  const handleSubmitComment = () => {
    if (!newComment.trim() || editMode !== -1) {
      alert("댓글 수정을 완료해주세요!")
      setNewComment("")
    return;
  }
  
    //TODO: 임시 객체 !!!
    const newUserComment = {
      username: "사용자명", 
      created_at: new Date().toISOString(), 
      comment_content: newComment
    };

    const createComments = [newUserComment, ...comments]; 
    setComments(createComments);
    setCurrentPage(1); 
    setNewComment("");
  };

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
  
  const handleEditClick = (index) => {
    setEditMode(index);
    setEditContent(comments[index].comment_content);
    setIsEditing(true);
  };

  const handleEditSubmit = () => {
    const updateComments = [...comments];
    updateComments[editMode].comment_content = editContent;

    //TODO: 수정된 내용 서버 저장

    setComments(updateComments);
    setEditMode(-1); 
    setIsEditing(false);
  };

  const handleDeleteClick = (index) => {
    onDeleteComment(index);
    setModalOpen(true); 
  };
  const handleCommentClick = (index) => {
    if (editMode === index) {
      setIsEditing(true); 
    }
  };

  const formatTime = (timeString) => {
    const currentTime = new Date();
    const commentTime = new Date(timeString);
    const diffMilliseconds = currentTime - commentTime;
    const diffSeconds = Math.floor(diffMilliseconds / 1000);
    const diffMinutes = Math.floor(diffMilliseconds / (1000 * 60));
    const diffHours = Math.floor(diffMilliseconds / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24 * 7));
    const diffMonths = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24 * 30));
    const diffYears = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24 * 365));
  
    if (diffSeconds < 60) {
      return "방금 전";
    } else if (diffMinutes < 60) {
      return `${diffMinutes}분 전`;
    } else if (diffHours < 24) {
      return `${diffHours}시간 전`;
    } else if (diffDays < 7) {
      return `${diffDays}일 전`;
    } else if (diffWeeks < 4) {
      return `${diffWeeks}주 전`;
    } else if (diffMonths < 12) {
      return `${diffMonths}달 전`;
    } else {
      return `${Math.floor(diffYears / 365)}년 전`;
    }
  };

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
          <p className="font14 grayb">{formatTime(comment.created_at)}</p>
        </div>
        <div 
          className="w-[480px] font14 flex items-center"
          onClick={() => handleCommentClick(index)} 
        >
          {editMode === index ? (
            <textarea
              ref={textareaRef}
              id={`comment-textarea-${index}`}
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              className="resize-none w-full whitespace-pre-line focus:outline-none secondary"
            />
          ) : (
            <p>{comment.comment_content}</p>
          )}
        </div>
      </div>
      <div className="relative flex flex-col items-center w-6">
        <div className="cursor-pointer" onClick={handleMoreClick}>
        {editMode === index ? (
         <div 
            onClick={handleEditSubmit}
            className="font12 font600 cursor-pointer hover:font800 secondary hover:black pt-2"
          >
            수정
          </div>
          ) : (
            <img src={more} className="pt-3"/>
        )}
          {hoverCommentIndex === index && isMoreVisible && ( 
            <div className="absolute top-0 left-15 mt-6 bg-white shadow-lg rounded-md z-10">
              <ul className="flex items-center w-40">
                <li className="flex justify-center cursor-pointer w-20 px-6 py-3 hover:bg-graylight hover:rounded-l-md hover:font700 font14 "
                    onClick={() => handleEditClick(index)}
                >
                  수정
                </li>
                <li className="flex justify-center cursor-pointer w-20 px-6 py-3 hover:bg-graylight hover:rounded-r-md hover:font700 font14"
                    onClick={() => handleDeleteClick(index)}
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
      <div className="flex w-[860px] ">
        <div className="flex flex-col gap-3 pt-7 pb-3 md bg-primary items-center justify-between rounded-2xl shadow-lg">
          <div className="flex flex-col gap-4 w-[800px]">
            <div className="flex items-center bg-white justify-between rounded-lg p-5">
              <textarea 
                className="w-4/5 font14 resize-none px-5 placeholder-multiline whitespace-pre-line focus:outline-none" 
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
          <Pagination 
            totalElements={comments.length} 
            pagePerNumber={perPage} 
            currentPage={currentPage} 
            onPageChange={setCurrentPage} 
          />
        </div>
      </div>
    </>
  )
}

export default BookComment;