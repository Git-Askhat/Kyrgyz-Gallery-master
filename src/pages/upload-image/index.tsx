import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/navbar/index';
import img from '../../assets/images/galleryImg/img14.jpg';

export default function index() {
  return (
    <div>
      <Navbar isSolidNav={true} />
      <Container>
        <DivImage>
            <img src={img} alt='' className='image'/>
        </DivImage>
        <DivInfo></DivInfo>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const DivImage = styled.div`
  background: #414141;
  height: 100vh;
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
`;

const DivInfo = styled.div`
  height: 100vh;
`;
