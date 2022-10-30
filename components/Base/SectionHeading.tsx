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
    font-size: 16px;
    color: var(--dark-blue);
    max-width: 700px;
    line-height: 1.9;
  }
`;

interface SectionHeadingProps {
  title: string;
  copy?: string[];
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  className,
  copy = [],
}) => (
  <SectionHeadingWrapper className={className}>
    <h2>{title}</h2>
    {copy.map((line) => (
      <p key={Math.random().toString(36).substring(2, 9)}>{line}</p>
    ))}
  </SectionHeadingWrapper>
);

export { SectionHeading };
