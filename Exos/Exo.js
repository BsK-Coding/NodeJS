// Paramètre chalk required =>  chalk permet de colorer du texte
const chalk = require(`chalk`)

// Paramètre readlineSync required => ReadlineSync synchronise une exécution interactive pour avoir une conversation avec l'utilisateur via une console (TTY).
const readlineSync = require('readline-sync');

// liste de prénom, récupérer pour chacun des prénoms le nombre de lettres
// Si le nombre de lettres est Pair, la première lettre sera en majuscule et de couleur Bleu
// Si Impair la dernière lettre du prénom sera en majuscule et de couleur verte

const tabList = ['dotcycle', 'amine', 'bsk', 'romain']

for (let i = 0; i < tabList.length; i++) {
  let tmp = tabList[i]
  for (let j = 0; j < tabList[i].length; j++) {
    if (tabList[i] % 2 === 0) {
      console.log(chalk.blue(tabList))
    } else {
      console.log(chalk.green(tmp))
    }
  }