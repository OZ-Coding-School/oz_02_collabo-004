import Avatar from "../@common/Avatar";
import like_line from "../../assets/images/icons/like_line.svg"
import like_fill from "../../assets/images/icons/like_fill.svg"
import bookmark_line from "../../assets/images/icons/bookmark_line.svg"
import bookmark_fill from "../../assets/images/icons/bookmark_fill.svg"
import share_line from "../../assets/images/icons/share_line.svg"
import share_fill from "../../assets/images/icons/share_fill.svg"
import { useState } from "react";

const BookQuratorSpoiler = () => {
  const [action, setAction] = useState({
    like: { active: false, count: 0 },
    bookmark: { active: false, count: 0 },
    share: { active: false }
  });

  const toggleAction = (actionType) => {
    const updateAction = { ...action };
    updateAction[actionType].active = !updateAction[actionType].active;
    updateAction[actionType].count += updateAction[actionType].active ? 1 : -1;

    setAction(updateAction);
  };

  const toggleShare = () => {
    if (!action.share.active) {
      navigator.clipboard.writeText(location.href)
      .then(() => {
        alert("링크가 복사되었습니다.");
        toggleAction("share");
      })
      .catch((error) => {
        console.error("링크 복사 중 오류가 발생했습니다:", error);
      });
    } else {
      alert("이미 링크가 복사되었습니다.");
    }
  };

  return (
    <>
      <div className="flex flex-col gap-10 w-[860px]">
        <div className="flex justify-between items-center">    
          <div className="flex items-center gap-5">
            <Avatar
              size="large"
              source="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/1a92/image/_9FUTEe2WluHy6oMjq-hQ77RlEE.JPG"
            />
            <div className="flex flex-col">
              <p className="font600 font18">민정님의 북스포일러</p>
              <p className="gray8">큐레이터 · ESTJ</p>
            </div>
          </div>
          <div className="flex gap-6 cursor-pointer">
            <div className="flex flex-col items-center">
              <img 
                src={action.like.active ? like_fill : like_line} 
                className="w-7 h-7"
                onClick={() => toggleAction("like")}
              />
              <p className="font12 font600">{action.like.count}</p>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src={action.bookmark.active ? bookmark_fill : bookmark_line} 
                className="w-5 h-7"
                onClick={() => toggleAction("bookmark")}
              />
              <p className="font12 font600">{action.bookmark.count}</p>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src={action.share.active ? share_fill : share_line} 
                className="w-6 h-7"
                onClick={toggleShare}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p className="font600 font20">사업 성공을 꿈꾸는가, 현실적인 조언을 준다.</p>
          <p className="font16"> 
            사업 성공을 꿈꾸는 저에게 현실적인 조언을 제시하는 책이었습니다. 
            사업을 여러차례 해왔지만 많은 어려움을 겪으며 멘탈을 바로잡기란 쉽지 않았죠. 
            그럴때마다 이 책을 열어보며 마음을 다스렸습니다. 
            누구나 다 실패할 수 있고, 사업은 당연히 어려운 것이란걸 리마인딩 하는 좋은 책이었어요. 
            그리고 좋은 사업가가 되기 위해 다시한번 마인드셋을 하는 계기가 되었습니다. 
            사업의 어려움과 현실에 대해 이해하고싶은 분들께 이 책을 추천드려요. 
            아래 무료 스포일러를 엄선해 모아두었으니 살펴보세요. 
            대략적인 내용이 파악되신 분들은 챌린지 참여도 추천드립니다. 
          </p>
        </div>
      </div>
    </>
  )
}

export default BookQuratorSpoiler;