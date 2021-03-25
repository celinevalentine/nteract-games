<<<<<<< HEAD
const jwt = require("express-jwt");

const jwksRsa = require("jwks-rsa");
const ExpressError = require("../ExpressError");

const checkJwt =
  process.env.NODE_ENV === "test"
    ? myFunction
    : jwt({
        secret: jwksRsa.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: `https://dev-pwb5v-aq.us.auth0.com/.well-known/jwks.json`,
        }),
        audience: "https://nteractbackend.com",
        issuer: `https://dev-pwb5v-aq.us.auth0.com/`,

        algorithms: ["RS256"],
      });

function myFunction(re, res, next) {
  next();
}
// const checkJwt = jwt({
//   secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: `https://dev-pwb5v-aq.us.auth0.com/.well-known/jwks.json`,
//   }),
//   audience: "https://nteractbackend.com",
//   issuer: `https://dev-pwb5v-aq.us.auth0.com/`,

//   algorithms: ["RS256"],
// });

module.exports = checkJwt;
=======



>>>>>>> 44cbac653ec2a1031b11d31fe89345c064c686da
