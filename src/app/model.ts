export class Model{
    user;
    items;

    constructor(){
        this.user ="Elmano";
        this.items = [new TodoItem ("Preparar aula", false, "Alta", "2020-01-01"),
                     new TodoItem ("Falar com Trump", false, "Baixa", "2020-01-02"),
                     new TodoItem ("Caminhar 10km", true, "Média", "2020-02-02"),
                     new TodoItem ("Dominar o mundo", false, "Média", "2019-11-30"),
                    ]           
    }
}

export class TodoItem{
    action;
    done;
    prioridade;
    dataTermino;

    constructor(action, done, prioridade, dataTermino){
        this.action=action;
        this.done=done;
        this.prioridade=prioridade;
        this.dataTermino=dataTermino;
    }
}