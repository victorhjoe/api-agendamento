const Usuario = require('../models/Usuario');

class Usuariocontroller {

    async obterTodos(request, response){
        const usuarios = await Usuario.findAll();

        return response.json(usuarios);
    }

    async cadastrar(request, response){
        const { email, senha, nomeCompleto, cpf } = request.body;

        if(!email || !senha || !nomeCompleto || !cpf) {
            return response.status(400).json({ message: "Os campos email, senha, nome completo e cpf são obrigatórios"});
        }

        const validaCpfUsuario = await Usuario.findAll({where: { cpf }});

        if(validaCpfUsuario.length){
            return response.status(400).json({ message: "O Usuário possui cpf já cadastrado"});
        }

        const validaEmailUsuario = await Usuario.findAll({ where: { email }});

        if(validaEmailUsuario.length){
            return response.status(400).json({ message: "O Usuário possui email já cadastrado"});
        }

        const usuario = await Usuario.create({
            email,
            senha,
            nome_completo: nomeCompleto,
            cpf
        });

        return response.json(usuario);
    }

    async atualizar(request, response){
        const { id } = request.params;
        const { email, senha, nomeCompleto, cpf } = request.body;

        const verificaUsuario = await Usuario.findByPk(id);

        if(!verificaUsuario){
            return response.status(400).json({ message: "Usuário não existente no banco de dados"});
        }

        if(!email || !senha || !nomeCompleto || !cpf){
            return response.json({message: "Os campos email, senha, nome completo e cpf são obrigatórios"});
        }

        const usuario = await Usuario.update({
            email,
            senha,
            nome_completo: nomeCompleto,
            cpf
        }, { where: { id } });

        const usuarioAtualizado = await Usuario.findByPk(id);

        return response.json(usuarioAtualizado);
    }

    async deletar(request, response){
        const { id } = request.params;

        const encontrado = await Usuario.findByPk(id);

        if(!encontrado){
            return response.status(400).json({ message: "Não existe um usuário com o Id informado."});
        }

        const usuario = await Usuario.destroy({
            where: { id: parseInt(id) }
        })

        if(usuario == 1){
            return response.json({ message: "Usuário deletado com sucesso!" });
        }
        return response.json({ message: "Não foi possível deletar o usuário!" });
    }
}

module.exports = Usuariocontroller;