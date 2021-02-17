import React from 'react'
import s from './Contacts.module.css'

const Contacts = () => {
	return (
		<div className={s.wrapper}>
			<div className={`container ${s.mainContent}`}>
				<div className={s.formContainer}>
					<form action="#">
						<div className={`form-group ${s.formGroup}`}>
							<label htmlFor="firstName">First Name</label>
							<input type="text" className={`form-control ${s.firstName}`} name='firstName'/>
						</div>
						<div className={`form-group ${s.formGroup}`}>
							<label htmlFor="lastName">Last Name</label>
							<input type="text" className={`form-control ${s.lastName}`} name='lastName'/>
						</div>
						<div className={`form-group ${s.formGroup}`}>
							<label htmlFor="email">Email</label>
							<input type="email" className={`form-control ${s.email}`} name='email'/>
						</div>
						<div className={`form-group ${s.formGroup}`}>
							<label htmlFor="message">Message</label>
							<textarea className={`form-control ${s.message}`} cols='30' rows='10' name='message'/>
						</div>
						<button type="submit" className={`btn btn-success ${s.submitBtn}`}>Send</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Contacts