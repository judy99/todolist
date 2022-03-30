import './App.css';
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Stack} from "react-bootstrap";
import {TodoForm} from './TodoForm'
import {TodoList} from "./TodoList";

function App() {
    const data = [
        {
            id: uuidv4(),
            title: 'todo1 test',
            isDone: false
        },
        {
            id: uuidv4(),
            title: 'todo2 test',
            isDone: false
        }
    ]
    const [todos, setTodos] = useState(data)
    const [todo, setTodo] = useState({isDone: false})
    const [showModal, setShowModal] = useState(false)

    const addItem = (e) => {
        e.preventDefault()
        if (todo.title) {
            todos.push(todo)
            setTodos([...todos])
            setTodo({isDone: false})
        }
    }
    const updateItem = (e) => {
        const newItem = e.target.value
        if (newItem.trim()) setTodo({...todo, id: uuidv4(), title: newItem})
    }

    const handleStatus = (id) => {
        const newTodos = todos.map(todo => {
            if (id === todo.id) todo.isDone = !todo.isDone
            return todo
        })
        setTodos(newTodos)
    }

    const handleRemove = (id) => {
        const newTodos = todos.filter(todo => id !== todo.id)
        setTodos(newTodos)
        setShowModal(false)
    }

    const handleUp = (id) => {
        const newTodos = [...todos]
        const index = newTodos.findIndex(todo => todo.id === id);
        if (index - 1 >= 0) [newTodos[index - 1], newTodos[index]] = [newTodos[index], newTodos[index - 1]]
        setTodos(newTodos)
    }
    const handleDown = (id) => {
        const newTodos = [...todos]
        const index = newTodos.findIndex(todo => todo.id === id);
        if (index + 1 < newTodos.length) [newTodos[index], newTodos[index + 1]] = [newTodos[index + 1], newTodos[index]]
        setTodos(newTodos)
    }
    return (
        <Container>
            <Stack gap={3}>
                <h2>Todo list:</h2>
                <TodoForm addItem={addItem} updateItem={updateItem}/>
                <TodoList todos={todos} handleStatus={handleStatus} handleRemove={handleRemove}
                          setShowModal={setShowModal} handleUp={handleUp} handleDown={handleDown} showModal={showModal} />
            </Stack>
        </Container>
    );
}

export default App;