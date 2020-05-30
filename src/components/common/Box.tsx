import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  position: absolute;
`;

export const TopLeftBox = styled(Box)`
  flex-direction: column;
  align-items: flex-start;
  z-index: 5;
  padding-left: 5vw;
  padding-right: 5vw;
  padding-top: 5vh;
`;

export const BottomRightBox = styled(Box)`
  align-items: flex-end;
  flex-direction: column;
  z-index: 0;
`;
