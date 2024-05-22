import logo from "../../assets/images/logo.png";
import kakao from "../../assets/images/icons/kakao.svg";
// import { useContext, useEffect } from "react";
// import { UserContext } from "../../context/userContext";
// import { useNavigate } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";

const LoginPage = () => {
  // const { setUser } = useContext(UserContext);
  // const navigate = useNavigate();
  //   const { data: kakaoLogin } = useFetch(`/users/kakao`);

  // useEffect(() => {
  //   if (data) {
  //     setUser(data);
  //     navigate('/');
  //   }
  // }, [data, setUser, navigate]);

  const handleKakaoLogin = () => {
    window.location.href =
      "http://ec2-13-209-68-37.ap-northeast-2.compute.amazonaws.com:8000/users/kakao/";
  };

  return (
    <div className="w-full flex items-center justify-center py-[150px]">
      <div className="flex flex-col justify-center items-center gap-5 py-[10px]">
        <div className="flex justify-center">
          <img src={logo} alt="logo" className="w-[150px] h-[240px]" />
        </div>
        <div className="text-center">
          북 스포일러와 함께 <br />
          독서의 어려움을 해결!
        </div>
        <div className="flex justify-center my-[20px]">
          <div
            className="flex justify-center w-[330px] h-[50px] bg-[#fae101] items-center cursor-pointer rounded-md"
            onClick={handleKakaoLogin}
          >
            <img src={kakao} alt="kakao" className="w-[23px] mr-2 " />
            카카오로 3초만에 시작하기
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
