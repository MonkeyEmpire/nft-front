import React from 'react';
// import styled from 'styled-components';

import { Container, TextDescription } from '../styles/globalStyles';

// const StyledLogo = styled.img`
//   width: 60px;
// `;

// const StyledHeader = styled.div`
//     width: 100%;
//     height: 60px;
//     background-color: black;
//     display: flex;
//     align-items: center;
//     flex-direction: column;
// `;

export const Footer = ({ gasLimit, networkName }) => (
  <Container jc="center" ai="center" style={{ width: '100%', backgroundColor: 'black', padding: '8px' }}>
    <TextDescription
      style={{
        textAlign: 'center',
        color: 'var(--primary-text)',
      }}
    >
      Please make sure you are connected to the right network (
      {networkName}
      {' '}
      Mainnet) and the correct address. Please note:
      Once you make the purchase, you cannot undo this action.
    </TextDescription>
    <TextDescription
      style={{
        textAlign: 'center',
        color: 'var(--primary-text)',
      }}
    >
      Ape in now !
    </TextDescription>
  </Container>
);
