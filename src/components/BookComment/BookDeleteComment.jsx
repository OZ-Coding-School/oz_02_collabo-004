import { useState } from "react";
import useMutate from "../../hooks/useMutate";
import Modal from "../@common/Modal"

const BookDeleteComment = ({
  comment,
  comments,
  setComments,
  }) => {
  const { mutate: bookDeleteComment } = useMutate(`/comments/comment/delete/${comment.id}`);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteCommentIndex, setDeleteCommentIndex] = useState(null); 

  const handleDeleteClick = (index) => {
    setModalOpen(true)
    setDeleteCommentIndex(index)
  }

  const handleConfirmDelete = (id) => {
    if (deleteCommentIndex !== null) {
      const updateComments = [...comments];
      updateComments.splice(deleteCommentIndex, 1);
      setComments(updateComments);
      bookDeleteComment(id);
      setDeleteCommentIndex(null);
      setModalOpen(true);
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      <li className="flex justify-center cursor-pointer w-20 px-6 py-3 hover:bg-graylight hover:rounded-r-md hover:font700 font14"
            onClick={() => handleDeleteClick()}
        >
          삭제
      </li> 
      {modalOpen ? 
        <div className="fixed inset-0 mt-20 flex items-center justify-center bg-black h-screen bg-opacity-50">
          <Modal 
            setModalOpen={setModalOpen}
            message="댓글을 삭제하시겠습니까?"
            onCancel={() => setModalOpen(false)}
            onConfirm={() => handleConfirmDelete(comment.id)}
          />
        </div>
      : null
    }
    </div>
  )
}

export default BookDeleteComment