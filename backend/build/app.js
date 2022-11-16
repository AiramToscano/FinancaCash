"use strict";
exports.__esModule = true;
exports.app = exports.App = void 0;
var express = require("express");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.config();
        // Não remover essa rota
        this.app.get('/', function (req, res) { return res.json({ ok: true }); });
    }
    App.prototype.config = function () {
        var accessControl = function (_req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use(express.json());
        this.app.use(accessControl);
    };
    App.prototype.start = function (PORT) {
        this.app.listen(PORT, function () { return console.log("Running on port ".concat(PORT)); });
    };
    return App;
}());
exports.App = App;
// A execução dos testes de cobertura depende dessa exportação
exports.app = new App().app;