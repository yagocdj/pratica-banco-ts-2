class ClienteController {
    constructor() {
        this._clientes = new Clientes();
        this._inputNome = document.querySelector('#nome');
        this._inputCpf = document.querySelector('#cpf');
    }
    inserir(event) {
        event.preventDefault();
        if (this._clientes.pesquisar(this._inputCpf.value)) {
            throw new Error('Cliente já existente');
        }
        let novoCliente = new Cliente(this._inputNome.value, this._inputCpf.value);
        this._clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }
    listar() {
        this._clientes.listar().forEach(cliente => this.inserirClienteNoHTML(cliente));
    }
    inserirClienteNoHTML(cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo cliente ' + cliente.toString());
            this._clientes.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
