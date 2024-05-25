import { app } from '@/app'
import { env } from '@/env'

app.get('/', (request, reply) => {
  return reply.send({
    message: "it's work!",
  })
})

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log(`🚀 HTTP Server Running on PORT ${env.PORT} !`)
  })
