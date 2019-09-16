import React from "react";
import { graphql } from "gatsby";
import Bio from "../components/Bio";
import SEO from "../components/seo";
import PageTemplate from "../components/PageTemplate";

const Index = props => {
  const siteTitle = props.data.site.siteMetadata.title;
  return (
    <PageTemplate location={props.location} title={siteTitle}>
      <SEO title="Home" />
      <Bio />
    </PageTemplate>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
