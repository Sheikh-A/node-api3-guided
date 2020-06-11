module.exports = function addName(req, res, next) {
    req.name = 'Web 27 Ali';
    next(); //remember to add so you can move on, moves request to the next middleware
  };