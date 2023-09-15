let contaController = new ContaController();
let clienteController = new ClienteController();

contaController.listar();

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

const clienteUm = new Cliente('Pablo', '96996403541');
const clienteDois = new Cliente('Marcela', '15590947113');
const clienteTres = new Cliente('Yago', '22241569720');
const clienteQuatro = new ClienteEspecial('Jonas', '11122233344');

listaDeClientes.inserir(clienteUm);
listaDeClientes.inserir(clienteDois);
listaDeClientes.inserir(clienteTres);
listaDeClientes.inserir(clienteQuatro);

clienteController.inserirClienteNoHTML(clienteUm);
clienteController.inserirClienteNoHTML(clienteDois);
clienteController.inserirClienteNoHTML(clienteTres);
clienteController.inserirClienteNoHTML(clienteQuatro);

console.log('Lista de clientes: ' + listaDeClientes.listar());

const clienteYago: Cliente = listaDeClientes.pesquisar('22241569720');
console.log('Cliente pesquisado: ' + clienteYago);

listaDeClientes.remover('Removendo cliente' + listaDeClientes.remover(clienteYago.cpf));

console.log('Lista de clientes após a remoção: ' + listaDeClientes.listar());
