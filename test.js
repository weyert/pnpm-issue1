const { rest } = require('msw')
const { setupServer } = require('msw/node')

const cookies = require.resolve('@mswjs/cookies')

const server = setupServer(
  rest.post('/login', (req, res, ctx) => {
    const { username } = req.body

    return res(
      ctx.json({
        username,
        firstName: 'John'
      })
    )
  }),
)

server.listen()
