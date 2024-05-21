import Avatar from "../../components/@common/Avatar";
import Button from "../../components/@common/Button";
import Input from "../../components/@common/Input";
import Location from "../../components/@common/Location";
import MyPageSidebar from "../../components/MyPageSidebar";
import { useState, useRef } from "react";
import Modal from "../../components/@common/Modal/userDeleteModal";
import profileImage from "../../assets/images/profileImage-1.jpg";

const MyInfoPage = () => {
  // let response = {
  //   data: {},
  //   ok: true,
  // };
  // response.data = userData;
  // const { data: userData } = useFetch('/users', response);

  const userData = [
    {
      id: 1,
      nickName: "hachiware",
      mbti: "ESTJ",
      userId: "gusrud4337@naver.com",
      phoneNumber: "010-8748-4337",
    },
  ];

  // 이미지 변경
  const [Image, setImage] = useState(profileImage);
  const fileInput = useRef(null);

  const onImageDelete = (e) => {
    setImage(profileImage);
  };

  const onImageChange = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setImage(profileImage);
    }
  };
  // 모달오픈
  const [isOpen, setIsOpen] = useState(false);

  //닉네임, mbti변경
  const [nickName, setNickName] = useState(userData[0].nickName);
  const [MBTI, setMBTI] = useState(userData[0].mbti);

  return (
    <div className="w-full flex justify-center pt-[80px]">
      <div className="flex flex-col md justify-start pt-10 pb-20">
        <Location
          number={3}
          link1="/"
          link2="/mychallenge"
          depth1="Home"
          depth2="마이페이지"
          linkLast="/myinfo"
          depthLast="정보수정"
        />

        <div className="flex justify-between w-full pt-10">
          <div className="">
            <MyPageSidebar />
          </div>
          <div className="flex flex-col items-start pl-7 w-[850px]">
            <p className="font30 font800 w-[11rem] textHighlight text-center">
              회원정보 수정
            </p>
            <form>
              <div className="pb-[2rem] pt-[2rem] flex flex-col justify-start gap-10">
                <div className="flex justify-evenly w-[24rem] items-end">
                  <Avatar size="xlarge" source={Image}></Avatar>
                  <div className="flex justify-evenly w-[16rem]">
                    <input
                      className="display-none w-0 h-0"
                      type="file"
                      accept="image/jpg,impge/png,image/jpeg"
                      name="profile_img"
                      onChange={onImageChange}
                      ref={fileInput}
                    />
                    <Button
                      height={"2.5rem"}
                      width={"7rem"}
                      onClick={() => {
                        fileInput.current.click();
                      }}
                    >
                      프로필변경
                    </Button>
                    <Button
                      height={"2.5rem"}
                      width={"7rem"}
                      onClick={onImageDelete}
                    >
                      프로필삭제
                    </Button>
                  </div>
                </div>
                <div className="grid grid-rows-3 grid-flow-col gap-8 w-[42rem]">
                  <div className="flex flex-col">
                    <label>닉네임</label>
                    <Input
                      value={nickName}
                      onChange={(e) => setNickName(e.target.value)}
                    ></Input>
                  </div>
                  <div className="flex flex-col">
                    <label>아이디</label>
                    <Input disabled value={userData[0].userId}></Input>
                  </div>
                  <div className="flex flex-col">
                    <label>연결된 소셜계정</label>
                    <Input disabled value={"카카오로 연결된 소셜계정"}></Input>
                  </div>
                  <div className="flex flex-col">
                    <label>mbti</label>
                    <Input
                      value={MBTI}
                      onChange={(e) => setMBTI(e.target.value)}
                    ></Input>
                  </div>
                  <div className="flex flex-col">
                    <label>휴대전화</label>
                    <Input disabled value={userData[0].phoneNumber}></Input>
                  </div>
                  <div className="flex flex-col justify-end items-center w-[21rem]">
                    <Button height={"2.5rem"} width={"15rem"}>
                      저장하기
                    </Button>
                  </div>
                </div>
              </div>
            </form>
            <div className="pt-20 w-[42rem] flex flex-col gap-3">
              <p className="font24 font800 w-[11rem]">회원탈퇴 안내</p>
              <p>
                탈퇴 처리 시 챌린지 내역, 저장된 도서 정보, 나의 댓글 등은 모두
                소멸됩니다. 필요한 경우, 반드시 탈퇴 전에 문의 바랍니다. 문의처
                : ALKDJKLSJ@GMAIL.COMv
              </p>
              <Button
                height={"2.5rem"}
                width={"10rem"}
                onClick={() => {
                  setIsOpen(isOpen == false ? true : false);
                }}
              >
                탈퇴하기
              </Button>
            </div>
            {isOpen == true ? <Modal setIsOpen={setIsOpen} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInfoPage;
