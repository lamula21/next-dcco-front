'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

export default function AccordionStandard() {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (mounted === false) return null

	return (
		<div className="rounded-lg bg-black p-10">
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger className="hover:no-underline">
						<p className="text-xl">
							2017 DCMR 12A, D.C. Building Code Amendments
						</p>
					</AccordionTrigger>
					<AccordionContent>
						<div className="flex flex-col gap-2">
							<Link
								href="https://www.dcregs.dc.gov/Common/DCMR/ChapterList.aspx?subtitleId=89"
								className="text-base underline"
							>
								2017 DCMR 12A, D.C. Building Code Amendments 2015 International
							</Link>
							<Link
								href="https://codes.iccsafe.org/content/IBC2015"
								className="text-base underline"
							>
								Building Code
							</Link>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger className="hover:no-underline">
						<p className="text-xl">
							2017 DCMR 12B, D.C. Residential Code Amendments
						</p>
					</AccordionTrigger>
					<AccordionContent>
						<div className="flex flex-col gap-2">
							<Link
								href="https://www.dcregs.dc.gov/Common/DCMR/ChapterList.aspx?subtitleId=90"
								className="text-base underline"
							>
								2017 DCMR 12B, D.C. Residential Code Amendments
							</Link>
							<Link
								href="https://codes.iccsafe.org/content/IBC2015"
								className="text-base underline"
							>
								2015 International Residential Code (IRC)
							</Link>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger className="hover:no-underline">
						<p className="text-xl">2017 DCMR 12C, DC Electrical Code</p>
					</AccordionTrigger>
					<AccordionContent>
						<div className="flex flex-col gap-2">
							<Link
								href="https://www.dcregs.dc.gov/Common/DCMR/ChapterList.aspx?subtitleId=91"
								className="text-base underline"
							>
								2017 DCMR 12C, D.C. Electrical Code
							</Link>
							<Link
								href="https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70"
								className="text-base underline"
							>
								2014 National Electrical Code (NEC), NFPA 70
							</Link>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-4">
					<AccordionTrigger className="hover:no-underline">
						<p className="text-xl">2017 DCMR 12D, DC Fuel Gas Code</p>
					</AccordionTrigger>
					<AccordionContent>
						<div className="flex flex-col gap-2">
							<Link
								href="https://www.dcregs.dc.gov/Common/DCMR/ChapterList.aspx?subtitleId=92"
								className="text-base underline"
							>
								2017 DCMR 12D, D.C. Fuel Gas Code
							</Link>
							<Link
								href="https://codes.iccsafe.org/content/IFGC2015"
								className="text-base underline"
							>
								2015 International Fuel Gas Code (IFGC)
							</Link>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-5">
					<AccordionTrigger className="hover:no-underline">
						<p className="text-xl">2017 DCMR 12E, DC Mechanical Code</p>
					</AccordionTrigger>
					<AccordionContent>
						<div className="flex flex-col gap-2">
							<Link
								href="https://www.dcregs.dc.gov/Common/DCMR/ChapterList.aspx?subtitleId=93"
								className="text-base underline"
							>
								2017 DCMR 12E, D.C. Mechanical Code
							</Link>
							<Link
								href="https://codes.iccsafe.org/content/IMC2015CU"
								className="text-base underline"
							>
								2015 International Mechanical Code
							</Link>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-6">
					<AccordionTrigger className="hover:no-underline">
						<p className="text-xl">2017 DCMR 12F, DC Plumbing Code</p>
					</AccordionTrigger>
					<AccordionContent>
						<div className="flex flex-col gap-2">
							<Link
								href="https://www.dcregs.dc.gov/Common/DCMR/ChapterList.aspx?subtitleId=94s"
								className="text-base underline"
							>
								2017 DCMR 12F, DC Plumbing Code
							</Link>
							<Link
								href="https://codes.iccsafe.org/content/IPC2015CU"
								className="text-base underline"
							>
								2015 International Plumbing Code (IPC)
							</Link>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-7">
					<AccordionTrigger className="hover:no-underline">
						<p className="text-xl">
							2017 DCMR 12G, DC Property Maintenance Code
						</p>
					</AccordionTrigger>
					<AccordionContent>
						<div className="flex flex-col gap-2">
							<Link
								href="https://www.dcregs.dc.gov/Common/DCMR/ChapterList.aspx?subtitleId=95"
								className="text-base underline"
							>
								2017 DCMR 12G, DC Property Maintenance Code
							</Link>
							<Link
								href="https://codes.iccsafe.org/content/IPMC2015"
								className="text-base underline"
							>
								2015 International Property Maintenance Code (IPMC)
							</Link>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-8">
					<AccordionTrigger className="hover:no-underline">
						<p className="text-xl">
							2017 DCMR 12I, DC Energy Conservation Code
						</p>
					</AccordionTrigger>
					<AccordionContent>
						<div className="flex flex-col gap-2">
							<Link
								href="https://www.dcregs.dc.gov/Common/DCMR/ChapterList.aspx?subtitleId=100"
								className="text-base underline"
							>
								2017 DCMR 12I, DC Energy Conservation Code
							</Link>
							<Link
								href="https://codes.iccsafe.org/content/IECC2015/iecc-residential-provisions"
								className="text-base underline"
							>
								2015 International Energy Conservation Code - Residential
								Provisions
							</Link>
							<Link
								href="https://www.techstreet.com/ashrae/standards/ashrae-90-1-2013-si?gateway_code=ashrae&product_id=1865967"
								className="text-base underline"
							>
								2013 ANSI/ASHRAE/IES 90.1
							</Link>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-9">
					<AccordionTrigger className="hover:no-underline">
						<p className="text-xl">2017 DCMR 12J, DC Existing Building Code</p>
					</AccordionTrigger>
					<AccordionContent>
						<div className="flex flex-col gap-2">
							<Link
								href="https://www.dcregs.dc.gov/Common/DCMR/ChapterList.aspx?subtitleId=99"
								className="text-base underline"
							>
								2017 DCMR 12J, DC Existing Building Code
							</Link>
							<Link
								href="https://codes.iccsafe.org/content/IEBC2015"
								className="text-base underline"
							>
								2015 Existing Building Code
							</Link>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-10">
					<AccordionTrigger className="hover:no-underline">
						<p className="text-xl">2017 DCMR 12K, DC Green Construction Code</p>
					</AccordionTrigger>
					<AccordionContent>
						<div className="flex flex-col gap-2">
							<Link
								href="https://www.dcregs.dc.gov/Common/DCMR/ChapterList.aspx?subtitleId=97"
								className="text-base underline"
							>
								2017 DCMR 12K, DC Green Construction Code
							</Link>
							<Link
								href="https://codes.iccsafe.org/content/IgCC2012"
								className="text-base underline"
							>
								2012 International Green Construction Code (IGCC)
							</Link>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-11">
					<AccordionTrigger className="hover:no-underline">
						<p className="text-xl">
							2017 DCMR 12L, DC Swimming Pool and Spa Code
						</p>
					</AccordionTrigger>
					<AccordionContent>
						<div className="flex flex-col gap-2">
							<Link
								href="https://www.dcregs.dc.gov/Common/DCMR/ChapterList.aspx?subtitleId=98"
								className="text-base underline"
							>
								2017 DCMR 12L, DC Swimming Pool and Spa Code
							</Link>
							<Link
								href="https://codes.iccsafe.org/content/ISPSC2015"
								className="text-base underline"
							>
								2015 International Swimming Pool and Spa Code (ISPSC)
							</Link>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-12">
					<AccordionTrigger className="hover:no-underline">
						<p className="text-xl">
							2017 DCMR 12I, Energy Conservation Code Supplement of 2017-
							Residential Provisions
						</p>
					</AccordionTrigger>
					<AccordionContent>
						<div className="flex flex-col gap-2">
							<Link
								href="https://www.dcregs.dc.gov/Common/DCMR/ChapterList.aspx?subtitleId=101"
								className="text-base underline"
							>
								2017 DCMR 12I, Energy Conservation Code Supplement of 2017 -
								Residential Provisions
							</Link>
							<Link
								href="https://codes.iccsafe.org/content/IEBC2015"
								className="text-base underline"
							>
								2015 International Existing Building Code (IEBC)
							</Link>
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	)
}
