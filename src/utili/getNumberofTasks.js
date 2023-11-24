export function getNumberOfTasks(tasks) {
	const numberOfTasks = tasks.length;
	if (numberOfTasks == 0) {
		return `brak zadań`;
	} else if (numberOfTasks == 1) {
		return `${numberOfTasks} zadanie`;
	} else {
		return `${numberOfTasks} zadania`;
	}
}
