import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.img`
  width: 60px;
`;

const StyledHeader = styled.div`
    width: 100%;
    height: 60px;
    background-color: black;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Header = () => (
  <StyledHeader>
    <StyledLogo alt="logo" src="/config/images/logoSeul-1.png" />
  </StyledHeader>
);
