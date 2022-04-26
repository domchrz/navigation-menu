import styled from 'styled-components';

const AppHeadline = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 1rem;
  margin: 1rem auto;
  background-color: dodgerblue;
  border: 2px solid white;
  border-radius: .5rem;
  transition: background-color .7s;
  cursor: pointer;
  ${props => props.invalid && `
    background-color: red;
    font-size: 5rem;
  `}

  &:hover {
    background-color: transparent;
  }
`;

export default AppHeadline;