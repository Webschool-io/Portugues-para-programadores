const conjunções = {
  aditivas: [
    ' e ', 
    ' nem ', 
    ' mas também'  , 
    ' como também ', 
    ' bem como ', 
    ' mas ainda ', 
    ' não só… mas também ', 
    ' não só… como também ', 
    ' não só… bem como '
  ],
  adversativas: [
    ' mas ',
    ' porém ',
    ' todavia ',
    ' contudo ',
    ' não obstante ',
    ' entretanto ',
    ' no entanto ',
    ' entanto '
  ]
}

const classficaConjuncoes = (frase) => {

  const classificacoes = []
  const achaConjuncaoAditiva = (conjuncao, index) => {
    if (frase.includes(conjuncao)) 
      classificacoes.push({conjuncao, tipo: 'Aditiva'})
  }
  const achaConjuncaoAdversativas = (conjuncao, index) => {
    if (frase.includes(conjuncao)) 
      classificacoes.push({conjuncao, tipo: 'Adversativas'})
  }
  conjunções.aditivas.forEach(achaConjuncaoAditiva)
  conjunções.adversativas.forEach(achaConjuncaoAdversativas)
  return classificacoes
}

console.log(classficaConjuncoes('Eu gosto de JS mas você não e isso me chateia, snif.'))