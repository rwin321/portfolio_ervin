import React, {useState} from "react";
import s from "./Contacts.module.css";

const ContactForm = () => {

	const [status, setStatus] = useState('')

	const submitForm = (ev) => {

		ev.preventDefault();
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				setStatus('success')
				alert('Thanks you for the contacting me!')
			} else {
				setStatus('unSuccess')
				alert('Sorry, there is kind of  problem!')
			}
		};
		xhr.send(data);
	}
//"https://formspree.io/f/mpzoeonr"
	return (
		<div className={s.formContainer}>
			<form onSubmit={submitForm}
			      action="https://formspree.io/f/mpeonr"
			      method='POST'>
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
			<div id='resultMessage'
			     className={status === 'success' ? `${s.success}` : `${s.unSuccess}`}></div>
		</div>
	)
}

export default ContactForm