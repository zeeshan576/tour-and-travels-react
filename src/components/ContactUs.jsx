import { useState } from 'react'
import './ContactUs.css'

function ContactUs() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        e.target.reset()
        setSubmitted(true)

        setTimeout(() => {
            setSubmitted(false)
        }, 3000)
    }

    return (
        <div className='form-container'>
            <h1>Send a message to us!</h1>

            <form onSubmit={handleSubmit}>
                <input placeholder='Name' />
                <input placeholder='Email' />
                <input placeholder='Subject' />
                <textarea placeholder='Message' rows={4}></textarea>

                <button type='submit'>Send Message</button>
            </form>

            {submitted && (
                <p className='success-message'>
                    Message submitted successfully!
                </p>
            )}
        </div>
    )
}

export default ContactUs