import styled from "styled-components";

interface TextProps {
  lines: string[];
}

const StyledTextWrapper = styled.div`
  padding: calc(2 * var(--padding-lg)) var(--padding-sm);
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
