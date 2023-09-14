class ClienteEspecial extends Cliente {
    private _listaDeDependentes: Array<Cliente>;

    constructor(nome: string, cpf: string) {
        super(nome, cpf);
        this._listaDeDependentes = new Array<Cliente>();
    }

    get listaDeDependentes(): Array<Cliente> {
        return this._listaDeDependentes;
    }
}