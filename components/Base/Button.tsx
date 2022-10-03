import styled from "styled-components";

type ButtonProps = {
  color?: "orange" | "teal" | "blue";
  margin?: "sm" | "md" | "lg" | "xl";
  type?: "submit" | "button";
  disabled?: boolean;
} & React.HtmlHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button<{ color: string; margin: string }>`
  ${(props) => {
    const { color, margin } = props;
    return `
    background-color: var(--${color});
    border: none;
    padding: var(--padding-lg);
    border-radius: var(--border-radius-md);
    margin: var(--margin-${margin || "sm"});
    text-transform: capitalize;
    color: var(--light);
    letter-spacing: 1.5px;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.3s ease;
    line-height: 1.4;
    &:hover {
      background-color: var(--dark);
      color: var(--light);
    }`;
  }}
`;

const Button: React.FC<ButtonProps> = ({
  color = "orange",
  margin = "md",
  children,
  ...rest
}) => (
  <StyledButton color={color} margin={margin} {...rest}>
    {children}
  </StyledButton>
);

export { Button };
