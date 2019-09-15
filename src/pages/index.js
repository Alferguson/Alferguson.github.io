import React from "react";
import { graphql } from "gatsby";
import Bio from "../components/Bio";
import SEO from "../components/seo";
import PageTemplate from "../components/PageTemplate";

const BlogIndex = () => {
  return (
    <PageTemplate>
      <SEO title="Home" />
      <Bio />
    </PageTemplate>
  );
};

export default BlogIndex;

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
