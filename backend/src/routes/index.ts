import { FastifyInstance } from "fastify";

module.exports = async function (fastify: FastifyInstance, opts: any) {
  fastify.get("/", async (request, reply) => {
    return { message: "Welcome to Fastify" };
  });
};
