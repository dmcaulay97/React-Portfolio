import React from "react";
import "../css/contact.css"

const notEmpty = (check, location, message) => {
    const field = document.getElementById(check);
    const warning = document.getElementById(location);
    if (field.value === "") {
        warning.textContent = message;
    } else {
        warning.textContent = ""
    }

}



const emailCheck = () => {
    notEmpty("email", "emailHelp", "The email field cannot be left blank.")
}

const nameCheck = () => {
    notEmpty("name", "nameHelp", "The name field cannot be left blank.")
}

const messageCheck = () => {
    notEmpty("message", "messageHelp", "The message field cannot be left blank")
}


function Contact() {
    return (
        <section className="container">
            <div className="row text-center">
                <h1 className="col-12 my-3 p-4 opaque">Contact</h1>
            </div>
            <div className="row" >
                <form className="col-4 opaque py-3">
                    <div className="mb-3">
                        <label for="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" onBlur={() => emailCheck()} />
                        <small id="emailHelp" class="form-text text-muted"></small>
                    </div>
                    <div className="mb-3">
                        <label for="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" onBlur={() => nameCheck()} />
                        <small id="nameHelp" class="form-text text-muted"></small>
                    </div>
                    <div className="mb-3">
                        <label for="message" className="form-label">Message</label>
                        <textarea className="form-control" aria-label="With textarea" placeholder="Write your message here!" id="message" onBlur={() => messageCheck()}></textarea>
                        <small id="messageHelp" class="form-text text-muted"></small>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <div className="col-8">
                </div>
            </div>
        </section>
    );
}

export default Contact;