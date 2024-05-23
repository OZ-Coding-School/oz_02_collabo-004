import { useState } from 'react';
import Input from '../../components/@common/Input';
import AdminRecommendSpoiler from '../../components/AdminRecommendSpoiler';
import Button from '../../components/@common/Button';
import useMutate from '../../hooks/useMutate';
import uploadicon from '../../assets/images/upload.png';

const AdminBookCreatePage = () => {
  const { mutate: bookCreate } = useMutate(`/book/create`);

  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [published, setPublished] = useState('');
  const [channel, setChannel] = useState([]);
  const [url, setUrl] = useState([]);
  const [recommendName, setRecommendName] = useState([]);
  const [recommendDetail, setRecommendDetail] = useState([]);
  const [keyword, setKeyword] = useState([]);
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [uploadImgUrl, setUploadImgUrl] = useState(uploadicon);

  const handleBookSubmit = async () => {
    event.preventDefault();
    window.scrollTo(0, 0);

    setUploadImgUrl(uploadicon);
    setName('');
    setAuthor('');
    setChannel('');
    setDetail('');
    setUrl('');
    setPublished('');
    setRecommendDetail('');
    setRecommendName('');

    const newBook = {
      image: image,
      book_id: 1,
      name: name,
      author: author,
      published: published,
      recommendSpoiler: {
        channel: channel,
        url: url,
        recommendName: recommendName,
        recommendDetail: recommendDetail,
      },
      keyword: keyword,
      spoiler: {
        wrier: writer,
        title: title,
        detail: detail,
      },
    };

    try {
      const response = await bookCreate(newBook);
      console.log('API 응당', response.data);
    } catch (error) {
      console.error('등록 에러', error);
    }
  };

  const ImageUpload = () => {
    const onchangeImageUpload = (e) => {
      const { files } = e.target;
      const uploadFile = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(uploadFile);
      reader.onloadend = () => {
        setUploadImgUrl(reader.result);
        setImage(uploadFile);
      };
    };

    return (
      <>
        <img src={uploadImgUrl} className="w-[120px] h-[120px]" />
        <input
          type="file"
          accept="image/*"
          onChange={onchangeImageUpload}
          className="overflow-hidden w-[4.8rem]"
        />
      </>
    );
  };

  return (
    <form>
      <div className="w-[800px] flex flex-col gap-5">
        <div className="flex justify-between gap-3">
          <div className="font-bold text-2xl w-[8rem]">기본 정보</div>
          <div className="flex flex-col flex-1 gap-3">
            <div className="flex">
              <p className="w-[5rem]">책 제목</p>
              <Input
                element={'admin'}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="flex">
              <p className="w-[5rem]">저자</p>
              <Input
                element={'admin'}
                value={author}
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
              />
            </div>
            <div className="flex">
              <p className="w-[5rem]">출판사</p>
              <Input
                element={'admin'}
                value={published}
                onChange={(e) => {
                  setPublished(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="w-[200px] flex flex-col items-center gap-1">
            {ImageUpload()}
          </div>
        </div>
        <AdminRecommendSpoiler
          number={1}
          channel={channel}
          url={url}
          recommendDetail={recommendDetail}
          setRecommendDetail={setRecommendDetail}
          setChannel={setChannel}
          setUrl={setUrl}
          recommendName={recommendName}
          setRecommendName={setRecommendName}
        />
        <AdminRecommendSpoiler number={2} />
        <AdminRecommendSpoiler number={3} />
        <div className="flex gap-3">
          <div className="font-bold text-2xl w-[8rem]">키워드</div>
          <div className="flex gap-3 pl-[4.5rem] items-center">
            <div>
              <Input
                element={'admin'}
                type="text"
                className="w-[5rem] h-[2rem] border border-black text-center"
                value={keyword}
                onChange={(e) => {
                  setKeyword(e.target.value);
                }}
              />
            </div>
            <div>
              <Input
                element={'admin'}
                type="text"
                className="w-[5rem] h-[2rem] border border-black text-center"
              />
            </div>
            <div>
              <Input
                element={'admin'}
                type="text"
                className="w-[5rem] h-[2rem] border border-black text-center"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="font-bold text-2xl w-[8rem]">스포일러</div>
          <div className="flex flex-col flex-1 gap-3">
            <div className="flex">
              <p className="w-[5rem]">작성자</p>
              <Input
                element={'admin'}
                value={writer}
                onChange={(e) => {
                  setWriter(e.target.value);
                }}
              />
            </div>
            <div className="flex">
              <p className="w-[5rem]">제목</p>
              <Input
                element={'admin'}
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="flex">
              <p className="w-[5rem]">본문</p>
              <Input
                element={'admin'}
                value={detail}
                onChange={(e) => {
                  setDetail(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button type={'submit'} width={'5rem'} onClick={handleBookSubmit}>
            저장
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AdminBookCreatePage;
