import { AccordionSection } from "@/types/data.types";
import { getIcon } from "utils/getIcon";
import { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Button } from "../Base";
import { SectionHeading } from "../Base/SectionHeading";

const AccordionWrapper = styled.section`
  margin: var(--margin-xl);
`;

const Content = styled.div<{ height?: number }>`
  transition: 0.3s ease;
  height: ${({ height }) => height}px;
  overflow: hidden;
`;

const ContentInner = styled.div`
  padding: var(--padding-lg) calc(var(--padding-lg) * 2);

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: var(--margin-sm);
  }

  p {
    line-height: 1.6;
    font-size: 16px;
    margin-bottom: 12px;
    color: var(--dark-blue);
    font-size: 14px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  img {
    max-width: calc(100% - calc(var(--margin-md) * 2));
    object-fit: cover;
    border-radius: var(--border-radius-lg);
    margin: calc(var(--margin-lg) * 2) var(--margin-md);
  }
`;

const AccordionTriggers = styled.div``;

const AccordionTrigger = styled.div`
  margin: calc(var(--margin-sm)) 0;
  padding: 0;

  button {
    margin: 0;
    background-color: var(--light-grey);
    color: var(--dark-blue);
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-family: open-sans;

    svg {
      color: var(--dark-blue);
      transition: 0.3s ease;
    }

    &:hover {
      background-color: var(--blue);
      svg {
        color: #fff;
      }
    }
  }
`;

const AccordionTitleIcon = styled.span`
  display: inline-flex;
  align-items: center;
  svg {
    margin-right: var(--margin-lg);
  }
`;

interface AccordionProps extends AccordionSection {
  id?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  description,
  items,
  id,
}) => {
  const [activeDay, setActiveDay] = useState<number | null>(null);
  // const activeDay = useRef<null | number>(null);
  const activeDayElement = useRef<null | HTMLDivElement>(null);

  const selectDay: React.MouseEventHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const newActiveDay = Number(event.currentTarget.dataset.index);
    setActiveDay(newActiveDay === activeDay ? null : newActiveDay);
    activeDayElement.current = event.currentTarget.parentElement
      ?.nextElementSibling?.firstElementChild as HTMLDivElement;
  };

  return (
    <AccordionWrapper id={id}>
      <SectionHeading title={title} copy={description} />
      <div className="container">
        <div className="nav" />
        <AccordionTriggers>
          {items.map((item, i) => (
            <div key={Math.random().toString(36).substring(2, 9)}>
              <AccordionTrigger>
                <Button margin="sm" data-index={i} onClick={selectDay}>
                  <AccordionTitleIcon>
                    {item.icon && getIcon(item.icon)}
                    {item.title}
                  </AccordionTitleIcon>
                  {i !== null && i === activeDay
                    ? getIcon("minus", 10)
                    : getIcon("plus", 10)}
                </Button>
              </AccordionTrigger>
              <Content
                style={{
                  height:
                    i !== null && i === activeDay
                      ? activeDayElement.current?.clientHeight
                      : 0,
                }}
              >
                <ContentInner ref={i === activeDay ? activeDayElement : null}>
                  <ReactMarkdown
                    key={Math.random().toString(36).substring(2, 9)}
                  >
                    {item.content}
                  </ReactMarkdown>
                </ContentInner>
              </Content>
            </div>
          ))}
        </AccordionTriggers>
      </div>
    </AccordionWrapper>
  );
};

export { Accordion };
