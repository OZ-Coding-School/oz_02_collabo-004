const Textarea = () => {
  const TextareaStyle = {
    width: '80%',
    borderRadius: '10px',
    padding: '15px 30px',
    position: 'relative',
    resize: 'none',
  };

  return (
    <textarea
      name="comment"
      type="text"
      style={TextareaStyle}
      placeholder={'여기는 텍스트필드입니다'}
    ></textarea>
  );
};

export default Textarea;
