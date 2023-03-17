import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px 20px 20px;

  @media screen and (min-width: 700px) {
    padding: 16px 24px 20px 24px;
  }
`;

export const TodoLengthTitle = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: var(--dark-grayish-blue);
  letter-spacing: -0.166667px;

  @media screen and (min-width: 700px) {
    font-size: 14px;
    line-height: 14px;
  }
`;

export const ButtonContainer = styled.div`
  display: none;

  @media screen and (min-width: 700px) {
    display: block;
  }
`;

export const ClearCompletedTitle = styled.p<{ isDarkMode: boolean }>`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.166667px;
  color: var(--dark-grayish-blue);
  cursor: pointer;
  transition-duration: 0.2s;

  @media screen and (min-width: 700px) {
    font-size: 14px;
    line-height: 14px;
    &:hover {
      color: ${(props) =>
        props.isDarkMode ? "#E3E4F1" : "var(--very-dark-blue)"};
    }
  }
`;

// mobile footer styles
export const MobileFooter = styled.div<{ isDarkMode: boolean }>`
  position: absolute;
  width: 100%;
  bottom: -64px;
  background-color: ${(props) =>
    props.isDarkMode
      ? "var(--very-dark-desaturated-blue)"
      : "var(--very-light-gray)"};
  box-shadow: ${(props) =>
    props.isDarkMode
      ? "0px 35px 50px -15px rgba(0, 0, 0, 0.5)"
      : "0px 35px 50px -15px rgba(194, 195, 214, 0.5)"};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

export const MobileButtonContainer = styled.div``;

export const AllButton = styled.button<{
  activeButton: number | null;
  isDarkMode: boolean;
}>`
  border: none;
  background-color: transparent;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.194444px;
  color: ${(props) =>
    props.activeButton === 1
      ? "var(--bright-blue)"
      : "var(--dark-grayish-blue)"};
  cursor: pointer;
  transition-duration: 0.2s;

  @media screen and (min-width: 700px) {
    &:hover {
      color: ${(props) =>
        props.isDarkMode ? "#E3E4F1" : "var(--very-dark-blue)"};
    }
  }
`;

export const ActiveButton = styled(AllButton)<{
  activeButton: number | null;
  isDarkMode: boolean;
}>`
  color: ${(props) =>
    props.activeButton === 2
      ? "var(--bright-blue)"
      : "var(--dark-grayish-blue)"};
`;

export const CompletedButton = styled(AllButton)<{
  activeButton: number | null;
  isDarkMode: boolean;
}>`
  color: ${(props) =>
    props.activeButton === 3
      ? "var(--bright-blue)"
      : "var(--dark-grayish-blue)"};
`;
