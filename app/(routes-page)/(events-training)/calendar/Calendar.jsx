'use client'
import dayjs from 'dayjs'
import advanceFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(advanceFormat)

import { Image as NextuiImage } from '@nextui-org/react'
import { cn, getDifferenceTime } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { generateDate, months, days } from '../components/calendar'

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'

export function Calendar({ events }) {
	const [mounted, setMounted] = useState(false)
	const currentDate = dayjs()
	const [today, setToday] = useState(currentDate)
	const [selectDate, setSelectDate] = useState(currentDate)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	return (
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
									className="hidden h-14 border-t lg:grid place-content-center text-sm border border-[#363b3d]"
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
											className={cn(
												'relative px-2 py-2 border border-[#363b3d] hover:bg-[#ffffff0a] cursor-pointer',
												today ? 'border border-[#C07331]' : ''
											)}
											onClick={() => {
												setSelectDate(date)
											}}
										>
											<div className="flex flex-col gap-[2px]">
												<div className="flex justify-end">
													<h1
														className={cn(
															currentMonth ? '' : 'text-gray-400',
															today ? 'bg-[#C07331] text-white' : '',
															selectDate.toDate().toDateString() ===
																date.toDate().toDateString()
																? 'bg-black text-white'
																: '',
															'h-7 w-7 text-xs grid place-content-center rounded-full hover:bg-black hover:text-white transition-all cursor-pointer'
														)}
														onClick={() => {
															setSelectDate(date)
														}}
													>
														{date.date()}
													</h1>
												</div>
												{events.map((event, index) => {
													return (
														<ul key={event._id} className="flex flex-col gap-1">
															{/* One Event Document */}
															{date
																.format('MMMM Do, YYYY')
																.includes(event.date) && index < 2 ? (
																<>
																	<Dialog>
																		<TooltipProvider delayDuration={400}>
																			<Tooltip>
																				<TooltipTrigger>
																					<DialogTrigger asChild>
																						<li className="px-2 py-1 flex rounded-md text-xs text-[10px] font-semibold items-center gap-1 transition-colors hover:bg-gray-950 hover:rounded-md">
																							<h1 className="text-[#9E9589] text-clip overflow-hidden">
																								<span className="inline-flex w-2 h-2 bg-yellow-700 rounded-full mr-1" />
																								{event.init_time} -{' '}
																								{event.end_time}{' '}
																								<span className="ml-[2px] text-[#D6D3CD]">
																									{event.title}
																								</span>
																							</h1>
																						</li>
																					</DialogTrigger>
																				</TooltipTrigger>
																				<TooltipContent className="border border-white/20 bg-gray-950">
																					<p className="text-xs">See Event</p>
																				</TooltipContent>
																			</Tooltip>
																		</TooltipProvider>

																		<DialogContent className="sm:max-w-4xl px-20 py-10 h-screen">
																			<DialogHeader className="overflow-y-scroll">
																				{event.imageUrl[0] ? (
																					<div className="self-center my-10">
																						{event.imageUrl[0] ? (
																							<NextuiImage
																								isBlurred
																								isZoomed
																								src={event.imageUrl[0]}
																								alt="event image"
																								width={650}
																								className="max-w-[650px] h-[20rem] object-cover rounded-3xl"
																							/>
																						) : null}
																					</div>
																				) : null}

																				<DialogTitle className="my-5 flex flex-col gap-1">
																					<span className="text-[#C07331] text-lg tracking-wider font-normal">
																						{event.date} @ {event.init_time}{' '}
																						{event.init_time.split(':')[0] >= 12
																							? 'PM'
																							: 'AM'}{' '}
																						- {event.end_time}{' '}
																						{event.end_time.split(':')[0] >= 12
																							? 'PM'
																							: 'AM'}
																					</span>

																					<span className="text-5xl font-bold tracking-tight">
																						{event.title}
																					</span>

																					<span className="text-base tracking-normal font-light my-4">
																						{/* {event.subtitle} */}
																						{`This is a mocked up SUBTITLE. Join
																						us for the General Meeting, an
																						online gathering where we'll discuss
																						everything and anything in a casual
																						and relaxed atmosphere.`}
																					</span>
																				</DialogTitle>

																				<div className="flex flex-col gap-5">
																					<div>
																						<span className="text-2xl font-semibold">
																							About this event
																						</span>
																					</div>

																					<div className="flex gap-28">
																						<div className="flex gap-2 items-center">
																							<i className="bx bx-time block text-[#468CE5] p-2 bg-[#1C1E1F] rounded-lg" />
																							<span>
																								{getDifferenceTime(
																									event.init_time,
																									event.end_time
																								)}
																								{' minutes'}
																							</span>
																						</div>

																						<div className="flex gap-2 items-center">
																							<i className="bx bx-calendar-event text-[#468CE5] p-2 bg-[#1C1E1F] rounded-lg"></i>
																							<span>{event.address}</span>
																						</div>
																					</div>

																					<DialogDescription className="text-xl text-white">
																						{event.description}
																					</DialogDescription>
																				</div>
																			</DialogHeader>

																			<DialogFooter>
																				<a
																					href="https://www.eventbrite.com/e/general-meeting-tickets-716946756047?aff=oddtdtcreator"
																					target="_blank"
																					className="flex-none rounded-md h-10 bg-[#C07331] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-700"
																				>
																					Reserve a spot
																				</a>
																			</DialogFooter>
																		</DialogContent>
																	</Dialog>
																</>
															) : null}
														</ul>
													)
												})}
												{events.length - 3 > 0 ? (
													<span className="px-2">{events.length - 3} more</span>
												) : null}
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
				<h1 className="font-semibold mb-4">
					Schedule for {selectDate.toDate().toDateString()}
				</h1>

				{
					// check if there are no events on the selected date
					events.filter(
						(event) => event.date === selectDate.format('MMMM Do, YYYY')
					).length === 0 ? (
						<p className="text-gray-400">No events on this day</p>
					) : (
						<ul className="flex flex-col gap-4">
							{
								// if there are events on the selected date, display them
								// display only the first 3 events, and hide the rest. show how many events are hidden
								events.map((event) => {
									return event.date === selectDate.format('MMMM Do, YYYY') ? (
										<li
											key={event._id}
											className="p-4 flex flex-col gap-2 bg-gray-950 rounded-md text-xs text-[10px] font-semibold cursor-pointer"
										>
											<h1 className=" text-base text-[#9E9589]">
												{event.init_time} to {event.end_time}
											</h1>
											<p className="text-sm text-[#D6D3CD]">{event.title}</p>
											<p className="text-sm text-[#D6D3CD]">{event.address}</p>
										</li>
									) : null
								})
							}
						</ul>
					)
				}
			</div>
		</div>
	)
}
