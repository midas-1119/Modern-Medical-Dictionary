import React from "react";

export default function Contact() {
  return (
    <>
      <h1>Contact Form</h1>
      <form action="">
        <label>Email</label>
        <input type="text" id="email" />

        <label>Message</label>
        <textarea name="message"> </textarea>
      </form>
    </>
  );
}
