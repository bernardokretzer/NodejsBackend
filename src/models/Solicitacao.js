const { Model, DataTypes } = require('sequelize');

class Solicitacao extends Model {
    static init(sequelize) {
        super.init({
            nome_solicitante: DataTypes.STRING,
            desc_item: DataTypes.STRING,
            preco_produto: DataTypes.STRING,
            solicitacao_status: DataTypes.STRING,
            observacao: DataTypes.STRING,
        }, {
            sequelize,
            timestamps: false,
        })
    }
}

module.exports = Solicitacao;