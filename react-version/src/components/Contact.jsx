import '../styles/Contact.css'
const Contact = () => {
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
                              <li>
                                  <a href="https://www.linkedin.com/in/chirag-waghela/" target="_blank" rel="noopener" className="social-linkd">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path></svg>linkd</a></li>
                              <li>
                                  <a href="https://www.instagram.com/mr.waghela75/" target="_blank" rel="noopener" className="social-insta">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>instagram</a>
                              </li>
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