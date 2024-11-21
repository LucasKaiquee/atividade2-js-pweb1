class DisciplinaRepositorio {
    constructor() {
        this.disciplinas = [];
    }

    inserir(disciplina) {
        this.disciplinas.push(disciplina);
    }

    remover(cod) {
        const indexDisciplinaARemover = this.disciplinas.findIndex(disciplina => disciplina.cod === cod);
        if(indexDisciplinaARemover > -1) {
            this.disciplinas.splice(indexDisciplinaARemover, 1);
        }
    }

    listar() {
        return this.disciplinas;
    }
}