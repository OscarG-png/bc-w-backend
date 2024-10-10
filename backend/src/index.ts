import fastify from "fastify";

const server = fastify({ logger: true });

server.get("/", async (request, reply) => {
    return { message: "Hello, Fastify with TypeScript!" };
});

const start = async () => {
    try {
        await server.listen({ port: 3000 });
        console.log("Server listening on http://localhost:3000");
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

start();
