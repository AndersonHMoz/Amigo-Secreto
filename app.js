// Array para armazenar os participantes
let participantes = [];

// Função para adicionar um participante
function adicionarParticipante(nome) {
    if (!participantes.includes(nome)) {
        participantes.push(nome);
        console.log(`${nome} foi adicionado à lista.`);
    } else {
        console.log(`${nome} já está na lista.`);
    }
}

// Exemplo de uso
adicionarParticipante("Ana");
adicionarParticipante("Carlos");
adicionarParticipante("João");
console.log(participantes);
