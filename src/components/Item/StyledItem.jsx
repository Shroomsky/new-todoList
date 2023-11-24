import styled from "styled-components";

export const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-content: center;
gap: 10px;
`;
export const LiElement = styled.li`
padding: 10px 0;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;
export const PElement = styled.p`
text-decoration: ${({ $done }) => ($done ? "line-through" : "none")};
`;