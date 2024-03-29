import styled from "styled-components";

interface TextProps {
  lines: string[];
}

const StyledTextWrapper = styled.div`
  margin: calc(2 * var(--margin-lg)) auto;
  color: var(--dark-blue);
  font-size: 16px;
  color: var(--dark-blue);
  line-height: 1.9;
  max-width: 800px;
`;

const Text: React.FC<TextProps> = ({ lines }) => (
  <StyledTextWrapper>
    {lines.map((line) => (
      <p key={Math.random().toString(36).substring(2, 7)}>{line}</p>
    ))}
  </StyledTextWrapper>
);

export { Text };
