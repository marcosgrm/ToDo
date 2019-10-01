export class Model {
    user;
    items;
    _dataAtual: String;

    constructor() {
        this.user = "Elmano";
        this.items = [
            new TodoItem("Dominar o mundo", false, "Média", "2019-11-30"),
            new TodoItem("Falar com Trump", false, "Baixa", "2020-01-02"),
            new TodoItem("Preparar aula", false, "Alta", "2023-01-01"),
            new TodoItem("Caminhar 10km", true, "Média", "2020-02-02")
        ]
    }

    //Método que retorna data atual
    dataAtual(){
        let date = new Date;
        let dia = date.getDate();
        let mes = date.getMonth();
        let ano = date.getFullYear();
        this._dataAtual = dia +"-" +(mes+1) +"-" +ano;
        return this._dataAtual;
    }

}

export class TodoItem {
    action;
    done;
    prioridade;
    dataTermino: Date;

    constructor(action, done, prioridade, dataTermino) {
        this.action = action;
        this.done = done;
        this.prioridade = prioridade;
        this.dataTermino = dataTermino;
    }

}