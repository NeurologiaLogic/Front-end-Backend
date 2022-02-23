const register = require("./register").register;
const setupSession = require("./setupSession").setupSession;
const login = require("./setupSession").login;
const logout = require("./logout").logout;

module.exports = { register, setupSession, login, logout };
