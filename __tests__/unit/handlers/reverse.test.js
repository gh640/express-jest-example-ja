// Jest で ECMAScript を使用する
// See: https://jestjs.io/docs/ecmascript-modules
import { jest } from '@jest/globals'

import reverse from '../../../src/handlers/reverse.js'

describe(`reverse`, () => {
	it(`success`, async () => {
		const req = {
			query: {
				text: `カメ`,
			},
		}
		const res = {
			send: jest.fn(),
		}

		await reverse(req, res)

		expect(res.send.mock.calls.length).toBe(1)	
		expect(res.send.mock.calls[0]).toEqual([`メカ`])
	})

	it(`error with missing input`, async () => {
		const req = {
			query: {},
		}
		const res = {
			send: jest.fn(),
		}
		res.status = jest.fn(() => res)

		await reverse(req, res)

		expect(res.send.mock.calls.length).toBe(1)	
		expect(res.send.mock.calls[0]).toEqual([`text を指定してください`])
	})

	it(`error with wrong type`, async () => {
		const req = {
			query: {
				text: 7,
			},
		}
		const res = {
			send: jest.fn(),
		}
		res.status = jest.fn(() => res)

		await reverse(req, res)

		expect(res.send.mock.calls.length).toBe(1)	
		expect(res.send.mock.calls[0]).toEqual([`text は文字列である必要があります`])	
	})
})
