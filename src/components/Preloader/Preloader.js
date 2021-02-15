import React from 'react'
import s from './Preloader.module.css'
import preloader from '../../utils/preloader.svg'

export const Preloader = () => {
	return (
		<div className={s.preloader}>
			<img src={ preloader } alt="page is on loading..."/>
		</div>
	)
}

export default Preloader