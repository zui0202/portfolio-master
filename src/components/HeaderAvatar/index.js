import React from 'react';

import Image from '../Image';

import './HeaderAvatar.css';

function Avatar() {
  return (
    <div className="Portfolio_HeaderAvatar rounded-circle p-2">
      <Image 
        src="https://user-images.githubusercontent.com/65958007/159114062-be962429-1550-404c-8d88-ca9b907d065b.jpg"
        altText="프로필 이미지"
        rounded="rounded-circle"
      />
    </div>
  );
}

export default Avatar;