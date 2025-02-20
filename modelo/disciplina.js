class Disciplina {
    constructor(codigo, nome) {
        this._codigo = codigo;
        this._nome = nome;
        this._arrayAlunos = [];
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get codigo() {
        return this._codigo;
    }

    set codigo(novoCodigo) {
        this._codigo = novoCodigo;
    }

    get arrayAlunos() {
        return this._arrayAlunos;
    }

    set arrayAlunos(novoArray) {
        this.arrayAlunos = novoArray;
    }

    inserirAluno(aluno) {
        this._arrayAlunos.push(aluno);
    }
}