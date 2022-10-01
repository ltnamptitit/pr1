import { Button, Input } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo, deleteTodo, editTodo } from './redux/action';
import { ButtonWrapper, Container, InputFormContainer, Label, ListContainer, TodoList, TodoWrapper } from './styledComponent';

import 'antd/dist/antd.min.css';
import './App.css';
import Todo from './components/Todo';

function App() {
    const todo = useSelector(state => state.todoList)
    const [input, setInput] = useState('')
    const [isEdit, setIsEdit] = useState(false)
    const [itemEdited, setItemEdited] = useState({})
    const dispatch = useDispatch()

    const onClickAdd = () => {
        if (input.trim()) {
            dispatch(addTodo({
                id: uuidv4(),
                task: input,
                isDone: false
            }))
        }
        else return
        setInput('')
    }

    const onPressEnter = (e) => {
        if (e.keyCode === 13) {
            if (isEdit) {
                dispatch(editTodo({ ...itemEdited, task: input }))
                setIsEdit(!isEdit)
                setInput('')
                return
            }
            onClickAdd()
        }
        return
    }
    const onClickEdit = (obj) => {
        setInput(obj.task)
        setIsEdit(true)
        setItemEdited({ ...obj });
    }

    const onClickDelete = (item) => {
        dispatch(deleteTodo(item))
    }


    return (
        <div className="App">
            <Container>
                <InputFormContainer>
                    <Input
                        style={{ height: '50px' }}
                        allowClear
                        value={input}
                        onChange={(e) => { setInput(e.target.value) }}
                        onKeyDown={(e) => onPressEnter(e)}
                    />
                    <ButtonWrapper>
                        {
                            isEdit ? <Button
                                type='primary'
                                onClick={() => {
                                    dispatch(editTodo({ ...itemEdited, task: input }));
                                    setIsEdit(!isEdit);
                                    setInput('')
                                }}
                            >
                                Save
                            </Button> : <Button
                                type='primary'
                                onClick={() => onClickAdd()}
                            >
                                Add
                            </Button>
                        }
                    </ButtonWrapper>
                </InputFormContainer>
                <TodoList>
                    <ListContainer>
                        <Label>Pending</Label>
                        <TodoWrapper>
                            {
                                todo.filter(item => !item.isDone).map(item => {
                                    return <Todo
                                        key={item.id}
                                        item={item}
                                        onClickDelete={onClickDelete}
                                        onClickEdit={onClickEdit}
                                    />
                                })
                            }
                        </TodoWrapper>
                    </ListContainer>
                    <ListContainer>
                        <Label>Done</Label>
                        <TodoWrapper>
                            {
                                todo.filter(item => item.isDone).map(item => {
                                    return <Todo
                                        key={item.id}
                                        item={item}
                                        onClickDelete={onClickDelete}
                                        onClickEdit={onClickEdit}
                                    />
                                })
                            }
                        </TodoWrapper>
                    </ListContainer>
                </TodoList>
            </Container>
        </div>
    );
}

export default App;
