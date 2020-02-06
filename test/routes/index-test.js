const { expect } = require('chai');
const got = require('got');

const { server } = require('../../src/index');

describe('Index page', () => {
    before(async () => {
        await server.start();
    });

    after(async () => {
        await server.stop();
    });

    it('should return a 200 response', async () => {
        const response = await got(`http://${server.host}:${server.port}`);

        expect(response.statusCode).equal(200);
    });

    it('should show "Hello Node.js" message', async () => {
        const response = await got(`http://${server.host}:${server.port}`);

        expect(response.body).include('Hello Node.js');
    });
});
