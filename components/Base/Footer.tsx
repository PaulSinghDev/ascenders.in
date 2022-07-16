import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <StyledFooterColumn>
        <h4>Find a Journey</h4>
        <ul>
          <li>
            <a href="">Find Journeys</a>
          </li>
          <li>
            <a href="">Why Travel With Us</a>
          </li>
          <li>
            <a href="">Jobs</a>
          </li>
          <li>
            <a href="">Special Offers</a>
          </li>
        </ul>
      </StyledFooterColumn>
      <StyledFooterColumn>
        <h4>Support</h4>
        <ul>
          <li>
            <a href="">Call +91 9536017975</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Travel Insurance</a>
          </li>
        </ul>
      </StyledFooterColumn>
      <StyledFooterColumn>
        <h4>Company</h4>
        <ul>
          <li>
            <a href="">About US</a>
          </li>
          <li>
            <a href="">Terms & Conditions</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Press Release</a>
          </li>
        </ul>
      </StyledFooterColumn>
      <StyledFooterColumn>
        <h4>Follow Us</h4>
      </StyledFooterColumn>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: var(--light-grey);
  padding: calc(var(--padding-lg) * 3) var(--padding-lg);
  color: var(--dark);
  display: flex;
  flex-wrap: wrap;
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
export { Footer };
