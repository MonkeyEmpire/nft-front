import React from 'react';

import {
  Container, TextTitle, TextDescription, SpacerSmall, SpacerXSmall, SpacerMedium,
} from '../../styles/globalStyles';
import { StyledLink, StyledButton, StyledRoundButton } from './StyledElements';

const truncate = (input, len) => (input.length > len ? `${input.substring(0, len)}...` : input);

export const NftBlock = ({
  data,
  config,
  blockchain,
  claimingNft,
  claimNFTs,
  onConnectClick,
  onDecrementClick,
  onIncrementClick,
  feedback,
  mintAmount,
}) => (
  <Container flex={1.1} style={{ padding: '48px 48px 24px 48px' }}>
    <Container
      flew={1}
      jc="center"
      ai="center"
      style={{
        backgroundColor: 'var(--accent)',
        padding: 24,
        borderRadius: 24,
        border: '4px dashed var(--secondary)',
      }}
    >
      <TextTitle
        style={{
          textAlign: 'center',
          fontSize: 50,
          fontWeight: 'bold',
          color: 'var(--accent-text)',
        }}
      >
        {data.totalSupply}
        {' '}
        /
        {config.MAX_SUPPLY}
      </TextTitle>
      <TextDescription
        style={{
          textAlign: 'center',
          color: 'var(--primary-text)',
        }}
      >
        <StyledLink target="_blank" href={config.SCAN_LINK} style={{ color: 'var(--tertiary)' }}>
          {truncate(config.CONTRACT_ADDRESS, 15)}
        </StyledLink>
      </TextDescription>
      <SpacerSmall />
      {Number(data.totalSupply) >= config.MAX_SUPPLY ? (
        <>
          <TextTitle
            style={{ textAlign: 'center', color: 'var(--accent-text)' }}
          >
            The sale has ended.
          </TextTitle>
          <TextDescription
            style={{ textAlign: 'center', color: 'var(--accent-text)' }}
          >
            You can still find
            {' '}
            {config.NFT_NAME}
            {' '}
            on
          </TextDescription>
          <SpacerSmall />
          <StyledLink target="_blank" href={config.MARKETPLACE_LINK}>
            {config.MARKETPLACE}
          </StyledLink>
        </>
      ) : (
        <>
          <TextTitle
            style={{ textAlign: 'center', color: 'var(--accent-text)' }}
          >
            1
            {' '}
            {config.SYMBOL}
            {' '}
            costs
            {' '}
            {config.DISPLAY_COST}
            {' '}
            {config.NETWORK.SYMBOL}
            .
          </TextTitle>
          <SpacerXSmall />
          <TextDescription
            style={{ textAlign: 'center', color: 'var(--accent-text)' }}
          >
            Excluding gas fees.
          </TextDescription>
          <SpacerSmall />
          {blockchain.account === ''
            || blockchain.smartContract === null ? (
              <Container ai="center" jc="center">
                <TextDescription
                  style={{
                    textAlign: 'center',
                    color: 'var(--accent-text)',
                  }}
                >
                  Connect to the
                  {' '}
                  {config.NETWORK.NAME}
                  {' '}
                  network
                </TextDescription>
                <SpacerSmall />
                <StyledButton
                  onClick={onConnectClick}
                >
                  CONNECT
                </StyledButton>
                {blockchain.errorMsg !== '' ? (
                  <>
                    <SpacerSmall />
                    <TextDescription
                      style={{
                        textAlign: 'center',
                        color: 'var(--accent-text)',
                      }}
                    >
                      {blockchain.errorMsg}
                    </TextDescription>
                  </>
                ) : null}
              </Container>
            ) : (
              <>
                <TextDescription
                  style={{
                    textAlign: 'center',
                    color: 'var(--accent-text)',
                  }}
                >
                  {feedback}
                </TextDescription>
                <SpacerMedium />
                <Container ai="center" jc="center" fd="row">
                  <StyledRoundButton
                    style={{ lineHeight: 0.4 }}
                    disabled={claimingNft ? 1 : 0}
                    onClick={onDecrementClick}
                  >
                    -
                  </StyledRoundButton>
                  <SpacerMedium />
                  <TextDescription
                    style={{
                      textAlign: 'center',
                      color: 'var(--accent-text)',
                    }}
                  >
                    {mintAmount}
                  </TextDescription>
                  <SpacerMedium />
                  <StyledRoundButton
                    disabled={claimingNft ? 1 : 0}
                    onClick={onIncrementClick}
                  >
                    +
                  </StyledRoundButton>
                </Container>
                <SpacerSmall />
                <Container ai="center" jc="center" fd="row">
                  <StyledButton
                    disabled={claimingNft ? 1 : 0}
                    onClick={claimNFTs}
                  >
                    {claimingNft ? 'BUSY' : 'BUY'}
                  </StyledButton>
                </Container>
              </>
            )}
        </>
      )}
      <SpacerMedium />
    </Container>
    <SpacerMedium />
  </Container>
);
