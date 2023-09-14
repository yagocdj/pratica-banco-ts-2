class ClienteController {
    private _clientes: Clientes;
    private _inputNome: HTMLInputElement;
    private _inputCpf: HTMLInputElement;

    constructor() {
        this._clientes = new Clientes();
        this._inputNome = <HTMLInputElement>document.querySelector('#nome');
        this._inputCpf = <HTMLInputElement>document.querySelector('#cpf');
    }

    inserir(event: Event): void {
        event.preventDefault();
        if (this._clientes.pesquisar(this._inputCpf.value)) {
            throw new Error('Cliente já existente');
        }
        let novoCliente = new Cliente(this._inputNome.value,
            this._inputCpf.value);
        
        this._clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }

    listar(): void {
        this._clientes.listar().forEach(
            cliente => this.inserirClienteNoHTML(cliente)
        )
    }

    inserirClienteNoHTML(cliente: Cliente): void {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo cliente ' + cliente.toString());
            this._clientes.remover(cliente.cpf);
            (<Element>event.target).parentElement.remove();
        });

        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}