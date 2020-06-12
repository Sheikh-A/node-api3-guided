

//Writing our own custom middleware Step 1
//three componenets
module.exports = function logger(req, res, next) {
    //logs info about request to the console -> Get to /
    const method = req.method;
    const endpoint = req.originalUrl;
    console.log(`Req.method: ${method} to Req.originalUrl: ${endpoint}`);
  
    next(); //remember to add so you can move on, moves request to the next middleware
  };