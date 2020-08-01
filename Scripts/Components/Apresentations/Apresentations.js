import Itens from './Itens/Itens.js';

class Apresentation {
    #Template = ``;
    constructor(numberItens){
        this.item = new Itens(numberItens);
    }
    #GeneratorTemplate(itens){
        return `
            <div>
                <div class="apresentation-propriedades-container-flex apresentation-container-flex">
                    ${itens}
                </div>
            </div>
        `
    }
    RenderApresentation(){
        this.#Template = this.#GeneratorTemplate(this.item.Generator());
        return this.#Template;
    }
}

export default Apresentation;


/*
const Apresentations = `
    <div>
        <div class="apresentation-propriedades-container-flex apresentation-container-flex">
            //dados de items
            <div class="item-flex-one apresentation-item-flex">1</div>
            <div class="item-flex-two apresentation-item-flex">2</div>
            <div class="item-flex-three apresentation-item-flex">3</div>
        </div>
    </div>
`
*/