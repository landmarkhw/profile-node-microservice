'use strict'

const fastify = require('fastify')();

fastify.get('/', function (req, reply) {
    reply.send("Hello, world!");
})

console.log("App listening on port 3000");
fastify.listen(3000);