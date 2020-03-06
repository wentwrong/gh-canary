import { expect } from 'chai';
import got from 'got';
import App from '../../../';

describe('Static', () => {
    const app = new App();

    before(async () => {
        await app.run();
    });

    after(async () => {
        await app.close();
    });

    it(`index should return 200 response`, async () => {
        const response = await got(`http://${app.config.host}:${app.config.port}/`);

        expect(response.body).contain('Dashboard');
        expect(response.statusCode).equal(200);
    });
});
