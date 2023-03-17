import { motion } from "framer-motion";
import styled from "styled-components";

// import assets
import completed from "../../assets/completed.png";

export const TodoContent = styled(motion.div)<{ isDarkMode: boolean }>`
  width: 100%;
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: ${(props) =>
      props.isDarkMode ? "#393A4B" : "var(--very-light-grayish-blue)"};
    display: block;
    margin-top: 16px;

    @media screen and (min-width: 700px) {
      margin-top: 19px;
    }
  }
`;

// item styles

export const RightSide = styled.div`
  width: 3%;
  display: none;
`;

export const TodoItem = styled(motion.div)`
  padding: 16px 20px 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /*  */
  width: 100%;
  cursor: pointer;

  @media screen and (min-width: 700px) {
    padding: 20px 24px 0px 24px;
  }

  &:hover {
    ${RightSide} {
      display: block;
    }
  }
`;

// left side styles

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
  /*  */
  width: 97%;

  @media screen and (min-width: 700px) {
    column-gap: 24px;
  }
`;

export const TodoCircleSwitcher = styled.div<{
  isCompleted: boolean;
  isDarkMode: boolean;
}>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid var(--light-grayish-blue);
  border: ${(props) =>
    props.isDarkMode
      ? "1px solid var(--very-dark-grayish-blue)"
      : "1px solid var(--light-grayish-blue)"};
  background-image: url(${(props) => props.isCompleted && completed});
  background-position: center;
  background-size: cover;
  cursor: pointer;

  @media screen and (min-width: 700px) {
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
  }
`;

export const TodoValueBox = styled.div`
  width: 85%;
`;

export const TodoValue = styled.p<{
  isCompleted: boolean;
  isDarkMode: boolean;
}>`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.166667px;
  /*  */
  width: 100%;
  word-wrap: break-word;
  /*  */

  color: ${(props) =>
    props.isCompleted
      ? props.isDarkMode
        ? "var(--very-dark-grayish-blue)"
        : "var(--light-grayish-blue)"
      : props.isDarkMode
      ? "var(--light-grayish-blue)"
      : "#494C6B"};

  text-decoration: ${(props) => props.isCompleted && "line-through"};

  @media screen and (min-width: 700px) {
    font-size: 18px;
    line-height: 18px;
    letter-spacing: -0.25px;
  }
`;

// right side styles

export const DeleteImage = styled.img`
  cursor: pointer;
  width: 12px;
  height: 12px;

  @media screen and (min-width: 700px) {
    width: 18px;
    height: 18px;
  }
`;
