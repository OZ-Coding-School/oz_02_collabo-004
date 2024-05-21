import useMutate from '../../hooks/useMutate';

const ChallengeEditComment = ({
    comment,
    editContent,
    minLength,
    comments,
    editMode,
    setComments,
    setEditMode,
  }) => {
  const { mutate: challengeUpdateComment } = useMutate(`challenges/dicomment/update/${comment.id}`, 'PUT');


  const handleEditSubmit = (id) => {
    if (editContent.length < minLength) {
      alert(`${minLength}자 이상 작성해야 해당 일차의 챌린지 완료 댓글이 등록됩니다.`);
      return;
    }
    const updateComments = [...comments];
    updateComments[editMode].content = editContent;
    setComments(updateComments);
    setEditMode(-1); 
    challengeUpdateComment(id)
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

export default ChallengeEditComment