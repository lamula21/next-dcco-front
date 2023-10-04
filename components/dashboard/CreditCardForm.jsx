'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { CreditCard, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

import { cn } from '@/lib/utils'
import { titleSchema } from '@/lib/validations/user'
import { buttonVariants } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { patchUserData } from '@/services/patchUserData'
import { zodResolver } from '@hookform/resolvers/zod'
import { creditCardSchema } from '@/lib/validations/creditcard'

export function CreditCardForm({ user, className, ...props }) {
	const [loading, setLoading] = useState(false)
	const router = useRouter()
	const pathname = usePathname()

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(creditCardSchema),
		defaultValues: {
			creditcardholder: user?.creditcard?.creditcardholder || '',
			creditcardnumber: user?.creditcard?.creditcardnumber || '',
			creditcardyear: user?.creditcard?.creditcardyear || '',
			creditcardcvc: user?.creditcard?.creditcardcvc || '',
		},
	})

	//  This is a hack to refresh the data on the page without a full refresh
	const refreshData = () => {
		router.replace(pathname)
	}

	async function onSubmit(data) {
		setLoading(true)

		const dataToUpdate = {
			_id: user.id,
			title: data.title,
		}

		const response = await patchUserData(dataToUpdate)

		setLoading(false)

		if (!response?.ok) {
			return toast.error('Something went wrong.', {
				description: 'Your title was not updated. Please try again.',
			})
		}

		toast.success('Your title has been updated.')

		// soft refresh
		refreshData()
	}

	return (
		<form
			className={cn(className)}
			onSubmit={handleSubmit(onSubmit)}
			{...props}
		>
			<Card>
				<CardHeader>
					<CardTitle>Payment Information</CardTitle>
					<CardDescription>
						We store your credit card information securely to make smoother
						transaction convenient as possible and facilitate refund process.
					</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col gap-5">
					<div className="">
						<Label className="sr-only" htmlFor="creditcardholder">
							Credit Card Holder
						</Label>
						<Input
							className="max-w-[576px] opacity-50"
							id="creditcardyear"
							placeholder="Card Holder Name"
							size={32}
							{...register('creditcardholder')}
							disabled
						/>
						{errors?.name && (
							<p className="px-1 text-xs text-red-600">
								{errors.creditcardholder.message}
							</p>
						)}
					</div>

					<div>
						<div className="relative max-w-[576px]">
							<Label className="sr-only" htmlFor="creditcardnumber">
								Credit Card Number
							</Label>
							<Input
								className="max-w-[576px] opacity-50"
								id="creditcardnumber"
								placeholder="1234 1234 1234 1234"
								size={32}
								{...register('creditcardnumber')}
								disabled
							/>
							{errors?.name && (
								<p className="px-1 text-xs text-red-600">
									{errors.creditcardnumber.message}
								</p>
							)}
							<CreditCard className="absolute w-6 h-6 top-[50%] -translate-y-[50%] right-3" />
						</div>

						<div className="flex">
							<div className="">
								<Label className="sr-only" htmlFor="creditcardyear">
									Credit Year
								</Label>
								<Input
									className="max-w-[400px] opacity-50"
									id="creditcardyear"
									placeholder="MM / YY"
									size={32}
									{...register('creditcardyear')}
									maxLength={16}
									disabled
								/>
								{errors?.name && (
									<p className="px-1 text-xs text-red-600">
										{errors.creditcardyear.message}
									</p>
								)}
							</div>
							<div className="">
								<Label className="sr-only" htmlFor="creditcardcvc">
									Credit Card CVC
								</Label>
								<Input
									id="creditcardcvc"
									className="max-w-[400px] opacity-50"
									placeholder="CVC"
									size={32}
									maxLength={3}
									{...register('creditcardcvc')}
									disabled
								/>
								{errors?.name && (
									<p className="px-1 text-xs text-red-600">
										{errors.creditcardcvc.message}
									</p>
								)}
							</div>
						</div>
					</div>
				</CardContent>
				<CardFooter>
					<button
						type="submit"
						className={cn(buttonVariants(), 'opacity-50')}
						// disabled={loading}
						disabled
					>
						{loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
						<span>Save</span>
					</button>
				</CardFooter>
			</Card>
		</form>
	)
}
