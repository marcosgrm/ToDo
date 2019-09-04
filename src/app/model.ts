export class Model{
    user;
    items;

    constructor(){
        this.user ="Elmano";
        this.items = [new TodoItem ("Preparar aula", false, "Alta"),
                     new TodoItem ("Falar com Trump", false, "Baixa"),
                     new TodoItem ("Caminhar 10km", true, "Média"),
                     new TodoItem ("Dominar o mundo", false, "Média"),
                    ]           
    }
}

export class TodoItem{
    action;
    done;
    prioridade;

    constructor(action, done, prioridade){
        this.action=action;
        this.done=done;
        this.prioridade=prioridade;
    }
}