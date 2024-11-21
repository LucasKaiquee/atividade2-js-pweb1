class DisciplinaServico {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(cod, nome) {
        if(this.pesquisarPorCodigo(cod).length > 0) {
            throw new Error("Disciplina já cadastrada!");
        }
        const novaDisciplina = new Disciplina(cod, nome);
        this.repositorio.inserir(novaDisciplina);
        console.log(novaDisciplina);
        return novaDisciplina;
    }

    pesquisarPorCodigo(cod) {
        return this.repositorio.listar().filter(disciplina => disciplina.cod === cod);
    }

    remover(cod) {
        this.repositorio.remover(cod);
    }

    inserirAlunoNaDiciplina(cod, aluno) {
        const disciplina = this.pesquisarPorCodigo(cod);
        disciplina.inserAluno(aluno);
    }
}