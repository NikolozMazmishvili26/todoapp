import { useEffect, useState } from "react";

// import styles
import {
  Form,
  SubmitCircle,
  TodoContainer,
  TodoInput,
  TodoListContainer,
} from "./CreateTodoInputStyles";

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
