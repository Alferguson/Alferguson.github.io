import React, { useState } from "react";
import { TransitionState } from "gatsby-plugin-transition-link";
import FormInput from "../components/formInput";
import Parallelogram from "../components/parallelogram";
import Submit from "../components/submit";
import styles from "./contact.module.css";
import "../components/layout/animation.css";

export default () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <TransitionState>
      {({ transitionStatus }) => (
        <section
          className={`
           ${transitionStatus === "entering" ? "fadeIn" : ""} 
           ${transitionStatus === "exiting" ? "fadeOut" : ""}
         `}>
          <h2 className={styles.contactHeader}>Hit me up</h2>
          <form>
            <Parallelogram>
              <FormInput placeholder="Name" value={name} setValue={setName} />
            </Parallelogram>
            <Parallelogram>
              <FormInput
                placeholder="Email"
                value={email}
                setValue={setEmail}
              />
            </Parallelogram>
            <Parallelogram>
              <FormInput
                placeholder="Message"
                value={message}
                setValue={setMessage}
                textarea={true}
              />
            </Parallelogram>
            <Submit text="SUBMIT" />
          </form>
        </section>
      )}
    </TransitionState>
  );
};
