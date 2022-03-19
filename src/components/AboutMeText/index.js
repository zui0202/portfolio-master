import React from 'react';

import Title from '../Title';

import './AboutMeText.css';

function AboutMeText() {
  return (
    <section className="Portfolio_AboutMeText">
      <Title tagName="h3" content="About Me" className="AboutMeText_Heading mb-4" />
      <p className="AboutMeText_Main">
        2019.02 ~ 2022.02. 성균관대학교 소프트웨어학과 재학
      </p>
      <br />
      <p className="AboutMeText_Main">
        실습이나 토이 프로젝트를 통해 직접 웹을 만들어보며 배우는 것을 좋아합니다. 원리를 이해하는 것을 목표로 이론을 학습하고 여러 번 실습해보며 나의 것으로 만든 다음, 다양한 방법으로 활용하며 필요한 기술, 오류 해결 방법 등을 찾아보며 성장하려고 노력합니다. 
      </p>
      <br />
      <p className="AboutMeText_Main">
      개발에는 배움의 끝이 없다고 생각하여 새로운 툴이나 라이브러리를 배우는 것을 좋아합니다. 
      </p>
    </section>
  );
}

export default AboutMeText;