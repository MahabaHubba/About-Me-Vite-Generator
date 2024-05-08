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
                
            </div>
                </form>

         </div>

         <Footer />
        </>

        
    )
}