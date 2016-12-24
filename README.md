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


### Colocação Pronomial

É o estudo da colocação dos pronomes oblíquos átonos (me, te, se, o, a, lhe, nos, vos, os, as, lhes) em relação ao verbo.

Os pronomes átonos podem ocupar 3 posições: antes do verbo (próclise), no meio do verbo (mesóclise) e depois do verbo (ênclise).

Esses pronomes se unem aos verbos porque são *“fracos”* na pronúncia.


#### Próclise

Na próclise o pronome é posicionado antes do verbo.

> - De modo algum me afastarei daqui.


#### Ênclise

Na ênclise o pronome é posicionado após o verbo.

> - Alunos, comportem-se.


#### Mesóclise

Usada quando o verbo estiver no futuro do presente (vai acontecer – amarei, amarás, ...) ou no futuro do pretérito (ia acontecer mas não aconteceu – amaria, amarias, ...)

> - Convidar-me-ão para o hackathon.

Se houver uma palavra atrativa, a próclise será obrigatória.

> - Não (palavra atrativa) me convidarão para o dojo.


## Exercícios

### Conjugação

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
### Colocação Pronomial

Para lhe ajudar nesse exercício leia esse material [Colocação Pronominal (próclise, mesóclise, ênclise)](http://www.infoescola.com/portugues/colocacao-pronominal-proclise-mesoclise-enclise/) e cria um *Array* com os sufixos da conjugação do verbo `programar`, utilizando seus tempos verbais corretamente.

Crie 1 verbo conjugado para cada tipo de colocação:

```
const radical = 'program'
const pronomes = ['me', 'te', 'se', 'o', 'a', 'lhe', 'nos', 'vos', 'os', 'as', 'lhes']
const sufixos = [] // adicione os sufixos das conjugações necessárias

// crie seu código
```

