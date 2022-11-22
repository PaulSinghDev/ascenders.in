import Image from "next/image";
import { Staff } from "@/types/data.types";
import styled from "styled-components";
import Link from "next/link";
import { SectionHeading } from "../Base/SectionHeading";

const JourneyStaffWrapper = styled.div`
  margin: var(--margin-xl);
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
  > a {
    display: inline-block;
    margin: var(--margin-md);
    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const JourneyStaffCard = styled(Link)`
  flex-shrink: 0;
  min-width: 200px;
  display: flex;
  flex-direction: column;
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

const StaffHeading = styled(SectionHeading)`
  margin-top: 0;
`;

const JourneyStaffCarousel: React.FC<{ staff: Staff[]; heading?: string }> = ({
  staff,
  heading,
}) => (
  <JourneyStaffWrapper>
    <StaffHeading title={heading || "Experts On The Trip"} />
    <JourneyStaffCardsWrapper>
      <JourneyStaffCards>
        {staff.map((person) => (
          <JourneyStaffCard
            href={`/team/${person.slug}`}
            key={Math.random().toString(36).substring(2, 9)}
            title={`View ${person.name}'s profile`}
            passHref
          >
            <a
              href={`/team/${person.slug}`}
              title={`View ${person.name}'s profile`}
            >
              <JourneyStaffThumb>
                <Image
                  layout="fill"
                  alt={person.image.alt}
                  src={person.image.src}
                />
              </JourneyStaffThumb>
              <JourneyStaffInfo>
                <span>{person.name}</span>
                <span>{person.role.label}</span>
              </JourneyStaffInfo>
            </a>
          </JourneyStaffCard>
        ))}
      </JourneyStaffCards>
    </JourneyStaffCardsWrapper>
  </JourneyStaffWrapper>
);

export { JourneyStaffCarousel };
