import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Seo from "../../components/seo";

// data: graphql result ; children: mdx content
const BlogPost = ({ data, children }) => {
  // console.log(props);
  // const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>Posted: {data.mdx.frontmatter.date} </p>
      {/* <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} /> */}
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
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
      }
    }
  }
`;

// remember to access the data property via props!!!
export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;

// hero_image {
//   childImageSharp {
//     gatsbyImageData
//   }
// }
