import styled from "styled-components";

interface SectionProps {
  children?: React.ReactNode;
  id?: string;
  className?: string;
}

const StyledSection = styled.section`
  margin: calc(var(--margin-lg) * 2);
`;

export const Section: React.FC<SectionProps> = ({ children, className }) => (
  <StyledSection className={className}>{children}</StyledSection>
);
