'use client'
import dayjs from 'dayjs'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { generateDate, months } from '../components/calendar'
import SectionHeader from '../../components/SectionHeader'

export default function CalendarPage() {
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wedneday',
		'Thrusday',
		'Friday',
		'Saturday',
	]
	const currentDate = dayjs()
	const [today, setToday] = useState(currentDate)
	const [selectDate, setSelectDate] = useState(currentDate)

	return (
		<main className="bg-[#222]">
			<div className="h-full pl-16 pt-20 pb-36">
				<SectionHeader subtitle="CALENDAR" title="Our Recent Events" />
				<div className="mt-14 flex mx-auto divide-x-2 gap-10 justify-center">
					{/* Left Panel - Calendar */}
					<div className="lg:min-h-[768px] lg:flex lg:flex-col lg:h-full w-full rounded-md overflow-hidden border border-[#363b3d]">
						{/* Calendar Prompt Header */}
						<header className="flex items-center justify-between border-b-[1px] px-6 py-5 lg:flex-none">
							<h1 className="font-semibold">
								{months[today.month()]}, {today.year()}
							</h1>

							<div className=" relative flex items-center border border-[#363b3d] rounded-md bg-[#181a1b] overflow-hidden">
								<i
									className=" p-2 bx bx-chevron-left cursor-pointer text-2xl text-[#B1AAA0] hover:bg-[hsl(var(--accent))]"
									onClick={() => {
										setToday(today.month(today.month() - 1))
									}}
								/>

								<h1
									className="py-2 px-5 cursor-pointer hover:bg-[hsl(var(--accent))]"
									onClick={() => setToday(currentDate)}
								>
									Today
								</h1>

								<i
									className="p-2 bx bx-chevron-right cursor-pointer text-2xl text-[#B1AAA0] hover:bg-[hsl(var(--accent))]"
									onClick={() => {
										setToday(today.month(today.month() + 1))
									}}
								/>
							</div>
						</header>

						<div className="lg:flex lg:flex-col lg:flex-auto">
							{/* Sunday to Saturday Row */}
							<div className="grid grid-cols-7 text-white text-center font-semibold lg:flex-none">
								{days.map((day, index) => {
									return (
										<h1
											key={index}
											className="h-14 border-t grid place-content-center text-sm border border-[#363b3d]"
										>
											{day}
										</h1>
									)
								})}
							</div>

							{/* Dates Grid */}
							<div className="flex text-xs leading-6 lg:flex-auto">
								<div className="w-full lg:grid lg:grid-cols-7 lg:grid-rows-5">
									{generateDate(today.month(), today.year()).map(
										({ date, currentMonth, today }, index) => {
											return (
												<div
													key={index}
													className="relative px-3 py-2 border border-[#363b3d] hover:bg-[#ffffff0a]"
												>
													<div className="flex flex-col gap-2">
														<div className="flex justify-end">
															<h1
																className={cn(
																	currentMonth ? '' : 'text-gray-400',
																	today ? 'bg-red-600 text-white' : '',
																	selectDate.toDate().toDateString() ===
																		date.toDate().toDateString()
																		? 'bg-black text-white'
																		: '',
																	'h-10 w-10 text-sm grid place-content-center rounded-full hover:bg-black hover:text-white transition-all cursor-pointer'
																)}
																onClick={() => {
																	setSelectDate(date)
																}}
															>
																{date.date()}
															</h1>
														</div>

														{/* Fetch Data Here */}
														<ul>
															{/* One Event Document */}
															{index === 20 ? (
																<>
																	<li className="p-2 flex flex-col bg-indigo-900 rounded-md text-xs text-[10px] font-semibold">
																		<h1 className="text-[#9E9589]">
																			8:50 AM to 4:00 PM
																		</h1>
																		<p className="text-[#D6D3CD]">
																			This is a test event description.
																		</p>
																	</li>
																	<li className="p-2">Data</li>
																</>
															) : null}
														</ul>
													</div>
												</div>
											)
										}
									)}
								</div>
							</div>
						</div>
					</div>

					{/* Right Panel - Events description */}
					<div className="sticky top-40 h-[30rem] w-96 px-5">
						<h1 className="font-semibold">
							{' '}
							Schedule for {selectDate.toDate().toDateString()}
						</h1>
						<p> No Events for Today</p>
					</div>
				</div>
			</div>
		</main>
	)
}
