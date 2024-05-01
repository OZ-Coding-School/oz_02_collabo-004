import Avatar from "../@common/Avatar";
import Button from "../@common/Button";
import Pagination from "../@common/Pagination";
import more from "../../assets/images/icons/more.svg";
import { useState } from "react";


const BookComment = ({ comments, setModalOpen, setComments, onDeleteComment }) => {
  const [newComment, setNewComment] = useState(""); 
  const [currentPage, setCurrentPage] = useState(1);
  const [hoverCommentIndex, setHoverCommentIndex] = useState(-1); 
  const [isMoreVisible, setIsMoreVisible] = useState(false); 
  const [editMode, setEditMode] = useState(-1);
  const [editContent, setEditContent] = useState(""); 

  const perPage = 5;
  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;
  const currentComments = comments.slice(firstIndex, lastIndex);

  const handleSubmitComment = () => {
    if (!newComment.trim()) {
      return;
    }
  
    //TODO: 임시 객체 !!!
    const newUserComment = {
      username: "사용자명", 
      created_at: new Date().toLocaleString(), 
      comment_content: newComment
    };

    const createComments = [newUserComment, ...comments]; 
    setComments(createComments);
    setCurrentPage(1); 
    setNewComment("");
  };

  //TODO: 저장해놓은 페이지 넘버(몇페이지?) 로 페이지에 잘라서 보여줄 라스트,퍼스트 로직 !!
  //TODO: 등록,수정 시간 데이터 > n분전 단위만들어서 자르기 !!

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
  };

  const handleEditSubmit = () => {
    const updateComments = [...comments];
    updateComments[editMode].comment_content = editContent;

    //TODO: 수정된 내용 서버 저장

    setComments(updateComments);
    setEditMode(-1); 
  };

  const handleDeleteClick = (index) => {
    onDeleteComment(index);
    setModalOpen(true); 
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
          <p className="font14 grayb">{comment.created_at}</p>
        </div>
        <div className="w-[480px] font14 flex items-center">
          {editMode === index ? (
            <textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              className="resize-none w-full whitespace-pre-line focus:outline-none secondary"
            />
          ) : (
            <p>{comment.comment_content}</p>
          )}
        </div>
      </div>
      <div className="relative flex flex-col justify-between items-center w-6">
        <div className="cursor-pointer" onClick={handleMoreClick}>
          <img src={more}/>
          { hoverCommentIndex === index && isMoreVisible && ( 
            <div className="absolute top-0 left-15 mt-3 bg-white shadow-lg rounded-md z-10">
              <ul className="flex items-center w-40">
                <li className="flex justify-center cursor-pointer w-20 px-6 py-3 hover:bg-graylight hover:rounded-l-md hover:font700 font14"
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
        {editMode === index && (
          <div onClick={handleEditSubmit} className="font12 font600 cursor-pointer gray8 hover:font800 hover:secondary">
            수정
          </div>
        )}
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
          <Pagination />
        </div>
      </div>
    </>
  )
}

export default BookComment;