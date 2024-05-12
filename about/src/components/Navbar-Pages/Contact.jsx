import NavOptions from "../Navbar"
import Footer from '../Footer';
import '../contact.css'
import { useState } from 'react';

export default function Contact() {

    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        comment: "",
    });

    const contactEvent = (e) => {
        const {name, value} = e.target
        setContactData({
            ...contactData,
            [name]: value
        })
    };

    const submitContact = (e) => {
        e.preventDefault();
    }

    return(
        <>
         <NavOptions/>

         <iframe src="https://giphy.com/embed/2OHYMJGnGoiVjVg55P" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/AlphaESS-cat-cute-thanks-2OHYMJGnGoiVjVg55P"></a></p>
         <div className="d-flex flex-column align-items-center">
            <div className="align-items-center justify-content-center">
                <h1 className="ms-3 mt-2">Contact</h1>
            </div>
            <form on Submit = {submitContact}>
            <div className = 'd-flex flex-column align-items-start'>
                <label htmlFor="name">Name</label>
                <input
                type="text"
                id="name"
                name="name"
                value={contactData.name}
                onChange={contactEvent}
                required />
            </div>
            <div className="d-flex flex-column align-items-start mt-3">
                <label htmlFor="email">Email</label>
                <input
                type="text"
                id="email"
                name='email'
                value={contactData.email}
                onChange={contactEvent}
                required />
            </div>
            <div className="d-flex flex-column align-items-start mt-3">
            <label htmlFor="comment">Comment</label>
            <textarea
            id="comment"
            name='comment'
            value={contactData.comment}
            onChange={contactEvent}
            required>
            </textarea>
            </div>
            <div>
                <button className="submitBtn d-flex mx-auto mt-4 shadow" type="submit" >SUBMIT</button>
            </div>
                </form>

         </div>

         <Footer />
        </>

        
    )
}