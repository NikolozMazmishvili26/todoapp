import styled from "styled-components";

// import assets
import lightbgimage from "../../assets/lightbgimage.jpg";
import Input from "../Create Todo Input Component/Input";

// import components
import Header from "../Header Component/Header";

function Landing() {
  return (
    <LandingContainer>
      <TodoContainer>
        <Header />
        <Input />
      </TodoContainer>
    </LandingContainer>
  );
}

export default Landing;

const LandingContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  background-color: #f2f2f2;
  min-height: 100vh;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${lightbgimage});
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
    width: 100%;
    height: calc(min(100vw, 100vh) * 300 / 878);
    background-position: center;

    @media (min-width: 878px) {
      height: 300px;
    }

    @media screen and (max-width: 600px) {
      height: calc(100vw * 200 / 390);
    }
  }
`;

const TodoContainer = styled.div`
  position: absolute;
  top: 48px;
  left: 50%;
  transform: translate(-50%);
  max-width: 541px;
  width: 100%;
  height: 30px;
  padding-left: 26px;
  padding-right: 24px;

  @media screen and (min-width: 850px) {
    padding: 0px;
    top: 70px;
  }
`;
