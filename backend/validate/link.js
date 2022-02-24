const register = require("./register").register;
const login = require("./login").login;
const logout = require("./logout").logout;
const articles = require("./articles").articles;
const createArticle = require("./createArticle").createArticle;

module.exports = { register, login, logout, articles, createArticle };
