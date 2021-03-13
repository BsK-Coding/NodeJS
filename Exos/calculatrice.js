/* Calculatrice scientifique & Crypto */

/*
// Paramètre chalk required =>  chalk permet de colorer du texte
const chalk = require('chalk')  // Require => Fait un import de chalk
*/

// Paramètre readlineSync required => ReadlineSync synchronise une exécution interactive pour avoir une conversation avec l'utilisateur via une console (TTY).
const readlineSync = require('readline-sync');

//1 Fonction de calcul operations de base

const calc = (operateur, nb1, nb2) => {
  switch (operateur) {
    case '+':
      return nb1 + nb2
      break
    case '-':
      return nb1 - nb2
      break
    case '*':
      return nb1 * nb2
      break
    case '/':
      return nb1 / nb2
      break
    default:
      console.log(`vous n'avez pas entrer un opérateur valide`)
  }
}
/*
//2 Conversion
const tauxBtc = 56000

const convert = (value, type) => {
  if (type === 'btc') {
    return value * tauxBtc
  }
  else if (type === '$') {
    return value / tauxBtc
  }
  else {
    return 'error'
  }
}
*/

//3 Input utilisateur

const nombre1 = readlineSync.question('entrez 1er nombre :')
const nombre2 = readlineSync.question('entrez 2eme nombre :')
console.log(`Vous aves choisir ${nombre1} et ${nombre2}`)
const operateur = readlineSync.question(`Entrez un Opérateur :`)

console.log(`Vous avez choisit ${operateur} votre résultat est : ${calc(operateur, Number(nombre1), Number(nombre2))}`)
