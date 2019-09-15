import React from "react";
import { graphql } from "gatsby";
import PageTemplate from "../components/PageTemplate";
import SEO from "../components/seo";

const NotFoundPage = props => {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <PageTemplate location={props.location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist 😕</p>
    </PageTemplate>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
