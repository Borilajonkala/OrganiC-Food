import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import Img from '../assets/Logo (2).svg'
const Header = () => {
	return (
		<>
			<div>
				<div className='container mx-auto p-4'>
					<div className='flex items-center gap-20'>
						<img src={Img} alt='' />
						<ul className='flex gap-[10px]'>
							<li>
								<Link>Home</Link>
							</li>
							<li>
							<Link to="/abaut">Aboute</Link>
							</li>
							<li>
								<details className='flex '>
									<summary className=''>Pages</summary>
									<Link to="/abaut">Aboute</Link>
									<Link>Shop</Link>
									<Link>Service</Link>
									<Link>Projects</Link>
									<Link>News</Link>
								</details>
							</li>
							<li>
								<Link>Shop</Link>
							</li>
							<li>
								<Link>Projects</Link>
							</li>
							<li>
								<Link>News</Link>
							</li>
						</ul>
					</div>
				<div>
					<div className='bg-#7EB693'>
						<input type="text" className='w-[376px] h-[66px] rounded-4xl' />
					<button><Search size={21} color='gray' /></button>
					</div>
					<div>

					</div>
				</div>
				</div>
			</div>
		</>
	)
}

export default Header
