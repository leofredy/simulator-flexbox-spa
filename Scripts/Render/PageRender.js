import Apresentation from '../Components/Apresentations/Apresentations.js'

class PageRender{
    #Template = ``;
    constructor(numberItens){
        this.ApresenFlex = new Apresentation(numberItens);
    }
    Render(){
        return this.#Template = this.#Template + this.ApresenFlex.RenderApresentation();
    }
}

export default PageRender;

