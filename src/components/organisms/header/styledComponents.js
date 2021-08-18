import styled from "styled-components";

export const ContentHeader = styled.header`
  padding: 20px;
  position: sticky;
  top: 0;
  z-index: 99;
  display: flex;
  height: 70px;
  box-shadow: 1px 1px 12px rgb(18,20,29);
  background: #fff;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`;

export const HeaderLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 20%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
`;
