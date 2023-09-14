let contaController = new ContaController();
let clienteController = new ClienteController();

contaController.listar();
clienteController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

// Lidando com cliente
const listaDeClientes = new Clientes();

listaDeClientes.inserir(new Cliente('Pablo', '96996403541'));
listaDeClientes.inserir(new Cliente('Marcela', '15590947113'));
listaDeClientes.inserir(new Cliente('Yago', '22241569720'));

console.log('Lista de clientes: ' + listaDeClientes.listar());

const clienteYago: Cliente = listaDeClientes.pesquisar('22241569720');
console.log('Cliente pesquisado: ' + clienteYago);

listaDeClientes.remover('Removendo cliente' + listaDeClientes.remover(clienteYago.cpf));

console.log('Lista de clientes após a remoção: ' + listaDeClientes.listar());
