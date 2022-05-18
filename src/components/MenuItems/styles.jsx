import styled, { css } from 'styled-components';

const dropdown = css`
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 1;
`;

const rootDropdown = css`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
`;

export const StyledUl = styled.ul`
  ${({ depth }) => depth === 1 && rootDropdown}
  ${({ depth }) => depth > 1 && dropdown}
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: center;
  align-content: center;
`;
