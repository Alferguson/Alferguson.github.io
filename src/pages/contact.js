import React, { useState } from "react";
import Layout from "../components/layout";
import FormInput from "../components/formInput";
import styles from "./contact.module.css";

export default () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Layout>
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
    </Layout>
  );
};
