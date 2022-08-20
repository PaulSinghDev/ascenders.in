import { interests } from "data";
import { GetStaticPaths, GetStaticProps } from "next";
import { Interest } from "types/data.types";

const InterestPage: React.FC<Interest> = ({
  target,
  thumbnail,
  title,
  slug,
  description,
  gallery,
  level,
  id,
}) => (
  <div>
    <p>
      Title:
      {title}
    </p>
    <p>
      Slug:
      {slug}
    </p>
    <p>
      ID:
      {id}
    </p>
    <p>
      Description:
      {description}
    </p>
    <p>
      Level:
      {level}
    </p>
    <p>
      Thumbnail:
      {thumbnail}
    </p>
    <p>
      Target:
      {target}
    </p>
    <p>
      Gallery:
      {gallery}
    </p>
  </div>
);

export default InterestPage;

// Generate all our static paths using our interests and their slugs
export const getStaticPaths: GetStaticPaths = async () => {
  const output = {
    paths: interests.map((interest) => ({
      params: { slug: interest.slug },
    })),
    fallback: false,
  };
  return output;
};

// Generate the static props to pass to the page component
export const getStaticProps: GetStaticProps = async (context) => {
  const interestObject = interests.find(
    (interest) => interest.slug === context?.params?.slug
  );
  // No object so we don't need props for now
  if (!interestObject) {
    return {
      props: {},
    };
  }
  // Got object so pass it down as a prop
  return {
    props: {
      ...interestObject,
    },
  };
};
