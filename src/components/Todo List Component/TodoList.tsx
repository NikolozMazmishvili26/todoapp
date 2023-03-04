import styled from "styled-components";
import { motion } from "framer-motion";

// import assets
import delIcon from "../../assets/icon-cross.svg";
import completed from "../../assets/completed.png";

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
      transition={{ duration: 0.3 }}
    >
      <TodoItem>
        {/* left side */}
        <LeftSide>
          <TodoCircleSwitcher
            onClick={handleCompleteSwitcher}
            isCompleted={isCompleted}
            // props
            isDarkMode={isDarkMode}
          />
          <TodoValue isCompleted={isCompleted} isDarkMode={isDarkMode}>
            {todoValue}
          </TodoValue>
        </LeftSide>
        {/* right side */}
        <RightSide>
          <DeleteImage src={delIcon} alt="deleteImage" onClick={handleDelete} />
        </RightSide>
      </TodoItem>
    </TodoContent>
  );
}

export default TodoList;

const TodoContent = styled(motion.div)<{ isDarkMode: boolean }>`
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

const TodoItem = styled.div`
  padding: 16px 20px 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 700px) {
    padding: 20px 24px 0px 24px;
  }
`;

// left side styles

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;

  @media screen and (min-width: 700px) {
    column-gap: 24px;
  }
`;

const TodoCircleSwitcher = styled.div<{
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

const TodoValue = styled.p<{ isCompleted: boolean; isDarkMode: boolean }>`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.166667px;
  color: ${(props) =>
    props.isDarkMode
      ? "var(--light-grayish-blue)"
      : "var(--very-dark-grayish-blue)"};

   {
    ${(props) =>
      props.isDarkMode && props.isCompleted
        ? "color : var(--very-dark-grayish-blue)"
        : !props.isDarkMode &&
          props.isCompleted &&
          "color : var(--light-grayish-blue)"}
  }

  text-decoration: ${(props) => props.isCompleted && "line-through"};

  @media screen and (min-width: 700px) {
    font-size: 18px;
    line-height: 18px;
    letter-spacing: -0.25px;
  }
`;

// right side styles

const RightSide = styled.div``;

const DeleteImage = styled.img`
  cursor: pointer;
  width: 12px;
  height: 12px;

  @media screen and (min-width: 700px) {
    width: 18px;
    height: 18px;
  }
`;
