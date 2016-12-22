const conjunções = require('./lista_conjuncoes')

const filtraConjunções = (conjuncao) => 
    (frase.includes(conjuncao)) ? conjuncao : false

const mapeiaAditivas = (conjunção, i) => 
  ({conjunção, tipo: 'Aditiva'})
  
const mapeiaAdversativas = (conjunção, i) => 
  ({conjunção, tipo: 'Adversativa'})

const classficaConjuncoes = (frase) => 
    conjunções.aditivas.filter( filtraConjunções )
    .map( mapeiaAditivas )
  .concat( 
    conjunções.adversativas.filter( filtraConjunções )
    .map( mapeiaAdversativas )
  )

let frase = 'Eu gosto de JS mas você não e isso me chateia, snif.'
console.log(frase)
console.log(classficaConjuncoes(frase))

frase = 'Eu não gostava de Química, porém, entretanto, todavia, contudo hoje eu gosto.'
console.log(frase)
console.log(classficaConjuncoes(frase))
