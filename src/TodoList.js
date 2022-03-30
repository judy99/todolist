import {ListGroup, Stack} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {TodoListItem} from "./TodoListItem";

export const TodoList = ({
                             todos,
                             handleStatus,
                             setShowModal,
                             handleUp,
                             handleDown,
                             handleRemove,
                             isModalOpen,
                             showModal
                         }) => {
    return (
        <ListGroup>
            {
                todos.map((todo, index) => {
                    return <TodoListItem key={todo.id} id={todo.id} status={todo.isDone} title={todo.title}
                                         index={index} length={todos.length}
                                         handleStatus={handleStatus} handleUp={handleUp} handleDown={handleDown}
                                         setShowModal={setShowModal}
                                         handleRemove={handleRemove} showModal={showModal}/>
                })
            }
        </ListGroup>
    )
}
