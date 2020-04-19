import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { rhythm } from "../../utils/typography";
import styles from "./Bio.module.css";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/pic_of_my_dog.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  return (
    <div className={styles.bio}>
      <div>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={`${author}'s dog`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`
          }}
          imgStyle={{
            borderRadius: `50%`
          }}
        />
        <p>
          Hi, my name is <strong>{author}</strong> and I'm a Fullstack web
          developer out of the bay area. I'm proficient in JavaScript, CSS, and
          HTML (quite typical). Areas I'm interested in are applying functional
          programming principles to the front-end via the use of Observables
          with RxJS and composing/piping. I have a nack for making websites
          intuitive while also looking nice. Still, I see the need for better
          handling of async actions such as modals that fetch data when opened
          but fail but don't handle canceling itself.
        </p>
      </div>
      <hr></hr>
      <p>
        <a href={`https://twitter.com/${social.twitter}`}>My Twitter</a>
      </p>
    </div>
  );
};

export default Bio;
