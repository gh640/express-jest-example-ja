const reverse = (req, res) => {
  const text = req.query.text

  if (text === undefined) {
    res.status(400).send(`text を指定してください`)
    return
  }

  if (!(typeof text === `string`)) {
    res.status(400).send(`text は文字列である必要があります`)
    return
  }

  res.send(text.split(``).reverse().join(``))
}

export default reverse
