import React from "react";
import "../css/contact.css"

function Contact() {
    return (
        <section className="container">
            <div className="row text-center">
                <h1 className="col-12 my-3 p-4 opaque">Contact</h1>
            </div>
            <div className="row">
                <form className="col-4 opaque py-3">
                    <div className="mb-3">
                        <label for="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="mb-3">
                        <label for="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="mb-3">
                        <label for="message" className="form-label">Message</label>
                        <textarea className="form-control" aria-label="With textarea" placeholder="Write your message here!" id="message"></textarea>
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