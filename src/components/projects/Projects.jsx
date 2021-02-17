import React from 'react'
import s from './Projects.module.css'
import socialWebImg from "../../utils/imgs/projects/socail_web.png"
import stopWatcherImg from "../../utils/imgs/projects/stop_watcer.png"
import projectPhoto from "../../utils/imgs/projects/prject_photo.jpg"

const Projects = ({stopWatcher, socialWeb}) => {
	return (
		<div className={s.projectsWrapper}>
			<div className={`container ${s.mainContent}`}>
				<div className={s.headingTitleBlock}>
					<h1>My projects: </h1>
				</div>
				<div className={s.cards}>
					<div className={`card ${s.card}`}>
						<img src={stopWatcherImg} className="card-img-top" alt="image was not loaded"/>
						<div className="card-body">
							<h5 className="card-title">stop watcher app</h5>
							<p className="card-text">Simple designed stop watcher app with wait (need to double tap),
								stop/start
								and reset btn</p>
							<a href={stopWatcher} className="btn btn-dark stretched-link">click it!</a>
						</div>
					</div>
					<div className={`card ${s.card}`}>
						<img src={socialWebImg} className="card-img-top" alt="image was not loaded"/>
						<div className="card-body">
							<h5 className="card-title">social web: <span className={s.socialWebTitle}>Find friend</span></h5>
							<p className="card-text">my pet project, where I used a lot of libraries,
								including <span>React, Redux, react-redux, react-router-dom, redux-form and etc.</span>
							</p>
							<a href={socialWeb} className="btn btn-primary stretched-link">click it!</a>
						</div>
					</div>
					<div className={`card ${s.card}`}>
						<img src={projectPhoto} className="card-img-top" alt="image was not loaded"/>
						<div className="card-body">
							<h5 className="card-title">stop watcher app</h5>
							<p className="card-text">Simple designed stop watcher app with wait (need to double tap),
								stop/start
								and reset btn</p>
							<a href={stopWatcher} className="btn btn-outline-dark stretched-link">click it!</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Projects