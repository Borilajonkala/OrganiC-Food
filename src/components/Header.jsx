import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Search } from 'lucide-react'
import Img from '../assets/Logo (2).svg'

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	const closeMenu = () => setMenuOpen(false)

	return (
		<header className='w-full bg-white shadow-sm'>
			<div className='container mx-auto px-4 py-5'>
				<div className='flex flex-wrap items-center justify-between gap-6'>
					<Link to='/' aria-label='Organik home' onClick={closeMenu}>
						<img src={Img} alt='Organik' className='w-[170px] object-contain' />
					</Link>

					<nav
						aria-label='Main navigation'
						className='hidden items-center gap-8 font-semibold text-[#274C3B] lg:flex'
					>
						<Link to='/' className='transition-colors hover:text-[#7EB693]'>
							Home
						</Link>
						<Link to='/shop' className='transition-colors hover:text-[#7EB693]'>
							Shop
						</Link>
						<Link to='/shopsingle' className='transition-colors hover:text-[#7EB693]'>
							Shop Single
						</Link>
					</nav>

					<div className='flex items-center gap-3'>
						<form
							role='search'
							action='/shop'
							method='get'
							className='hidden items-center rounded-full border border-gray-100 bg-[#FAFAFA] p-1 pl-5 xl:flex'
						>
							<input
								type='search'
								name='search'
								aria-label='Search products'
								placeholder='Search...'
								className='w-[150px] bg-transparent text-sm text-[#274C3B] outline-none'
							/>
							<button
								type='submit'
								aria-label='Search'
								className='rounded-full bg-[#7EB693] p-3 text-white transition-colors hover:bg-[#609E79]'
							>
								<Search size={20} aria-hidden='true' />
							</button>
						</form>

						<button
							type='button'
							onClick={() => setMenuOpen((isOpen) => !isOpen)}
							className='p-2 text-[#274C3B] lg:hidden'
							aria-label={menuOpen ? 'Close menu' : 'Open menu'}
							aria-expanded={menuOpen}
							aria-controls='mobile-navigation'
						>
							<Menu size={28} aria-hidden='true' />
						</button>
					</div>
				</div>

				{menuOpen && (
					<nav
						id='mobile-navigation'
						aria-label='Mobile navigation'
						className='mt-5 flex flex-col gap-4 rounded-2xl bg-[#F7FAF8] p-5 font-semibold text-[#274C3B] lg:hidden'
					>
						<Link to='/' onClick={closeMenu}>
							Home
						</Link>
						<Link to='/shop' onClick={closeMenu}>
							Shop
						</Link>
					</nav>
				)}
			</div>
		</header>
	)
}

export default Header
