const exampleModel = require("../Models/example.model");

const exampleGet = (req, res, next) => {
	res.status(200).json({
		message: 'This is Get function'
	})
}

const examplePost = (req, res, next) => {
	res.status(200).json({
		message: 'This is Post function'
	})
}

module.exports = {
	exampleGet,
	examplePost,
};