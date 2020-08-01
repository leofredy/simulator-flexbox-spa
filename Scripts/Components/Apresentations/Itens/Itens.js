class Itens {
    #Template = ``;

    constructor(numberItens){
        this.numberItens = numberItens;
    }

    Generator(){
        for(let i = 1; i <= this.numberItens; i++){
            this.#Template = this.#Template + `<div class="item-flex-one apresentation-item-flex">${i}</div>`;
        }
        return this.#Template;
    }
}

export default Itens;

