import styled from "styled-components";

interface SectionProps {
  children?: React.ReactNode;
  id?: string;
  className?: string;
}

const StyledSection = styled.section`
  margin: calc(var(--margin-lg) * 3) 0;
  @media screen and (min-width: 800px) {
    margin: calc(var(--margin-xl) * 4) calc(var(--margin-xl) * 2);
  }
`;

export const Section: React.FC<SectionProps> = ({ children, className }) => (
  <StyledSection className={className}>{children}</StyledSection>
);
