import request from 'supertest'
import app from '../../src/app.js'

describe(`Hello world`, () => {
  test(`GET`, (done) => {
    request(app)
      .get(`/`)
      .then((res) => {
        expect(res.statusCode).toBe(200)
        expect(res.text).toBe(`Hello World!`)
        done()
      })
  })
})
