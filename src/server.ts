import Fastify from "fastify";
import { routes } from "./routes";
import Cors from "@fastify/cors";

const app = Fastify({ logger: true})


const start = async () => {

    await app.register(Cors)
    await app.register(routes)

    try {
        app.listen({ port: 3333})
    } catch (error) {
        process.exit(1)
    }
}

start()