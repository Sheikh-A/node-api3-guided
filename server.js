const express = require('express'); // importing a CommonJS module
const morgan = require('morgan'); //added in this middelware
const helmet = require('helmet'); //1: npm i helmet 2: require
const logger = require('./common/logger-middleware.js'); //Logger MW I created
const hubsRouter = require('./hubs/hubs-router.js');
const notFound = require('./common/notfound-middleware.js');
const addName = require('./common/addName-middleware.js');

const server = express();

//global middleware
//MIDDLEWARE ORDER MATTERS TOP TO BOTTOM


//server.use(morgan("dev")); // this comes from the documenetation 3rd party, needs to be npm installed
server.use(helmet()); // 3 add helmet

server.use(logger); //Step 2 CMW dont need logger() because CMW doesnt return anything

server.use(express.json()); //built in middleware, no need to npm install

//Adding locally to ALL hubsRouters
server.use('/api/hubs', logger, hubsRouter);
//server.use(addName); //Custom Middleware can also go before the line above, you
//can use within the router below


//Using middleware locally only within this router
server.get('/', addName, logger, (req, res) => {
  const nameInsert = (req.name) ? ` ${req.name}` : '';
  console.log('req.name is:', req.name);

  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome${nameInsert} to the Lambda Hubs API</p>
    `);
});

server.use(notFound); //I created Middleware

/*
This is how you add a function to middleware, have you return middleware
function addName(name) {
  return function(req, res, next) {
    req.name = name;
    next();
  };
}

server.get('/', addName("Ali"), logger, (req, res) => {

*/


module.exports = server;
