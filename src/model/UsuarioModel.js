export class UsuarioModel {
    constructor(id, name, email, senha, avatar, dataNascimento, ativo) {
        this.id=id,
        this.name = name,
        this.email = email,
        this.senha = senha,
        this.avatar = avatar,
        this.dataNascimento = dataNascimento,
        this.ativo = ativo
    }
}