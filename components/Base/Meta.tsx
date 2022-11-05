import Head from "next/head";
import React from "react";

interface MetaProps {
  title: string;
  description: string;
  url: string;
  favicon?: string;
  siteName?: string;
  image?: string;
  creator?: string;
}

const Meta: React.FC<MetaProps> = ({
  url,
  title,
  description,
  siteName,
  favicon,
  image,
  creator,
}) => (
  <Head>
    <meta name="robots" content="index, follow" />
    <title>{title}</title>
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:creator" content={creator} />
    <meta name="twitter:site" content="@ascenders_in" />
    <meta property="og:title" content={title} />
    <meta name="description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={siteName} />
    <link rel="icon" href={favicon || "/favicon.ico"} />
    <meta property="og:image" content={image} />
  </Head>
);

Meta.defaultProps = {
  favicon: "./favicon.ico",
  siteName: "Ascenders, Go Beyond",
  image: `${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/random/ascenders-social-share.jpeg`,
  creator: "@ascenders_in",
};

export default Meta;
