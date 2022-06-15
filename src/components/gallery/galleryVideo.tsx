import React, { useState, useRef, useEffect } from 'react';

import { DetailsContainer } from '../details/detailsContainer';
import { DetailImg } from '../details/detailImg';
import Hover from './hover';

import { mp4Data } from './galleryData';
import styled from 'styled-components';
import DetailHeader from '../details/detailHeader';
import SvgClose from '../../assets/svg/close';
import { commentData } from '../details/comment.data';
import profile from '../../assets/images/profile/profile.jpg';
import SvgViews from '../../assets/svg/Views';
import SvgLocation from '../../assets/svg/Location';

import app from '../../firebase/firebase.utils';
import { storage, firestore } from '../../firebase/firebase.utils';
import { ref, listAll, getDownloadURL } from '@firebase/storage';

import video3 from '../../assets/videos/galleryMpg/video5.mp4';
import { copyFileSync } from 'fs';

const db = app.firestore();
export default function GalleryVideo() {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');

  const [albums, setAlbums] = useState([]);
  const [users, setUsers] = useState([]);

  const getImg = (imgSrc: any) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, 'videos/');

  // useEffect(() => {
  //   listAll(imageListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setAlbums((prev) => [...prev, url]);
  //       })
  //     })
  //   })
  // }, [])

  useEffect(() => {
    firestore
      .collection('videos')
      .get()
      .then((snapshot) => {
        const videos: any = [];
        snapshot.forEach((doc) => {
          const data: any = doc.data();
          videos.push(data);
        });
        setAlbums(videos);
      })
      .catch((error) => console.log(error));
    firestore
      .collection('users')
      .get()
      .then((snapshot) => {
        const users: any = [];
        snapshot.forEach((doc) => {
          const data: any = doc.data();
          users.push(data);
        });
        setUsers(users);
        // console.log("Snapshot Users: ",users)
      })
      .catch((error) => console.log(error));
  }, []);
  // console.log('Videos: ', albums);
  // console.log('Users: ', users);

  // console.log("Albums: ", albums.size_s);
  console.log('albums', albums);

  return (
    <>
      <GalleryContainer>
        {albums.map((item, index) => {
          // console.log(item.size_s);
          return (
            <div className='pics' onClick={() => getImg(item.size_s)}>
              <video style={{ width: '100%' }}>
                <source src={item.size_s} type='video/mp4' />;
              </video>
              <Hover user={users} />
            </div>
          );
        })}
      </GalleryContainer>
      <DetailsContainer visible={model}>
        <DetailImg>
          <DetailHeader />

          <DivContainer>
            <DivImg>
              <SvgClose onClick={() => setModel(false)} className='close-svg' />
              {/* <img src={tempImgSrc} alt='' className='image' /> */}
              <video className='image' loop autoPlay muted>
                <source src={tempImgSrc} type='video/mp4' />
                {/* <source src={video3} type='video/mp4' /> */}
              </video>
              <div className='views-location'>
                <div className='views'>
                  <SvgViews />
                  <p>19K Views</p>
                </div>
                <div className='location'>
                  <SvgLocation />
                  <p>Naryn/Kel-Suu</p>
                </div>
              </div>
              <div className='tags'>
                <p className='related'>Related Tags</p>
                <Tags>
                  <TagButton>mountains</TagButton>
                  <TagButton>lake</TagButton>
                  <TagButton>winter</TagButton>
                  <TagButton>snow</TagButton>
                </Tags>
              </div>
            </DivImg>
            <DivComment>
              <h1 className='title'>Lake on the Mountain</h1>
              <p className='description'>
                This is my first personal project to practice modeling in MAYA.
                Most of the models are modeled using MAYA but some organic
                stuff, such as trees and flowers, are procedurally generated by
                Houdini digital assets I developed before.
              </p>
              <p className='uploaded-date'>Uploaded at May 23, 2019</p>
              <ImageInfo>
                <Grid>
                  <span className='value'>Lens</span>
                  <span className='value'>24.0mm ƒ/6.3 ISO 250</span>
                </Grid>
                <Grid>
                  <span className='value'>Size</span>
                  <span className='value'>9.8 MB</span>
                </Grid>
                <Grid>
                  <span className='value'>Resolution</span>
                  <span className='value'>5866px x 3911px</span>
                </Grid>
                <Grid>
                  <span className='value'>Camera</span>
                  <span className='value'>ILCE-7M2</span>
                </Grid>
                <Grid>
                  <span className='value'>Software</span>
                  <span className='value'>
                    Adobe Photoshop Lightroom Classic 7.5 (Macintosh)
                  </span>
                </Grid>
                <Grid>
                  <span className='value'>Taken at</span>
                  <span className='value'>July 26, 2018 4:56 am</span>
                </Grid>
              </ImageInfo>
              <h3 className='count-comments'>107 Comments</h3>
              <div className='write-comment'>
                <div>
                  <CommentImg src={profile} />
                </div>

                <div className='text-button'>
                  <textarea name='' id='' className='text-area'></textarea>
                </div>
              </div>
              {commentData.map((data) => {
                return (
                  <CommentsDiv>
                    <div className='comments'>
                      <CommentImg src={profile} alt='' className='prof' />
                      <div className='user-info'>
                        <p className='username'>{data.userName}</p>
                        <p className='data'>{data.time}</p>
                      </div>
                    </div>
                    <p className='comments-msg'>{data.comment}</p>
                  </CommentsDiv>
                );
              })}

              <button className='more-comment'>+ 99 more</button>
            </DivComment>
          </DivContainer>
        </DetailImg>
      </DetailsContainer>
    </>
  );
}

