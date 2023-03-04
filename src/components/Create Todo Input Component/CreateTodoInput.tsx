import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// import components
import TodoList from "../Todo List Component/TodoList";
import Footer from "../Footer Component/Footer";

// interfaces
export interface TodosProps {
  id: string;
  todoValue: string;
  isCompleted: boolean;
}

interface CreateTodoInputProps {
  isDarkMode: boolean;
}

function CreateTodoInput({ isDarkMode }: CreateTodoInputProps) {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<TodosProps[]>(
    JSON.parse(localStorage.getItem("todos") || "[]")
  );
  const [filteredTodos, setFilteredTodos] = useState<TodosProps[]>(todos);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  // save todos array to localstorage

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // submit function
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue) {
      setTodos([
        ...todos,
        {
          id: new Date().getTime().toString(),
          todoValue: inputValue,
          isCompleted: false,
        },
      ]);
      setInputValue("");
    }
  };

  return (
    <>
      <TodoContainer>
        <Form onSubmit={handleSubmit}>
          <SubmitCircle isDarkMode={isDarkMode} />
          <TodoInput
            type="text"
            placeholder="Create a new todo..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            // props
            isDarkMode={isDarkMode}
          />
        </Form>
        {/* todo lsit container */}
        <TodoListContainer
          isDarkMode={isDarkMode}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 75, duration: 0.5 }}
        >
          {filteredTodos.map((todo) => {
            return (
              <TodoList
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                // props
                isDarkMode={isDarkMode}
              />
            );
          })}
          <Footer
            todos={todos}
            setTodos={setTodos}
            setFilteredTodos={setFilteredTodos}
            // props
            isDarkMode={isDarkMode}
          />
        </TodoListContainer>
      </TodoContainer>
    </>
  );
}

export default CreateTodoInput;

const TodoContainer = styled.div`
  margin-top: 40px;
`;

const Form = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

const TodoInput = styled.input<{ isDarkMode: boolean }>`
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

const SubmitCircle = styled.div<{ isDarkMode: boolean }>`
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

const TodoListContainer = styled(motion.div)<{ isDarkMode: boolean }>`
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
