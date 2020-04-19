import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import PageTemplate from "../components/PageTemplate";

const Contact = props => {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <PageTemplate location={props.location} title={siteTitle}>
      <SEO title="Contact Me" />
      <p>Contact me!!!!</p>
    </PageTemplate>
  );
};

export default Contact;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
