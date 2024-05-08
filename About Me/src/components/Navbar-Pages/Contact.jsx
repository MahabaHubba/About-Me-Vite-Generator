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
         <h1>hello welcome to my contact</h1>

         <Footer />
        </>

        
    )
}