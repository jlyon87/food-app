"use strict";
const express = require("express")
const path = require("path");
const router = express.Router();

router.use(function timeLog(req, res, next) {
	console.log("Time: ", Date.now());
	next();
});

const resources = require("routes/resource-router.js");
const pages = require("routes/page-router.js");

router.use("/assets", resources);
router.use("/assets", resources);

router.get("/", function(req, res) {
	res.sendFile( path.join(__dirname, "index.html") );
});

router.get("/favicon5.ico", function(req, res) {
	res.sendFile( path.join(__dirname, "assets", "images", "favicon5.ico"));
});

router.get("/*", function(req, res) {
	res.sendFile( path.join(__dirname, "index.html") );
});
