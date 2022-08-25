import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
// import { Link } from "gatsby";
// import * as React from "react";t'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Testing for layout component</p>
      <StaticImage
        alt="pitbull"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
      {/* <StaticImage alt="pitbull" src="../images/icon.png" /> */}
    </Layout>
  );
};

// const IndexPage = () => {
//   return (
//     <main>
//       <h1>Welcom to Gatsby</h1>
//       <Link to="/about">About</Link>
//     </main>
//   );
// };

export const Head = () => <Seo title="Home" />;

export default IndexPage;
