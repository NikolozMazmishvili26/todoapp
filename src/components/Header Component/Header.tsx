import styled from "styled-components";

// import assets
import moon from "../../assets/icon-moon.svg";
import sun from "../../assets/icon-sun.svg";

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ isDarkMode, setIsDarkMode }: HeaderProps) {
  return (
    <TodoHeader>
      <HeaderTitle>todo</HeaderTitle>
      {isDarkMode ? (
        <BgColorSwitcherImage
          src={sun}
          alt="bgColorSwitcher"
          onClick={() => setIsDarkMode(false)}
        />
      ) : (
        <BgColorSwitcherImage
          src={moon}
          alt="bgColorSwitcher"
          onClick={() => setIsDarkMode(true)}
        />
      )}
    </TodoHeader>
  );
}

export default Header;

const TodoHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderTitle = styled.h2`
  font-size: 1.5rem;
  letter-spacing: 15px;
  text-transform: uppercase;
  color: #fff;
  line-height: 20px;
  font-weight: 700;

  @media screen and (min-width: 700px) {
    font-size: 40px;
    line-height: 40px;
    letter-spacing: 15px;
  }
`;

const BgColorSwitcherImage = styled.img`
  height: 20px;
  cursor: pointer;
  @media screen and (min-width: 700px) {
    height: 26px;
  }
`;
