class DisciplinaControlador {
    constructor() {
        this.servico = new DisciplinaServico();
    }

    inserir() {
        const codElemento = document.querySelector("#cod");
        const nomeElemento = document.querySelector("#nome");
        const disciplinaInserida = this.servico.inserir(codElemento.value, nomeElemento.value);
        const listaDisciplinasElemento = document.querySelector("#listaDisciplinas");

        if (disciplinaInserida) {
          this.inserirDisciplinaNoHtml(disciplinaInserida, listaDisciplinasElemento);
        }
    }
    
    inserirDisciplinaNoHtml(disciplina, listaDisciplinasElemento) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Código: ${disciplina.codigo} - Nome: ${disciplina.nome} - Alunos: ${disciplina.arrayAlunos}`;
        listaDisciplinasElemento.appendChild(disciplinaElemento);
    }
}