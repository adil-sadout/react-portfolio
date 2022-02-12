


export default function ContactPage(){
    return(
        <div className="contactPage-container">
            <h1>Contact Form</h1>
            <form className="contactPage-form">
                <div>
                    <label htmlFor="name" >
                        Name*
                    </label>
                    <input type="text" name="name" required/>
                </div>

                <div>
                    <label htmlFor="company" >
                        Company*
                    </label>
                    <input type="text" name="company" required/>
                </div>

                <div>
                    <label htmlFor="email" >
                        E-mail Address*
                    </label>
                    <input type="email" name="email" required/>
                </div>

                <div>
                    <label htmlFor="message" >
                        Message* (limit= 500 char)
                    </label>
                    <textarea rows = "10"  maxLength = "500" type="text" name="message" required/>
                </div>

                <button className="defaultbutton">Send</button>
            </form>
        </div>
    )
}