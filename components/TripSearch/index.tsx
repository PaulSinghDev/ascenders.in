import styled from "styled-components";
import { Button, Select } from "../Base";

const TripSearchWrapper = styled.div`
  max-width: 300px;
  margin: auto;
  width: 95%;
`;
const TripSearchForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.5);
  padding: var(--padding-lg);
  border-radius: var(--border-radius-xl);
  margin: calc(2 * var(--margin-lg)) 0;

  select {
    color: rgba(0, 0, 0, 0.5);
  }

  button {
    margin-bottom: var(--margin-lg);
  }
`;

const TripSearch = () => (
  <TripSearchWrapper>
    <TripSearchForm>
      <Select>
        <option>Destination</option>
      </Select>
      <Select>
        <option>Interest</option>
      </Select>
      <Select>
        <option>Location</option>
      </Select>
      <Button margin="lg">Search</Button>
    </TripSearchForm>
  </TripSearchWrapper>
);

export { TripSearch };