interface VideoProps {
  mp4Src: string;
  id: any;
}

const SingleVideo = ({ mp4Src, id }: VideoProps) => {
  const [isPlay, setPlay] = useState<boolean>(false);

  const onMouseEnter = (item: any) => {
    console.log('enter', item);
    setPlay(true);
  };

  const onMouseLeave = (item: any) => {
    console.log('leave', item);
    setPlay(false);
  };

  // const ref = useRef(null);
  // const [focus, setFocus] = useState(false);

  // const loop = () => {
  //   ref.current.play();
  // };

  // const onEndedLoop = () => {
  //   if (focus) loop(); // when ended check if its focused then loop
  // };

  // useEffect(() => {
  //   if (focus) loop(); // when focused then loop
  // }, [focus]);

  return (
    <div className='pics'>
      <video
        // onMouseEnter={() => onMouseEnter(id)}
        onMouseLeave={() => onMouseLeave(id)}
        // onMouseOver={(event) => event.target.play()}
        // onMouseOut={(event) => event.target.pause()}
        style={{ width: '100%' }}
        autoPlay={isPlay}
        loop={isPlay}
        muted={isPlay}
        onMouseEnter={onMouseEnter}
        // id={id}
        // ref={ref}
        // style={{ width: "300px" }}
        // autoPlay
        // onMouseOver={() => setFocus(true)}
        // onMouseOut={() => setFocus(false)}
        // muted={true}
        // // src={testVideo}
        // onEnded={onEndedLoop}
      >
        <source src={mp4Src} type='video/mp4' />
      </video>
      {/* <Hover /> */}
    </div>
  );
};

const GalleryContainer = styled.div`
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-width: 33%;
  -moz-column-width: 33%;
  column-width: 33%;
  padding: 0 12px;

  @media screen and (max-width: 991px) {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
  }

  @media screen and (max-width: 480px) {
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
    -webkit-column-width: 100%;
    -moz-column-width: 100%;
    column-width: 100%;
  }
  .pics {
    cursor: pointer;
    margin-bottom: 12px;
    position: relative;
  }

  .pics:hover .img-hover {
    display: flex;
  }
`;

const DivContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  background: #f6f6f6;
  margin-top: 6px;
