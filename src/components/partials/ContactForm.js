import React from 'react'

const ContactForm = () => {
  return (
    <div className="achievements">
        <div className="achievements__title">
            <h2>Leave me a message</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ratione quod, vel assumenda optio velit!</p>
        </div>

        <form style={{ display: 'flex'}} className='contact-form' id="contact-form">
            <div style={{flex: '1 1 0', paddingRight: '1em'}}>
                <input style={{marginTop: '2em', minWidth: '100%', borderRadius: '0px', padding:'0.5em', outline:'none', border:'1px solid gray'}} type="text" placeholder="Fullname" />
                <input style={{marginTop: '2em', minWidth: '100%', borderRadius: '0px', padding:'0.5em', outline:'none', border:'1px solid gray'}}  type="text" placeholder="Email address" />
                <input style={{marginTop: '2em', minWidth: '100%', borderRadius: '0px', padding:'0.5em', outline:'none', border:'1px solid gray'}}  type="text" placeholder="Phone number" />
            </div>
            <div style={{flex: '1 1 0', paddingLeft: '1em', display: 'flex'}}>
                <textarea style={{display: 'block', minWidth: '100%', minHeight: '5em', marginTop: '2em', padding: '0.5em', border:'1px solid gray'}} placeholder="Your message here"></textarea>
            </div>
        </form>
        <button form="contact-form" style={{display: 'block', minWidth: '100%', marginTop: '2em', marginBottom: '5em', border: 'none', backgroundColor:'var(--primary)', color: 'white', padding: '0.6em', cursor:'pointer'}} type="submit">Leave a message</button>
    </div>
  )
}

export default ContactForm
