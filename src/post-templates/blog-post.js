import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const PostTemplate = (
  { data: { mdx: post } } // destructuring to aliasing here
) => (
  <>
    <h1>{post.frontmatter.title}</h1>
    <p>Posted by author {post.frontmatter.author}</p>
    <MDXRenderer>{post.body}</MDXRenderer>
  </>
);

export default PostTemplate;
