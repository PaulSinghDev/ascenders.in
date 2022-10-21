import styled from "styled-components";

interface SectionProps {
  children?: React.ReactNode;
  id?: string;
}

const StyledSection = styled.section`
  padding: var(--padding-lg);
`;

export const Section: React.FC<SectionProps> = ({ children }) => (
  <StyledSection>{children}</StyledSection>
);
