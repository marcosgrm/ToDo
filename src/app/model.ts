export class Model{
    user;
    items;
    constructor(){
        this.user ="Elmano";
        this.items = [new TodoItem ("Preparar aula", false),
                     new TodoItem ("Falar com Trump", false),
                     new TodoItem ("Caminhar 10km", true),
                     new TodoItem ("Dominar o mundo", false),
                    ]           
    }
}

export class TodoItem{
    action;
    done;

    constructor(action, done){
        this.action=action;
        this.done=done;
    }
}