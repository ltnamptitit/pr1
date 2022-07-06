import { DeleteOutlined, FormOutlined } from '@ant-design/icons'
import { Checkbox } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editTodo } from '../redux/action'
import { IconContainer, IconWrapper, TodoContent, TodoItem } from '../styledComponent'

export default function Todo(props) {
    const [check, setCheck] = useState(props.item.isDone)
    const dispatch = useDispatch()
    return (
        <TodoItem isDone={props.item.isDone}>
            <Checkbox
                style={{ height: '30px' }}
                checked={check}
                onClick={() => {
                    setCheck(!check);
                    dispatch(editTodo({
                        ...props.item,
                        isDone: !props.item.isDone
                    }))
                }}
            />
            <TodoContent>
                {props.item.task}
            </TodoContent>
            <IconContainer>
                <IconWrapper>
                    <FormOutlined
                        style={{ fontSize: '20px', color: '#db4425' }}
                        onClick={() => props.onClickEdit(props.item)}
                    />
                </IconWrapper>
                <IconWrapper>
                    <DeleteOutlined
                        style={{ fontSize: '20px', color: '#db4425' }}
                        onClick={() => props.onClickDelete(props.item)}
                    />
                </IconWrapper>
            </IconContainer>
        </TodoItem>
    )
}
