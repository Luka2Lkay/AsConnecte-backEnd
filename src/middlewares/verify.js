const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
    const token = req.headers["x-access-token"];
  
    if (!token) {
      return res.status(403).send({ message: "No token provided!" });
    }
  
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Unauthorized access!",
        });
      }
  
      req.userId = decoded.userId;
  
      next();
    });
}

module.exports = {verify}