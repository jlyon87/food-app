"use strict";
const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/css/master.css", function(req, res) {
	res.sendFile( path.join(__dirname, "app", "assets", "css", "master.css"));
});

router.get("/js/app.js", function(req, res) {
	res.sendFile( path.join(__dirname, "assets", "js", "app.js"));
});

router.get("/js/google-places-api.js", function(req, res) {
	res.sendFile( path.join(__dirname, "assets", "js", "google-places-api.js"));
});

module.exports = router;
