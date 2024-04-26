function contarCaractere(frase, caractere) {
    let count = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === caractere) {
            count++;
        }
    }
    return count;
}

const frase = prompt("Digite uma frase: ");
const caractere = prompt("Digite o caractere que deseja contar: ");

const numeroDeVezes = contarCaractere(frase, caractere);
console.log(`O caractere "${caractere}" aparece ${numeroDeVezes} vezes na frase.`);