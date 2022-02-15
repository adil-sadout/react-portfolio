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
        <div className="contactPage-container container d-flex justify-content-center py-5 align-items-center flex-column">
            <h1>Contact Form</h1>
            <form className="contactPage-form container-fluid" onSubmit={submitForm}>
                <div className="d-flex flex-column">
                    <label htmlFor="name"  className="pt-3" >
                        Name*
                    </label>
                    <input type="text" name="name" className="rounded border-0" value={formInfo.name} onChange={valueChanged} required/>
                </div>

                <div className="d-flex flex-column">
                    <label htmlFor="company"  className="pt-3" >
                        Company*
                    </label>
                    <input type="text" name="company" className="rounded border-0" value={formInfo.company} onChange={valueChanged} required/>
                </div>

                <div className="d-flex flex-column">
                    <label htmlFor="email"  className="pt-3" >
                        E-mail Address*
                    </label>
                    <input type="email" name="email" className="rounded border-0" value={formInfo.email} onChange={valueChanged} required/>
                </div>

                <div className="d-flex flex-column">
                    <label htmlFor="message"  className=" pt-3" >
                        Message* (limit= 500 char)
                    </label>
                    <textarea className="rounded border-0" rows = "10"  maxLength = "500" type="text" name="message" value={formInfo.message} onChange={valueChanged} required/>
                </div>

                <input className="defaultbutton btn btn-warning container-fluid my-3 btn-lg" type="submit" value="Send"/>
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