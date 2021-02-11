import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { links } from './components/common/links'
import NavBar from "./components/navbar/NavBar"
import Particles from "react-particles-js";
import {Switch, Route} from "react-router-dom"
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";

const App = () => {
	return (
		<div className='app-wrapper'>
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
			<NavBar className='navbar__menu'/>
			<div className="wrapper__content">
				<Switch>
					<Route exact path='/' render={() => <Home/>}/>
					<Route exact path='/aboutme' component={''}/>
					<Route exact path='/experience' component={''}/>
					<Route exact path='/projects' render={ () => <Projects stopWatcher={links[0]} socialWeb={links[1]} /> }/>
					<Route exact path='/contacts' component={''}/>
				</Switch>
			</div>
		</div>
	)
}

export default App;
