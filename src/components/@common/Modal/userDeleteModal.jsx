import React from "react";
import exit from "../../../assets/images/icons/exit.svg";

const userDeleteModal = ({ setIsOpen }) => {
  return (
    <div
      className="w-[42rem] h-[20rem] rounded-xl border-black border relative
    flex items-center justify-center top-5"
    >
      <div className="flex flex-col gap-4 items-start">
        <div className="">
          <p className="font-bold text-2xl">
            북스포일러를 정말로 탈퇴하시겠습니까?
          </p>
          <p className="font-semibold">
            북스포일러를 탈퇴하시면 소중한 독서내용들이 모두 사라집니다.
          </p>
        </div>
        <div className="">
          <p className="font-semibold">
            북스포일러를 탈퇴하시는 이유는 무엇인가요?
          </p>
          <p>소중한 의견을 반영해 더 좋은 서비스를 위해 노력하겠습니다.</p>
        </div>
        <form className="gap-3">
          <div className="flex flex-col items-center gap-4">
            <input
              className="w-[26rem] h-[5rem] bg-graylight rounded-xl text-center"
              placeholder="의견을 작성해주세요."
            ></input>
            <button
              type="submit"
              className="w-[6rem] h-[2rem] bg-graylight rounded-md"
            >
              탈퇴하기
            </button>
            <img
              src={exit}
              className="w-[15px] h-[20px] absolute top-3 right-4"
              alt="close"
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default userDeleteModal;
