import React from 'react'
import Me from '../assets/hero/kasol1@2x.png'

export default function Thanks() {
    return (
        <section className="hero background parallax shadow-dark d-flex align-items-center" id="home" data-image-src={Me}>
			<div className="cta mx-auto mt-2">
            <h1 className="mt-0 mb-4">Thank you <hr />so much For <hr />  reaching out<span className="dot"></span></h1>
            <a href="https://drive.google.com/file/d/13KbHpGDJhECgXOoaWSdYNVh7nrFRrv1b/view?usp=sharing" className="btn btn-default btn-lg mr-3"><i className="icon-grid"></i>Download Resume</a>
				<div className="spacer d-md-none d-lg-none d-sm-none" data-height="10"></div>
				<a href="#contact" className="btn btn-border-light btn-lg"><i className="icon-envelope"></i>Hire me</a>
			</div>
			<div className="overlay"></div>
		</section>
    )
}
