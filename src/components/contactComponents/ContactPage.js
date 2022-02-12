import emailjs from "emailjs-com"
import { useState } from "react";


export default function ContactPage(){

    const [formInfo, setFormInfo] = useState({
        name:"",
        company:"",
        email:"",
        message:""
    })

    const [emailSent, setEmailSent] = useState(false)


    function valueChanged(e){
        const value = e.target.value;

        setFormInfo(
            {
                ...formInfo,
                [e.target.name] :value
            }
        )
    }


    function submitForm(e){
        e.preventDefault();
        
        setFormInfo({
            name:"",
            company:"",
            email:"",
            message:""
        })
        emailjs.sendForm(

        "service_3d93ef2",
        "template_nuyakuw",
        e.target,
        "user_3RNLAjdkUd92BfZN7nQgJ",

        )
        .then(res => {
            setEmailSent("email sent")
        })
        .catch(err => setEmailSent("email not sent"))
    }

    return(
        <div className="contactPage-container">
            <h1>Contact Form</h1>
            <form className="contactPage-form" onSubmit={submitForm}>
                <div>
                    <label htmlFor="name" >
                        Name*
                    </label>
                    <input type="text" name="name" value={formInfo.name} onChange={valueChanged} required/>
                </div>

                <div>
                    <label htmlFor="company" >
                        Company*
                    </label>
                    <input type="text" name="company" value={formInfo.company} onChange={valueChanged} required/>
                </div>

                <div>
                    <label htmlFor="email" >
                        E-mail Address*
                    </label>
                    <input type="email" name="email" value={formInfo.email} onChange={valueChanged} required/>
                </div>

                <div>
                    <label htmlFor="message" >
                        Message* (limit= 500 char)
                    </label>
                    <textarea rows = "10"  maxLength = "500" type="text" name="message" value={formInfo.message} onChange={valueChanged} required/>
                </div>

                <input className="defaultbutton" type="submit" value="Send"/>
            </form>

            {
                emailSent==="email sent" &&
                <p>
                    The email has been sent successfully
                </p>
            }
            {
                emailSent==="email not sent" &&
                <p>
                    An issue has occured, Please try later!
                </p>
            }
        </div>
    )
}