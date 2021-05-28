import React from 'react'
import Logo from '../assets/about/cartoonme@2x.png'

export default function Mobileheader() {
    return (
        <div className="mobile-header py-2 px-3 mt-4">
		<button className="menu-icon mr-2">
			<span></span>
			<span></span>
			<span></span>
		</button>
		<a href="index.html" className="logo"><img src={Logo} alt="Anupam Parashar" /></a>
		<a href="index.html" className="site-title dot ml-2">Anupam Parashar</a>
	</div>
    )
}
