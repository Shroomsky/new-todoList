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

	function removeTask(id) {
		setTasks(tasks.filter((task) => !(task.id == id)));
	}
	

	return (
		<main>
			<Heading tasks={tasks} setter={setTasks}></Heading>
			<ul>
				{tasks.map((t) => (
					<Item
						task={t.name}
						key={t.id}
						done={t.isDone}
						delBtn={() => removeTask(t.id)}></Item>
				))}
			</ul>
		</main>
	);
}
