import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const Layout = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to={'/'}>Home</NavLink>
				</li>
				<li>
					<NavLink to={'/movies'}>Movies</NavLink>
				</li>
			</ul>
			<Outlet />
		</nav>
	)
}
