const { send } = require('micro')
const { router, get } = require('microrouter')

module.exports = router(
  get('/vehicles', (req, res) => {
    const vehicles = []

    // TODO: Return list of vehicles

    return {
      vehicles
    }
  })
)
