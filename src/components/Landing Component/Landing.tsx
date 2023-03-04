import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

// import assets
import bgMobileLight from "../../assets/bg-mobile-light.jpg";
import bgDesktopLight from "../../assets/bg-desktop-light.jpg";
import bgMobileDark from "../../assets/bg-mobile-dark.jpg";
import bgDesktopDark from "../../assets/bg-desktop-dark.jpg";

// import components
import Header from "../Header Component/Header";
import CreateTodoInput from "../Create Todo Input Component/CreateTodoInput";

function Landing() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <LandingContainer isDarkMode={isDarkMode}>
      <BackgroundImage isDarkMode={isDarkMode} />
      <TodoBox>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <CreateTodoInput isDarkMode={isDarkMode} />
      </TodoBox>
      {/* landing title container */}
      <LandingTitleContainer>
        {" "}
        <LandingTitle isDarkMode={isDarkMode}>
          Drag and drop to reorder list
        </LandingTitle>
      </LandingTitleContainer>
    </LandingContainer>
  );
}

export default Landing;

const LandingContainer = styled(motion.div)<{ isDarkMode: boolean }>`
  position: relative;
  max-width: 1920px;
  width: 100%;
  margin: auto;
  min-height: 100vh;
  height: 100%;
  overflow: auto;
  background-color: ${(props) =>
    props.isDarkMode ? "var(--very-dark-blue)" : "var(--very-light-gray)"};
  display: flex;
  flex-direction: column;
`;

const BackgroundImage = styled(motion.div)<{ isDarkMode: boolean }>`
  background-image: url(${(props) =>
    props.isDarkMode ? bgMobileDark : bgMobileLight});
  background-size: cover;
  background-position: center;
  height: calc(min(100vw, 100vh) * 300 / 850);

  @media screen and (min-width: 850px) {
    height: 300px;
  }

  @media screen and (max-width: 550px) {
    height: calc(100vw * 200 / 390);
  }

  @media screen and (max-width: 390px) {
    height: 200px;
  }

  @media screen and (min-width: 550px) {
    background-image: url(${(props) =>
      props.isDarkMode ? bgDesktopDark : bgDesktopLight});
  }
`;

const TodoBox = styled.div`
  position: absolute;
  left: 50%;
  top: 48px;
  transform: translate(-50%);
  max-width: 541px;
  width: 100%;
  height: 20px;
  padding-right: 24px;
  padding-left: 26px;

  @media screen and (min-width: 700px) {
    padding: 0px;
    top: 70px;
  }
`;

const LandingTitleContainer = styled.div`
  margin-top: auto;
  width: 100%;
  margin-bottom: 24px;
`;

const LandingTitle = styled.p<{ isDarkMode: boolean }>`
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: ${(props) =>
    props.isDarkMode
      ? "var(--dark-grayish-blue)"
      : "var(--light-grayish-blue)"};

  @media screen and (min-width: 700px) {
    font-size: 14px;
    line-height: 14px;
  }
`;
