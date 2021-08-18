import styled from "styled-components";

export const ContentBanner = styled.section`
  width: 100%;
  height: 87vh;
  display: flex;
  justify-content: flex-end;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    inset: 0px;
    background: linear-gradient(270deg, rgba(255, 255, 255, 0) -44.17%, rgb(18, 20, 29) 55.09%);
    z-index: 1;
  }
`;

export const BannerImg = styled.div`
  width: 70%;
  height: 100%;
  position: relative;
`;

export const BannerText = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 8%;
  margin: auto;
  z-index: 9;
  width: 520px;
  height: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  h2 {
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 50px;
  }
  h3 {
    color: #fff;
    font-size: 28px;
    margin-top: 5px;
    line-height: 1.4;
  }
`;
