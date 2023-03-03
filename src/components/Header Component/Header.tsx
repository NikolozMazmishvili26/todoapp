import styled from "styled-components";

// import assets
import logo from "../../assets/logo.png";
import moon from "../../assets/moon.png";

function Header() {
  return (
    <HeaderContainer>
      <HeadeLogo src={logo} alt="logo" />
      <LogoTitle>TODO</LogoTitle>
      <BgColorSwitcherImage src={moon} alt="switcherImage" />
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeadeLogo = styled.img`
  @media screen and (min-width: 850px) {
    display: none;
  }
`;

const LogoTitle = styled.h2`
  display: none;
  @media screen and (min-width: 850px) {
    display: block;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    letter-spacing: 15px;
    color: #ffffff;
  }
`;

const BgColorSwitcherImage = styled.img`
  cursor: pointer;
  object-fit: cover;
  width: 20px;
  height: 20px;
  @media screen and (min-width: 850px) {
    width: 26px;
    height: 26px;
  }
`;
