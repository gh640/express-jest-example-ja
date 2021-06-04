// Jest で ECMAScript を使用する
// See: https://jestjs.io/docs/ecmascript-modules
import { jest } from '@jest/globals'

import hello from '../../../src/handlers/hello.js'

test('hello', async () => {
	const req = {}
	const res = {
	  send: jest.fn(),
	}

	await hello(req, res)

	expect(res.send.mock.calls.length).toBe(1)	
	expect(res.send.mock.calls[0]).toEqual([`Hello World!`])	
})
