import '../styles/Contact.css'
import { bannerData } from '../data'
import SocialIcon from './SocialIcon';
import React, { useState } from 'react';
import axios from 'axios';

//used https://formspree.io/
const Contact = () => {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    });
    const [inputs, setInputs] = useState({
        email: '',
        message: '',
    });
    const handleServerResponse = (ok, msg) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg },
            });
            setInputs({
                email: '',
                message: '',
            });
        } else {
            setStatus({
                info: { error: true, msg: msg },
            });
        }
    };
    const handleOnChange = (e) => {
        e.persist();
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null },
        });
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
        axios({
            method: 'POST',
            url: 'https://formspree.io/f/mvonqjzr',
            data: inputs,
        })
            .then((response) => {
                handleServerResponse(
                    true,
                    'Thank you, your message has been submitted.',
                );
            })
            .catch((error) => {
                handleServerResponse(false, error.response.data.error);
            });
    };
  return (
      <div className="section contact" id="contact">
          <div className="container">
              <div className="sec-title-wrap">
                  <h1 className="section-title">Contact Me</h1>
              </div>
              <div className="d-flex flex-wrap justify-content-between">
                  <div className="contact-details" data-aos="fade-up">
                      <div className="contact-wrap">
                          <div className="contact-det-title">Email</div>
                          <p><a href='&#109;ailto&#58;c&#104;i&#37;72%6&#49;g&#46;wa%67he%6C&#97;&#55;&#53;&#57;&#37;34&#64;&#103;mail%2Ecom'>chirag&#46;wagh&#101;&#108;&#97;7594&#64;gmai&#108;&#46;com</a></p>
                      </div>
                      <div className="contact-wrap">
                          <div className="contact-det-title">Feeling Lazy</div>
                          <p><a href="assets\chirag-waghela-resume.pdf" download>Download Resume</a></p>
                      </div>
                      <div className="contact-wrap">
                          <div className="contact-det-title">Social Network</div>
                          <ul className="social">
                              {bannerData.socialIcon.map((social, index) => (
                                  <SocialIcon data={social} key={index} />
                              ))}
                          </ul>
                      </div>
                  </div>
                  <div className="contact-form-wrap" data-aos="fade-up">
                      <form onSubmit={handleOnSubmit} id="contact-form">
                          <div className='input-wrap'>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                name="_replyto"
                                onChange={handleOnChange}
                                required
                                value={inputs.email}
                                className={'form-control'}
                                placeholder="Email ID"
                            />
                          </div>
                          <div className='input-wrap'>
                            <label htmlFor="message">Message</label>
                            <textarea
                                style={{height:'120px'}}
                                id="message"
                                name="message"
                                onChange={handleOnChange}
                                required
                                value={inputs.message}
                                className={'form-control'}
                                placeholder="Message"
                            />
                          </div>
                          <button type="submit" disabled={status.submitting} id="submit">
                              {!status.submitting
                                  ? !status.submitted
                                      ? 'Submit'
                                      : 'Submitted'
                                  : 'Submitting...'}
                          </button>
                      </form>
                      {status.info.error && (
                          <div className="info-message">Error: {status.info.msg}</div>
                      )}
                      {!status.info.error && status.info.msg && <p className="info-message">{status.info.msg}</p>}
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Contact