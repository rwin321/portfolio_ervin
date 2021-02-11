import React from 'react'
import s from './Projects.module.css'
import styles from '../home/Home.module.css'
import {NavLink} from "react-router-dom";

const Projects = ({stopWatcher, socialWeb}) => {
	return (
		<div className={s.projectsWrapper}>
			<div className={s.headingTitleBlock}>
				<h1>example projects</h1>
			</div>
			<div className={`container ${styles.mainContent}`}>
				<div className={s.linksWrapper}>
					<a className={s.linksItem} href={stopWatcher}>stop watcher</a>
					<a className={s.linksItem} href={socialWeb}>social web</a>
					<a className={s.linksItem} href={socialWeb}>social web</a>
				</div>
			</div>
		</div>
	)
}

export default Projects