import {motion} from 'framer-motion'
import styled from "styled-components";

export const TodoContainer = styled.div`
  margin-top: 40px;
`;

export const Form = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const TodoInput = styled.input<{ isDarkMode: boolean }>`
  width: 100%;
  height: 46px;
  outline: none;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  border-radius: 5px;
  border: none;
  padding-left: 52px;
  font-size: 12px;
  background-color: ${(props) =>
    props.isDarkMode
      ? "var(--very-dark-desaturated-blue)"
      : "var(--very-light-gray)"};
  color: ${(props) =>
    props.isDarkMode
      ? "var(--light-grayish-blue)"
      : "var(--very-dark-grayish-blue)"};

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: -0.166667px;
    color: var(--dark-grayish-blue);

    @media screen and (min-width: 700px) {
      font-size: 18px;
      line-height: 18px;
      letter-spacing: -0.25px;
    }
  }

  @media screen and (min-width: 700px) {
    height: 64px;
    padding-left: 72px;
    font-size: 18px;
  }
`;

export const SubmitCircle = styled.div<{ isDarkMode: boolean }>`
  position: absolute;
  left: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: ${(props) =>
    props.isDarkMode
      ? "1px solid var(--very-dark-grayish-blue)"
      : "1px solid var(--light-grayish-blue)"};
  cursor: pointer;

  @media screen and (min-width: 700px) {
    width: 24px;
    height: 24px;
    left: 24px;
  }
`;

// list container styles

export const TodoListContainer = styled(motion.div)<{ isDarkMode: boolean }>`
  position: relative;
  max-width: 541px;
  width: 100%;
  background: ${(props) =>
    props.isDarkMode
      ? "var(--very-dark-desaturated-blue)"
      : "var(--very-light-gray)"};
  margin-top: 16px;
  margin-bottom: 16px;
  box-shadow: ${(props) =>
    props.isDarkMode
      ? "0px 35px 50px -15px rgba(0, 0, 0, 0.5)"
      : "0px 35px 50px -15px rgba(194, 195, 214, 0.5)"};
  border-radius: 5px;

  @media screen and (min-width: 700px) {
    margin-top: 24px;
  }
`;
