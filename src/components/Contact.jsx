import { useEffect } from 'react'
import '../styles/Contact.css'
import $ from 'jquery';
import { bannerData } from '../data'
import SocialIcon from './SocialIcon';

const Contact = () => {
    useEffect(() => {
        $("#submit").click(function (event) {
            event.preventDefault();
            var name = $('#contact_name');
            var is_name = name.val();
            if (is_name) {
                name.parent().removeClass("invalid").addClass("valid");
                var email = $('#contact_email');
                var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                var is_email = re.test(email.val());
                if (is_email) {
                    email.parent().removeClass("invalid").addClass("valid");
                    var pnum = $('#contact_number');
                    var re = /([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})/;
                    var is_num = re.test(pnum.val());
                    if (is_num) {
                        pnum.parent().removeClass("invalid").addClass("valid");
                        var msg = $('#contact_message');
                        var message = msg.val();
                        if (message) {
                            msg.parent().removeClass("invalid").addClass("valid");
                            let contactForm = document.querySelector("#contact-form");
                            const formData = new FormData(contactForm);
                            fetch(contactForm.getAttribute('action'), {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
                                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                                },
                                body: new URLSearchParams(formData).toString()
                            })
                                .then(res => {
                                    if (res) {
                                        alert('Your message was sent successfully! I will be in touch as soon as I can.')
                                        $("form").each(function () {
                                            $(this).find(':input').val('');
                                            $(this).find(':input').parent().removeClass('valid');
                                        });
                                    }
                                });
                        }
                        else {
                            msg.parent().removeClass("valid").addClass("invalid");
                        }
                    }
                    else {
                        pnum.parent().removeClass("valid").addClass("invalid");
                    }
                }
                else {
                    email.parent().removeClass("valid").addClass("invalid");
                }
            }
            else {
                name.parent().removeClass("valid").addClass("invalid");
            }
        });
    },[])

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
                      <form className="contact-bg" id="contact-form" name="contact" method="POST" noValidate="novalidate" data-netlify="true" >
                          <div className="input-wrap">
                              <label htmlFor="contact_name">Your Name. </label>
                              <input type="text" name="name" className="form-control" id="contact_name" placeholder="Your Name" />
                              <span className="error">This field is required</span>
                          </div>
                          <div className="input-wrap">
                              <label htmlFor="contact_email">Your Email - ID. </label>
                              <input type="email" name="email" className="form-control" id="contact_email" placeholder="Your E-mail" />
                              <span className="error">This field is required</span>
                          </div>
                          <div className="input-wrap">
                              <label htmlFor="contact_number">Your Contact Number. </label>
                              <input type="number" name="number" className="form-control" id="contact_number" placeholder="Phone Number" maxLength="10" />
                              <span className="error">This field is required</span>
                          </div>
                          <div className="input-wrap">
                              <label htmlFor="contact_message">Your Message .</label>
                              <textarea name="message" className="form-control" placeholder="Your Message" style={{height:'120px'}} id="contact_message"></textarea>
                              <span className="error">This field is required</span>
                          </div>
                          <button id="submit" type="submit" name="submit" className="btn btn-glance form-btn">Send</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Contact