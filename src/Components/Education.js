import React from 'react'

function Education() {
    return (
       <section id="resume" className="shadow-blue white-bg padding">
			<h3 className="section-title">Experience</h3>
			<div className="spacer" data-height="80"></div>

			<div className="timeline">
				<div className="entry">
					<div className="title">
						<span>2019 - Present</span>
					</div>
					<div className="body">
						<h4 className="mt-0">Academic Degree</h4>
						<p>Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget dolor aenean massa.</p>
					</div>
				</div>
				<div className="entry">
					<div className="title">
						<span>2018 - 2015</span>
					</div>
					<div className="body">
						<h4 className="mt-0">Bachelor’s Degree</h4>
						<p>Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget dolor aenean massa.</p>
					</div>
				</div>
				<div className="entry">
					<div className="title">
						<span>2015 - 2012</span>
					</div>
					<div className="body">
						<h4 className="mt-0">Honours Degree</h4>
						<p>Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget dolor aenean massa.</p>
					</div>
				</div>
				<span className="timeline-line"></span>
			</div>
		</section>
    )
}

export default Education
