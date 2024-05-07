import { useState } from 'react';
import Input from '../../components/@common/Input';
import AdminRecommendSpoiler from '../../components/AdminRecommendSpolier';

const AdminBookCreatePage = () => {
  const ImageUpload = () => {
    const [uploadImgUrl, setUploadImgUrl] = useState();

    const onchangeImageUpload = (e) => {
      const { files } = e.target;
      const uploadFile = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(uploadFile);
      reader.onloadend = () => {
        setUploadImgUrl(reader.result);
      };
    };
    return (
      <>
        <img src={uploadImgUrl} className="w-[120px] h-[120px]" />
        <input
          type="file"
          accept="image/*"
          onChange={onchangeImageUpload}
          className="overflow-hidden w-[5rem]"
        />
      </>
    );
  };

  return (
    <form>
      <div className="w-[800px] flex flex-col gap-5">
        <div className="flex justify-between gap-3">
          <div className="font-bold text-2xl w-[7rem]">기본 정보</div>
          <div className="flex flex-col flex-1 gap-3">
            <div className="flex">
              <p className="w-[5rem]">책 제목</p>
              <Input element={'admin'} />
            </div>
            <div className="flex">
              <p className="w-[5rem]">저자</p>
              <Input element={'admin'} />
            </div>
            <div className="flex">
              <p className="w-[5rem]">출판사</p>
              <Input element={'admin'} />
            </div>
          </div>
          <div className="w-[200px] flex flex-col items-center gap-1">
            {ImageUpload()}
          </div>
        </div>
        <AdminRecommendSpoiler number={1} />
        <AdminRecommendSpoiler number={2} />
        <AdminRecommendSpoiler number={3} />
        <div className="flex gap-3">
          <div className="font-bold text-2xl w-[7rem]">키워드</div>
          <div className="flex gap-3 pl-[4.5rem] items-center">
            <div>
              <input
                type="text"
                className="w-[5rem] h-[2rem] border border-black text-center"
                placeholder="ex) 김성공"
              />
            </div>
            <div>
              <input
                type="text"
                className="w-[5rem] h-[2rem] border border-black text-center"
              />
            </div>
            <div>
              <input
                type="text"
                className="w-[5rem] h-[2rem] border border-black text-center"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="font-bold text-2xl w-[7rem]">스포일러</div>
          <div className="flex flex-col flex-1 gap-3">
            <div className="flex">
              <p className="w-[5rem]">작성자</p>
              <Input element={'admin'} />
            </div>
            <div className="flex">
              <p className="w-[5rem]">제목</p>
              <Input element={'admin'} />
            </div>
            <div className="flex">
              <p className="w-[5rem]">본문</p>
              <Input element={'admin'} />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-700 text-white w-[5rem] h-[2rem] rounded-2xl"
          >
            저장
          </button>
        </div>
      </div>
    </form>
  );
};

export default AdminBookCreatePage;
