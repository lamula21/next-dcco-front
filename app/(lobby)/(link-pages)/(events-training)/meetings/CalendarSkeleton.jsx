import { Skeleton } from '@/components/ui/skeleton'

export function CalendarSkeleton() {
	return (
		<main className="bg-[#222]">
			<div className="h-full pl-16 pt-20 pb-36">
				<div className="flex justify-center">
					<div className="lg:pr-4">
						<div className="lg:mx-auto lg:max-w-3xl">
							<p className="text-sm lg:text-base font-semibold leading-7 text-[#C07331]">
								<Skeleton className="w-32 h-8" />
							</p>
							<h1 className="mt-2 text-2xl lg:text-3xl font-bold lg:tracking-tight text-[#D6D3CD] ">
								<Skeleton className="w-52 h-14" />
							</h1>
						</div>
					</div>
				</div>

				<div className="mt-14 flex mx-auto divide-x-2 gap-10 justify-center">
					<Skeleton className="lg:min-h-[768px] lg:flex lg:flex-col lg:h-full w-full rounded-md overflow-hidden border border-[#363b3d]" />

					<div className="sticky top-40 h-[30rem] w-96 px-5">
						<h1 className="font-semibold mb-4">
							<Skeleton className="w-20 h-6" />
						</h1>
						<Skeleton className="w-full h-20" />
					</div>
				</div>
			</div>
		</main>
	)
}
