const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('Possibilidade de criação de uma nova ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Nome da ONG do Marcelo",
                email: "a@a.com",
                whatsapp: "5562999999999",
                city: "Goiânia",
                uf:"GO"
            });

        //console.log(response.body);
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});