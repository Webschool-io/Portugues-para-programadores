const conjunções = require('lista_conjuncoes')

const classficaConjuncoes = (frase) => {

  const classificacoes = []

  conjunções.aditivas.forEach((conjuncao, index) => {
    if (frase.includes(conjuncao)) 
      classificacoes.push({conjuncao, tipo: 'Aditiva'})
  })

  conjunções.adversativas.forEach((conjuncao, index) => {
    if (frase.includes(conjuncao)) 
      classificacoes.push({conjuncao, tipo: 'Adversativas'})
  })
  return classificacoes
}

let frase = 'Eu gosto de JS mas você não e isso me chateia, snif.'
console.log(frase)
console.log(classficaConjuncoes(frase))

frase = 'Eu não gostava de Química, porém, entretanto, todavia, contudo hoje eu gosto.'
console.log(frase)
console.log(classficaConjuncoes(frase))