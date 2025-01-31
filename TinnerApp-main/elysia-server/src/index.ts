import { Elysia, t } from "elysia"
//import { example } from "./controllers/example.controller"
import { swaggerConfig } from "./config/swagger.config"
import { MongoDB } from "./config/database.config"
import { tlsConfig } from "./config/tls.config"
import cors from "@elysiajs/cors"
import { jwtConfig } from "./config/jwt.config"
import { AccountController } from "./controllers/account.controller"
import { UserController } from "./controllers/user.controller"
import staticPlugin from "@elysiajs/static"
import { PhotoController } from "./controllers/photo.controllers"
import { ErrorController } from "./controllers/errorController"
import { LikeController } from "./controllers/like.controller"


MongoDB.connect()

const app = new Elysia()
  .use(ErrorController)
  .use(cors())
  .use(jwtConfig)
  .use(swaggerConfig)
  .use(AccountController)
  .use(UserController)
  .use(PhotoController)
  .use(LikeController)

  .use(staticPlugin({
    assets: "public/uploads",
    prefix: "img"
  }))

  .listen({
    port: Bun.env.PORT || 8000,
    tls: tlsConfig
  })

let protocol = 'http'
if ('cert' in tlsConfig)
  protocol = 'https'

console.log(
  `🦊 Elysia is running at ${protocol}://${app.server?.hostname}:${app.server?.port}`
)
