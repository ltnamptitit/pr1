import React from 'react'
import styled from 'styled-components';

export default function NewForm(props) {
	return (
		<WrapTodoForm>
			<PlusIcon>
				<img src='C:\Users\Nam\Desktop\React JS\pr1\src\assets\plus.png' />
			</PlusIcon>
		</WrapTodoForm>
	)
}

export const WrapTodoForm = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  height: 150px;
  background-color: #121c3f;
`;


export const PlusIcon = styled.div`
background-color: #fff;
  display: flex;
  justtify-content: center;
  align-item: center;
  height: 128px;
  width: 128px;
`;