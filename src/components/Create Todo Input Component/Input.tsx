import { useState } from "react";
import styled from "styled-components";

// import components
import TodoList from "../../components/Todo List Component/TodoList";

export interface TodosInterface {
  id: string;
  todosValue: string;
  isCompleted: boolean;
}

function Input() {
  const [todos, setTodos] = useState<TodosInterface[]>([]);

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue) {
      setTodos([
        ...todos,
        {
          id: new Date().getTime().toString(),
          todosValue: inputValue,
          isCompleted: false,
        },
      ]);
      setInputValue("");
    }
  };

  return (
    <>
      <InputContainer>
        <Form onSubmit={handleSubmit}>
          <CircleBox />
          <TodoInput
            placeholder="Create a new todo..."
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Form>
      </InputContainer>
      {/* todo list container */}
      <TodoListContainer>
        {todos.map((todo) => {
          return (
            <TodoList
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })}
        <TodoFooter></TodoFooter>
      </TodoListContainer>
    </>
  );
}

export default Input;

const InputContainer = styled.div`
  width: 100%;
`;

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 40px;
`;

const CircleBox = styled.div`
  position: absolute;
  left: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid rgba(194, 195, 214, 0.5);

  @media screen and (min-width: 850px) {
    width: 24px;
    height: 24px;
    left: 24px;
  }
`;

const TodoInput = styled.input`
  width: 100%;
  height: 48px;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  border-radius: 5px;
  border: none;
  padding-left: 52px;
  outline: none;
  font-size: 12px;
  line-height: 12px;
  color: #393a4b;

  @media screen and (min-width: 850px) {
    height: 64px;
    padding-left: 72px;
    font-size: 18px;
    line-height: 18px;
  }

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    color: #9495a5;

    @media screen and (min-width: 850px) {
      font-size: 18px;
      line-height: 18px;
    }
  }
`;

// todo list container

const TodoListContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  border-radius: 5px;
  margin-top: 16px;
`;

const TodoFooter = styled.div``;
