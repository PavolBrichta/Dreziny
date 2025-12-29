import React from 'react'

export default function Contact() {
	return (
		<section className="contact-page">
			<h2>Contact</h2>
			<p>
				If you want to get in touch, send an email to{' '}
				<a href="mailto:hello@example.com">hello@example.com</a>.
			</p>

			<form
				className="contact-form"
				onSubmit={(e) => {
					e.preventDefault()
					alert('Message sent (demo)')
				}}
			>
				<label>
					Name
					<input name="name" />
				</label>
				<label>
					Email
					<input name="email" type="email" />
				</label>
				<label>
					Message
					<textarea name="message" rows={4} />
				</label>
				<button type="submit">Send</button>
			</form>
		</section>
	)
}