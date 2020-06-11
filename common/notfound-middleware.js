
//Writing our own custom middleware Step 1
//three componenets

module.exports = function notFound(req,res,next) {
    res.status(404).json({message: "Oops did not find what you're looking for"});
  };