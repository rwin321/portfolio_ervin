import React from 'react'
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'
import logo from '../../utils/imgs/brand_logo.png'
// import REACT-FONT-AWESOME items
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {

	return (
			<nav className={`navbar navbar-expand-lg navbar-dark ${s.navBar}`}>
				<div className='container' >
					<div className="container-fluid">
						<NavLink className={`navbar-brand ${s.navBarBrand}`}
						         to="/">
							<img src={logo} alt='logo img' className={s.logo}/>
						</NavLink>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<FontAwesomeIcon icon={faBars} className={s.hamMenu}/>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent">
							<ul className="navbar-nav ml-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<NavLink activeClassName={s.activeLink}
									         className={`nav-link ${s.navLink}`}
									         aria-current="page"
									         exact
									         to="/home">Home</NavLink>
								</li>
								<li className="nav-item">
									<NavLink activeClassName={s.activeLink}
									         className={`nav-link ${s.navLink}`}
									         to="/aboutme">About me</NavLink>
								</li>
								<li className="nav-item">
									<NavLink activeClassName={s.activeLink}
									         className={`nav-link ${s.navLink}`}
									         to="/projects">My projects</NavLink>
								</li>
								<li className="nav-item">
									<NavLink activeClassName={s.activeLink}
									         className={`nav-link ${s.navLink}`}
									         to="/contacts">Contacts</NavLink>
								</li>
							</ul>

						</div>
					</div>
				</div>
			</nav>
	)
}

export default NavBar;