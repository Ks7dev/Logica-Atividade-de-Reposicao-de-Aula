let idAtual = 1;

const funcionarioNome = document.querySelector("#funcionario-nome");
const funcionarioCargo = document.querySelector("#funcionario-cargo");
const funcionarioDepto = document.querySelector("#funcionario-depto");
const funcionarioEmail = document.querySelector("#funcionario-email");
const funcionarioId = document.querySelector("#funcionario-id");
const funcionarioImagem = document.querySelector("#img-funcionario");
const campoId = document.querySelector("#campo-busca");

const botaoAlterar = document.querySelector("#botao-alterar");
const botaoProximo = document.querySelector("#butao-proximo");
const botaoAnterior = document.querySelector("#butao-anterior");

const dummyurl = `https://dummyjson.com/users/`
const randourl = `https://randomuser.me/api/?gender=`


async function buscarFuncionario(id) {
    const response = await fetch(`${dummyurl}${id}`);
    const funcionario = await response.json();
    const imagemFuncionario = await buscarImg(funcionario.gender);
}

