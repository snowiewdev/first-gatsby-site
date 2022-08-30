//
import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image"
import Testing from "../components/Testing/testing";

const AboutPage = () => {

  // let message:string = "Hello, world!";

  return (
    <Layout pageTitle="About">
      <p>This is the about page</p>
      {/* <p>{message}</p> */}
      <StaticImage src="../images/cat1.jpg" alt="kitty" placeholder="blurred"></StaticImage>
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
