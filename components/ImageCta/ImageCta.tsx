import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { Button } from "../Base";
import { Section } from "../Base/Section";

interface ImageCtaProps {
  title: string;
  backgroundImg: string;
  alt: string;
  cta: {
    label: string;
  };
}

interface ImageCtaWithLink extends ImageCtaProps {
  cta: {
    href: string;
    title: string;
    label: string;
    callback?: never;
  };
}

interface ImageCtaWithButton extends ImageCtaProps {
  cta: {
    href?: never;
    title?: never;
    label: string;
    callback: React.MouseEventHandler;
  };
}

const ImageCtaWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 0;
  height: 100%;
  max-height: 500px;
  min-height: 300px;
  display: flex;
  border-radius: var(--border-radius-xl);
`;

const ImageCtaImageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 1;
  img {
    object-fit: cover;
    object-position: center;
    border-radius: var(--border-radius-xl);
  }
`;

const ImageCtaContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  h3 {
    color: var(--light);
    text-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.5);
    font-size: 28px;
  }

  a,
  button {
    box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.2);
    background-color: var(--light);
    color: var(--dark);
    border-radius: var(--border-radius-md);
    padding: var(--padding-sm) var(--padding-lg);
    font-weight: bold;
    font-size: 14px;
    margin-top: var(--margin-lg);
    font-family: eurosoft;
    transition: 0.3s ease;

    &:hover {
      background-color: var(--dark);
      color: var(--light);
    }
  }
`;

const ImageCta: React.FC<ImageCtaWithLink | ImageCtaWithButton> = ({
  title,
  backgroundImg,
  alt,
  cta,
}) => (
  <Section>
    <ImageCtaWrapper>
      <ImageCtaImageWrapper>
        <Image layout="fill" src={backgroundImg} alt={alt} />
      </ImageCtaImageWrapper>
      <ImageCtaContentWrapper>
        <h3>{title}</h3>
        {cta.href ? (
          <Link title={cta.title} href={cta.href}>
            {cta.label}
          </Link>
        ) : (
          <Button title={cta.title} onClick={cta.callback} />
        )}
      </ImageCtaContentWrapper>
    </ImageCtaWrapper>
  </Section>
);

export { ImageCta };
