import React from 'react';

import Card from '../Card';
import Image from '../Image';
import AboutMeText from '../AboutMeText';

function AboutMe() {
  return <Card
    left={
      <Image
        src="https://user-images.githubusercontent.com/65958007/159113652-8455d83d-9236-43f3-9971-783be7c8a2f8.jpg"
        altText="프로필 이미지"
        rounded="rounded"
      />
    }
    right={
      <AboutMeText />
    } />;
}

export default AboutMe;