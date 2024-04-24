import Avatar from "../../components/@common/Avatar"

const StyleGuide = () => {

  return (
    <div className="flex justify-center pt-10">
      <div className="flex flex-col gap-10 w-[1080px]">
        <div>📌공통 UI 컴포넌트 StyleGuide</div>

        {/* Avatar */}
        <div>
          <p>Avatar</p>
          <div className="flex items-center w-[300px] justify-between">
            <Avatar size="small">TEXT</Avatar>
            <Avatar size="large">TEXT</Avatar>
            <Avatar
              size="large"
              source="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/1a92/image/_9FUTEe2WluHy6oMjq-hQ77RlEE.JPG"
            />
          </div>
        </div>

        {/* Button */}
        <div>
          <p>Button</p>
          <div className="flex items-center justify-between">

          </div>
        </div>

        {/* Input */}
        <div>
          <p>Input</p>
          <div className="flex items-center justify-between">
            
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default StyleGuide;
