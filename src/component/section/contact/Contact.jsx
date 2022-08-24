import React, { useState } from 'react'
import './contact.css'
const Contact = () => {
    const [notify, setNotify] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
        setNotify(!notify)
    }
    return (
        <section id="contact" className="contact">
            <h2 className="title">Contact</h2>
            <form onSubmit={handleSubmit} className="container form-container">
                <div className="email-input-box">
                    <h4>Email</h4>
                    <input type="text" required placeholder='Type Your Email Here' />
                </div>
                <div className="subject-input-box">
                    <h4>Subject</h4>
                    <input type="text" required placeholder='Type Subject Here (ex. Need price quote)' />
                </div>
                <div className="message-input-box">
                    <h4>Message</h4>
                    <textarea cols="30" rows="10" required placeholder='Type Full Message or Inquiry Here'></textarea>
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