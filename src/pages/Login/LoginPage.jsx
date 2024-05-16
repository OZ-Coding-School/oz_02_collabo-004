// import KakaoLogin from "react-kakao-login";
import logo from "../../assets/images/logo.png"
import kakao from "../../assets/images/icons/kakao.svg"
// import axiosInstance from '../../utils/axios'
import useMutate from "../../hooks/useMutate";

const LoginPage = () => {

  // const kakaoLogin = () => {
  //   axiosInstance.post('/users/kakao');
  // }
let response = {
  data : {
  "token_type":"bearer",
  "access_token":"${ACCESS_TOKEN}",
  "expires_in":43199,
  "refresh_token":"${REFRESH_TOKEN}",
  "refresh_token_expires_in":5184000,
  "scope":"account_email profile"
  },
  ok: true
 }
  const { mutate: kakaoLogin } = useMutate(`/users/kakao`, response);

  const handleKakaoLogin = () => {
    kakaoLogin();
  };

  return (
    <div className="w-full flex items-center justify-center py-[150px]">
      <div className="flex flex-col justify-center items-center gap-5 py-[10px]">
        <div className="flex justify-center"> 
          <img src={logo} alt="logo" className='w-[150px] h-[240px]'/>
        </div>
        <div className="text-center">
          북 스포일러와 함께 <br/> 
          독서의 어려움을 해결!
        </div>
        <div className="flex justify-center my-[20px]">
        {/* <KakaoLogin
          // TODO token={KAKAO_JAVASCRIPT_KEY}
          buttonText="kakao"
          // TODO onSuccess={responseKaKao}
          onFail={console.error}
          onLogout={console.info}
          getProfile={true}
          style={buttonStyle}
        > */}
          <div 
            className="flex justify-center w-[330px] h-[50px] bg-[#fae101] items-center cursor-pointer rounded-md"
            onClick={handleKakaoLogin}
          >
            <img 
              src={kakao} 
              alt="kakao" 
              className='w-[23px] mr-2 ' 
            />
            카카오로 3초만에 시작하기
          </div>
        {/* </KakaoLogin> */}
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
