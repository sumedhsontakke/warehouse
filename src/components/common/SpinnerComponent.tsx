import { memo } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00000036;
    z-index: 99;
`;

function SpinnerComponent() {
  return (
    <SpinnerWrapper>
      <Spinner animation="border" role="status" variant="primary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </SpinnerWrapper>
  );
}

export default memo(SpinnerComponent);