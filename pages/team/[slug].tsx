import { Header } from "@/components/Header";
import { GetStaticPaths, GetStaticProps } from "next";
import { Staff } from "types/data.types";
import Head from "next/head";
import { staff } from "data/staff";

interface TeamMemberPageProps extends Staff {}

const TeamMemberPage: React.FC<TeamMemberPageProps> = ({ name, role }) => (
  <main role="main">
    <Head>
      <title>{`About ${name} | ${role} | Staff | Ascenders | Go Beyond | H.E.A.L`}</title>
      <meta
        name="description"
        content={`About ${name} | ${role} | Staff | Ascenders | Go Beyond | H.E.A.L`}
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header pageType="info" heading={name} />
  </main>
);

export default TeamMemberPage;

// Generate all our static paths using our destinations and their slugs
export const getStaticPaths: GetStaticPaths = async () => {
  const output = {
    paths: staff.map((person) => ({
      params: { slug: person.slug },
    })),
    fallback: false,
  };
  return output;
};

// Generate the static props to pass to the page component
export const getStaticProps: GetStaticProps = async (context) => {
  const staffObject = staff.find(
    (person) => person.slug === context?.params?.slug
  );

  // No object so we don't need props for now
  if (!staffObject) {
    return {
      props: {},
    };
  }
  // Got object so pass it down as a prop
  return {
    props: {
      ...staffObject,
    },
  };
};
