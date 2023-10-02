import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/authOptions'

export async function getServerCurrentUser() {
	const session = await getServerSession(authOptions)

	return session?.user
}

// export async function verifyCurrentUserHasAccessToPost(postId) {
// const session = await getServerSession(authOptions)
// const count = await db.post.count({
// 	where: {
// 		id: postId,
// 		authorId: session?.user.id,
// 	},
// })

// return count > 0
// }
