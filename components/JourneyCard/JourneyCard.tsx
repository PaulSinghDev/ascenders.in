import Link from "next/link";
import { Journey } from "@/types/data.types";
import Image from "next/image";
import styled from "styled-components";

const JourneyCardWrapper = styled.div`
  border-radius: var(--border-radius-md);
  overflow: hidden;
  background-color: var(--light);
  max-width: 300px;
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.2);
  margin: 14px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`;

const JourneyCardThumb = styled.div`
  > img {
    border-radius: var(--border-radius-md);
    width: 100%;
    max-height: 250px;
    object-fot: cover;
  }
`;

const JourneyCardContent = styled.div`
  padding: var(--padding-md);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  > button {
    margin-top: auto;
    font-size: 12px;
    padding: 8px;
    text-transform: capitalize;
    min-width: 100px;
    align-self: center;
  }
`;

const JourneyCardTitle = styled.div`
  text-align: left;
  margin: var(--padding-md);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: var(--padding-md);

  > span:first-of-type {
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 8px;
    font-size: 10px;
    background-color: var(--blue);
    padding: 4px;
    border-radius: 4px;
    color: #fff;
  }

  > h3 {
    color: var(--orange);
    font-size: 1rem;
    margin-bottom: 8px;
  }
  > span:last-of-type {
    display: block;
    opacity: 0.6;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
  }
`;

const JourneyCardDetails = styled.div`
display flex;
margin: 0 var(--padding-md);
justify-content: space-between;
margin-bottom: var(--padding-md);

  > div {
    text-align: left;
    display flex;
    flex-direction: column;
    opacity: 0.6;

    &:first-of-type {
        font-weight: bold;
        font-size: 12px;
      }
      
      > span {
      font-size: 12px;
        display: block;
        margin: 4px 0; 
    }
  }
`;

const JourneyCard: React.FC<{ journey: Journey }> = ({
  journey: { thumbnail, title, duration, price, level, location, group, slug },
}) => (
  <JourneyCardWrapper>
    <JourneyCardThumb>
      <Image src={thumbnail} width={350} height={250} alt={title} />
    </JourneyCardThumb>
    <JourneyCardContent>
      <JourneyCardTitle>
        <span>Expedition</span>
        <h3>{title}</h3>
        <span>{`${duration.value} ${duration.measurement} from ${price.currency}${price.from}`}</span>
      </JourneyCardTitle>
      <JourneyCardDetails>
        <div>
          <span>Activity level:</span>
          <span>Group Size:</span>
          <span>Location</span>
        </div>
        <div>
          <span>{level.max ? `${level.min} to ${level.max}` : level.min}</span>
          <span>
            Max
            {group.max} People
          </span>
          <span>{location.label}</span>
        </div>
      </JourneyCardDetails>
      <Link href={`/journeys/${slug}`} title={`View ${title}`}>
        View
      </Link>
    </JourneyCardContent>
  </JourneyCardWrapper>
);

export { JourneyCard };
