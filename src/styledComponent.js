import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: rgba(73,62,92,0.3);
  flex-direction: column;
  overdlow: hidden;
  width: 70%;
`;

export const InputFormContainer = styled.div`
  width: 100%;
  height: 150px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonWrapper = styled.span`
  margin: 10px 0px;
`;

export const TodoList = styled.div`
  height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  &::-webkit-scrollbar{
    display: none
  }
`;

export const ListContainer = styled.div`
  margin-bottom: 10px;
`;

export const TodoWrapper = styled.div`
  
`;

export const Label = styled.div`
  color: #cfa;
  position: relative;
  top: 0px;
  font-size: 24px;
`;

export const TodoItem = styled.div`
  min-height: 60px;
  border: 1px solid rgba(255,255,255, 0.5);
  border-radius: 5px;
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &:hover{
    background-color: rgba(78, 92, 115,0.7)
  };
  opacity: ${props => props.isDone ? 0.2 : 1};
`;

export const TodoContent = styled.div`
  width: 70%;
  margin-left: 10px;
  pointer-events: none;
  align-items: center;
  color: #fff;
  font-size: 22px;
  
`;

export const IconContainer = styled.div`
  max-width: 100px;
  margin-right: 5%;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-around;
`;

export const IconWrapper = styled.div`
  opacity: 0.3;
  &:hover{
    opacity:1;
  }
`;

