import sirv from 'sirv'
import polka from 'polka'
import compression from 'compression'
import * as sapper from '@sapper/server'
import session from 'express-session'
import sessionFileStore from 'session-file-store'
import { json } from 'body-parser'

const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'

const FileStore = new sessionFileStore(session)

// Credit to https://blog.marksauerutley.com/sapper-authenticated-sessions/

polka() // You can also use Express
  .use(
    json(),
    session({
      secret: 'SomethingSEcret',
      resave: true,
      saveUninitialized: true,
      cookie: {
        maxAge: 31536000,
      },
      store: new FileStore({
        path: '.sessions',
      }),
    }),
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware({
      session: (req, res) => {
        return ({
          token: req.session.token,
        })
      }
    })
  )
  .listen(PORT, err => {
    if (err) console.log('error', err)
  })
