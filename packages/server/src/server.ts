import Fastify from 'fastify';

const app = Fastify();

app.get('/', () => {
  return "Hello World";
});

app.listen({
  port: 3333,
}).then(() => console.log("Server running in http://localhost:3333"));