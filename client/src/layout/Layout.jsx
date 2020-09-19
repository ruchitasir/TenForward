import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';
import TenForwardBanner from '../assets/TenForwardBanner.png';

export default function Layout(props) {
  const { setFromCreate, currentUser } = props;

  return (
    <>
      <div className='nav'>
        <Link to='/'>
          <img
            src={TenForwardBanner}
            className='tenforward-banner'
            alt='TenForward Banner'
          />
        </Link>
        {currentUser ? (
          <Link to='/posts/create'>
            <button className='create-post-button'>Create Post</button>
          </Link>
        ) : (
          <Link to='/login'>
            <button className='create-post-button' onClick={() => setFromCreate(true)}>Create Post</button>
          </Link>
        )}
      </div>
      <main>{props.children}</main>
    </>
  );
}
