import React from 'react';
import "../../css/Contact.css";

export default function Contact() {

  return (

    <div id="contact">

      <h1>Contact Me</h1>

      <form>

          <label>Name:</label> <input type="text" class="small-input-field" /> <br/>
          <label>Email:</label> <input type="email" pattern="\A[A-Z0-9+_.-]+@[A-Z0-9.-]+\Z" class="small-input-field" /> <br/>
          <label>Subject:</label> <input type="text" class="small-input-field"/> <br/>
          <label>Message:</label> <textarea id="text" name="text"></textarea> <br/>
          <input type="submit" value="Submit" id="submit-button"/>

      </form>

    </div>
  );
}
