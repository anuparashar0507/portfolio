import React from 'react'

import Logo from '../assets/about/cartoonme@2x.png'

function Header() {
    return (
        <header className="left float-left shadow-dark" id="header">
		<button type="button" className="close" aria-label="Close">
			<span aria-hidden="true">&times;</span>
		</button>
		<div className="header-inner d-flex align-items-start flex-column">
			<a href="index.html"><img src={Logo} alt="Anupam Parashar" /></a>
			<a href="index.html" className="site-title dot mt-3">Anupam Parashar</a>
			<span className="site-slogan">Web Developer</span>
			
			<nav>
				<ul className="vertical-menu scrollspy">
					<li><a href="#home" className="active"><i className="icon-home"></i>Home</a></li>
					<li><a href="#about"><i className="icon-user"></i>About</a></li>
					<li><a href="#resume"><i className="icon-graduation"></i>Resume</a></li>
					<li><a href="#clients"><i className="icon-bulb"></i>Certificates</a></li>
					<li><a href="#works"><i className="icon-grid"></i>Works</a></li>
					<li><a href="#contact"><i className="icon-phone"></i>Contact</a></li>
					
				</ul>
			</nav>
			
			<div className="footer mt-auto">

				<ul className="social-icons list-inline">
					<li className="list-inline-item"><a href="https://www.linkedin.com/in/anupam-parashar/"><i className="fab fa-linkedin"></i></a></li>
					<li className="list-inline-item"><a href="https://github.com/anuparashar0507"><i className="fab fa-github"></i></a></li>
					<li className="list-inline-item"><a href="https://www.instagram.com/anuparashar0507/"><i className="fab fa-instagram"></i></a></li>
				</ul>

			</div>
		</div>
	</header>
    )
}

export default Header
