import React from 'react'

function Experience() {
    return (
        <section id="resume" className="shadow-blue white-bg padding">
			<h3 className="section-title">Experience</h3>
			<div className="spacer" data-height="80"></div>

			<div className="timeline">
				<div className="entry">
					<div className="title">
						<span>Aug 2019 - May 2021</span>
					</div>
					<div className="body">
						<h4 className="mt-0">WEB DEVELOPER FREELANCING - REMOTE</h4>
						<p>My work consisted of providing accurate solutions to
small businesses. Which includes development of 2
portfolio websites & an e-commerce site with successful
planning, management & amazing client experience.</p>
					</div>
				</div>

				<span className="timeline-line"></span>
			</div>
			<div className="spacer" data-height="80"></div>
			<h3 className="section-title">Education</h3>
			<div className="spacer" data-height="80"></div>

			<div className="timeline">
				<div className="entry">
					<div className="title">
						<span>2015 - 2019</span>
					</div>
					<div className="body">
						<h4 className="mt-0">Bachelor's Degree</h4>
						<p>B.tech (Computer Science) - LPU, Punjab</p>
					</div>
				</div>
				<div className="entry">
					<div className="title">
						<span>2013 - 2015</span>
					</div>
					<div className="body">
						<h4 className="mt-0">Higher Secondry</h4>
						<p> M.P. Board of Secondary Education - Bhopal</p>
					</div>
				</div>
				<div className="entry">
					<div className="title">
						<span>2015 - 2012</span>
					</div>
					<div className="body">
						<h4 className="mt-0">High School</h4>
						<p>Jawahar Navodaya Vidyalaya (JNV) - Raisen</p>
					</div>
				</div>
				<span className="timeline-line"></span>
			</div>
		</section>
    )
}

export default Experience
