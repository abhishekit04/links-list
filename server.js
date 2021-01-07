// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('users.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000 || 4000 || 8080;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log('JSON Server is running')
})

