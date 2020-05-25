import React, { useState } from "react";
import { TransitionState } from "gatsby-plugin-transition-link";
import FormInput from "../components/formInput";
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
           ${transitionStatus === "entering" && "fadeIn"} 
           ${transitionStatus === "exiting" && "fadeOut"}
         `}>
          <h2>Hit me up</h2>
          <form>
            <FormInput placeholder="Name" value={name} setValue={setName} />
            <FormInput placeholder="Email" value={email} setValue={setEmail} />
            <FormInput
              placeholder="Message"
              value={message}
              setValue={setMessage}
              textarea={true}
            />

            <button type="submit">Send to me</button>
          </form>
        </section>
      )}
    </TransitionState>
  );
};
