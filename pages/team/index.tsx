import { Header } from "components/Header";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { staff } from "data/staff";
import { SectionHeading } from "@/components/Base/SectionHeading";
import { Section } from "@/components/Base/Section";
import Meta from "@/components/Base/Meta";

const TeamWrapper = styled(Section)`
  margin:  var(--margin-xl);
  display flex;
  max-width: 100%;
  overflow: auto;
  flex-direction: column;
  align-items: center;
`;

const TeamCard = styled.div`
  border-radius: var(--border-radius-md);
  overflow: hidden;
  background-color: var(--light);
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.2);
  margin: 8px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 1;
  display: block;
  position: relative;
  width: calc(50% - 16px);
  height: calc(50vw - 16px);
  max-height: 300px;
  max-width: 300px;

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    color: var(--light);
    font-weight: bold;
    font-size: 24px;

    &:hover {
      > span:first-of-type {
        bottom: 50%;
        left: 50%;
        transform: translate(-50%, 0);
      }

      > span:last-of-type {
        opacity: 1;
        transition-delay: 0.3s;
      }
      &::before {
        opacity: 1;
      }
    }

    > span {
      font-size: 14px;
      position: absolute;
      z-index: 2;
      transition: 0.3s ease;
      text-align: center;
      max-width: calc(100% - 16px);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      &:first-of-type {
        display: inline-block;
        align-items: center;
        bottom: 8px;
        left: 8px;
        background-color: var(--blue);
        padding: 0 var(--padding-sm);
        border-radius: 5px;
        height: calc(14px + var(--padding-sm));

        > span {
          font-weight: normal;
          margin-left: 8px;
        }
      }

      &:last-of-type {
        transition-delay: 0s;
        top: calc(50% + calc(14px + var(--padding-sm)));
        left: 50%;
        transform: translate(-50%, -50%);
        font-weight: normal;
        opacity: 0;
      }
    }

    &::before {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.8);
      content: "";
      position: absolute;
      opacity: 0;
      transition: 0.3s ease;
    }
  }
`;

const TeamGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`;

const TeamHeading = styled(SectionHeading)`
  max-width: 900px;
`;

const OurTeam: React.FC<{}> = () => (
  <main role="main">
    <Meta
      title="Our Team | Ascenders | Go Beyond | H.E.A.L"
      description="Our Team | H.E.A.L"
      url={`${process.env.NEXT_PUBLIC_BASE_URL}/team`}
      favicon="/favicon.ico"
    />
    <Header
      pageType="info"
      heading="Our Team"
      subheading="Get to know our team, all out members of staff are really excited to meet new people and show the beauty that India has to offer."
    />
    <TeamWrapper>
      <TeamHeading
        title="Our Founders"
        copy={[
          "Ascenders was founded in 2019 by Aditya Siwach and Shantanu Chaudhary out of a mutual mission of conscious travelling by experiencing HEAL journeys that could unravel possibilities to GO BEYOND who we are.",
        ]}
      />
      <TeamGrid>
        {staff
          .filter((member) => /founder/.test(member.role.slug))
          .map((person) => (
            <TeamCard key={Math.random().toString(36).substring(2, 7)}>
              <Image
                src={person.image.src}
                alt=""
                layout="fill"
                objectFit="cover"
              />
              <Link href={`/team/${person.slug}`} passHref>
                <a href={`/team/${person.slug}`}>
                  <span>{person.name}</span>
                  <span>Click for more info</span>
                </a>
              </Link>
            </TeamCard>
          ))}
      </TeamGrid>
    </TeamWrapper>
    <TeamWrapper>
      <TeamHeading
        title="Our Team"
        copy={[
          "Get to know our team members, who embody the core values of Ascenders' vision and mission.",
          "Each individual has a different set of skills that they use to make the world a better place.",
          "HEAL has been collectively designed by Ascenders Team to help you initiate a path to go beyond who you were.",
        ]}
      />
      <TeamGrid>
        {staff
          .filter((member) => !/founder/.test(member.role.slug))
          .map((person) => (
            <TeamCard key={Math.random().toString(36).substring(2, 7)}>
              <Image
                src={person.image.src}
                alt=""
                layout="fill"
                objectFit="cover"
              />
              <Link href={`/team/${person.slug}`} passHref>
                <a href={`/team/${person.slug}`}>
                  <span>{person.name}</span>
                  <span>Click for more info</span>
                </a>
              </Link>
            </TeamCard>
          ))}
      </TeamGrid>
    </TeamWrapper>
  </main>
);

export default OurTeam;
