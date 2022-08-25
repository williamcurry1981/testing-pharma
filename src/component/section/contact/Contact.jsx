import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'
const Contact = () => {
    const [notify, setNotify] = useState(false);

    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_f0m3wu9', 'template_agronki', form.current, "PoYsP6ao9MOD3DmjL")
            .then(function (res) {
                if (res.status == 200) {
                    setNotify(true);
                    form.current.reset();
                    setTimeout(() => setNotify(false), 3000)
                }
            }, function (err) {
                console.error(err)
                form.current.reset();
            });
    }

    return (
        <section id="contact" className="contact">
            <div className="section-title">
                <div className="container">
                <h2 className="title">Contact</h2>
                </div>
            </div>
            <form ref={form} onSubmit={handleSubmit} className="container form-container">
                <input hidden name='to_name' type="text" value="Testing-Pharma" />
                <div className="email-input-box">
                    <h4>Email</h4>
                    <input name='user_email' type="email" required placeholder='Type Your Email Here' />
                </div>
                <div className="subject-input-box">
                    <h4>Subject</h4>
                    <input name='subject' type="text" required placeholder='Type Subject Here (ex. Need price quote)' />
                </div>
                <div className="message-input-box">
                    <h4>Message</h4>
                    <textarea name='notes' cols="30" rows="10" required placeholder='Type Full Message or Inquiry Here'></textarea>
                    {notify &&
                        <div className="notification">
                            <h4>
                                Your message has been submitted. We will get back to you shortly.
                            </h4>
                        </div>
                    }
                </div>
                <div className="submit-button">
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </section>
    )
}

export default Contact