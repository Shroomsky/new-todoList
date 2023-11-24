import styled from "styled-components";

export const RoundedButton = styled.button`
color: white;
background-color: var(--main-color);
border: none;
border-radius: 50%;
aspect-ratio: 1/1;
width: 50px;
font-size: 1.5rem;
font-weight: bold;
margin: 10px;
`;
export const Header = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-content: center;
justify-content: space-between;
`;
export const Form = styled.form`
width: 100%;
display: flex;
flex-direction: row;
align-content: center;
justify-content: space-between;
margin-bottom: 10px;
`;
export const ErrorP = styled.p`
	font-weight: bold;
	color: red;
	font-size: 0.8rem;
	margin-bottom: 10px;
`;
