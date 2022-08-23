import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

// data: graphql result ; children: mdx content
const BlogPost = ({ data, children }) => {
  // console.log(props);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date} </p>
      {children}
    </Layout>
  );
};

// results fetched will be stored as data in props
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
      }
    }
  }
`;

// remember to access the data property via props!!!
export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;
