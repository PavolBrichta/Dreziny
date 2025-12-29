import React, { useEffect, useState } from 'react'

type Props = {
	current: 'home' | 'contact'
	setPage: (p: 'home' | 'contact') => void
}

export default function SideMenu({ current, setPage }: Props) {
	const [open, setOpen] = useState(false)

	// close drawer when page changes (mobile)
	useEffect(() => {
		setOpen(false)
	}, [current])

	// close drawer on Escape key
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setOpen(false)
		}
		document.addEventListener('keydown', onKey)
		return () => document.removeEventListener('keydown', onKey)
	}, [])

	// hide body scroll when drawer is open
	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : ''
		return () => {
			document.body.style.overflow = ''
		}
	}, [open])

	return (
		<>
			<button
				className="menu-toggle"
				aria-label="Toggle menu"
				aria-expanded={open}
				onClick={() => setOpen((s) => !s)}
			>
				☰
			</button>

			<nav
				className={`side-menu ${open ? 'open' : ''}`}
				role="navigation"
				aria-hidden={
					!open &&
					typeof window !== 'undefined' &&
					window.innerWidth <= 640
				}
			>
				<div className="side-menu-inner">
					<button
						className={current === 'home' ? 'active' : ''}
						onClick={() => setPage('home')}
						aria-current={current === 'home' ? 'page' : undefined}
					>
						Home
					</button>
					<button
						className={current === 'contact' ? 'active' : ''}
						onClick={() => setPage('contact')}
						aria-current={current === 'contact' ? 'page' : undefined}
					>
						Contact
					</button>
				</div>
			</nav>

			{open && (
				<div className="menu-backdrop" onClick={() => setOpen(false)} />
			)}
		</>
	)
}
