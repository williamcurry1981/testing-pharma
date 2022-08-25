import React, { useEffect, useState } from 'react';
import './labtest.css';
import successIcon from '../../../assets/success.png';
import errIcon from '../../../assets/error.png';
import { orderNumber } from '../../../db/db';

const LabTest = () => {
    const [msg, setNotification] = useState(0);
    const [search, setSreach] = useState('');
    const [err, setErr] = useState(false);
    const handleSubmit = () => {
        if (search== "") {
            setErr(true);
            setTimeout(() => setErr(false), 4000)
        }
        else {
            let find = orderNumber.filter(item => item.toLowerCase() == search.toLowerCase()).length > 0;
            if (find) {
                setNotification(200);
            }
            else {
                setNotification(401);
            }
        }
    }
    useEffect(()=>{
        if(search==""){
            setNotification(0)
        }
    },[search])
    return (
        <section id="verify-lab-test" className="lab-test">
            <div className="section-title">
                <div className="container">
                    <h2 className="title">VERIFY A LAB TEST HERE</h2>
                </div>
            </div>
            <div className="labTest-content-wrapper">
                <div className="container">
                    <div className="text-box">
                        <p>Copy the ORDER NUMBER (seen in the top left part of the lab test) in the area below. Then click the “VERIFY LAB TEST” button. A verified or rejected message will be shown. The customer name shown below should match the name on the report, too. If you believe there is an error, you may contact us. For new lab tests, allow up to 24 hours after test results have been emailed for it to properly verify on the website.</p>
                    </div>
                    <div className="verify-test">
                        <input onChange={(e) => setSreach(e.target.value)} name="search-test" type="text" placeholder='Copy Order Number Here ' />
                        <button onClick={() => handleSubmit()}>{"VERIFY LAB TEST (CLICK ME)"}</button>
                        {err && <div className="lab-emty-field-notification">
                            <p>{`Please fill out the field.`}</p>
                        </div>
                        }
                    </div>

                    {msg === 200 && <div className="lab-notification">
                        <div className="lab-notify-icon">
                            <img src={successIcon} alt="" />
                        </div>
                        <p>{`THIS LAB TEST IS 2022 VERIFIED FOR CUSTOMER “AUCTUS PHARMA GROUP”`}</p>
                    </div>}
                    {msg === 401 && <div className="lab-notification lab-notification-error">
                        <div className="lab-notify-icon">
                            <img src={errIcon} alt="" />
                        </div>
                        <p>{`THE ORDER NUMBER IS REJECTED. THIS DOESN’T EXIST.`}</p>
                    </div>}
                </div>
            </div>
        </section>
    )
}

export default LabTest