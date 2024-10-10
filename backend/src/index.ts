import fastify from "fastify";
require("dotenv").config();

const server = fastify({ logger: true });
const port = process.env.PORT ? parseInt(process.env.PORT) : 3001;

// Define a simple route
server.get("/", async (request, reply) => {
    return { message: "Hello, Fastify with TypeScript!" };
});

const start = async () => {
    try {
        await server.listen({ port, host: "0.0.0.0" }); // Listen on all interfaces
        console.log(`Server listening on http://localhost:${port}`); // Use the dynamic port
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

start();
