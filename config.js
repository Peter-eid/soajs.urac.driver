'use strict';

module.exports = {
	"model": 'mongo',
	"hashIterations": 1024,
	"seedLength": 32,
	"errors": {
		399: "Missing Service config. Contact system Admin",
		400: "Database connection error",
		401: "Unable to log in the user. User not found.",
		403: "User Not Found!",
		413: "Problem with the provided password.",
		601: "Model not found",
		611: "Invalid tenant id provided"
	}
};