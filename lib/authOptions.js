import GoogleProvider from 'next-auth/providers/google'
import CredentailsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

import { MongoDBAdapter } from '@auth/mongodb-adapter'
import clientPromise from '@/lib/mongodb'
import { mongooseConnect } from '@/lib/mongoose'
import { getUserByEmail } from '@/services/getUserByEmail'

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

				const userFound = await getUserByEmail(credentials.email)

				console.log(userFound)

				if (userFound?.message) {
					const errorMessage = userFound?.message
					throw new Error(errorMessage)
				}

				console.log(credentials.password)

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
			const dbUser = await getUserByEmail(token?.email)

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
		async session({ token, session }) {
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
