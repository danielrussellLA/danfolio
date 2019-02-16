'use-strict';
var cluster = require('cluster');
if (cluster.isMaster) {
    // initialize clusters on startup
    var numWorkers = require('os').cpus().length;

    console.log('Master cluster setting up ' + numWorkers + ' workers...');

    for (var i = 0; i < numWorkers; i++) {
        cluster.fork();
    }

    cluster.on('online', function (worker) {
        console.log('Worker ' + worker.process.pid + ' is online');
    });

    cluster.on('exit', function (worker, code, signal) {
        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
        console.log('Starting a new worker');
        cluster.fork();
    });
} else {
    const express = require('express');
    const https = require('https');
    var morgan = require('morgan');
    var bodyParser = require('body-parser');
    const app = express();

    var fs = require('fs');
    var privateKey = fs.readFileSync('./private.key', 'utf8');
    var certificate = fs.readFileSync('./engineeringdan_com.crt', 'utf8');

    var credentials = { key: privateKey, cert: certificate };
    var ip = '192.168.0.000'; // put your static ip address of your server here

    // use middleware
    app.use(morgan('dev'));
    app.use(express.static(__dirname));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // create/run server
    var PORT = process.env.PORT || 443;
    var server = https.createServer(credentials, app).listen(PORT, ip);
    console.log('https server istening on port ' + PORT);

    // Redirect from http port 80 to https
    var http = require('http');
    http.createServer(function (req, res) {
        res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
        res.end();
    }).listen(80);
    console.log('http server listening on port 80');
}
