import PropTypes from 'prop-types';
import useOnClickOutside from '../../../hooks/useOnClickOutside'; 
import { useRef, useState } from 'react';
import exit from '../../../assets/images/icons/exit.svg';
import modal_check from '../../../assets/images/icons/modal_check.svg';
import modal_delete from '../../../assets/images/icons/modal_delete.svg';
import Button from '../Button';

const Modal = ({ 
  setModalOpen, 
  message, 
  onConfirm, 
  onCancel,
}) => {

  const [confirmed, setConfirmed] = useState(false);
  const ref = useRef(null);
  
  useOnClickOutside(ref, () => {
    if (onConfirm) { 
      setModalOpen(false);
    }
  });

  const handleConfirmClick = () => {
    if (onConfirm) {
      onConfirm();
    }
    setConfirmed(true);
  };

  const handleCancelClick = () => {
    if (onCancel) {
      onCancel();
    }
    setModalOpen(false); 
  };

  return (
    <div className="fixed flex z-10 items-center justify-center bg-black bg-opacity-50 w-full h-screen">
      <div className="relative bottom-8 w-[500px] h-[400px] bg-white overflow-hidden rounded-lg" ref={ref}>
        <span 
          onClick={() => setModalOpen(false)}
          className="cursor-pointer z-1000 absolute top-4 right-4"
        >
          <img src={exit} className="w-[15px] h-[20px]" alt="close" />
        </span>
        <div className="h-full flex flex-col items-center justify-center gap-10">
          {!confirmed ? (
            <img className="w-[100px] h-[60px]" src={modal_delete} />
          ) : (
            <img className="w-[100px] h-[60px]" src={modal_check} />
          )}
          {!confirmed ? (
            <div className="font-semibold font20">{message}</div>
          ) : (
            <div className="font-semibold font20">삭제되었습니다.</div>
          )}
          {!confirmed && (
            <div className="flex gap-8">
              <Button outline onClick={handleConfirmClick} width="80px">
                확인
              </Button>
              <Button outline onClick={handleCancelClick} width="80px">
                취소
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  setModalOpen: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default Modal;