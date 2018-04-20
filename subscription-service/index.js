const { send, json } = require('micro')
const { router, post } = require('microrouter')

module.exports = router(
  post('/', async (req, res) => {
    const subscription = await json(req)
    // TODO: "Save" subscription
    // TODO: Return response
  })
)
