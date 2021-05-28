import React from 'react'
import Fcc1 from '../assets/certificates/FCC- FRONT END LIBRARIES CERTIFICATE.png'
import Fcc2 from '../assets/certificates/FCC- WEB DESIGN CERTIFICATE.png'
import Fcc3 from '../assets/certificates/FCC- JAVASCRIPT CERTIFICATE-1.png'
import Udemy from '../assets/certificates/Udemy Web Developer Bootcamp.jpg'

function Clients() {
    return (
        <section id="clients" className="shadow-dark background-blue color-white padding-50">

        <h2 className="section-title">Certificates</h2>

        <div className="spacer" data-height="40"></div>
        <div className="row portfolio-wrapper">
				
				<div className="col-md-6 col-sm-6 grid-item video">
					<a href="work-single.html">
						<div className="portfolio-item">
							<div className="details">
								<h4 className="title">FRONT END LIBRARIES</h4>
								<span className="term">FreeCodeCamp.org</span>
							</div>
							<span className="plus-icon">+</span>
							<div className="thumb">
								<img src={Fcc1} alt="Portfolio-title" />
								<div className="mask"></div>
							</div>
						</div>
					</a>
				</div>

				<div className="col-md-6 col-sm-6 grid-item creative design">
					<a href="work-single.html">
						<div className="portfolio-item">
							<div className="details">
								<h4 className="title">WEB DESIGN CERTIFICATE</h4>
								<span className="term">FreeCodeCamp.org</span>
							</div>
							<span className="plus-icon">+</span>
							<div className="thumb">
								<img src={Fcc2} alt="Portfolio-title" />
								<div className="mask"></div>
							</div>
						</div>
					</a>
				</div>
                </div>
                <div className="row portfolio-wrapper">
				<div className="col-md-6 col-sm-6 grid-item branding">
					<a href="work-single.html">
						<div className="portfolio-item">
							<div className="details">
								<h4 className="title">JAVASCRIPT DEVELOPER</h4>
								<span className="term">FreeCodeCamp.org</span>
							</div>
							<span className="plus-icon">+</span>
							<div className="thumb">
								<img src={Fcc3} alt="Portfolio-title" />
								<div className="mask"></div>
							</div>
						</div>
					</a>
				</div>

				<div className="col-md-6 col-sm-6 grid-item creative">
					<a href="work-single.html">
						<div className="portfolio-item">
							<div className="details">
								<h4 className="title">WEB DEVELOPER BOOTCAMP</h4>
								<span className="term">Udemy</span>
							</div>
							<span className="plus-icon">+</span>
							<div className="thumb">
								<img src={Udemy} alt="Portfolio-title" />
								<div className="mask"></div>
							</div>
						</div>
					</a>
				</div>
                </div>
				

                
    </section>
    )
}

export default Clients
