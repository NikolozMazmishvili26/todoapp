import styled from "styled-components";

// import assets
import deleteImage from "../../assets/delete.png";
import completed from "../../assets/completed.png";

// interfaces
import { TodosInterface } from "../Create Todo Input Component/Input";

interface ListProps {
  todo: TodosInterface;
  todos: TodosInterface[];
  setTodos: React.Dispatch<React.SetStateAction<TodosInterface[]>>;
}

function List({ todo, todos, setTodos }: ListProps) {
  const { id, todosValue, isCompleted } = todo;

  // delete function
  const handleDelete = (id: string) => {
    const deleteItem = todos.filter((todo) => todo.id !== id);
    setTodos(deleteItem);
  };

  // update is complete function
  const handleUpdateIsComplete = (id: string) => {
    const updateComplete = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !isCompleted };
      }
      return todo;
    });
    setTodos(updateComplete);
  };

  return (
    <TodoList>
      <TodoContent>
        <LeftSide>
          <TodoCompletedBox
            onClick={() => handleUpdateIsComplete(id)}
            isCompleted={isCompleted}
          />
          <TodosValue isCompleted={isCompleted}>{todosValue}</TodosValue>
        </LeftSide>

        <RightSide>
          <DeleteImage
            src={deleteImage}
            alt="delete"
            onClick={() => handleDelete(id)}
          />
        </RightSide>
      </TodoContent>
    </TodoList>
  );
}

export default List;

const TodoList = styled.div`
  padding: 16px 20px 0px 20px;
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #e3e4f1;
    display: block;
    margin-top: 16px;
  }
`;

const TodoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// left sidestyles
const LeftSide = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const TodoCompletedBox = styled.div<{ isCompleted: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid rgba(194, 195, 214, 0.5);
  background-image: url(${(props) => props.isCompleted && completed});
  background-position: center;
  background-repeat: no-repeat;
`;

const TodosValue = styled.p<{ isCompleted: boolean }>`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: ${(props) => props.isCompleted && "#D1D2DA"};
  text-decoration: ${(props) => props.isCompleted && `line-through`};
  word-wrap: break-word;
  max-width: 230px;
`;

// right side styles
const RightSide = styled.div``;

const DeleteImage = styled.img`
  cursor: pointer;
`;
