import React from 'react'
import PropTypes from 'prop-types'

export const AboutMeText = props => {
  return (
    <div>
      <h2>Hi</h2>
      <p>I'm a fullstack web developer that enjoys being confused by CSS and JavaScript! Primarily, I work with React and the various tools associated with React such as Redux and React-Router.</p>
      <p>On one end, I deal with the architecture of websites and how to encorporate their components in a functional paradigm rather than oop.</p>
      <p>On the other end, I work with CSS to create some decent animations and HTML to create accessible designs for anyone to enjoy.</p>
      <p>Mainly I do front-end coding with vanilla JavaScript or React but I know how to create server-side web apps with Next.js, Pug, or Handlebar). For back-end, I use Node.js
        with Express for most of my APIs and server-rendering. I have dabbled with Golang and I translate C# apps to Node.js
        a lot too. One of my main goals is to understand WebAssembly since it seems to be a game changer.
      </p>
      <p><a href={"../../assets/jafResume.pdf"} download>Download my Resume (PDF)</a></p>
    </div>
  )
}

AboutMeText.propTypes = {

}