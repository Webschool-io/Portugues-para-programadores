const conjunções = require('./lista_conjuncoes')

const classficaConjuncoes = (frase) => 
  conjunções.aditivas.filter((conjuncao) => 
    (frase.includes(conjuncao)) ? conjuncao : false
  )
  .map((conjunção, i) => ({conjunção, tipo: 'Aditiva'}))
  .concat( conjunções.adversativas.filter((conjuncao) => 
    (frase.includes(conjuncao)) ? conjuncao : false )
    .map((conjunção, i) => ({conjunção, tipo: 'Adversativas'}))
  )

let frase = 'Eu gosto de JS mas você não e isso me chateia, snif.'
console.log(frase)
console.log(classficaConjuncoes(frase))

frase = 'Eu não gostava de Química, porém, entretanto, todavia, contudo hoje eu gosto.'
console.log(frase)
console.log(classficaConjuncoes(frase))
