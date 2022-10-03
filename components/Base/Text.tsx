import styled from "styled-components";

interface TextProps {
  lines: string[];
}

const StyledTextWrapper = styled.div`
  padding: calc(var(--padding-md) * 2) calc(var(--padding-md) * 4);
  color: var(--dark-blue);
`;

const Text: React.FC<TextProps> = ({ lines }) => (
  <StyledTextWrapper>
    {lines.map((line) => (
      <p key={Math.random().toString(36).substring(2, 7)}>{line}</p>
    ))}
  </StyledTextWrapper>
);

export { Text };
