import React from 'react'
import Contactform from './contact/contact'

function Contact() {
    return (
		<section id="contact" className="shadow-blue white-bg padding">
		<h3 className="section-title">Ways To Contact Me</h3>
		<div className="spacer" data-height="80"></div>

		<div className="row">
			
		<div class="col-md-6 mb-4 mb-md-0">
				<div className="contact-info mb-5">
					<i className="icon-phone"></i>
					<div className="details">
						<h5>Phone</h5>
						<span>+91 877-021-7684</span>
					</div>
				</div>
				</div>
				<div class="col-md-6 mb-4 mb-md-0">
				<div className="contact-info mb-5">
					<i className="icon-envelope"></i>
					<div className="details">
						<h5>Email address</h5>
						<span>anuparashar0507@gmail.com</span>
					</div>
				</div>
				</div>
				<div class="col-md-6 mb-4 mb-md-0">
				<div className="contact-info mb-5">
				<a href="https://www.instagram.com/anuparashar0507/">
					<i className="fab fa-instagram"></i>
					<div className="details">
						<h5>Instagram</h5>
						<span>@anuparashar0507</span>
					</div>
					</a>
				</div>
				</div>
				<div class="col-md-6 mb-4 mb-md-0">
				<div className="contact-info mb-5">
					<a href = "https://www.linkedin.com/in/anupam-parashar/">
					<i className="fab fa-linkedin"></i>
					<div className="details">
						<h5>Linkedin</h5>
						<span>/anupam-parashar</span>
						
					</div>
					</a>
				</div>
				</div>
				
				
			
		
			</div>
			<h3 className="section-title">Send Me Message</h3>
			<div className="spacer" data-height="40"></div>
			<div className="col-md-12">
			<Contactform />
			</div>
	</section>
    )
}

export default Contact
