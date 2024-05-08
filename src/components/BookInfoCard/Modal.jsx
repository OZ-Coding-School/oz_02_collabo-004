import Button from '../@common/Button';
import KakaoLogin from 'react-kakao-login';
import kakao from '../../assets/images/icons/kakao.svg';
import axiosInstance from '../../utils/axios';

const Modal = ({ isOpen, closeModal }) => {
  const kakaoLogin = () => {
    axiosInstance.post('user/account/login');
  };

  const buttonStyle = {
    width: '330px',
    height: '40px',
    background: '#fae101',
    borderRadius: '7px',
    cursor: 'pointer',
  };

  return (
    <div style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="fixed top-0 left-0 w-full h-full bg-slate-200 opacity-95"></div>
      <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[400px] max-w-full max-h-[90%] overflow-y-auto bg-white flex flex-col gap-5 h-[200px] justify-center items-center rounded-lg">
        <p>로그인 후 모든 스포일러를 열람해보세요!</p>
        <KakaoLogin
          // TODO token={KAKAO_JAVASCRIPT_KEY}
          buttonText="kakao"
          // TODO onSuccess={responseKaKao}
          onFail={console.error}
          onLogout={console.info}
          getProfile={true}
          style={buttonStyle}
        >
          <div className="flex justify-center">
            <img
              src={kakao}
              alt="kakao"
              className="w-[23px] mr-2"
              onClick={kakaoLogin}
            />
            카카오로 3초만에 시작하기
          </div>
        </KakaoLogin>
        <div className="flex">
          <Button onClick={closeModal}>닫기</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
