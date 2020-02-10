const express = require('express');

const Server = require('./my-server');
const { DEFAULT_HOST, DEFAULT_PORT } = require('./constants');

class App {
    constructor ({ port = process.env.PORT || DEFAULT_PORT, host = process.env.HOST || DEFAULT_HOST } = {}) {
        this.express = express();
        this.express.use(express.static('static'));
        this.server = new Server(this.express, port, host);
    }

    async run () {
        await this.server.start();
    }

    async close () {
        await this.server.stop();
    }
}

module.exports = App;
