import React from 'react';

export default function VideoInput(props: any) {
  const { width, height } = props;

  const inputRef: any = React.useRef();

  const [source, setSource] = React.useState();

  console.log('source', source);

  const handleFileChange = (event: any) => {
    const file: any = event.target.files[0];
    const url: any = URL.createObjectURL(file);
    setSource(url);
    localStorage.setItem('uploadedVideo', url);
    if (typeof window !== 'undefined') {
      window.location = '/upload-image';
    }
  };

  const handleChoose = (event: any) => {
    inputRef.current.click();
    localStorage.setItem('uploadedVideo', url);
    if (typeof window !== 'undefined') {
      window.location = '/upload-image';
    }
  };

  return (
    <div className='VideoInput'>
      <input
        ref={inputRef}
        className='VideoInput_input'
        type='file'
        onChange={handleFileChange}
        accept='.mov,.mp4'
      />
      {!source && <button onClick={handleChoose}>Choose</button>}
      {source && (
        <video
          className='VideoInput_video'
          width='100%'
          height={height}
          controls
          src={source}
        />
      )}
      <div className='VideoInput_footer'>{source || 'Nothing selectd'}</div>
    </div>
  );
}
