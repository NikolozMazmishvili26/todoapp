import { useState } from "react";
// import styles
import {
  FooterContainer,
  ActiveButton,
  AllButton,
  ButtonContainer,
  ClearCompletedTitle,
  CompletedButton,
  MobileButtonContainer,
  MobileFooter,
  TodoLengthTitle,
} from "./FooterStyles";

import { TodosProps } from "../Create Todo Input Component/CreateTodoInput";

// interface

interface FooterProps {
  todos: TodosProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodosProps[]>>;
  setFilteredTodos: React.Dispatch<React.SetStateAction<TodosProps[]>>;
  isDarkMode: boolean;
}

function Footer({
  todos,
  setTodos,
  setFilteredTodos,
  isDarkMode,
}: FooterProps) {
  const [activeButton, setActiveButton] = useState<number | null>(1);

  // to do length counter

  const todoLength = todos
    .map((todo) => todo.isCompleted)
    .filter((completedTodo) => !completedTodo).length;

  // clear completed function

  const handleClearCompleted = () => {
    const clearCompleted = todos.filter((todo) => {
      if (todo.isCompleted === false) {
        return { ...todo };
      }
    });
    setTodos(clearCompleted);
  };

  // show all button function

  const handleShowAllTodo = () => {
    setActiveButton(1);
    setFilteredTodos(todos);
  };

  // show active todos function

  const handleShowActiveTodos = () => {
    setActiveButton(2);
    const filterActiveTodos = todos.filter((todo) => !todo.isCompleted);
    setFilteredTodos(filterActiveTodos);
  };

  // show completed todos function

  const handleShowCompletedTodos = () => {
    setActiveButton(3);
    const filterCompletedTodos = todos.filter((todo) => todo.isCompleted);
    setFilteredTodos(filterCompletedTodos);
  };

  return (
    <>
      <FooterContainer>
        <TodoLengthTitle>{todoLength} Items Left</TodoLengthTitle>
        <ButtonContainer>
          <AllButton
            activeButton={activeButton}
            onClick={handleShowAllTodo}
            // props
            isDarkMode={isDarkMode}
          >
            All
          </AllButton>
          <ActiveButton
            activeButton={activeButton}
            onClick={handleShowActiveTodos}
            // props
            isDarkMode={isDarkMode}
          >
            Active
          </ActiveButton>
          <CompletedButton
            activeButton={activeButton}
            onClick={handleShowCompletedTodos}
            // props
            isDarkMode={isDarkMode}
          >
            Completed
          </CompletedButton>
        </ButtonContainer>
        <ClearCompletedTitle
          onClick={handleClearCompleted}
          isDarkMode={isDarkMode}
        >
          Clear Completed
        </ClearCompletedTitle>
      </FooterContainer>
      {/*  */}
      <MobileFooter isDarkMode={isDarkMode}>
        <MobileButtonContainer>
          <AllButton
            activeButton={activeButton}
            onClick={handleShowAllTodo}
            // props
            isDarkMode={isDarkMode}
          >
            All
          </AllButton>
          <ActiveButton
            activeButton={activeButton}
            onClick={handleShowActiveTodos}
            // props
            isDarkMode={isDarkMode}
          >
            Active
          </ActiveButton>
          <CompletedButton
            activeButton={activeButton}
            onClick={handleShowCompletedTodos}
            // props
            isDarkMode={isDarkMode}
          >
            Completed
          </CompletedButton>
        </MobileButtonContainer>
      </MobileFooter>
    </>
  );
}

export default Footer;
