const port = 3000

describe(`Hello World`, () => {
  beforeAll(async () => {
    await page.goto(`http://localhost:${port}`);
  })

  it(`"Hell World" is there`, async () => {
  	const body = await page.evaluate(() => document.body.textContent)
  	expect(body).toContain('Hello World!')
  }) 
})
