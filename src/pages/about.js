//
import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Testing from "../components/Testing/testing";

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>This is the about page</p>
      <Testing />
    </Layout>
  );
};

// function AboutPage() {
//   return (
//     <div>
//       <h1>About</h1>
//       <Link to="/">Home</Link>
//     </div>
//   );
// }

// config page meta
export const Head = () => <title>About Me</title>;

export default AboutPage;
