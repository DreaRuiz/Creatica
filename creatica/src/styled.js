import styled from 'styled-components'

export const PhaseStyle = styled.p`
  height: 50px;
  border: 2px solid #8ec3b0;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-family: Arial;
  background-color: ${({ active }) => (active ? "pink" : "white")};
`;