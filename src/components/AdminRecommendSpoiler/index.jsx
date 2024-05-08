import Input from '../@common/Input';

const AdminRecommendSpoiler = ({ number }) => {
  return (
    <div className="flex justify-between gap-3">
      <div className="font-bold text-2xl w-[8rem]">추천 서평 {number}</div>
      <div className="flex flex-col flex-1 gap-3">
        <div className="flex">
          <p className="w-[5rem]">채널명</p>
          <Input element={'admin'} />
        </div>
        <div className="flex">
          <p className="w-[5rem]">URL</p>
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
        <div className="flex gap-3 items-center pl-[4.5rem]">
          <label className="flex gap-2">
            <input type="radio" id="youtube" name={`community${number}`} />
            유튜브
          </label>
          <label className="flex gap-2">
            <input type="radio" id="blog" name={`community${number}`} />
            블로그
          </label>
          <label className="flex gap-2">
            <input type="radio" id="other" name={`community${number}`} />
            기타
          </label>
        </div>
      </div>
    </div>
  );
};

export default AdminRecommendSpoiler;
