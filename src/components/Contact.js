import React, { Component } from "react";
import config from "../../config";

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNewMessage = this.handleNewMessage.bind(this);
    this.formRef = React.createRef();
    this.state = {
      submitted: false,
      submitting: false,
    };
  }

  async handleSubmit (event) {
    event.preventDefault();
    try {
      this.setState({ submitting: true });
      const { target: form } = event;
      const response = await fetch(config.formEndpoint, {
        method: 'POST',
        body: new FormData(form),
      })
      if (response.status !== 200) {
        throw Error('status code:', response.status);
      }
      this.setState({
        submitted: true,
      });
    } catch {} finally {
      this.setState({
        submitting: false,
      });
    }
  };

  handleNewMessage(event) {
    event.preventDefault();
    this.setState({
      submitted: false,
      submitting: false,
    });
  };

  render() {
    const { submitted, submitting } = this.state;
  
    if (submitted) {
      return (
        <div className="thank-you" style={{ height: this.formRef.current?.offsetHeight }}>
          <div className="text-2xl">Thank you!</div>
          <div className="text-md">I'll be in touch soon.</div>
          <a href="" onClick={this.handleNewMessage}>Send another one</a>
        </div>
      )
    }

    return (
      <form
        onSubmit={this.handleSubmit}
        method="POST"
        id="contact-form"
        ref={this.formRef}
        target="_blank"
      >
        <div className="row">
          <div className="col-md-6">
            <div className="md-form mb-2">
              <label htmlFor="name" className="">Your name</label>
              <input required type="text" id="name" name="name" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="md-form mb-2">
              <label htmlFor="email" className="">Your email</label>
              <input required type="email" id="email" name="email" className="form-control" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="md-form mb-2">
              <label htmlFor="subject" className="">Subject</label>
              <input required type="text" id="subject" name="subject" className="form-control" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="md-form mb-4">
              <label htmlFor="message">Your message</label>
              <textarea required type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="text-center text-md-left col-md-2">
          <button form="contact-form" className="btn btn-primary btn-block" type="submit">
            {!submitting && 'Send'}
            {submitting && (
              <div class="spinner-border spinner-border-sm text-light" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            )}
          </button>
        </div>
        </div>
      </form>
    )
  }
}

export default ContactForm;