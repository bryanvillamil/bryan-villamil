import styled, { css } from 'styled-components';

export const Language = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 10%;
  color: #000;
`;

export const Button = styled.button`
  font-size: 0.65rem;
  padding: 0px 1px;
  margin: 0px 4px;
  display: flex;
  border: none;
  outline: none;
  color: inherit;
  border-radius: 50%;
  height: 26px;
  min-width: 27px;
  align-items: center;
  justify-content: center;
  background: transparent;
  cursor: pointer;
  transition: all 0.5s ease;
  position: relative;
  z-index: 99;
  &:hover{
    background: rgba(0, 0, 0, 0.6);
  }
  ${(props) => props.active && css`
    background: rgba(0, 0, 0, 0.6);
    color: white;
    margin: 0px 4px;
    &:hover{
      background: rgba(0, 0, 0, 0.9);;
    }
  `}
`;