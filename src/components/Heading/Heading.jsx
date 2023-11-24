import { useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { ErrorP, Form, Header, RoundedButton } from "./StyledHeading";
import { getNumberOfTasks } from "../../utili/getNumberofTasks";
export function Heading({ tasks, setter }) {
	const [isInputActive, setIsInputActive] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [inputError, setInputError] = useState(false);

	function handleAddButtonClick() {
		setIsInputActive((prevState) => !prevState);
	}

	function handleSubmitClick(e) {
		e.preventDefault();
		if (inputValue.length == 0) {
			setInputError(true);
		} else {
			setInputError(false);
			setIsInputActive((prevState) => !prevState);
			setter(() => [
				{
					id: Math.floor(Math.random() * 100),
					name: inputValue,
					isDone: false,
				},
				...tasks,
			]);
			setInputValue("");
		}
	}

	return (
		<>
			<Header>
				<div>
					<h1>Do zrobienia</h1>
					<h2>{getNumberOfTasks(tasks)}</h2>
				</div>
				{!isInputActive && (
					<div>
						<RoundedButton onClick={handleAddButtonClick}>+</RoundedButton>
					</div>
				)}
			</Header>
			{isInputActive && (
				<Form onSubmit={handleSubmitClick} id="Task">
					<Input
						setter={setInputValue}
						value={inputValue}
						id="Task"
						width={80}></Input>
					<Button type="Submit">Dodaj</Button>
				</Form>
			)}
			{inputError && <ErrorP>Nazwa zadania nie może być pusta</ErrorP>}
		</>
	);
}
