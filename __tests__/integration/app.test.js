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
      .catch((err) => {
        done(err)
      })
  })
})

describe(`Reverse`, () => {
  test(`GET`, (done) => {
    request(app)
      .get(`/reverse`)
      .then((res) => {
        expect(res.statusCode).toBe(400)
        expect(res.text).toBe(`text を指定してください`)
        done()
      })
      .catch((err) => {
        done(err)
      })
  })
})
