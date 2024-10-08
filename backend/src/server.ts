const fastify = require("fastify")({ logger: true });
const path = require("path");

fastify.register(require("fastify-env"), {
  dotenv: true,
  schema: {
    type: "object",
    required: ["PORT"],
    properties: {
      PORT: { type: "string", default: "3000" },
    },
  },
});

const start = async () => {
  try {
    await fastify.listen(fastify.config.PORT);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
