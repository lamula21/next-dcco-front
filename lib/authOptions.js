import GoogleProvider from 'next-auth/providers/google'
import CredentailsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

import { MongoDBAdapter } from '@auth/mongodb-adapter'
import clientPromise from '@/lib/mongodb'
import { mongooseConnect } from '@/lib/mongoose'

export const authOptions = {
	adapter: MongoDBAdapter(clientPromise),
	session: {
		strategy: 'jwt',
	},
	pages: {
		signIn: '/login',
		// verifyRequest: '/auth/verify-request', // (used for check email message)
		// newUser: null, // If set, new users will be directed here on first sign in
	},

	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),

		CredentailsProvider({
			name: 'credentials',

			credentials: {
				username: { label: 'Email', type: 'text', placeholder: 'jsmith' },
				password: { label: 'Password', type: 'password' },
			},

			// when user click sign in button
			// call this function
			async authorize(credentials) {
				await mongooseConnect()

				const res = await fetch(
					`${process.env.NEXT_PUBLIC_API_URL_DEV}/api/users?email=${credentials.email}`
				)

				const userFound = await res.json()

				console.log(userFound)

				if (!res?.ok) {
					const errorMessage = userFound?.message
					throw new Error(errorMessage)
				}

				// validate password
				const isPasswordValid = await bcrypt.compare(
					credentials.password,
					userFound.password
				)

				console.log(isPasswordValid)

				if (!isPasswordValid) throw new Error('Invalid credentials')

				return userFound
			},
		}),
	],

	// add extra info to the cookies
	callbacks: {
		// token generated
		// user object from provider
		async jwt({ token, user }) {
			const res = await fetch(
				`http://localhost:3000/api/users?email=${token.email}`
			)

			const dbUser = await res.json()

			console.log(dbUser)

			if (!dbUser) {
				if (user) {
					token.id = user?.id
				}
				return token
			}

			return {
				id: dbUser._id,
				name: dbUser.name,
				email: dbUser.email,
				picture: dbUser.image,
			}
		},

		// session reusable with useSession Hook.
		// session stores user info globally thru the app.
		// Utility: authenticate user when send requests to the server
		// by this, we avoid fetching user from the db every time we need
		// to check if user has access to HTTP requests
		async session({ token, session, user }) {
			if (token) {
				session.user.id = token.id
				session.user.name = token.name
				session.user.email = token.email
				session.user.image = token.picture
			}

			return session
		},
	},
}
