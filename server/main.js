"use strict";

const Hapi = require("hapi"),
    Joi = require("joi"),
    server = new Hapi.Server();

server.connection({
    host: "localhost",
    port: 3000
});

server.route({
    method: "GET",
    path: "/",
    handler: function (request, reply) {
        reply("Hello!");
    }
});

server.start( (error) => {
    if (error) {
        throw error;
    }

    console.log(`Server running at ${server.info.uri}`);
});
