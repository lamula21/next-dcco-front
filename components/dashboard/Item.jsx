import { Skeleton } from '@/components/ui/skeleton'

export function PostItem({ post }) {
	return (
		<div className="p-4">
			<div className="space-y-3">
				<div className="h-5 w-2/5"></div>
				<div className="h-4 w-4/5"></div>
			</div>
		</div>
	)
}

PostItem.Skeleton = function PostItemSkeleton() {
	return (
		<div className="p-4">
			<div className="space-y-3">
				<Skeleton className="h-5 w-2/5" />
				<Skeleton className="h-4 w-4/5" />
			</div>
		</div>
	)
}
