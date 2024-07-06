let aluno = {
    nome: "Rafael",
    cpf: "123.123.123-12",
    cidade: "João Pessoa",
    notas: [8.00, 9.00, 10.00, 7.00],

};

const media = (aluno.notas[0]+aluno.notas[1]+aluno.notas[2]+aluno.notas[3])/aluno.notas.length;

//selecionar nota aleatoria 
const notaAleatoria =aluno.notas[Math.floor{Math.random() * aluno.notas.length}];

// converta a nota para a escala de 0 a 100
const notaConvertida = notaAleatoria * 10;

console.log(`O nome do aluno é: ${aluno.nome} | o seu cpf é o: ${aluno.cpf} | ele reside em: ${aluno.cidade}`);
console.log(`A sua primeira nota é: ${aluno.notas[0]}`);
console.log(`A sua segunda nota é: ${aluno.notas[1]}`);
console.log(`A sua terceira nota é: ${aluno.notas[2]}`);
console.log(`A sua quarta nota é: ${aluno.notas[3]}`);
console.log(`Sua média é: ${media.toFixed(2)}`);
console.log(`A nota sorteada foi: ${notaAleatoria} e convertida para a escaça de 0-100 é: ${notaConvertida}`);
