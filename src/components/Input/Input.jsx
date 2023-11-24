import styled from "styled-components";

const InputElement = styled.input`
	padding: 5px;
	border-radius: 5px;
	border: 1px solid;
	outline: none;
	width: ${({ $width }) => $width + "%"};
`;

export function Input({ value, setter, width }) {
	function onInputChage(e) {
		setter(e.target.value);
	}

	return (
		<InputElement
			$width={width}
			onChange={onInputChage}
			value={value}></InputElement>
	);
}
