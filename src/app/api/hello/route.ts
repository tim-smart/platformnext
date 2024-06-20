import * as Http from "@effect/platform/HttpServer"

export const runtime = "edge"

const router = Http.router.empty.pipe(
  Http.router.get("/api/hello", Http.response.text("Hello, world!"))
)
 
export const GET = Http.app.toWebHandler(router)
