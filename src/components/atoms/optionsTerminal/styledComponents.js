import styled from "styled-components";

export const Options = styled.div`
  position: absolute;
  display: flex;
  top: 25px;
  left: 15px;
  span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-left: 6px;
    &:nth-child(1) {
      background: rgb(239, 68, 68);
    }
    &:nth-child(2) {
      background: rgb(253, 186, 116);
    }
    &:nth-child(3) {
      background: rgb(16, 185, 129);
    }
  }
`;

