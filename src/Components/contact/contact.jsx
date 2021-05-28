import React from "react";
//import "./contact.scss";
import * as emailjs from "emailjs-com";

import Modal from '../contact-modal/Modal';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      sending: false,
      successModal: false,
      errorModal: false,
    };
  }

  inputHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (e) => {
    var self = this;
    this.setState({ sending: true });
    e.preventDefault();

    var template_params = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };




    // YOUR EMAIL.JS API KEY IN FORMAT user_xxxxxxxxxxxxxxxxxx
    let API_KEY = "user_pWNb75KyVuPrOhWaCzMRN";

    // YOUR EMAIL.JS TEMPLATE ID
    let TEMPLATE_ID = "template_8dxah79";




    emailjs.send("default_service", TEMPLATE_ID, template_params, API_KEY).then(
      function (response) {
        if (response.status === 200) {
          self.showSuccessModal();
        } else {
          self.showErrorModal();
        }
      },
      function (error) {
        self.showErrorModal();
      }
    );
  };

  // SUCCESS MODAL
  showSuccessModal = () => {
    this.setState({ successModal: true, sending: false });
    this.resetForm();
  };
  // ERROR MODAL
  showErrorModal = () => {
    this.setState({ errorModal: true, sending: false });
    this.resetForm();
  };
  // RESET CONTACT FORM
  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }
  // CLOSE ALL MODALS
  closeModal = () => {
    this.setState({ successModal: false, errorModal: false });
  };

  resetForm = () => {
    this.setState({ name: "", email: "", message: "" });
  };

  render() {
    let submitButtonRender = (
      <div className="small__button">
        <button className="btn btn-default" aria-label="send message" type="submit" value="Send Message">
        <i class="icon-paper-plane"></i>
        Send Message
        </button>
      </div>
    );
    if (this.state.sending) {
      submitButtonRender = (
        <div className="small__button sending-btn">
          <div className="flex-center">
            <div className="sbl-circ"></div>
          </div>
        </div>
      );
    }
    let modalRender = null;
    if (this.state.successModal) {
      modalRender = <Modal closeModal={this.closeModal} status="success" />;
    } else if (this.state.errorModal) {
      modalRender = <Modal closeModal={this.closeModal} status="error" />;
    }
    return (
      <div id="contact">
        {modalRender}
        
              <form id="contact-form" class="contact-form" onSubmit={this.handleSubmit}>
              <div class="row">
							<div class="column col-md-6">
								<div class="form-group">
                <input type="text"  class="form-control" placeholder="Name" required name="name" value={this.state.name} onChange={this.inputHandler} />
                </div>
							</div>
              <div class="column col-md-6">
								<div class="form-group">
                <input class="form-control" type="email" placeholder="Email" required name="email" value={this.state.email} onChange={this.inputHandler} />
							</div>
              </div>
							<div class="column col-md-12">
              <div class="form-group">
                <textarea
                 class="form-control"
                  rows="6"
                  cols="50"
                  placeholder="Message..."
                  required
                  name="message"
                  value={this.state.message}
                  onChange={this.inputHandler}
                ></textarea>
                </div>
							</div>
              </div>
                {submitButtonRender}
              </form>
            
            
          </div>
         
        
    );
  }
};

export default Contact;
