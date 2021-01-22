const { findByPk } = require('../models/Agendamento');
const Agendamento = require('../models/Agendamento');

class AgendamentoController {

    async obterTodos(request, response){
        const agendamentos = await Agendamento.findAll();
        return response.json(agendamentos);
    }

    async obterPorId(request, response){
        const { id } = request.params;

        if(!id){
            return response.status(400).json({message: "Id do agendamento não informado."});
        }

        const agendamento = await Agendamento.findByPk(parseInt(id));

        if(!agendamento){
            return response.status(400).json({message: "Não foi possível encontrar o agendamento pelo id informado."});
        }

        return response.json(agendamento)
    }

    async cadastrar(request, response){
        const { dataHora, idUsuario, idTipo, idStatus, observacao } = request.body;

        if(!dataHora || !idUsuario || !idTipo || !idStatus || !observacao){
            return response.status(400).json({ message: "Os campos dataHora, idUsuario, idTipo , idStatus e observação são obrigatórios"});
        }

        const agendamento = await Agendamento.create({
            dataHora,
            idUsuario,
            idTipo,
            idStatus,
            observacao
        })

        return response.json(agendamento);
    }

    async atualizar(request, response){
        const { id } = request.params;
        const { dataHora, idUsuario, idTipo, idStatus, observacao } = request.body;

        const agendamento = await Agendamento.findByPk(parseInt(id));

        if(!agendamento){
            return response.status(400).json({message: "Não foi possível encontrar o  agendamento pelo id informado."});
        }

        if(!dataHora || !idUsuario || !idTipo || !idStatus || !observacao){
            return response.status(400).json({ message: "Os campos dataHora, idUsuario, idTipo , idStatus e observação são obrigatórios"});
        }

        const atualizarAgendamento = await Agendamento.update({
            dataHora,
            idUsuario,
            idTipo,
            idStatus,
            observacao
        }, {where: {
            id: parseInt(id)
        } });

        const agendamentoAtualizado = await Agendamento.findByPk(parseInt(id));

        return response.json(agendamentoAtualizado);
    }

    async deletar(request, response){
        const { id } = request.params;

        const encontrado = await Agendamento.findByPk(parseInt(id));

        if(!encontrado){
            return response.status(500).json({message: "Não há um  agendamento com o id informado."});
        }

        const agendamentoDeletado = await Agendamento.destroy({where: {
            id: parseInt(id)
        }});

        if(agendamentoDeletado == 1){
            return response.json({ message: "Agendamemento deletado com sucesso!" });
        }
        return response.json({ message: "Não foi possível deletar o agendamemento!" });
    }
}

module.exports = AgendamentoController;