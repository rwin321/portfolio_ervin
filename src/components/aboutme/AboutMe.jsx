import React from 'react'
import s from './AboutMe.module.css'
import {BiChevronDownCircle} from '@react-icons/all-files/bi/BiChevronDownCircle'

const AboutMe = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.mainContent}>
				<div className='container'>
					<div className={s.titleBlock}>
						<h1 className={s.title}>Ervin Abliamitov</h1>
						<h2 className={s.subTitle}>junior frontend developer</h2>
					</div>
					<div className={s.informationBlock}>
						<section className={s.smallInfo}>
							<p>
								I'm a young, ambitious, and self-motivated web developer, who wants to study and open new
								things every day! I like to take participate in different tasks and challenges. I
								haveexperience in many parts of the businesses like property sphere, tax office, managing,
								etc. Since last year I have concentrated on IT-sphere. I want to be a part of a team in a
								modern technologies company as a junior front-end(react/redux) developer or trainee
								full-stack developer, where I will work, study and progress day by day!
							</p>
						</section>
						<section className={s.profSkills}>
							<h3>Professional skills <BiChevronDownCircle size={25}/></h3>
							<ul>
								<li>JS, ES6, HTML, CSS, SCSS, MS Office</li>
								<li>React.js, Redux, react-redux, React-router-dom, Node.js, Redux-Thunk, git</li>
								<li>Bootstap, Matetrial UI, Materialize, etc</li>
							</ul>
						</section>
						<section className={s.softSkills}>
							<h3>Soft skills <BiChevronDownCircle size={25}/></h3>
							<ul>
								<li>Software development</li>
								<li>Team work</li>
								<li>Ability to learn fast</li>
								<li>Analytical thinking skills</li>
								<li>Problem solving</li>
							</ul>
						</section>
						<section className={s.languages}>
							<h3>languages</h3>
							<ul>
								<li>English: Upper-intermedia</li>
								<li>Russian: native</li>
								<li>Ukrainian: native</li>
							</ul>
						</section>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutMe