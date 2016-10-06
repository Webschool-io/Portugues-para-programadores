const acentuacao = (palavra) => {

  const acentos = /^[áàâãéêíïóôõú ]+$/i;
  const letras = palavra.split('')
  let acentoIndice = 0

  const achaAcento = (letra, indice) => {
    if (acentos.test(letra)) acentoIndice = indice
    tamanho = indice + 1
  }

  letras.forEach(achaAcento)

  const testaProparo = () => 
    ((acentoIndice < 2) && tamanho < 7 && tamanho > 4) || (tamanho >= 7 && acentoIndice < 5)
  const testaOxi = () => 
    (acentoIndice > tamanho - 4) && (tamanho >= 4) || (tamanho < 4) && (acentoIndice > 0)

  if (testaProparo()) return "proparoxítona"
  else if (testaOxi()) return "oxítona"
  return "paroxítona"
}

console.log('avião', acentuacao('avião'));
console.log('céu', acentuacao('céu'));

console.log('início', acentuacao('início'));
console.log('magnífico', acentuacao('magnífico'));
console.log('execução', acentuacao('execução'));
console.log('locatário', acentuacao('locatário'));
console.log('empregatício', acentuacao('empregatício'));

console.log('sílaba', acentuacao('sílaba'));
console.log('rápido', acentuacao('rápido'));