`;

const DivImg = styled.div`
  padding: 0 46px;
  height: 100%;
  background: #eeeeee;
  overflow-y: scroll;

  .image {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    display: block;
    line-height: 0;
    box-sizing: border-box;
    padding: 20px 0 20px;
    margin: 0 auto;
  }

  .close-svg {
    position: fixed;
    top: 10px;
    right: 10px;
    width: 3rem;
    height: 3rem;
    padding: 5px;
    cursor: pointer;
  }

  -ms-overflow-style: none; // for Internet Explorer, Edge
  scrollbar-width: none; // for Firefox

  ::-webkit-scrollbar {
    display: none; // for Chrome, Safari, and Opera
  }

  .views-location {
    display: flex;
    justify-content: center;

    .views {
      display: flex;

      p {
        margin-left: 6px;
      }
    }

    .location {
      margin-left: 16px;
      display: flex;

      p {
        margin-left: 6px;
      }
    }
  }

  .tags {
    p {
      margin-top: 130px;
    }
  }
`;

const DivComment = styled(DivImg)`
  background: #eeeeee;
  border-left: 3px solid #5b5b5b;
  padding: 10px 25px;
  /* margin-top: 30px; */

  .title {
    font-family: 'Roboto' 'san-serif';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;

    color: #33363a;
  }

  .count-comments {
    font-family: 'Roboto' 'san-serif';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #000000;
    margin-top: 25px;
  }

  .description {
    font-family: 'Roboto' 'san-serif';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;

    color: #33363a;
    margin-top: 16px;
  }

  .uploaded-date {
    font-family: 'Roboto' 'san-serif';
    font-style: italic;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;

    color: #000000;
    margin-top: 20px;
  }

  .write-comment {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 12px;

    .text-button {
      .text-area {
        width: 280px;
        height: 50px;
        /* max-height: 100px; */
        border: 1px solid #000000;

        font-family: 'Roboto' 'san-serif';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;

        -ms-overflow-style: none; // for Internet Explorer, Edge
        scrollbar-width: none; // for Firefox

        ::-webkit-scrollbar {
          display: none; // for Chrome, Safari, and Opera
        }
      }
    }
  }

  .more-comment {
    width: 100%;
    padding: 0.3rem 0;
    background: #5b5b5b;
    border: none;
    margin-top: 32px;
    border-radius: 10px;
    cursor: pointer;

    font-family: 'Roboto' 'san-serif';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    color: #ffffff;
    margin-bottom: 150px;
  }
`;

const ImageInfo = styled.div`
  width: 100%;
  margin-top: 16px;
  border: 1px solid #000000;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 2px 4px;

  .value {
    font-family: 'Roboto' 'san-serif';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 15px;
    margin: 2px 0;

    color: #000000;
  }
`;

const CommentImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-size: cover;
  object-fit: cover;
  z-index: 100;
  padding: 0;
  margin-top: 0;
`;

const CommentsDiv = styled.div`
  margin-top: 25px;
  .comments {
    display: flex;
    align-items: center;

    .user-info {
      display: block;
      margin-left: 10px;

      .username {
        font-family: 'Roboto' 'san-serif';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 17px;

        color: #000000;
      }

      .data {
        font-family: 'Roboto' 'san-serif';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;

        color: #5b5b5b;
      }
    }
  }
  .comments-msg {
    margin-top: 8px;

    font-family: 'Roboto' 'san-serif';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }
`;

const CommentButton = styled.button`
  background: #0c24a4;
  border-radius: 12px;
  border: none;
  color: #fefefe;
  padding: 0.3rem 1.2rem;
  margin-top: 8px;
  /* justify-content: end; */

  font-family: 'Roboto' 'san-serif';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

const Tags = styled.div`
  width: 100%;
  margin-top: 14px;
  margin-bottom: 100px;

  .related {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;

    color: #000000;
    margin-left: 6px;
  }
`;

const TagButton = styled.button`
  border: 1px solid #33363a;
  background: transparent;
  border-radius: 24px;
  padding: 0.3rem 1rem;
  margin: 0 6px;
  cursor: pointer;

  font-family: 'Roboto' 'san-serif';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  /* identical to box height */

  color: #33363a;
`;