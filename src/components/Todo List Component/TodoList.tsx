import { motion, AnimatePresence } from "framer-motion";

// import styles
import {
  DeleteImage,
  LeftSide,
  RightSide,
  TodoCircleSwitcher,
  TodoContent,
  TodoItem,
  TodoValue,
  TodoValueBox,
} from "./TodoListStyles";

// import assets
import delIcon from "../../assets/icon-cross.svg";

// imported interface
import { TodosProps } from "../Create Todo Input Component/CreateTodoInput";

interface TodoListProps {
  todo: TodosProps;
  todos: TodosProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodosProps[]>>;
  isDarkMode: boolean;
}

function TodoList({ todo, todos, setTodos, isDarkMode }: TodoListProps) {
  const { id, todoValue, isCompleted } = todo;

  // delete function

  const handleDelete = () => {
    const deleteItem = todos.filter((todo) => todo.id !== id);
    setTodos(deleteItem);
  };

  // complete switcher function

  const handleCompleteSwitcher = () => {
    const updateIsComplete = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !isCompleted };
      }
      return todo;
    });
    setTodos(updateIsComplete);
  };

  return (
    <TodoContent
      isDarkMode={isDarkMode}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <AnimatePresence>
        <TodoItem exit={{ y: "-100vw" }}>
          {/* left side */}
          <LeftSide>
            <TodoCircleSwitcher
              onClick={handleCompleteSwitcher}
              isCompleted={isCompleted}
              // props
              isDarkMode={isDarkMode}
            />
            <TodoValueBox>
              <TodoValue isCompleted={isCompleted} isDarkMode={isDarkMode}>
                {todoValue}
              </TodoValue>
            </TodoValueBox>
          </LeftSide>
          {/* right side */}
          <RightSide>
            <DeleteImage
              src={delIcon}
              alt="deleteImage"
              onClick={handleDelete}
            />
          </RightSide>
        </TodoItem>
      </AnimatePresence>
    </TodoContent>
  );
}

export default TodoList;
