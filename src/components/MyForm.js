import React from "react";
import { NavLink } from "react-router-dom";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mrgrzjna"
        method="POST"
        className="ContactMyForm"
      >
        <h1 className="myFormH1">Send a message</h1>
        <h2 className="myFormH2">
          If you have any question please don't hesitate and write to us!
        </h2>
        {/* <!-- add your custom form HTML here --> */}
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="E-mail" required />
        <br />
        <textarea
          placeholder="Your message..."
          name="message"
          required
        ></textarea>
        <br />
        <label className="labelCheck" htmlFor="accept">
          {/* <input type="checkbox" id="accept" name="accept" required /> */}
          <p>
            <input type="checkbox" id="accept" name="accept" required />I agree
            to the processing of my personal data in order to answer my e-mail{" "}
            <span>
              {" "}
              <NavLink className="cookieLink" to="/cookie">
                (Privacy Policy)
              </NavLink>
            </span>
          </p>
        </label>
        <br />
        {status === "SUCCESS" ? (
          <p>Message was sent! </p>
        ) : (
          <button>SEND</button>
        )}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
