import React from 'react'

import Me from '../assets/hero/kasol.png'

function Hero() {
    return (
        <section className="hero background parallax shadow-dark d-flex align-items-center" id="home" data-image-src={Me}>
			<div className="cta mx-auto mt-2">
				<h1 className="mt-0 mb-4">I’m Anupam <span className="dot"></span></h1>
				<p className="mb-4">Devoted to create an impact with result-oriented solutions.</p>
				<a href="https://drive.google.com/file/d/13KbHpGDJhECgXOoaWSdYNVh7nrFRrv1b/view?usp=sharing" className="btn btn-default btn-lg mr-3"><i className="icon-grid"></i>View Resume</a>
				<div className="spacer d-md-none d-lg-none d-sm-none" data-height="10"></div>
				<a href="#contact" className="btn btn-border-light btn-lg"><i className="icon-envelope"></i>Hire me</a>
			</div>
			<div className="overlay"></div>
		</section>
    )
}

export default Hero
