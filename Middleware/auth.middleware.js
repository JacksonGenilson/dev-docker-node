const jwt = require("jsonwebtoken");
module.exports = function (req, res, next) {
	const token = req.header("auth-token");
	if (!token) {
		return res.status(400).send("Access Denied! No token entered");
	}
	try {
		req.user = jwt.verify(token, process.env.jwtSecret);
		next();
	} catch (err) {
		res.status(400).send("Access Denied!");
	}
};