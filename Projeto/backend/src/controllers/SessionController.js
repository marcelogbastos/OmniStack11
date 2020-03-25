const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { id } = request.body;

        const ong = await connection('ongs')
          .where('id', id)
          .select('name')
          .first();
    
        if(!ong){
            return response.satus(400).json({ error: 'Não foi encontrado ONG com esse ID'});
        }

        return response.json(ong);
    }

};