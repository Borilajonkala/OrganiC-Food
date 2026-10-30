import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import Img from '../assets/Logo (2).svg'

const Header = () => {
	return (
		<header>
			<div className='container mx-auto p-4'>
				<div className='flex flex-wrap items-center justify-between gap-6'>
					<div className='flex flex-wrap items-center gap-8'>
						<Link to='/' aria-label='Organik home'>
							<img src={Img} alt='Organik' />
						</Link>
						<nav aria-label='Main navigation'>
							<ul className='flex flex-wrap gap-[10px]'>
								<li>
									<Link to='/'>Home</Link>
								</li>
								<li>
									<Link to='/'>About</Link>
								</li>
								<li>
									<details className='relative'>
										<summary className='cursor-pointer'>Pages</summary>
										<ul className='absolute left-0 top-full z-10 min-w-max bg-white p-2 shadow-md'>
											<li>
												<Link to='/'>About</Link>
											</li>
											<li>
												<Link to='/'>Shop</Link>
											</li>
											<li>
												<Link to='/'>Service</Link>
											</li>
											<li>
												<Link to='/'>Projects</Link>
											</li>
											<li>
												<Link to='/'>News</Link>
											</li>
										</ul>
									</details>
								</li>
								<li>
									<Link to='/'>Shop</Link>
								</li>
								<li>
									<Link to='/'>Projects</Link>
								</li>
								<li>
									<Link to='/'>News</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div role='search' className='flex items-center gap-2 rounded-full bg-[#7EB693] p-1'>
						<input
							type='search'
							aria-label='Search'
							placeholder='Search'
							className='h-12 w-[220px] rounded-full px-4'
						/>
						<button type='button' aria-label='Search' className='p-3'>
							<Search size={21} color='gray' aria-hidden='true' />
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
