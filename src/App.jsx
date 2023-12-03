import { useState } from "react";
import { Heading } from "./components/Heading/Heading";
import { Item } from "./components/Item/Item";
import "./App.css";

const Tasks = [
	{ id: 1, name: "Zrobić zakupy", isDone: false },
	{ id: 2, name: "Wynieść śmieci", isDone: true },
];

export function App() {
	const [tasks, setTasks] = useState(Tasks);

	function handleDoneBtnClik(id){

		setTasks((prev) => prev.map((task) => {
			if (task.id !== id) {
				console.log("nie zrobione")
				return task;
			} else {
				console.log(`${id} Zrobione`)
				return {
					...task,
					isDone: true,
				};
			}
		})
	);

	}

	console.log(tasks)
	return (
		<main>
			<Heading tasks={tasks} setter={setTasks}></Heading>
			<ul>
				{tasks.map(({ name, id, isDone }) => (
					<Item
						task={name}
						key={id}
						done={isDone}
						doneBtn={() => handleDoneBtnClik(id)}
						delBtn={() => {
							setTasks(tasks.filter((task) => !(task.id == id)));
						}}></Item>
				))}
			</ul>
		</main>
	);
}
