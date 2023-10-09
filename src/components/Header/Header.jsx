import { NavLink, Navigate, useNavigate } from "react-router-dom"

const Header = () => {

	return (
		<nav className='navbar bg-dark mb-3 navbar-expand-lg'>
			<div className='container-fluid'>
				<span className='navbar-brand mb-0 h1 text-success text-white'>
					themoviedb
				</span>
				<div
					className='collapse navbar-collapse'
					id='navbarNavAltMarkup'
				>
					<div className='navbar-nav'>
						<NavLink
							className='nav-link text-white '
							aria-current='page'
							to='/'
						>
							Home
						</NavLink>
						<NavLink className='nav-link text-white' to='/movies'>
							Movies
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Header