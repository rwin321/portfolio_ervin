import React from 'react'
import s from './Home.module.css'
import Typed from 'react-typed'
import {NavLink} from "react-router-dom";

const Home = () => {

	return (
		<div className={s.homeWrapper}>
			<div className={`container ${s.mainContent}`}>
				<section className={s.text_block}>
					<h1>Modern frontend development as the way of life!</h1>
					<Typed className={s.typedText}
					       strings={['Web Development', 'Front End', 'High quality product!']}
					       typeSpeed={40}
					       loop
					/>
				</section>
				<div className={s.btnMainOfferContainer}>
					<NavLink to='/contacts'
					         className={s.btnMainOffer}>contact me</NavLink>
				</div>
			</div>
		</div>
	)
}

export default Home