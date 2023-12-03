/* eslint-disable react/prop-types */

import { Button } from "../Button/Button";

import { ButtonContainer, LiElement, PElement } from "./StyledItem";

export function Item({ task, done, delBtn, doneBtn }) {
	return (
		<>
			<hr />
			<LiElement>
				<PElement $done={done}>{task}</PElement>
				<ButtonContainer>
					{!done && <Button onClick={doneBtn}>Zrobione</Button>}
					<Button onClick={delBtn}>Usuń</Button>
				</ButtonContainer>
			</LiElement>
		</>
	);
}
