const Hapi = require("hapi");

const server = new Hapi.Server();

server.connection({ port: 3000, host: "localhost" });

server.route({
  method: "GET",
  path: "/",
  handler: function (request, response) {
    response({ data: "Hello World" });
  },
});

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at : ${server.info.uri}`);
});
