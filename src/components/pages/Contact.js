import React from 'react'

import AppLayout from '../layouts/AppLayout'
import ContactForm from '../partials/ContactForm'

const Contact = () => {
  return (
    <AppLayout>
      <div className="main-layout__content">
        <div className="main-layout__content__header">
          <div className="banner">
            <div className="banner__body">
              <h2 className="banner__body__title">
                Contact Berzel
              </h2>
              <h3 className="banner__body__sub-title">
                Keep in touch with Berzel
              </h3>

              <div className="banner__body__buttons">
                <a href="blog.html" className="btn scaled">Read the blog</a> <a href="video.html" className="btn">Watch videos</a>
              </div>
            </div>
          </div>
        </div>

        <div className="main-layout__content__body">
          <div className="contact">
            <div className="contact__social">
              <ul className="contact__social__items">
                <li className="contact__social__item"><a href="/"><i className="zmdi zmdi-facebook"></i></a></li>
                <li className="contact__social__item"><a href="/"><i className="zmdi zmdi-twitter"></i></a></li>
                <li className="contact__social__item"><a href="/"><i className="zmdi zmdi-youtube"></i></a></li>
                <li className="contact__social__item"><a href="/"><i className="zmdi zmdi-linkedin"></i></a></li>
                <li className="contact__social__item"><a href="/"><i className="zmdi zmdi-github"></i></a></li>
              </ul>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </AppLayout>
  )
}

export default Contact
