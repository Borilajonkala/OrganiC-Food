import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'
import banan from '../assets/banan.png'
import pomidor from '../assets/pomidor.png'
import or from '../assets/or.png'

const fruits = [
	{
		src: banan,
		className:
			'left-[4%] top-[8%] size-[150px] [animation-delay:-0.5s] max-lg:left-[-14px] max-lg:size-[110px] max-sm:top-[4%] max-sm:size-[86px] max-sm:opacity-[0.85]',
	},
	{
		src: pomidor,
		className:
			'right-[3%] top-[22%] size-[176px] [animation-delay:-2.4s] [animation-duration:8.5s] max-lg:right-[-18px] max-lg:size-[128px] max-sm:right-[-26px] max-sm:top-[52%] max-sm:size-[96px] max-sm:opacity-[0.85]',
	},
	{
		src: or,
		className:
			'bottom-[7%] left-[47%] size-[118px] [animation-delay:-4s] [animation-duration:9.5s] max-lg:size-[88px] max-sm:hidden',
	},
]

const NotFound = () => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	return (
		<main className='relative isolate flex min-h-[560px] items-center justify-center overflow-hidden bg-oqrang bg-[radial-gradient(1200px_520px_at_50%_-10%,#EFF6F1_0%,rgba(239,246,241,0)_70%)] pt-16 pb-20 sm:min-h-[660px] sm:pt-[90px] sm:pb-[110px]'>
			{/* Fon effektlari */}
			<div
				aria-hidden='true'
				className='pointer-events-none absolute -left-32 -top-36 z-0 size-[520px] rounded-full bg-yashil/45 blur-[90px] will-change-transform motion-reduce:animate-none animate-nf-drift-a'
			/>
			<div
				aria-hidden='true'
				className='pointer-events-none absolute -bottom-44 -right-36 z-0 size-[560px] rounded-full bg-sariq/40 blur-[90px] will-change-transform motion-reduce:animate-none animate-nf-drift-b'
			/>
			<div
				aria-hidden='true'
				className='pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(rgba(39,76,91,0.14)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(circle_at_50%_45%,transparent_22%,#000_78%)]'
			/>
			<div
				aria-hidden='true'
				className='pointer-events-none absolute left-1/2 top-1/2 z-0 aspect-square w-[min(620px,92vw)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-kok/20 motion-reduce:animate-none animate-nf-spin max-sm:w-[88vw] before:absolute before:right-[6%] before:top-[12%] before:size-3 before:rounded-full before:bg-yashil before:shadow-[0_0_0_6px_rgba(126,182,147,0.25)] before:content-[""]'
			/>

			{/* Suzuvchi mahsulotlar */}
			{fruits.map((fruit) => (
				<div
					key={fruit.className}
					aria-hidden='true'
					className={`pointer-events-none absolute z-0 grid place-items-center rounded-full bg-white shadow-[0_26px_50px_-22px_rgba(39,76,91,0.35),inset_0_0_0_1px_rgba(39,76,91,0.06)] motion-reduce:animate-none animate-nf-float ${fruit.className}`}
				>
					<img
						src={fruit.src}
						alt=''
						className='size-[78%] object-contain mix-blend-multiply'
					/>
				</div>
			))}

			<div className='container relative z-10 mx-auto px-4'>
				<div className='mx-auto flex max-w-[760px] flex-col items-center text-center motion-reduce:animate-none animate-nf-rise'>
					<p className='font-yellowtail text-[clamp(28px,4vw,38px)] leading-tight text-yashil'>
						Oops! Page not found
					</p>

					<div
						aria-hidden='true'
						className='relative my-1.5 mb-[18px] leading-[0.85]'
					>
						<span className='block bg-[linear-gradient(100deg,#274C5B_0%,#7EB693_28%,#274C5B_52%,#EFD372_76%,#274C5B_100%)] [background-size:260%_100%] bg-clip-text text-[clamp(110px,24vw,280px)] font-extrabold tracking-[-0.04em] text-transparent motion-reduce:animate-none animate-nf-shimmer'>
							404
						</span>
						<span className='absolute inset-0 hidden bg-[linear-gradient(#7EB693,#7EB693)] bg-clip-text text-[clamp(110px,24vw,280px)] font-extrabold tracking-[-0.04em] text-transparent opacity-0 mix-blend-multiply motion-reduce:hidden animate-nf-glitch sm:block'>
							404
						</span>
						<span className='absolute inset-0 hidden bg-[linear-gradient(#EFD372,#EFD372)] bg-clip-text text-[clamp(110px,24vw,280px)] font-extrabold tracking-[-0.04em] text-transparent opacity-0 mix-blend-multiply [animation-delay:120ms] motion-reduce:hidden animate-nf-glitch sm:block'>
							404
						</span>
					</div>

					<h1 className='max-w-[620px] text-balance text-[clamp(30px,4.6vw,46px)] font-extrabold leading-[1.15] text-kok'>
						This page wandered off the farm
					</h1>

					<p className='mt-4 max-w-[520px] text-[17px] leading-[1.65] text-qorarang max-sm:text-base'>
						The page you are looking for does not exist, has been moved, or the
						link is broken. Let&apos;s get you back to something fresh.
					</p>

					<div className='mt-[26px] inline-flex max-w-full items-center gap-2.5 rounded-full border border-dashed border-kok/30 bg-white/70 px-[18px] py-[9px] backdrop-blur-md'>
						<span
							aria-hidden='true'
							className='size-2 shrink-0 rounded-full bg-sariq shadow-[0_0_0_4px_rgba(239,211,114,0.35)] motion-reduce:animate-none animate-pulse'
						/>
						<code className='max-w-[46vw] truncate text-sm text-kok'>
							{pathname}
						</code>
						<span className='shrink-0 text-[11px] font-bold uppercase tracking-[0.12em] text-yashil'>
							not found
						</span>
					</div>

					<div className='mt-[30px] flex flex-wrap items-center justify-center gap-3.5 max-sm:w-full'>
						<Link
							to='/'
							className='inline-flex h-14 items-center justify-center gap-2.5 rounded-2xl bg-kok px-[30px] text-base font-bold leading-none text-oqrang shadow-[0_14px_30px_-14px_rgba(39,76,91,0.75)] transition duration-300 hover:-translate-y-[3px] hover:bg-[#1E3A45] hover:shadow-[0_18px_34px_-14px_rgba(39,76,91,0.8)] active:translate-y-0 focus-visible:outline-3 focus-visible:outline-offset-[3px] focus-visible:outline-yashil max-sm:h-[52px] max-sm:flex-[1_1_150px] max-sm:px-[22px] max-sm:text-[15px]'
						>
							<Home size={19} />
							Back to Home
						</Link>
						<button
							type='button'
							onClick={() => navigate(-1)}
							className='inline-flex h-14 cursor-pointer items-center justify-center gap-2.5 rounded-2xl border-2 border-kok/20 bg-transparent px-[30px] text-base font-bold leading-none text-kok transition duration-300 hover:-translate-y-[3px] hover:border-kok hover:bg-white/70 active:translate-y-0 focus-visible:outline-3 focus-visible:outline-offset-[3px] focus-visible:outline-yashil max-sm:h-[52px] max-sm:flex-[1_1_150px] max-sm:px-[22px] max-sm:text-[15px]'
						>
							<ArrowLeft size={19} />
							Go Back
						</button>
					</div>

					<nav
						aria-label='Popular pages'
						className='mt-[34px] flex flex-wrap items-center justify-center gap-2 text-[15px] text-qorarang'
					>
						<span className='mr-1 opacity-75'>Popular:</span>
						{[
							{ to: '/shop', label: 'Shop' },
							{ to: '/service', label: 'Services' },
							{ to: '/shopsingle', label: 'Products' },
						].map((link) => (
							<Link
								key={link.to}
								to={link.to}
								className='relative py-[3px] font-semibold text-kok no-underline after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-yashil after:transition-transform after:duration-300 after:content-[""] hover:after:scale-x-100 focus-visible:after:scale-x-100'
							>
								{link.label}
							</Link>
						))}
					</nav>
				</div>
			</div>
		</main>
	)
}

export default NotFound
