const jwt = require("jsonwebtoken");
require("dotenv/config");

// Token Validations
exports.authUser = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const accessToken = authHeader.split("Bearer ")[1];
    if (accessToken) {
      try {
        const user = jwt.verify(accessToken, process.env.ACCESS_SECRET_KEY);
        req.user = user;
        return next();
      } catch (err) {
        return res.json({
          authEx: true,
          errors: { message: "your login session has been expired." },
        });
      }
    }

    return res.json({
      errors: { message: "Access Token must be provided properly." },
    });
  }

  return res.json({
    errors: { message: "Authorization Header must be provided properly." },
  });
};