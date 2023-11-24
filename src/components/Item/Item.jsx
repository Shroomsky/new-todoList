
import { Button } from "../Button/Button";
import { useState } from "react";
import { ButtonContainer, LiElement, PElement } from "./StyledItem";

export function Item({ task, done, delBtn}) {
	const [isDone, setIsDone] = useState(done);
	
	return (
		<>
			<hr />
			<LiElement>
				<PElement $done={isDone}>{task}</PElement>
				<ButtonContainer>
					{!isDone && <Button onClick={() => setIsDone(true)}>Zrobione</Button>}
					<Button
						onClick={delBtn}>
						Usuń
					</Button>
				</ButtonContainer>
			</LiElement>
		</>
	);
}
