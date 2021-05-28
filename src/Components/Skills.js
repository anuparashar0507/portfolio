import React from 'react'

function Skills() {
    return (
        <section id="skills" className="shadow-blue white-bg padding">
        <h3 className="section-title">My technical skills</h3>
        <div className="spacer" data-height="40"></div>
        
        <p className="mb-0">
Programming languages: JavaScript, ReactJS, HTML, CSS, Twitter-Bootstrap, React-Bootstrap, JSON, NodeJS, Express.JS.
<hr />Database: MySQL, MongoDB. <hr />
Tools: Visual Studio Code, Cmder, Git, Github.</p>

        <div className="row mt-5">

            <div className="col-md-6">
                <div className="skill-item">
                    <div className="skill-info clearfix">
                        <h4 className="float-left mb-3 mt-0">Javascript</h4>
                        <span className="float-right">85%</span>
                    </div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="85">
                        </div>
                    </div>
                    <div className="spacer" data-height="50"></div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="skill-item">
                    <div className="skill-info clearfix">
                        <h4 className="float-left mb-3 mt-0">React.js</h4>
                        <span className="float-right">80%</span>
                    </div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="80">
                        </div>
                    </div>
                    <div className="spacer" data-height="50"></div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="skill-item">
                    <div className="skill-info clearfix">
                        <h4 className="float-left mb-3 mt-0">HTML & CSS</h4>
                        <span className="float-right">85%</span>
                    </div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="85">
                        </div>
                    </div>
                    <div className="spacer d-md-none d-lg-none" data-height="50"></div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="skill-item">
                    <div className="skill-info clearfix">
                        <h4 className="float-left mb-3 mt-0">Node.js</h4>
                        <span className="float-right">70%</span>
                    </div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="70">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    )
}

export default Skills
