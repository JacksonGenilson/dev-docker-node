const express = require("express");

var exampleRouter = require('./Routes/example.routes');

const app = express();

app.use(exampleRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
	// 	res.status(err.status || 404).json({
		// 		message: "No such route exists"
		// 	})
		// });
		
		// // error handler
		// app.use(function(err, req, res, next) {
// 	res.status(err.status || 500).json({
	// 		message: "Error Message",
	// 		error: err
	// 	})
	// });

app.listen(4444, () => {
	console.log('Example app listening on port 4444!')
})