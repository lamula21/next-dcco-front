export default function SectionHeader({ subtitle, title, description }) {
	return (
		<div className="text-left lg:text-center">
			<div className="lg:pr-4">
				<div className="lg:mx-auto lg:max-w-3xl">
					<p className="text-sm lg:text-base font-semibold leading-7 text-[#C07331]">
						{subtitle}
					</p>
					<h1 className="mt-2 text-2xl lg:text-3xl font-bold lg:tracking-tight text-[#D6D3CD] ">
						{title}
					</h1>
					<p className="mt-6 text-base lg:text-xl lg:leading-8 text-[#D6D3CD]">
						{description}
					</p>
				</div>
			</div>
		</div>
	)
}
