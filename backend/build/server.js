"use strict";
exports.__esModule = true;
var app_1 = require("./app");
require("dotenv/config");
var PORT = process.env.APP_PORT || 3011;
new app_1.App().start(PORT);
