const consultaUsuario = async (evento) => {
    evento.preventDefault();
    const campoMensagem = document.getElementById('mensagem');
    const campoAvatar = document.getElementById('avatar');
// obtem URL
const usuario = document.getElementById('usuario').value;
const  url= `https://api.github.com/users/${usuario}`

// executa e consulta á API do github
const resposta = await fetch(url);
console.log(resposta);

if (!resposta.ok) {
    campoMensagem.innerHTML = 'Não encontrado';
    campoAvatar.setAttribute('src','');
    return;
}

const resultado = await resposta.json();

// exibir informações da api.github


campoMensagem.innerHTML = resultado.name;
campoAvatar.setAttribute('src', resultado.avatar_url)
};

document.addEventListener('DOMContentLoaded', () => {
    const botaoConsultar = document.getElementById('consultar');
    botaoConsultar.addEventListener('click', consultaUsuario);
});
