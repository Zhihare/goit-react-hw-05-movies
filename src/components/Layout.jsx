import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { LayoutLi, LayoutNav, LayoutUl } from './Layout.styled'

export const Layout = () => {
	return (
		<div>
			<LayoutNav>
				<LayoutUl>
					<LayoutLi>
						<NavLink to={'/'}>Home</NavLink>
					</LayoutLi>
					<LayoutLi>
						<NavLink to={'/movies'}>Movies</NavLink>
					</LayoutLi>
				</LayoutUl>
			</LayoutNav>
			<Outlet />
		</div>
	)
}
