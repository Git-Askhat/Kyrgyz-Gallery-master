import React from 'react';
import styled from 'styled-components';

import NavbarwithSearch from '../navbar/navbar.with.search';
import Navbar from '../navbar/index';
// import SvgUploadImage from '../../assets/svg/upload_image';
import SvgUploadVideo from '../../assets/svg/upload_video';
import SvgUploadVector from '../../assets/svg/upload_vector';
import SvgUploadModel from '../../assets/svg/upload_model';
import { UploadImage } from './uploadImage/UploadImage';
import  VideoInput  from './uploadVideo/UploadVideo';
import { useTranslation } from 'react-i18next'
 
export default function UploadComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar isSolidNav={true} />
      <Container>
        <Description>
          <div className=''>
            <h3 className='title'>{t('videos')}</h3>
            <p className='text'>
              {t('upload_video_text')}
            </p>
          </div>
          <div className='media-div'>
            <h3 className='title'>{t('photos')}/{t('vectors')}</h3>
            <p className='text'>
              {t('upload_image_text')}
            </p>
          </div>
          <div className='media-div'>
            <h3 className='title'>{t('3d-models')}</h3>
            <p className='text'>{t('upload_model_text')}</p>
          </div>
        </Description>
        <UploadWrapper>
          <UploadFiles>
            <UplaodFile>
              <UploadImage />
              {/* <UploadButton>
                <SvgUploadImage />
                <span className='upload-type'>Image</span>
              </UploadButton> */}
              <VideoInput/>
              <UploadButton>
                <SvgUploadVideo />
                <span className='upload-type'>{t('videos')}</span>
              </UploadButton>
              <UploadButton>
                <SvgUploadVector />
                <span className='upload-type'>{t('viectors')}</span>
              </UploadButton>
              <UploadButton>
                <SvgUploadModel />
                <span className='upload-type'>{t('3d-models')}</span>
              </UploadButton>
            </UplaodFile>
            <div className='browse-text'>
              <BrowseButton>{t('browse')}</BrowseButton>
              <span>{t('drag_drop')}</span>
            </div>
          </UploadFiles>
        </UploadWrapper>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 5fr;
  margin-top: 200px;
`;

const Description = styled.div`
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;

  /* background: gray; */

  .media-div {
    margin-top: 50px;
  }

  .title {
    font-size: 18px;
  }

  .text {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
  }
`;

const UploadWrapper = styled.div`
  width: 100%;
  /* background: #424242; */
  padding: 0 30px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  position: relative;
`;

const UploadFiles = styled.div`
  /* width: 100%;
  height: 350px; */
  /* border: 1px dashed #000000; */
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 90%;
  height: 353px;
  box-sizing: border-box;

  background: transparent;
  border: 2px dashed #5b5b5b;

  .browse-text {
    display: flex;
    align-items: center;
    justify-content: center;

    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
  }
`;

const UplaodFile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 100px;
  .upload-type {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */

    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;

    color: #000000;
  }
`;

const UploadButton = styled.button`
  background: transparent;
  border: none;
  margin: 0 40px;
  cursor: pointer;
`;

const BrowseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #0c24a4;
`;
