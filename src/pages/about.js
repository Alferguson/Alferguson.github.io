import React from "react";
import { TransitionState } from "gatsby-plugin-transition-link";
import styles from "./about.module.css";
import "../components/layout/animation.css";

export default () => {
  const path = window.location.pathname;

  return (
    <TransitionState>
      {({ transitionStatus }) => (
        <section
          className={`
              ${styles.aboutSection} 
              ${transitionStatus === "entering" ? "fadeIn" : ""} 
              ${transitionStatus === "exiting" ? "fadeOut" : ""}
            `}>
          <h3 className={styles.aboutHeader}>About Me</h3>
          <p>
            Born and raised in the Bay Area, I saw first hand how the influx of
            the tech scene changed my local surroundings, so I decided to join
            in :). Currently, I am a Software Developer with an emphasis on web
            technologies in San Francisco, just 15 minutes south of where I was
            born.
          </p>
          <p>
            Growing up, I was fixated on sports, mainly difficult ones like
            wrestling, boxing, and water polo since I thought getting my ass
            handed to me would make me a better individual. Still, I always had
            a soft spot for electronics, mainly trying to get programs to run on
            my pc like random Battlefield 2 and Half Life 2 mods.
          </p>
          <p>
            {" "}
            While I didn't do much coding when I was younger, I was tinkering
            with different programs to the point where I made a calculator in
            visual basic to prove my friend I could. It wasn't until halfway
            through my nutrition major at UC Berkeley that I truly started to
            code. Judging whether to go down a dietetic route or medical school,
            I worked on an HIV study that gave me first hand exposure to the
            aspects of a clinical study in a hospital environment. There, I
            worked heavily in Excel where I developed marcos to analyze our
            data. Near the end of my 4 years at Berkeley, I was a food science
            intern at eatsa, an automated restaurant startup. My title could be
            argued was a lie though as again, I spent most of my time in Excel
            creating macros and even doing some Java with some colleagues.
          </p>
          <p>
            After I graduated Berkeley, I was supposed to go to Montana to
            complete a dietetic internship to become, well, a dietitian. Since I
            now had free time between graduation and going to Montana, I
            pondered why I enjoyed dietetics and realized that I didn't. While
            the science behind nutrition interested me, the application of it
            did not. Working in Hospitals is grueling and while I could do it,
            it was not what I wanted. I worked with several patients and doctors
            that changed my outlook of life positively; they taught me life
            skills that I don't think many people come across so I do not regret
            choosing this path initially rather than going for computer science
            straight off the bat. Deciding not to go to Montana did leave me in
            position of uncertainty.
          </p>
          <p>
            I started applying for lab tech roles only to find out that most of
            them expected grave yard shifts and low pay. It wasn't until my Dad
            told me "Maybe try out that computer thing, seems to be a good
            career and you're always on it anyway" that I shifted my focus quite
            drastically. He recommended I go to a coding bootcamp hosted by the
            UC Berkeley Extension since it offered a discount for alumni. I
            originally disregarded it since I didn't hold coding bootcamps in
            high esteem. However, this one was different. 1st, it was cheaper,
            2nd, it didn't promise anything; it was tailored towards people who
            were already established in their careers but wanted a switch rather
            than complete newbies to the job market. This way, it felt more
            mature and honest. A few weeks after my Dad suggested it, I applied
            for it and got in. I completed it, acquired a job as a teaching
            assistant, and started my coding journey.
          </p>
          <p>
            My primary scripting language is Javascript and I do well with web
            technologies along with Node.js. That said, since I come from a
            bootcamp, I always felt I had to prove myself. Therefore, I try to
            expand into other areas that are more associated with academia. I
            study algorithms and data structures relentlessly, and while my job
            doesn't utilize them, too much, I understand how to apply Big O
            Notation to my code and various advanced coding techniques. When I
            learn, I understand that initially, I may be uncomfortable with it.
            This doesn't push me away, it actually pulls me in. I enjoy learning
            abstract topics like category theory and applying it in a functional
            programming manner. While not everything I learn is applicable to my
            job, it gives me perspective and I can make better decisions because
            of it. Still, at the end of the day, I have a strong sense of what
            needs to be completed and how that is important for not only my team
            and the company, but the end user as well. I enjoy coding both for
            work and in my off time and while I don't contribute to open-source
            as much as I should, I can safely say that my switch to becoming a
            computer programmer is the best one I've ever made.
          </p>
          <p>
            Otherwise, some of my hobbies include hanging with friends and
            coworkers, calisthenics, watching MMA and boxing, and engrossing
            myself in random mathematic and CS PhD twitter users to see what the
            latest research is saying.
          </p>{" "}
          <p>
            Thanks for reading a snippet about my life! In case you think its
            too much, well yeah, its an about me segment and I don't feel like
            writing "A software engineer who makes great websites" was good
            enough. If you want that, I would recommend reading my resume since
            that is purposely condensed and here on my portfolio, I try to be
            more personal since I am a personal individual. I value interaction
            and while I do like to work remotely from time to time, I prefer
            being surrounded by people and having comradery as a team.
          </p>
        </section>
      )}
    </TransitionState>
  );
};
