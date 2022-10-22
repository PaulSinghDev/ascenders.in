import Image from "next/image";
import { Staff } from "@/types/data.types";
import styled from "styled-components";
import { SectionHeading } from "../Base/SectionHeading";

const JourneyStaffWrapper = styled.section`
  padding: calc(var(--padding-lg) * 2);
  border-bottom: 1px solid rba(0, 0, 0, 0.1);
`;

const JourneyStaffCardsWrapper = styled.div`
  overflow: hidden;
`;

const JourneyStaffCards = styled.div`
  display: flex;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const JourneyStaffCard = styled.div`
  flex-shrink: 0;
  min-width: 200px;
  margin: var(--margin-md);
  display: flex;
  flex-direction: column;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const JourneyStaffThumb = styled.picture`
  display: block;
  width: 200px;
  height: 200px;
  position: relative;

  img {
    object-fit: cover;
    object-position: center;
    display: block;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: var(--border-radius-lg);
  }
`;

const JourneyStaffInfo = styled.div`
  color: var(--dark-blue);
  text-align: center;

  span {
    margin: 0 var(--margin-sm);
    text-transform: capitalize;

    &:first-child {
      margin-top: 8px;
      font-weight: bold;
    }

    &:last-child {
      font-weight: normal;
      font-size: 14px;
    }
    display: block;
  }
`;

const JourneyStaffCarousel: React.FC<{ staff: Staff[] }> = ({ staff }) => (
  <JourneyStaffWrapper>
    <SectionHeading title="Experts On The Trip" />
    <JourneyStaffCardsWrapper>
      <JourneyStaffCards>
        {staff.map((person) => (
          <JourneyStaffCard key={Math.random().toString(36).substring(2, 9)}>
            <JourneyStaffThumb>
              <Image
                width={200}
                height={200}
                layout="fill"
                alt={person.image.alt}
                src={person.image.src}
              />
            </JourneyStaffThumb>
            <JourneyStaffInfo>
              <span>{person.name}</span>
              <span>{person.role}</span>
            </JourneyStaffInfo>
          </JourneyStaffCard>
        ))}
      </JourneyStaffCards>
    </JourneyStaffCardsWrapper>
  </JourneyStaffWrapper>
);

export { JourneyStaffCarousel };
