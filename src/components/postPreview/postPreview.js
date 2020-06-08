import React from "react";
import { Link } from "gatsby";

const PostPreview = ({ post }) => {
  console.log(post);
  return (
    <article>
      <Link to={`/blog/${post.slug}`}>
        {/* <Image fluid={post.image.sharp.fluid} /> */}
      </Link>
      <div>
        <h3>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
        <Link to={`/blog/${post.slug}`}>read this post &rarr;</Link>
      </div>
    </article>
  );
};

export default PostPreview;
