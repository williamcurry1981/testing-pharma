import React, { useState } from 'react';
import './labtest.css';
import successIcon from '../../../assets/success.png';
import errIcon from '../../../assets/error.png';

const LabTest = () => {
    const [msg, setNotification] = useState(404)
    const handleSubmit = (e) => {
        e.preventDefault()
        setNotification(401)
    }
    return (
        <section id="verify-lab-test" className="lab-test">
            <h2 className="title">
                VERIFY A LAB TEST HERE
            </h2>
            <div className="container">
                <div className="text-box">
                    <p>Copy the ORDER NUMBER (seen in the top left part of the lab test) in the area below. Then click the “VERIFY LAB TEST” button. A verified or rejected message will be shown. All information on this website is directly connected to our database. If you believe there is an error, you may contact us. For new lab tests, allow up to 24 hours after test results have been emailed for it to properly verify on the website.</p>
                </div>
                <form onSubmit={handleSubmit} className="verify-test">
                    <input type="text" required placeholder='Copy Order Number Here ' />
                    <button>{"VERIFY LAB TEST (CLICK ME)"}</button>
                </form>
                {msg === 200 && <div className="lab-notification">
                    <div className="lab-notify-icon">
                        <img src={successIcon} alt="" />
                    </div>
                    <h4>THIS LAB TEST IS VERIFIED.</h4>
                </div>}
                {msg === 401 && <div className="lab-notification lab-notification-error">
                    <div className="lab-notify-icon">
                        <img src={errIcon} alt="" />
                    </div>
                    <h4>{`THE ORDER NUMBER IS REJECTED. THIS DOESN’T EXIST.`}</h4>
                </div>}
            </div>
        </section>
    )
}

export default LabTest