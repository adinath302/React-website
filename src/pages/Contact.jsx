import React from 'react'

const Contact = () => {
  const handleFormSubmuit = (formData) => { // to get form data from form and send it to backend for processing 
    // console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
    console.log( formInputData);
  }

  return (
    <section className='section-contact'>
      <h2 className='container-title '>Contact Us</h2>
      <div className='contact-wrapper container'>

        <form action={handleFormSubmuit}> // to get form data from form and send it to backend for processing
          <input
            type="text"
            required
            autoComplete='off'
            placeholder='Enter your name'
            name="username"
          />
          <input
            type="email"
            required
            autoComplete='off'
            placeholder='Enter your email'
            name="email"
            className='form-control'
          />
          <textarea
            className='form-control'
            name="messages"
            rows="10"
            placeholder='Enter your message'
            required
            autoComplete='off'
          ></textarea>
          <button className='!m-auto' type='submit' value="send">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;