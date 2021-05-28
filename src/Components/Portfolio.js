import React from 'react'
import Gip from '../assets/portfolio/gip@2x.png'
import Twosapins from '../assets/portfolio/twosapiens@2x.png'
import Chartntrade from '../assets/portfolio/chartntrade@2x.png'
import Bnpcs from '../assets/portfolio/bnpcs@2x.png'
import Drum from '../assets/portfolio/drum@2x.png'
import Clock from '../assets/portfolio/25+5@2x.png'

function Portfolio() {
    return (
        <section id="works" className="shadow-blue white-bg padding">
			<h3 className="section-title">Portfolio</h3>
			<div className="spacer" data-height="40"></div>

			<ul className="portfolio-filter list-inline">
				<li className="current list-inline-item" data-filter="*">All Projects</li>
				<li className="list-inline-item" data-filter=".portfolio">Portfolio</li>
				<li className="list-inline-item" data-filter=".ecommerce">Ecommerce</li>
				<li className="list-inline-item" data-filter=".personal">Personal</li>
			</ul>

			<div className="pf-filter-wrapper mb-4">
				<select className="portfolio-filter-mobile">
					<option value="*">Everything</option>
					<option value=".portfolio">Portfolio</option>
					<option value=".ecommerce">Ecommerce</option>
					<option value=".personal">Personal</option>
				</select>
			</div>

			<div className="row portfolio-wrapper">
				
				<div className="col-md-4 col-sm-6 grid-item portfolio">
					<a href="https://chartntrade.com/">
						<div className="portfolio-item">
							<div className="details">
								<h4 className="title">Chartntrade</h4>
								<span className="term">Portfolio, Wordpress</span>
							</div>
							<span className="plus-icon">+</span>
							<div className="thumb">
								<img src={Chartntrade} alt="Portfolio-title" />
								<div className="mask"></div>
							</div>
						</div>
					</a>
				</div>

				<div className="col-md-4 col-sm-6 grid-item ecommerce">
					<a href="https://twosapiens.in/">
						<div className="portfolio-item">
							<div className="details">
								<h4 className="title">Twosapins</h4>
								<span className="term">Ecommerce, Wordpress</span>
							</div>
							<span className="plus-icon">+</span>
							<div className="thumb">
								<img src={Twosapins} alt="Portfolio-title" />
								<div className="mask"></div>
							</div>
						</div>
					</a>
				</div>

				<div className="col-md-4 col-sm-6 grid-item portfolio">
					<a href="http://gipwebinar.rf.gd/">
						<div className="portfolio-item">
							<div className="details">
								<h4 className="title">Global Insolvancy Program</h4>
								<span className="term">Landing Page</span>
							</div>
							<span className="plus-icon">+</span>
							<div className="thumb">
								<img src={Gip} alt="Portfolio-title" />
								<div className="mask"></div>
							</div>
						</div>
					</a>
				</div>

				<div className="col-md-4 col-sm-6 grid-item portfolio">
					<a href="https://bnpcs.in/">
						<div className="portfolio-item">
							<div className="details">
								<h4 className="title">Bnpcs</h4>
								<span className="term">Alumni Site, Portfolio</span>
							</div>
							<span className="plus-icon">+</span>
							<div className="thumb">
								<img src={Bnpcs} alt="Portfolio-title" />
								<div className="mask"></div>
							</div>
						</div>
					</a>
				</div>

				<div className="col-md-4 col-sm-6 grid-item personal">
					<a href="https://sleepy-saha-e69326.netlify.app/">
						<div className="portfolio-item">
							<div className="details">
								<h4 className="title">25+5 Clock</h4>
								<span className="term">Personal, Creative</span>
							</div>
							<span className="plus-icon">+</span>
							<div className="thumb">
								<img src={Clock} alt="Portfolio-title" />
								<div className="mask"></div>
							</div>
						</div>
					</a>
				</div>

				<div className="col-md-4 col-sm-6 grid-item personal">
					<a href="https://priceless-chandrasekhar-79990b.netlify.app/">
						<div className="portfolio-item">
							<div className="details">
								<h4 className="title">Drum Machine</h4>
								<span className="term">Personal, Creative</span>
							</div>
							<span className="plus-icon">+</span>
							<div className="thumb">
								<img src={Drum} alt="Portfolio-title" />
								<div className="mask"></div>
							</div>
						</div>
					</a>
				</div>

			</div>
			
			<div className="load-more text-center mt-4">
				<a href="javascript:" className="btn btn-default"><i className="fas fa-circle-notch"></i> Load more</a>
				<ul className="portfolio-pagination list-inline d-none">
					<li className="list-inline-item">1</li>
					<li className="list-inline-item"><a href="works-2.html">2</a></li>
				</ul>
			</div>
		</section>

    )
}

export default Portfolio
