const Solicitacao = require('../models/Solicitacao')

module.exports = {
    async getAll(req, res) {
        const request = await Solicitacao.findAll()

        return res.json(request);
    },
    async get(req, res) {
        const { id } = req.params;

        const hasId = await Solicitacao.findByPk(id);
        if (!hasId)  return res.status(404).json({ error: 'Não existe solicitação com esse número.'});
        
        const request = await Solicitacao.findByPk(id)
        
        return res.json(request);
    },
    async getByStatus(req, res) {
        const { solicitacao_status } = req.params;
        if (solicitacao_status) {
            const data = await Solicitacao.findAll({
                where: { solicitacao_status }
            });

            return res.json(data);
        } 
        return res.status(500).json({ error: 'Não existe solicitação com esse número.'});
    },
    async getFiltro(req, res) {
        const { nome_solicitante, desc_item, solicitacao_status } = req.params;
        console.log(nome_solicitante);
        console.log(desc_item)
        console.log(solicitacao_status)
        if (nome_solicitante && desc_item && solicitacao_status) {
            const data = await Solicitacao.findAll({
                where: { nome_solicitante, desc_item, solicitacao_status }
            });

            return res.json(data);
        }
        return res.status(500).json({ error: 'Não existe solicitação com esses dados.'});

    },
    async insert(req, res) {
        const { nome_solicitante, desc_item, preco_produto, solicitacao_status } = req.body;
        const request = await Solicitacao.create({ nome_solicitante, desc_item, preco_produto, solicitacao_status });   
        
        return res.json(request);
    },
    async update(req, res) {
        const { id } = req.params;
        const { solicitacao_status, observacao } = req.body;

        const hasId = await Solicitacao.findByPk(id);
        if (!hasId)  return res.status(404).json({ error: 'Não existe solicitação com esse número.'});

        const request = await Solicitacao.update({ solicitacao_status, observacao }, {
            where: {
              id
            }
        });   

        return res.json(request);
    },
}