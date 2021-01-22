const TipoAgendamento = require('../models/TipoAgendamento');

class TipoAgendamentoController {

    async obterTodos(request, response){
        const tipoAgendamento = await TipoAgendamento.findAll();
        return response.json(tipoAgendamento);
    }

    async obterPorId(request, response){
        const { id } = request.params;

        if(!id){
            return response.status(400).json({message: "Id de tipo agendamento não informado."});
        }

        const tipoAgendamento = await TipoAgendamento.findByPk(id);

        if(!tipoAgendamento){
            return response.status(400).json({message: "Não foi possível encontrar o tipo de agendamento pelo id informado."});
        }

        return response.json(tipoAgendamento);
    }

    async cadastrar(request, response){
        const { descricao } = request.body;

        if(!descricao){
            return response.status(400).json({message: "O campo de descrição obrigatório"});
        }

        const tipoAgendamento = await TipoAgendamento.create({descricao});

        return response.json(tipoAgendamento);
    }

    async atualizar(request, response){
        const { id } = request.params;
        const { descricao } = request.body;

        const verificaAgendamento = await TipoAgendamento.findByPk(parseInt(id));
        
        if(!verificaAgendamento){
            return response.status(400).json({message: "Não foi possível encontrar o tipo de agendamento pelo id informado."});
        }

        if(!descricao){
            return response.status(400).json({message: "O campo descrição é obrigatório."});            
        }

        const tipoAgendamento = await TipoAgendamento.update( { descricao }, { where: {
            id: parseInt(id)
        } });

        const tipoAgendamentoAtualizado = await TipoAgendamento.findByPk(parseInt(id));

        return response.json(tipoAgendamentoAtualizado);
    }

    async deletar(request, response){
        const { id } = request.params;

        const encontrado = await TipoAgendamento.findByPk(parseInt(id));

        if(!encontrado){
            return response.status(500).json({message: "Não há um tipo de agendamento com o id informado."});
        }

        const tipoAgendamentoDeletado = await TipoAgendamento.destroy({where: {id: parseInt(id)}})

        if(tipoAgendamentoDeletado == 1){
            return response.json({ message: "Tipo de agendamemento deletado com sucesso!" });
        }
        return response.json({ message: "Não foi possível deletar o tipo de agendamemento!" });
    }
}

module.exports = TipoAgendamentoController;