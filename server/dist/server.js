"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const chalk_1 = __importDefault(require("chalk"));
const http_1 = __importDefault(require("http"));
const port = 8000;
const app = express_1.default();
// Express app configurations
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
app.set('port', port);
/**
 * Server Initialization
 */
const server = http_1.default.createServer(app);
server.listen(port);
server.on('error', (err) => {
    console.log(chalk_1.default.red(`Error in server initialization`));
    console.log(err);
});
server.on('listening', () => {
    console.log(chalk_1.default.magenta(`Server started successfully. Check localhost:${port}`));
});
//# sourceMappingURL=server.js.map