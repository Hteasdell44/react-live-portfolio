import React, { useRef, useState } from 'react';
import "../../css/Contact.css";
import emailjs from 'emailjs-com';

export default function Contact() {

  const [formState, setFormState] = useState({name: "", email: "", subject: "", message: ""});
  const [submitResponse, setsubmitResponse] = useState("");
  const formRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
    ...formState,
    [name]: value,
    });
};

const sendEmail = async (event) => {

  event.preventDefault();

  const email = await emailjs.sendForm('service_zp6nai4', 'template_6amq1m9', event.target, 'IVAq6fJqZJenhQh0F');

  setsubmitResponse(`Message Sent!`);

  formRef.current.reset();

}


  return (

    <div id="contact">

      <h1 className="title">Contact Me</h1>

      <form onSubmit={sendEmail} ref={formRef}>

          <label>Name:</label> <input type="text" class="small-input-field" onChange={handleChange} name='name' /> <br/>
          <label>Email:</label> <input type="email" pattern="\A[A-Z0-9+_.-]+@[A-Z0-9.-]+\Z" class="small-input-field" onChange={handleChange} name='email'/> <br/>
          <label>Subject:</label> <input type="text" class="small-input-field" onChange={handleChange} name='subject' /> <br/>
          <label>Message:</label> <textarea id="text" onChange={handleChange} name='message'></textarea> <br/>
          <input type="submit" value="Submit" id="submit-button"/>
          {submitResponse && (<h4 id="submit-response">{submitResponse}</h4>)}
      </form>

      

    </div>
  );
}
