const Status = require('../models/Status');

class StatusController {

    async obterTodos(request, response){
        const TodosOsStatus = await Status.findAll();
        return response.json(TodosOsStatus);
    }

    async obterPorId(request, response){
        const { id } = request.params;

        if(!id){
            return response.status(400).json({message: "Id de status não informado."});
        }
        
        const status = await Status.findByPk(id);

        if(!status){
            return response.status(400).json({message: "Id de status não encontrado."});
        }

        return response.json(status);
    }

    async cadastrar(request, response){
        const { descricao } = request.body;

        if(!descricao){
            return response.status(400).json({message: "O campo de descrição obrigatório"});
        }

        const status = await Status.create({
            descricao
        });

        return response.json(status);
    }

    async atualizar(request, response){
        const { id } = request.params;
        const { descricao } = request.body;

        const verificaStatus = Status.findByPk(parseInt(id));

        if(!verificaStatus){
            return response.status(400).json({message: "Não foi possível encontrar o statusipo de agendamento pelo id informado."});
        }

        if(!descricao){
            return response.status(400).json({message: "O campo descrição é obrigatório."});            
        }

        const status = await Status.update({ descricao }, { where: {id: parseInt(id)}});

        const statusAtualizado = await Status.findByPk(parseInt(id));

        return response.json(statusAtualizado);
    }

    async deletar(request, response){
        const { id } = request.params;

        const encontrado = Status.findByPk(id);

        if(!encontrado){
            return response.status(500).json({message: "Não há um status com o id informado."});
        }

        const statusDeletado = await Status.destroy({where: { id: parseInt(id)}});

        if(statusDeletado == 1){
            return response.json({ message: "status deletado com sucesso!" });
        }
        return response.json({ message: "Não foi possível deletar o status!" });
    }
}

module.exports = StatusController;