import useMutate from "../../hooks/useMutate";
import Button from "../@common/Button";

const AdminChallengeSpoiler = ({
  bookId,
  challengeSpoiler,
  challengeSpoilerId,
}) => {
  //책 별 챌린지 스포일러 리스트 수정
  const { mutate: challengeUpdateSpoiler } = useMutate(`/book/${bookId}/challenge_spoiler/${challengeSpoilerId}`, 'PUT');


  const handleAdminChallengeSubmit = () => {
    
  }
  
  return (
    <>
      <div className="flex flex-col gap-5">
        {challengeSpoiler && challengeSpoiler?.map((item) => (
          <div key={item.id} className="flex items-start gap-5">
            <p className="font20 font800 w-[50px]">
              {item.day === 6 ? '완주' : `${item.day}일차`}
            </p>
            <div className='flex flex-col items-start gap-3'>
              <div className='flex items-center gap-3'>
                <p className='font500'>제목</p>
                <input 
                  type="text" 
                  className="w-[600px] font16 border gray8 border-gray8 rounded-sm p-1"
                  value={item.title}
                />
              </div>
              <div className='flex items-center gap-3'>
                <p className='font500'>본문</p>
                <input 
                  type="text" 
                  className="w-[600px] font16 border gray8 border-gray8 rounded-sm p-1"
                  value={item.content}
                />
              </div>
            </div>
          </div>
          ))}
      </div>
      <div className='flex justify-end'>
        <Button 
          onClick={handleAdminChallengeSubmit} 
          width="150px" height="45px" fontSize="18px" fontWeight="600"
        >
          저장
        </Button>
      </div>
    </>
  )
}

export default AdminChallengeSpoiler