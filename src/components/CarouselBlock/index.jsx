import React from 'react';
import styled from 'styled-components';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

// override css for esthetics.
import './css-override.css';

import { Container, TextSubTitle, TextTitle } from '../../styles/globalStyles';

export const StyledImg = styled.img`
  width: 100%;
`;

export const StyledSmallImg = styled.img`
  width: 90%;
`;

export const CarouselBlock = () => (
  <Container flex={1} jc="center" ai="center">
    <Carousel autoPlay centerMode infiniteLoop onClickItem={() => null} swipeable={false}>
      <div>
        <img alt="img" src="/config/images/carousel/18.png" />
      </div>
      <div>
        <img alt="img" src="/config/images/carousel/26.png" />
      </div>
      <div>
        <img alt="img" src="/config/images/carousel/50.png" />
      </div>
      <div>
        <img alt="img" src="/config/images/carousel/120.png" />
      </div>
      <div>
        <img alt="img" src="/config/images/carousel/134.png" />
      </div>
      <div>
        <img alt="img" src="/config/images/carousel/223.png" />
      </div>
      <div>
        <img alt="img" src="/config/images/carousel/413.png" />
      </div>
      <div>
        <img alt="img" src="/config/images/carousel/594.png" />
      </div>
      <div>
        <img alt="img" src="/config/images/carousel/668.png" />
      </div>
      <div>
        <img alt="img" src="/config/images/carousel/901.png" />
      </div>
      <div>
        <img alt="img" src="/config/images/carousel/1039.png" />
      </div>
      <div>
        <img alt="img" src="/config/images/carousel/1046.png" />
      </div>
      <div>
        <img alt="img" src="/config/images/carousel/1158.png" />
      </div>
      <div>
        <img alt="img" src="/config/images/carousel/1175.png" />
      </div>
      <div>
        <img alt="img" src="/config/images/carousel/1181.png" />
      </div>
      <div>
        <img alt="img" src="/config/images/carousel/1254.png" />
      </div>
      <div>
        <img alt="img" src="/config/images/carousel/1311.png" />
      </div>
    </Carousel>
    <div style={{ textAlign: 'center', marginTop: '48px' }}>
      <TextTitle style={{
        fontSize: '40px', color: 'var(--primary)',
      }}
      >
        CryptoMonkey Empire
      </TextTitle>
      <TextSubTitle style={{
        fontSize: '23px', color: 'var(--primary)',
      }}
      >
        Guild Banners
      </TextSubTitle>
    </div>
  </Container>
);
