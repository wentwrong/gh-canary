const express = require('express');
const mockPullsController = require('../../../controllers/mockpullscontroller');

export default class MockPullsRouter extends express.Router {
    constructor (...props) {
        super(...props);

        this.get('/:owner/:repo/pulls', mockPullsController.list);
    }
}
