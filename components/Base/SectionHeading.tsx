import styled from "styled-components";

const SectionHeadingWrapper = styled.div`
  margin: var(--margin-xl) 0;
  h2 {
    margin-top: 0;
    margin-bottom: var(--margin-lg);
    color: var(--blue);
    font-weight: 500;
    text-transform: uppercase;
  }
  p {
    font-size: 14px;
    color: var(--dark-blue);
  }
`;

interface SectionHeadingProps {
  title: string;
  copy?: string[];
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  copy = [],
}) => (
  <SectionHeadingWrapper>
    <h2>{title}</h2>
    {copy.map((line) => (
      <p key={Math.random().toString(36).substring(2, 9)}>{line}</p>
    ))}
  </SectionHeadingWrapper>
);

export { SectionHeading };
