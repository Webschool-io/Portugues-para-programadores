const conjunções = require('lista_conjuncoes')

const classficaConjuncoes = (frase) => {

  const classificacoes = conjunções.aditivas.map((conjuncao, index) => {
    if (frase.includes(conjuncao)) 
      return {conjuncao, tipo: 'Aditiva'}
  })

  conjunções.adversativas.map((conjuncao, index) => {
    if (frase.includes(conjuncao)) 
      return {conjuncao, tipo: 'Adversativas'}
  }).concat(classificacoes)
  
  return classificacoes
  
}

let frase = 'Eu gosto de JS mas você não e isso me chateia, snif.'
console.log(frase)
console.log(classficaConjuncoes(frase))

frase = 'Eu não gostava de Química, porém, entretanto, todavia, contudo hoje eu gosto.'
console.log(frase)
console.log(classficaConjuncoes(frase))
