//props: price, title, description
export function MembershipCard({ price, title, bullet_points, key }) {
	return (
		<div className="p-4 md:w-1/2 lg:w-1/3 xl:w-1/4" key={key}>
			<div className="group p-6 flex flex-col border-2 border-[#D6D3CD]/20 rounded-lg max-w-sm md:max-w-md sm:w-auto transition-all duration-300 hover:scale-110 hover:ring-2 hover:border-yellow-700 hover:ring-yellow-500/25 hover:shadow-2xl">
				<div className="uppercase text-[#C07331] font-bold my-2 text-xl">
					{title}
				</div>

				<p className="py-4 flex gap-1 items-baseline">
					<span className="font-bold text-4xl tracking-tight text-[#D6D3CD]">
						${price}
					</span>
					<span className="font-semibold text-sm text-[#B1AAA0]">/hour</span>
				</p>

				<ul className="text-sm list-disc grow">
					{bullet_points &&
						bullet_points.map((item, index) => {
							return (
								<li className="text-[#D6D3CD] list-none flex gap-1" key={index}>
									<span>
										<i className="bx bx-check text-xl text-[#C07331]"></i>
									</span>
									<p className="text-[#B1AAA0]">{item}</p>
								</li>
							)
						})}
				</ul>
				<div className="flex justify-center my-3  ">
					<button className="mt-3 transition-colors duration-300 text-lg font-semibold	bg-[#004d34] w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-[#C07331]">
						Apply Now
					</button>
				</div>
			</div>
		</div>
	)
}

// mt-3 text-lg font-semibold	bg-black w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-gray-700

// bg-emerald-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full text-center
