import Avatar from "../@common/Avatar";
import like_line from "../../assets/images/icons/like_line.svg"
import like_fill from "../../assets/images/icons/like_fill.svg"
import bookmark_line from "../../assets/images/icons/bookmark_line.svg"
import bookmark_fill from "../../assets/images/icons/bookmark_fill.svg"
import share_line from "../../assets/images/icons/share_line.svg"
import share_fill from "../../assets/images/icons/share_fill.svg"
import { useState } from "react";

const BookQuratorSpoiler = ({
  quratorSpoiler,
  adminUserInfo,
}) => {
  const [action, setAction] = useState({
    like: { active: false, count: 0 },
    bookmark: { active: false, count: 0 },
    share: { active: false }
  });

  const toggleAction = (actionType) => {
    const updateAction = { ...action };
    const isActive = updateAction[actionType].active;
  
    if (actionType === "like") {
      if (!isActive) {
        updateAction[actionType].active = true;
        updateAction[actionType].count = 1;
        setAction(updateAction);
        alert("❤️를 누르셨습니다.");
      } else {
        updateAction[actionType].active = false;
        updateAction[actionType].count = 0;
        setAction(updateAction);
      }
    } else if (actionType === "bookmark" && !isActive) {
      updateAction[actionType].active = true;
      updateAction[actionType].count += 1;
      setAction(updateAction);
      alert("콘텐츠를 저장했습니다.");
    } else if (actionType === "share") {
      if (!isActive) {
        navigator.clipboard.writeText(location.href)
          .then(() => {
            updateAction[actionType].active = true;
            setAction(updateAction);
            alert("링크가 복사되었습니다.");
          })
          .catch((error) => {
            console.error("링크 복사 중 오류가 발생했습니다:", error);
          });
      } else {
        alert("이미 링크가 복사되었습니다.");
      }
    } else {
      alert("이미 콘텐츠를 저장했습니다. \n마이페이지에서 '저장된 스포일러'에서 확인할 수 있습니다.");
    }
  };


  return (
    <>
      <div className="flex flex-col gap-10 w-[860px]">
        <div className="flex justify-between items-center">    
          <div className="flex items-center gap-5">
            <Avatar
              size="large"
              // source={profile_img}
              source="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/1a92/image/_9FUTEe2WluHy6oMjq-hQ77RlEE.JPG"
            />
            <div className="flex flex-col">
              <p className="font600 font18">{quratorSpoiler?.writer}님의 북스포일러</p>
              <p className="gray8">큐레이터 · {adminUserInfo?.mbti}</p>
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
                onClick={() => toggleAction("share")}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p className="font600 font20">{quratorSpoiler?.title}</p>
          <p className="font16">{quratorSpoiler?.content}</p>
        </div>
      </div>
    </>
  )
}

export default BookQuratorSpoiler;