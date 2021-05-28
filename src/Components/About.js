import React from 'react'
import Logo from '../assets/about/anu3@2x.png'
function About() {
    return (
        <section id="about" className="shadow-blue white-bg padding">
			<h3 className="section-title">About Me</h3>
			<div className="spacer" data-height="80"></div>

			<div className="row">
				<div className="col-md-3">
					<img src={Logo} alt="about" />
				</div>
				<div className="col-md-9">
					<h2 className="mt-4 mt-md-0 mb-4">Hello,</h2>
					<p className="mb-0">I am Anupam Parashar, web developer from Bhopal, India. I'm a detail-oriented, responsible, and committed engineer, with a get-it-done, on-time, and high-quality product spirit, and an understanding of defining requirements, designing, implementing, testing, and delivering complex web applications using a variety of programming languages and technologies.</p>
					<div className="row my-4">
						<div className="col-md-6">
							<p className="mb-2">Name: <span className="text-dark">Anupam Parashar</span></p>
							<p className="mb-0">Birthday: <span className="text-dark">05 July, 1997</span></p>
						</div>
						<div className="col-md-6 mt-2 mt-md-0 mt-sm-2">
							<p className="mb-2">Location: <span className="text-dark">Bhopal, India</span></p>
							<p className="mb-0">Email: <span className="text-dark">anuparashar0507@gmail.com</span></p>
						</div>
					</div>
					<a href="https://drive.google.com/file/d/13KbHpGDJhECgXOoaWSdYNVh7nrFRrv1b/view?usp=sharing" className="btn btn-default mr-3"><i className="icon-cloud-download"></i>Download CV</a>
					<a href= "#contact" className="btn btn-alt mt-2 mt-md-0 mt-xs-2"><i className="icon-envelope"></i>Hire me</a>
				</div>
			</div>
		</section>

    )
}

export default About
