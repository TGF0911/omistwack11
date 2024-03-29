const connection = require('../database/connection');
const crypto = require('crypto');


module.exports = {

  async create(req, res) {
    const { nome, email, whatsapp, cidade, uf } = req.body;

    const id = crypto.randomBytes(4).toString('HEX');
    await connection('ongs').insert({
      id,
      nome,
      email,
      whatsapp,
      cidade,
      uf
    });



    return res.json({ id });
  },


  async index(req, res) {
    const ongs = await connection('ongs').select('*');

    return res.json(ongs);
  },

  //async delete(req,res){

  //},

};

