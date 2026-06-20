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


botaoProximo.addEventListener("click", proximo);
botaoAnterior.addEventListener("click", anterior);

const dummyurl = `https://dummyjson.com/users/`
const randourl = `https://randomuser.me/api/?gender=`

buscarFuncionario(1);

async function buscarFuncionario(id) {
    const response = await fetch(`${dummyurl}${id}`);
    const funcionario = await response.json();
    const imagemFuncionario = await buscarImg(funcionario.gender);

    funcionarioNome.textContent =
        `Name: ${funcionario.firstName} ${funcionario.lastName}`;

    funcionarioCargo.textContent =
        `Cargo: ${funcionario.company.title}`;

    funcionarioDepto.textContent =
        `Dept: ${funcionario.company.department}`;

    funcionarioEmail.textContent =
        `Email: ${funcionario.email}`;

    funcionarioId.textContent =
        `ID: ${funcionario.id}`;

    funcionarioImagem.src = imagemFuncionario;
    funcionarioImagem.alt =
        `Foto de ${funcionario.firstName} ${funcionario.lastName}`;

    idAtual = funcionario.id;
    campoId.value = funcionario.id;
}

async function buscarImg(genero) {
    const response = await fetch(
        `${randourl}${genero}`
    );
    const imgFuncionario = await response.json();
    return imgFuncionario.results[0].picture.large;
}


async function proximo() {
    idAtual++;
    await buscarFuncionario(idAtual);
}

async function anterior() {
    if (idAtual > 1) {
        idAtual--;
        await buscarFuncionario(idAtual);
    }
}




campoId.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        buscarFuncionario(Number(campoId.value || idAtual));
    }
});
