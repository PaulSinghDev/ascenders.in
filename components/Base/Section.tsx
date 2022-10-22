import styled from "styled-components";

interface SectionProps {
  children?: React.ReactNode;
  id?: string;
}

const StyledSection = styled.section`
  margin: calc(var(--margin-lg) * 2);
`;

export const Section: React.FC<SectionProps> = ({ children }) => (
  <StyledSection>{children}</StyledSection>
);
