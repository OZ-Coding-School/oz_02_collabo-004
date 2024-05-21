import useMutate from '../../hooks/useMutate';

const BookEditComment = ({
    comment,
    editContent,
    comments,
    editMode,
    setComments,
    setEditMode,
  }) => {
  const { mutate: bookUpdateComment } = useMutate(`/comments/comment/update/${comment.id}`, 'PUT');

  const handleEditSubmit = (id) => {
    const updateComments = [...comments];
    updateComments[editMode].content = editContent;
    setComments(updateComments);
    setEditMode(-1); 
    bookUpdateComment(id);
    console.log(updateComments, 'challengeUpdateComment 챌린지 수정 확인')
  };

  return (
   <div 
      onClick={() => handleEditSubmit(comment.id)}
      className="font12 font600 cursor-pointer hover:font800 secondary hover:black pt-2"
    >
    수정
  </div>
)
}

export default BookEditComment