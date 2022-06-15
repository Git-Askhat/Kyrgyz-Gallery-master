import React from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import styled from 'styled-components';
import SvgUploadImage from "../../../assets/svg/upload_image";

export const UploadImage = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    setImages(imageList as never[]);
    console.log('imageList[0]', imageList[0]);
    localStorage.setItem("uploadedFile" ,imageList[0]?.dataURL)
    if (typeof window !== 'undefined') {
      window.location = '/upload-image';
    }
  };

  return (
    <div>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}>
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className='upload__image-wrapper'>
            <UploadButton
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}>
              <SvgUploadImage />
              <span className='upload-type'>Image</span>
            </UploadButton>
            &nbsp;
            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}

            {/* {imageList.map((image, index) => (
              <div key={index} className='image-item'>
                <img src={image.dataURL} alt='' width='100' />
                <div className='image-item__btn-wrapper'>
                  <button onClick={() => onImageUpdate(index)}>Update</button> 
                <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))} */}

          </div>
        )}
      </ImageUploading>
    </div>
  );
};

const UploadButton = styled.button`
  background: transparent;
  border: none;
  margin: 0 40px;
  cursor: pointer;
`;
