const mediaParaAprovacao = 7.00;

const notas = [7.00, 8.00, 8.75];

console.log(`A primeira nota é: ${notas[0]}`);
console.log(`A segunda nota é: ${notas[1]}`);
console.log(`A terceira nota é: ${notas[2]}`);

var media = (notas[0]+notas[1]+notas[2])/notas.length;

console.log(`A média do aluno é: ${media.toFixed(2)}`);

if (mediaParaAprovacao >= 7.00){
    console.log("Você foi aprovado");

} else {
    console.log("Você foi reprovado");
}