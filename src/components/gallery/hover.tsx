import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import SvgHoverDownload from '../../assets/svg/HoverDownload';
import SvgHoverLike from '../../assets/svg/HoverLike';
import SvgHoverSave from '../../assets/svg/HoverSave';
import profile from '../../assets/images/profile/profile.jpg';
import SvgProfile from '../../assets/svg/Profile';

export default function Hover(props: {name: any, surname: any, avatar: any}) {

  return (
    <HoverContainer className='img-hover'>
      <div className='prof-div'>
        <img
          src={props.avatar === '' ? profile : props.avatar}
          alt=''
          className='image-prof'
        />
        <Link to='/profile' className='link'>
          <p className='user'>
            {props.name} {props.surname}
          </p>
        </Link>
      </div>
      <div className='div-right'>
        <SvgHoverDownload />
        <div className='like-div'>
          <SvgHoverLike className='svg-like' />
          <p>712</p>
        </div>
        <SvgHoverSave className='svg-save' />
      </div>
    </HoverContainer>
  );
}

const HoverContainer = styled.div`
  width: 100%;
  height: 80px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  position: absolute;
  display: none;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  left: 0;
  z-index: 50;

  .prof-div {
    display: flex;
    align-items: center;
    margin-left: 10px;

    .link {
      text-decoration: none;
      color: #ffffff;
    }
  }

  .image-prof {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-size: cover;
    object-fit: cover;
    /* z-index: 100; */
    padding: 0;
    margin-right: 10px;
    z-index: 100;
  }

  .div-right {
    display: flex;
    align-items: center;

    .like-div {
      display: flex;
      align-items: center;
      color: #ffffff;

      margin-right: 10px;

      .svg-like {
        margin-right: 2px;
        margin-left: 10px;
      }

      .svg-save {
        margin-right: 10px;
      }
    }
  }
`;
