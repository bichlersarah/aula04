const temperaturas = [26.00, 18.00, 9.00];
const sorteada = temperaturas[Math.floor(Math.random()*temperaturas.length)];
const F=(sorteada*9/5)+32;

console.log(`Temperaturas: ${temperaturas}`);
console.log(`A temperatura selecionada foi: ${sorteada}`);
console.log(`A temperatura convertida é de: ${F}`);