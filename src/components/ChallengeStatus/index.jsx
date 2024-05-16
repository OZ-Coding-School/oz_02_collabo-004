import checkbox from "../../assets/images/icons/checkbox.svg";
import checkbox_fill from "../../assets/images/icons/checkbox_fill.svg";
import challenge_right_arrow from "../../assets/images/challenge_right_arrow.png";
import challenge_left_arrow from "../../assets/images/challenge_left_arrow.png";
import useFetch from "../../hooks/useFetch";

const ChallengeStatus = ({ 
  userId,
  setCurrentChallengeIndex, 
  completeChallenges, 
  currentDay,
  setCurrentDay,
  challengeInfoId
}) => {
  let response = {
    data: [
      {
          "user_id": 1,
          "challengeinfo_id": 1,
          "user_doing": 20
      },
      {
          "user_id": 1,
          "challengeinfo_id": 2,
          "user_doing": 40
      },
      {
          "user_id": 1,
          "challengeinfo_id": 3,
          "user_doing": 60
      },
      {
        "user_id": 1,
        "challengeinfo_id": 4,
        "user_doing": 80
      },
      {
        "user_id": 1,
        "challengeinfo_id": 5,
        "user_doing": 100
      },
    ],
    ok: true
  }
  const { data: myChallengeStatus } = useFetch(` /mychallenge/doing/${userId}`, response);

  let response2 = {
    data: {
      "user_id": 1,
      "challenge_info_id": 1,
      "days_status": {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false
      }
    },
    ok: true
  }
  const { data: myChallengeComplete } = useFetch(`/mychallenge/status/${userId}/${challengeInfoId}`, response2);

  const prevDay = () => {
    setCurrentDay((prevDay) => (prevDay === 1 ? 6 : prevDay - 1));
    setCurrentChallengeIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));

    let prevDay = currentDay - 1;

    if (prevDay > 0) 
      setCurrentDay(prevDay);
    else
      setCurrentDay(1)
  };

  const nextDay = () => {
    if (currentDay === 6) {
      return;
    }
    if (currentDay === 1) {
      setCurrentDay(2);
      setCurrentChallengeIndex(1); 
    } else {
      setCurrentDay((prevDay) => (prevDay === 6 ? 1 : prevDay + 1));
      setCurrentChallengeIndex((prevIndex) => (prevIndex === 5 ? 0 : prevIndex + 1)); 
    }
  };

  let completedChallenges = completeChallenges.filter(challenge => challenge).length;
  const totalChallenges = 5;
  if (completedChallenges === 6) {completedChallenges = 5;}
  const completePercentage = (completedChallenges / totalChallenges) * 100;

  //TODO: 2024.04.13 까지 >> 이 부분 수정 > 결제일 기준 (카드 당 +1씩)
  const statusCard = Array.from({ length: 6 }, (_, index) => ({
    day: index + 1,
  })).map(({day}, index) => (
    <div 
      key={index} 
      style={{ 
        transform: `translateX(${(-currentDay * 128) + (-currentDay * 20) + 148}px)`,
        transition: "transform 0.5s ease-in-out", 
      }}
    >
      <div
        className={`flex flex-col w-32 justify-center ${index + 1 === currentDay ? 'bg-white' : 'bg-graymain'} h-28 px-3 rounded-2xl gap-2`}
      > 
      {( index <= 4 ? 
        <p className="font800 font22 text-center">
          챌린지 <br/> {day}일차
        </p>
      : (
          <p className="font800 font20 text-center">
            챌린지 완주
          </p>
      ))}
        <div className="flex items-center gap-1">
          <img src={completeChallenges[index] ? checkbox_fill : checkbox} className="w-3 h-3 cursor-pointer" />
          <p className="flex justify-start font12 font600 black">
            {completeChallenges[index] ? '완료' : '미완료'}
          </p>
        </div>
      </div>
      <p className="text-[10px] primary font500 flex justify-end pr-2 pt-1">2024.04.13 까지</p> 
    </div>
  ));

  return (
    <div className="flex flex-col px-1 justify-center bg-secondary h-[230px] w-[280px] rounded-2xl overflow-hidden">
      <div className="flex items-center w-40 pl-4 relative">
        <img
          src={challenge_left_arrow}
          className={`h-12 cursor-pointer absolute top-1/2 transform -translate-y-1/2 left-0 z-10`}
          onClick={prevDay}
        />
        <div className="flex items-center justify-center gap-5">
          {statusCard}
        </div>
        <img
          src={challenge_right_arrow}
          className={`h-12 cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-0`}
          onClick={nextDay}
        />
      </div>
      <div className="flex flex-col px-5 pt-2 pb-4 gap-1">
        <p className="font12 white"> {'userId'} 님의 챌린지 현황 </p>
        <div className="relative h-1 bg-black w-full rounded-full">
          <div className="absolute top-0 h-1 bg-primary rounded-full" style={{ width: `${completePercentage}%` }}></div>
          <div className="flex font12 gap-2 pt-3 text-[13px]"> 
            <p className="primary font800"> {completePercentage}% </p>
            <p className="white font600">챌린지 완료</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeStatus;
