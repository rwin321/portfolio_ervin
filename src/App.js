import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import { Switch, Route } from "react-router-dom";

const App = () => {
	return (
		<div>
            <NavBar/>
		</div>
	)
}

export default App;
