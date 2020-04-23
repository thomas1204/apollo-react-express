const express = require('express');
const cookieParser = require('cookie-parser');
const chalk = require('chalk');
const http = require('http');
const port = 8000;
const app = express();


// Express app configurations
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.set('port', port);


/**
 * Server Initialization
 */
const server = http.createServer(app);
server.listen(port);

server.on('error', (err) => {
	console.log(chalk.red(`Error in server initialization`));
	console.log(err);
});

server.on('listening', () => {
	console.log(chalk.magenta(`Server started successfully. Check localhost:${port}`));
});