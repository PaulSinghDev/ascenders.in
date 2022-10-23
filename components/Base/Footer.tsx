import Link from "next/link";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: var(--light-grey);
  padding: calc(var(--padding-lg) * 3) var(--padding-lg);
  color: var(--dark);
  margin-top: calc(var(--margin-xl) * 2);
`;

const StyledFooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1280px;
  margin: auto;
`;

const StyledFooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(25% - 16px);
  flex-shrink: 1;
  flex-grow: 1;
  margin: 8px;
  flex-basis: 150px;
  > h4 {
    color: var(--orange);
    text-transform: uppercase;
    margin-bottom: 4px;
  }
  > ul {
    font-size: 0.75rem;
    > li {
      margin: 4px 0;
    }
  }
`;

const Footer: React.FC = () => (
  <StyledFooter>
    <StyledFooterContainer>
      <StyledFooterColumn>
        <h4>Find a Journey</h4>
        <ul>
          <li>
            <Link href="/journeys" title="View our journeys">
              Find Journeys
            </Link>
          </li>
        </ul>
      </StyledFooterColumn>
      <StyledFooterColumn>
        <h4>Support</h4>
        <ul>
          <li>
            <Link href="tel:+919536017975" title="Call us on +91 9536017975">
              Call +91 9536017975
            </Link>
          </li>
          <li>
            <Link href="/about/contact" title="View our contact page">
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="/frequently-asked-questions"
              title="View our frequently asked questions"
            >
              FAQ
            </Link>
          </li>
        </ul>
      </StyledFooterColumn>
      <StyledFooterColumn>
        <h4>Company</h4>
        <ul>
          <li>
            <Link href="/about" title="View our about us page">
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/about/terms-conditions"
              title="View our terms and conditions"
            >
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link href="/about/privacy-policy" title="View our privacy policy">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </StyledFooterColumn>
      <StyledFooterColumn>
        <h4>Follow Us</h4>
      </StyledFooterColumn>
    </StyledFooterContainer>
  </StyledFooter>
);

export { Footer };
