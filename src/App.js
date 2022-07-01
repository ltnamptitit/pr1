import { useSelector } from 'react-redux/es/exports';
import './App.scss';
import Form from './components/InputForm/Form';
import Task from './components/Task/Task';

export default function App() {

	const lists = useSelector(state => state.lists)


	return (
		<div className='App'>
			<Form />
			<div className='taskList-container'>
				{
					lists.map((item) => {
						return <Task
							key={item.id}
							task={item}
						/>
					})
				}
			</div>
		</div>
	)
}
