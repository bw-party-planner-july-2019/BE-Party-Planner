const jwt = require('jsonwebtoken');

const secret = require('../api/secrets.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  
  module.exports = (req, res, next) => {
    const token = req.headers.authorization;
  ​
    if (token) {
      jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
        if (err) {
          res.status(401).json({ message: "You are not authorized!" });
        } else {
          req.decodedJwt = decodedToken;
          next();
        }
      });
    } else {
      res.status(401).json({ message: 'You are not authorized' });
    }
  };

  // token
  //   ? jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
  //     if (err) {
  //       console.log('ERROR: ', err);
  //       res.status(401).json({ message: "Error: Invalid Credentials" });
  //     } else {
  //       req.decodedJwt = decodedToken;
  //       next();
  //     }
  //   })
  //   : res.status(400).json({ message: "Error: No Credentials Provided" });

}