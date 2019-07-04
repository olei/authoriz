'use strict'

export default {
	port: 8080,
	url: 'mongodb://localhost:27017/admin',
	session: {
		name: 'SID',
		secret: 'SID',
		cookie: {
			httpOnly: true,
      secure: false,
			maxAge: 30 * 60 * 1000,
			// domain: "localhost"
		}
	}
}