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