import Avatar from "../@common/Avatar";
import Button from "../@common/Button";
import Pagination from "../@common/Pagination";
import more from "../../assets/images/icons/more.svg";
import { useEffect, useRef, useState } from "react";

const BookComment = ({ 
  comments, 
  setModalOpen, 
  setComments, 
  onDeleteComment, 
  placeholder, 
  minLength, 
  showCharCount,
  handleCompleteSubmit,
}) => {
  const [newComment, setNewComment] = useState(""); 
  const [currentPage, setCurrentPage] = useState(1);
  const [hoverCommentIndex, setHoverCommentIndex] = useState(-1); 
  const [isMoreVisible, setIsMoreVisible] = useState(false); 
  const [editMode, setEditMode] = useState(-1);
  const [editContent, setEditContent] = useState(""); 
  const [charCount, setCharCount] = useState(0); 
  const [editCharCount, setEditCharCount] = useState(0); 

  const textareaRef = useRef(null); 

  const perPage = 5;
  const firstIndex = (currentPage - 1) * perPage;
  const currentComments = comments?.slice(firstIndex, firstIndex + perPage);

  useEffect(() => {
    const handleClickOutsideTextarea = (event) => {
      if (editMode !== -1 && textareaRef.current && !textareaRef.current.contains(event.target)) {
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
  }, [editMode]);
  

  const handleCommentSubmit = async () => {
    if (editMode !== -1) {
      alert("댓글 수정을 완료해주세요!");
      return;
    }
  
    if (!newComment.trim()) {
      alert("내용을 입력하셔야 등록됩니다.");
      return;
    }
  
    if (newComment.length < minLength) {
      alert(`${minLength}자 이상 작성해야 해당 일차의 챌린지 완료 댓글이 등록됩니다.`);
      return;
    }
  
    try {
      const newUserComment = {
        username: "사용자명", 
        created_at: new Date().toISOString(), 
        comment_content: newComment
      };
  
      //TODO: 
      // const response = await axiosInstance.post(`/comment/create/${challengespoiler_id}`, newUserComment);
      // if (!response.data) {
      //   throw new Error('Failed to create comment');
      // }
      // setComments([response.data, ...comments]);
      // setCurrentPage(1); 
      // setEditMode(-1);
      // setNewComment("");
      // if (typeof handleCompleteSubmit === 'function') { 
      //  handleCompleteSubmit(); 
      // }
      // } catch (error) {
      //   console.error('Error creating comment:', error);
      //   alert('댓글 등록에 실패했습니다.');
      // }
      
      const createComments = [newUserComment, ...comments]; 
      setComments(createComments);
      setCurrentPage(1); 
      setNewComment("");
      setEditMode(-1);

      if (typeof handleCompleteSubmit === 'function') { 
        handleCompleteSubmit(); 
        window.scrollTo(0, 0);
      }
    } catch (error) {
      console.error('Error creating comment:', error);
      alert('댓글 등록에 실패했습니다.');
    }
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
    setEditCharCount(comments[index].comment_content.length);
  };

  const handleEditSubmit = () => {
    if (editContent.length < minLength) {
      alert(`${minLength}자 이상 작성해야 해당 일차의 챌린지 완료 댓글이 등록됩니다.`);
      return;
    }
    const updateComments = [...comments];
    updateComments[editMode].comment_content = editContent;

    //TODO: 수정된 내용 저장

    setComments(updateComments);
    setEditMode(-1); 
  };

  const handleDeleteClick = (index) => {
    onDeleteComment(index);
    setModalOpen(true); 
  };

  const handleCharCount = (event) => {
    const count = event.target.value.length;
    setCharCount(count);
  };

  const handleEditCharCount = (event) => {
    const count = event.target.value.length;
    setEditCharCount(count);
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

  const commentList = currentComments?.map((comment, index) => ( 
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
        <div className="w-[500px] font14 flex items-center relative">
          {editMode === index ? (
            <div className="relative">
              <textarea
                ref={textareaRef}
                id={`comment-textarea-${index}`}
                value={editContent}
                onChange={(e) => {setEditContent(e.target.value); handleEditCharCount(e);}}
                className="resize-none w-[500px] whitespace-pre-line focus:outline-none secondary box"
              />
              {showCharCount && editMode === index && (
                <span className={`absolute bottom-2 right-0 top-12 ${editCharCount < minLength ? 'text-red-500' : ''} text-[10px]`}>
                  {editCharCount}/{minLength}
                </span>
              )}
            </div>
          ) : (
            <p dangerouslySetInnerHTML={{ __html: comment.comment_content.replace(/\n/g, '<br>') }} />
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
            <div className="flex items-center bg-white justify-between rounded-lg p-8">
              <div className="flex w-full relative items-center">
                <textarea 
                  className="w-full font14 resize-none pl-5 pr-12 placeholder-multiline whitespace-pre-line focus:outline-none box" 
                  placeholder={placeholder}
                  value={newComment}
                  onChange={(e) => {setNewComment(e.target.value); handleCharCount(e);}} 
                />
                {showCharCount && newComment && (
                  <span className={`absolute bottom-2 right-12 top-12 ${charCount < minLength ? 'text-red-500' : ''} text-[10px]`}>
                    {charCount}/{minLength}
                  </span>
                )}
              </div>
              <Button 
                onClick={handleCommentSubmit} 
                width="130px" 
                height="40px" 
                fontSize="18px" 
                fontWeight="500" 
              >
                등록
              </Button>
            </div>
            <div className="flex flex-col gap-2">
              {commentList}
            </div>
          </div>
          <Pagination 
            totalElements={comments?.length} 
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
