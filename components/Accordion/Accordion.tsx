import { AccordionSection } from "@/types/data.types";
import { getIcon } from "utils/getIcon";
import { useRef } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Button } from "../Base";
import { SectionHeading } from "../Base/SectionHeading";

const AccordionWrapper = styled.div`
  margin: var(--margin-xl);
  max-width: 800px;
  @media screen and (min-width: calc(850px)) {
    margin: calc(var(--margin-xl) * 2) auto;
  }
`;

const Content = styled.div`
  transition: 0.3s ease;
  overflow: hidden;
  height: 0;
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

const AccordionTriggerWrapper = styled.div`
  &[aria-expanded="true"] {
    button > svg:nth-of-type(1) {
      display: block;
    }
    button > svg:nth-of-type(2) {
      display: none;
    }
  }
  &[aria-expanded="false"] {
    button > svg:nth-of-type(1) {
      display: none;
    }
    button > svg:nth-of-type(2) {
      display: block;
    }
  }
`;

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

const AccordionHeading = styled(SectionHeading)`
  margin-top: 0;
`;

interface AccordionProps extends AccordionSection {
  id?: string;
}

type TabRef = {
  index: number;
  element: HTMLElement;
};

const Accordion: React.FC<AccordionProps> = ({
  title,
  description,
  items,
  id,
}) => {
  const tabsRef = useRef<TabRef[]>([]);
  const indRef = useRef<number[]>([]);

  const alterTabs = (newIndexes: number[]) => {
    tabsRef.current.forEach((tab) => {
      tab.element.style.setProperty(
        "height",
        newIndexes.includes(tab.index)
          ? `${tab?.element?.firstElementChild?.clientHeight}px`
          : "0px"
      );
      tab.element
        ?.closest("[aria-expanded]")
        ?.setAttribute("aria-expanded", `${newIndexes.includes(tab.index)}`);
    });
  };

  const selectDay: React.MouseEventHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const trigger = event.currentTarget;
    trigger?.setAttribute("disabled", "true");
    const triggeredIndex = Number(trigger.dataset.index);
    const newIndexes = indRef.current.includes(triggeredIndex)
      ? [...indRef.current.filter((index) => index !== triggeredIndex)]
      : [...indRef.current, triggeredIndex];
    alterTabs(newIndexes);
    indRef.current = newIndexes;
    trigger?.removeAttribute("disabled");
  };

  return (
    <AccordionWrapper id={id}>
      <AccordionHeading title={title} copy={description} />
      <div className="container">
        <AccordionTriggers>
          {items.map((item, i) => (
            <AccordionTriggerWrapper
              key={Math.random().toString(36).substring(2, 9)}
              data-index={i}
              aria-expanded="false"
            >
              <AccordionTrigger>
                <Button margin="sm" data-index={i} onClick={selectDay}>
                  <AccordionTitleIcon>
                    {item.icon && getIcon(item.icon)}
                    {item.title}
                  </AccordionTitleIcon>
                  <>
                    {getIcon("minus", 10)}
                    {getIcon("plus", 10)}
                  </>
                </Button>
              </AccordionTrigger>
              <Content>
                <ContentInner
                  ref={(element) => {
                    tabsRef.current[i] = {
                      index: i,
                      element: element?.parentElement as HTMLElement,
                    };
                  }}
                >
                  <ReactMarkdown
                    key={Math.random().toString(36).substring(2, 9)}
                  >
                    {item.content}
                  </ReactMarkdown>
                </ContentInner>
              </Content>
            </AccordionTriggerWrapper>
          ))}
        </AccordionTriggers>
      </div>
    </AccordionWrapper>
  );
};

export { Accordion };
