import React from 'react';
import Helmet from 'react-helmet';

const BlogTemplate = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* <title>{title}</title> */}
        {/* <meta name="description" content={description} /> */}
      </Helmet>
      <Header />
      <main>
        {children}
      </main>
    </>
  );
};

export default BlogTemplate;
