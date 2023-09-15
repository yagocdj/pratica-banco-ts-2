class ClienteEspecial extends Cliente {
    constructor(nome, cpf) {
        super(nome, cpf);
        this._listaDeDependentes = new Array();
    }
    get listaDeDependentes() {
        return this._listaDeDependentes;
    }
    toString() {
        return `ClienteEspecial[nome=${super.nome}, cpf=${super.cpf}, conta=${super.conta}, 
        listaDeDependentes=${this._listaDeDependentes}]`;
    }
}
