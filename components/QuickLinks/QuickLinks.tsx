import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

type QuickLinksType = {
  url: string;
  title: string;
  label: string;
};

interface QuickLinksProps {
  links: QuickLinksType[];
}

const StyledLinks = styled.div`
  padding: var(--padding-md);
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-left: none;
  border-right: none;
  margin: var(--margin-xl) calc(var(--margin-sm) * 1.5);
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  a {
    white-space: nowrap;
    font-weight: bold;
    color: var(--dark-blue);
    padding: var(--padding-sm);
    font-size: 14px;
    opacity: 0.8;
    transition: 0.3s ease;

    &:hover,
    &[data-active="true"] {
      color: var(--blue);
    }
  }
`;

const QuickLinks: React.FC<QuickLinksProps> = ({ links }) => {
  const [activeLink, setActiveLink] = useState<number>(0);
  return (
    <StyledLinks>
      {links.map(({ url, title, label }, i) => (
        <Link
          href={url}
          passHref
          key={Math.random().toString(36).substring(2, 7)}
        >
          <a
            href={url}
            title={title}
            data-active={i === activeLink}
            onClick={() => {
              setActiveLink(i);
            }}
          >
            {label}
          </a>
        </Link>
      ))}
    </StyledLinks>
  );
};

export { QuickLinks };
