import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useSiteMetadata } from "../hooks/use-site-metadata";

// , description, pathname, children
const Seo = ({ title }) => {
  // const data = useSiteMetadata();
  // console.log(data);

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <title>
      {title} | {data.site.siteMetadata.title}
    </title>
  );
};

export default Seo;
