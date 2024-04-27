import KakaoLogin from 'react-kakao-login';
import logo from '../../assets/images/logo.png';
import kakao from '../../assets/images/icons/kakao.svg';

const LoginPage = () => {
  const buttonStyle = {
    width: '330px',
    height: '40px',
    background: '#fae101',
    borderRadius: '7px',
    cursor: 'pointer',
  };

  return (
    <div className="w-full flex items-center justify-center py-[100px]">
      <div className="flex flex-col justify-center items-center gap-5 py-[10px]">
        <div className="flex justify-center">
          <img src={logo} alt="logo" className="w-[130px] h-[200px]" />
        </div>
        <div className="text-center">
          북 스포일러와 함께 <br />
          독서의 어려움을 해결!
        </div>
        <div className="flex justify-center my-[20px]">
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
              <img src={kakao} alt="kakao" className="w-[23px] mr-2" />
              카카오로 3초만에 시작하기
            </div>
          </KakaoLogin>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
