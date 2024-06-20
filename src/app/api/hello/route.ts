import * as Http from "@effect/platform/HttpServer"

export const runtime = "edge"
 
export const GET = Http.app.toWebHandler(Http.response.text("Hello, world!"))
