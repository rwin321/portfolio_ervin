import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { links } from './common/links'
import NavBar from "./components/navbar/NavBar"
import Particles from "react-particles-js";
import {Switch, Route} from "react-router-dom"
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import AboutMe from "./components/aboutme/AboutMe";
import Preloader from "./components/Preloader/Preloader";
import Contacts from "./components/contacts/Contacts";


const App = () => {

	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => setLoading(false), 2000)
	}, [])

	return (
		<>
			{ loading === false ?
				<div className='app-wrapper'>
					<NavBar className='navbar__menu'/>
					<Particles className='particles'
					           params={{
						           particles: {
							           number: {
								           value: 30,
								           density: {
									           enable: true,
									           value_area: 900
								           }
							           },
							           shape: {
								           type: "circle",
								           stroke: {
									           width: 6,
									           color: "#000"
								           }
							           },
							           move: {
								           enable: true,
								           speed: 3,
								           direction: "none",
								           random: false,
								           straight: false,
								           out_mode: "out",
								           bounce: false,
								           attract: {
									           enable: false,
									           rotateX: 600,
									           rotateY: 1200
								           }
							           },
							           opacity: {
								           value: 0.5,
								           anim: {
									           enable: true
								           }
							           },
							           size: {
								           value: 7,
								           random: true,
								           anim: {
									           enable: true,
									           speed: 3
								           }
							           },
							           line_linked: {
								           enable: false
							           }
						           }
					           }}/>
					<div className="wrapper__content">
						<Switch>
							{/*<Redirect exact from='/' to='/home' />*/}
							<Route exact path='/' render={ () => <Home />} />
							<Route path='/home' render={() => <Home/> }/>
							<Route path='/aboutme' render={ () => <AboutMe />}/>
							<Route path='/projects' render={ () => <Projects stopWatcher={links[0]}
							                                                 socialWeb={links[1] } /> }/>
							<Route path='/contacts' render={ () => <Contacts /> }/>
						</Switch>
					</div>
				</div>
				: <Preloader />
			}
		</>
	)
}

export default App;
