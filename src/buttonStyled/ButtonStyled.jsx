import { styled } from "styled-components";

const StyledButton = styled.button`
  background: #c4c4d4;
  border-radius: 10px;
  outline: none;
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
  display: inline-block;
  padding: 10px;
  transition: all 200ms ease-in-out;
  width: 100px;
  cursor: pointer;


`;
const ButtonStyled = ({ onClick, children }) => {
  return (
    <div>
      <StyledButton onClick={onClick}>{children}</StyledButton>
    </div>
  );
};
export default ButtonStyled;
