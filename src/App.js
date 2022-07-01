import Form from './components/InputForm/Form';
import Task from './components/Task/Task';
import { useSelector } from 'react-redux/es/exports';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

import './App.scss';

export default function App() {
	const lists = useSelector(state => state.lists)
	const dataRef = collection(db, 'todo-list')

	const getData = async () => {
		const data = await getDocs(dataRef)
		console.log(data.docs.map(doc => doc.data()))
	}
	// getData()


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
