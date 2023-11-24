import styled from "styled-components";

const ButtonElement = styled.button`
	margin: 0 5px;
    padding: 5px 10px;
	background-color: white;
	color: var(--main-color);
	border: 1px solid var(--main-color);
	border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
	&:hover {
		background-color: var(--main-color);
		color: white;
	}
`;

export function Button({ children, onClick }) {
	return (
		<>
			<ButtonElement onClick={onClick}>{children}</ButtonElement>
		</>
	);
}
