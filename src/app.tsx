import logo from './assets/logo-nlw-expert.svg'

export function App() {
	return (
		<div className='max-w-6xl mx-auto my-12 space-y-6'>
			<img src={logo} alt="NLW expert" />

			<form className='w-full'>
				<input type="text" placeholder='Busque em suas notas...' className='w-full text-3xl font-semibold tracking-tight bg-transparent outline-none text-slate-500' />
			</form>

			<div className='h-px bg-slate-700' />

			<div className='grid grid-cols-3 auto-rows'>
				
			</div>

		</div>
	)
}