import challenge_spoiler from '../../assets/images/challenge_spoiler.png'

const ChallengeSpoiler = ({ challengeContent, currentChallengeIndex  }) => {

  return (
    <>
      {challengeContent &&  challengeContent.map((challenge, index) => (
        <div key={challenge.id} className="flex flex-col" style={{ display: index === currentChallengeIndex ? 'block' : 'none' }}> 
          <div className="flex items-center gap-3 pl-1 pb-[12px]">
            <img src={challenge_spoiler} alt="comment" className="w-20 h-18"/>
            <p className="font20 font800">챌린지 {challenge.day}일차</p>
          </div> 
          <div className="flex w-[860px]">
            <div className="flex flex-col gap-3 p-10 md bg-primary justify-center rounded-2xl shadow-lg">
              <div className="flex flex-col rounded-lg gap-10">
                <p className="font600 font20">
                  {challenge.title}
                </p>
                <p>
                  {challenge.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ChallengeSpoiler;