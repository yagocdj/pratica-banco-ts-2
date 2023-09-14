class ClienteEspecial extends Cliente {
    constructor(nome, cpf) {
        super(nome, cpf);
        this._listaDeDependentes = new Array();
    }
    get listaDeDependentes() {
        return this._listaDeDependentes;
    }
}
