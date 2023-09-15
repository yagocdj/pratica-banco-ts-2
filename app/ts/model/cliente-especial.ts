class ClienteEspecial extends Cliente {
    private _listaDeDependentes: Array<Cliente>;

    constructor(nome: string, cpf: string) {
        super(nome, cpf);
        this._listaDeDependentes = new Array<Cliente>();
    }

    get listaDeDependentes(): Array<Cliente> {
        return this._listaDeDependentes;
    }

    toString(): string {
        return `ClienteEspecial[nome=${super.nome}, cpf=${super.cpf}, conta=${super.conta}, 
        listaDeDependentes=${this._listaDeDependentes}]`;
    }
}