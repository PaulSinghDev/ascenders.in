import { GalleryImage } from "@/types/data.types";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Button } from "../Base";
import { Badge } from "../Base/Badge";
import { SectionHeading } from "../Base/SectionHeading";

interface GalleryProps {
  images: GalleryImage[];
  id?: string;
}

const GalleryWrapper = styled.section`
  margin: var(--margin-xl) calc(var(--margin-lg) * 2);

  > div:first-child {
    margin: var(--margin-xl) 0;
  }
`;

const SlidesWrapper = styled.div`
  min-height: 300px;
  display: flex;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: var(--border-radius-xl);
  @media screen and (min-width: 700px) {
    margin-bottom: 0;
    width: 50%;
  }
`;

const Slides = styled.div`
  display: flex;
  transition: 0.3s ease-in-out;
  min-width: 100%;
`;

const Slide = styled.div`
  flex-basis: 100%;
  width: 100%;
  flex-shrink: 0;
  height: 100%;
  width: 100%;
  flex-shrink: 0;
  flex-basis: 100%;
  border-radius: var(--border-radius-xl);
  position: relative;
  > span {
    min-width: 100%;
    width: 100%;
    height: 100%;
    min-height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--border-radius-xl);
  }
`;

const SlideCount = styled.div`
  position: absolute;
  bottom: var(--margin-lg);
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--light);
  border-radius: 8px;
  padding: calc(var(--padding-sm) / 2) var(--padding-sm);
  font-size: 14px;
  opacity: 0.5;
  transition: 0.3s ease;
  z-index: 1000;

  &:hover {
    opacity: 1;
  }
`;

const NavButtons = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    padding: 0;
    border-radius: 50%;
    width: 30px;
    height: 30px;

    &:hover {
      background-color: var(--blue);
    }

    svg {
      color: #fff;
      transition: color 0.3s ease;
    }

    &[disabled] {
      opacity: 0.3;
      pointer-events: none;
    }

    &:first-of-type {
      left: 0;
    }
    &:last-of-type {
      right: 0;
    }
  }
`;

const ContentWrapper = styled.div`
  padding: var(--padding-lg);
  text-align: center;
  margin: 0 0 calc(var(--margin-lg) * 2) 0;
  border-radius: 0 0 var(--border-radius-xl) var(--border-radius-xl);
  display: flex;
  overflow: hidden;
  @media screen and (min-width: 700px) {
    margin-bottom: 0;
    border-radius: 0 var(--border-radius-xl) var(--border-radius-xl) 0;
    width: 50%;
  }
`;

const ContentDescription = styled.div`
  padding: var(--padding-lg);

  h3 {
    color: var(--dark-blue);
    text-transform: uppercase;
    font-size: 16px;
    margin-bottom: var(--margin-lg);
  }

  p {
    font-size: 16px;
    color: var(--dark-blue);
  }

  @media screen and (min-width: 700px) {
    margin-top: auto;
  }
`;

const ContentPills = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
  flex-wrap: wrap;
`;

const ContentContainer = styled.div`
  flex-shrink: 0;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  transition: 0.3s ease;
  width: 100%;

  &[aria-hidden="true"] {
    opacity: 0;
    visibility: hidden;
    order: 2;
  }
  &[aria-hidden="false"] {
    order: 1;
    opacity: 1;
    visibility: visible;
  }
`;

const SliderContainer = styled.div`
  background-color: var(--light-grey);
  border-radius: var(--border-radius-xl);
  @media screen and (min-width: 700px) {
    display: flex;
    height: 400px;
  }
`;

const Gallery: React.FC<GalleryProps> = ({ images, id }) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  return (
    <GalleryWrapper id={id}>
      <SectionHeading title="Gallery" />
      <SliderContainer>
        <SlidesWrapper>
          <Slides
            style={{ transform: `translateX(calc(-100% * ${activeSlide}))` }}
          >
            {images.map((image) => (
              <Slide key={Math.random().toString(36).substring(2, 7)}>
                <Image
                  loading="eager"
                  src={image.src}
                  layout="fill"
                  alt={image.alt}
                />
              </Slide>
            ))}
          </Slides>
          <SlideCount>{`${activeSlide + 1} / ${images.length}`}</SlideCount>
          <NavButtons>
            <Button
              margin="sm"
              onClick={() => {
                setActiveSlide(activeSlide - 1);
              }}
              disabled={activeSlide === 0}
            >
              <BsArrowLeft size={30} />
            </Button>
            <Button
              margin="sm"
              onClick={() => {
                setActiveSlide(activeSlide + 1);
              }}
              disabled={activeSlide === images.length - 1}
            >
              <BsArrowRight size={30} />
            </Button>
          </NavButtons>
          <div className="pagination" />
        </SlidesWrapper>
        <ContentWrapper>
          {images.map((image, index) => (
            <ContentContainer
              key={Math.random().toString(36).substring(2, 9)}
              aria-hidden={index !== activeSlide}
            >
              <ContentDescription>
                <h3>{image.title}</h3>
                {image.description.map((line) => (
                  <p key={Math.random().toString(36).substring(2, 9)}>{line}</p>
                ))}
              </ContentDescription>
              <ContentPills>
                {images[activeSlide].interest.map((label) => (
                  <Badge
                    color="blue"
                    key={Math.random().toString(36).substring(2, 9)}
                    label={label}
                  />
                ))}
              </ContentPills>
            </ContentContainer>
          ))}
        </ContentWrapper>
      </SliderContainer>
    </GalleryWrapper>
  );
};

export { Gallery };
