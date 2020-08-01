import PageRender from './Scripts/Render/PageRender.js'

class Aplicacao{
    constructor(app){
        this.app = app;
    }
    Start(numberItens){
        const ComponentApresentation = new PageRender(numberItens)
        this.app.innerHTML = ComponentApresentation.Render();
    }
}

const Pagina = new Aplicacao(document.querySelector('.root'));
Pagina.Start(4);
