//Sem Arrow
const carreira = "programador full stack";

function objetivoCarreira(nomeCarreira) {
    
    return `O objetivo de carreira é ser: ${nomeCarreira}`

}

console.log(`Meu objetivo é me tornar um ${carreira}`);



//Com Arrow
const profissao = "programador full stack";

const objetivoProfissao = nomeProfissao => {

    return `Meu objetivo de carreira é ser ${nomeProfissao}`;

}

console.log(objetivoProfissao(profissao));