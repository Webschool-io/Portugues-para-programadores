# Português para programadores


## Acentuação

Podemos classificar as palavras acentuadas em 3 tipos:

- oxítona: última sílaba tônica
  + Ex.: sofá, café, ascensão, Pelé, cipó, caju, baú, cajá, filó, jiló
- paroxítona: penúltima sílaba tônica
  + Ex: açúcar, afável, almíscar, amável, cadáver dócil 
- proparoxítona: antepenúltima sílaba tônica
  + Ex.: única, criptógrafo, fotógrafo, câmara, tâmara

Para ficar fácil de lembrar pense:

- oxítona: 1
- paroxítona: 2
- proparoxítona: 3

> Percebeu que a cada classificação é adicionado um prefixo?




> Por que você acha que não existe nenhuma palavra no pt-br que seja acentuada antes da propraroxítona???

> Tente falar: páralelepipedo.

> Pois é! Não é possível, por isso acentuamos apenas até a antepenúltima sílaba.

```js
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
```

## Conjunções

Nesse código iremos achar quais conjunções fazem parte da frase e também classifica-las.

Esse é o meu código antigo, de 2 meses atrás, ainda utilizava funções impuras:


```js
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
```


Perceba que para classificar eu uso o `forEach` dando `push` de um objeto no *Array* `classificacoes`, na programação funcional devemos eliminar os efeitos colaterais pois qualquer outra função poderia modificar esse *Array*.

> Agora vamos fazer do jeito certo!

### Refatorado

```js
const conjunções = require('./lista_conjuncoes')

const filtraConjunções = (conjuncao) => 
    (frase.includes(conjuncao)) ? conjuncao : false

const mapeiaAditivas = (conjunção, i) => 
  ({conjunção, tipo: 'Aditiva'})
  
const mapeiaAdversativas = (conjunção, i) => 
  ({conjunção, tipo: 'Adversativa'})

const limpaObjeto = (rv, x) => {
  (rv[x['tipo']] = rv[x['tipo']] || []).push(x['conjunção'])
  return rv
}

const classficaConjuncoes = (frase) => 
    conjunções.aditivas.filter( filtraConjunções )
    .map( mapeiaAditivas )
  .concat( 
    conjunções.adversativas.filter( filtraConjunções )
    .map( mapeiaAdversativas )
  )
  .reduce( limpaObjeto, {})

let frase = 'Eu gosto de JS mas você não e isso me chateia, snif.'
console.log(frase)
console.log(classficaConjuncoes(frase))

frase = 'Eu não gostava de Química, porém, entretanto, todavia, contudo hoje eu gosto.'
console.log(frase)
console.log(classficaConjuncoes(frase))
```

## Exercícios

```
eu  programo
tu  programas
ele programa
nós programamos
vós programais
eles  programam
```

Sabendo que o radical é `program` monte a conjugação acima:

```js
const radical = 'program'
const sufixos = [
  { pronome: 'eu', sufixo: 'o' }, 
  { pronome: 'tu', sufixo: 'as' }, 
  { pronome: 'ele', sufixo: 'a' }, 
  { pronome: 'nós', sufixo: 'amos' }, 
  { pronome: 'vós', sufixo: 'ais' }, 
  { pronome: 'eles', sufixo: 'am' }
]

// Crie seu codigo
```

## Instruções

1 - Fork 
2 - Clone o repositorio
3 - Coloque os exercícios na pasta **exercicio** com o nome do seu user do github
da seguinte maneira => user.js 
