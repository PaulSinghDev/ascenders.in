import Link from "next/link";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: var(--light-grey);
  padding: calc(var(--padding-lg) * 3) var(--padding-lg);
  color: var(--dark);
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(var(--margin-xl) * 2);
`;

const StyledFooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 16px);
  min-width: 25%;
  flex-shrink: 1;
  flex-grow: 1;
  margin: 8px;

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
    <StyledFooterColumn>
      <h4>Find a Journey</h4>
      <ul>
        <li>
          <Link href="/" title="View our journeys">
            Find Journeys
          </Link>
        </li>
        <li>
          <Link href="/" title="Why travel with us">
            Why Travel With Us
          </Link>
        </li>
        <li>
          <Link href="/" title="Jobs">
            Jobs
          </Link>
        </li>
        <li>
          <Link href="/" title="Special Offers">
            Special Offers
          </Link>
        </li>
      </ul>
    </StyledFooterColumn>
    <StyledFooterColumn>
      <h4>Support</h4>
      <ul>
        <li>
          <Link href="/" title="">
            Call +91 9536017975
          </Link>
        </li>
        <li>
          <Link href="/" title="">
            Contact Us
          </Link>
        </li>
        <li>
          <Link href="/" title="">
            FAQ
          </Link>
        </li>
        <li>
          <Link href="/" title="">
            Travel Insurance
          </Link>
        </li>
      </ul>
    </StyledFooterColumn>
    <StyledFooterColumn>
      <h4>Company</h4>
      <ul>
        <li>
          <Link href="/" title="">
            About US
          </Link>
        </li>
        <li>
          <Link href="/terms-conditions" title="View our terms and conditions">
            Terms & Conditions
          </Link>
        </li>
        <li>
          <Link href="/" title="">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href="/" title="">
            Press Release
          </Link>
        </li>
      </ul>
    </StyledFooterColumn>
    <StyledFooterColumn>
      <h4>Follow Us</h4>
    </StyledFooterColumn>
  </StyledFooter>
);

export { Footer };
