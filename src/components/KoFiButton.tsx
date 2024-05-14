// src/KoFiButton.js
import React from "react";

const KoFiButton = () => {
  return (
    <a
      href='https://ko-fi.com/S6S3Y3NU5/?ref=qr&v=2'
      target='_blank'
      rel='noopener noreferrer'
      className='m-4'
    >
      <img
        src='https://storage.ko-fi.com/cdn/kofi3.png?v=2'
        alt='Buy Me a Coffee at ko-fi.com'
        className='mr-2 h-10 '
      />
    </a>
  );
};

export default KoFiButton;
