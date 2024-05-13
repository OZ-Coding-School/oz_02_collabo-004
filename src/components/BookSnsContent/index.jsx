import { Link } from 'react-router-dom';
import youtube from '../../assets/images/icons/youtube.svg';
import blog from '../../assets/images/icons/blog.svg';

const BookSnsContent = ({ review }) => {
  return (
    <>
      <div className='flex flex-col gap-3'>
        {review?.map((item) => (
          <Link 
            key={item.id} 
            to={item.url} 
            className="flex flex-col w-[860px] h-[116px] gap-1 px-8 py-5 rounded-xl bg-graylight cursor-pointer"
          >
            <div className="flex justify-between">
              <div className="font600 font20">{item.title}</div>
              <div className='flex items-center gap-3'>
                {item.channel_type === '유투브' ? (
                  <img src={youtube} alt="youtube" className='w-10 h-5'/>
                ) : (
                  <img src={blog} alt="blog" className='w-15 h-8'/>
                )}
                <div className="font600 font16">{item.channel_name}</div>
              </div>
            </div>
            <div className="font14 gray5 line-clamp-2">{item.content}</div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default BookSnsContent;
