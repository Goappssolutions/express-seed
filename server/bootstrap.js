const test = "test";

const path = require('path'),
    // express = require('express'),
    favicon = require('serve-favicon'),
    morgan = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    connectionFactory = require("./connectionFactory"),
    passport = require('passport'),
    jwt = require('jsonwebtoken'),
    passwordHash = require('password-hash-and-salt'),
    jsonParser = bodyParser.json({ limit: 1024 * 1024 * 20, type: 'application/json' }),
    urlencodedParser = bodyParser.urlencoded({ extended: true, limit: 1024 * 1024 * 20, type: 'application/x-www-form-urlencoding' }),
    mongoose = require('mongoose'),
    response = require("./component/response"),
    constants = require("./../config/constants"),
    uniqueValidator = require('mongoose-unique-validator');

module.exports = function () {
    // global.test = test;
    // global.express = express;
    global.path = path;
    global.favicon = favicon;
    global.morgan = morgan;
    global.cookieParser = cookieParser;
    global.bodyParser = bodyParser;
    global.connectionFactory = connectionFactory;
    global.passport = passport;
    global.jwt = jwt;
    global.passwordHash = passwordHash;
    global.jsonParser = jsonParser;
    global.urlencodedParser = urlencodedParser;
    global.mongoose = mongoose;
    global.response = response;
    global.constants = constants;
    global.uniqueValidator = uniqueValidator;
}