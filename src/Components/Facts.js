import React from 'react'

function Facts() {
    return (
       // <!-- section facts -->
		<section id="facts" className="shadow-dark color-white background parallax padding-50" data-image-src="images/background-1.jpg">

			<div className="row relative z-1">
				<div className="col-md-3 col-sm-6">
					<div className="fact-item text-center">
						<i className="icon-like icon-circle"></i>
						<h2 className="count">157</h2>
						<span>Projects completed</span>
					</div>
				</div>
				<div className="col-md-3 col-sm-6">
					<div className="fact-item text-center">
						<i className="icon-cup icon-circle"></i>
						<h2 className="count">2765</h2>
						<span>Cup of coffee</span>
					</div>
				</div>
				<div className="col-md-3 col-sm-6">
					<div className="fact-item text-center">
						<i className="icon-emotsmile icon-circle"></i>
						<h2 className="count">350</h2>
						<span>Happy customers</span>
					</div>
				</div>
				<div className="col-md-3 col-sm-6">
					<div className="fact-item text-center">
						<i className="icon-trophy icon-circle"></i>
						<h2 className="count">29</h2>
						<span>Awards won</span>
					</div>
				</div>
			</div>
			
			<div className="overlay"></div>

		</section>
    )
}

export default Facts
