// Exercícios

/*
eu  programo
tu  programas
ele programa
nós programamos
vós programais
eles  programam
*/

// Sabendo que o radical é program monte a conjugação acima:

// codigo de base
/*
const radical = 'program'
const sufixos = [
  { pronome: 'eu', sufixo: 'o' }, 
  { pronome: 'tu', sufixo: 'as' }, 
  { pronome: 'ele', sufixo: 'a' }, 
  { pronome: 'nós', sufixo: 'amos' }, 
  { pronome: 'vós', sufixo: 'ais' }, 
  { pronome: 'eles', sufixo: 'am' }
]
*/

// Crie seu codigo
// Então aqui vai ele.

/*const radical = 'program'
const sufixos = [
    { pronome: 'eu', program: 'o' },
    { pronome: 'tu', program: 'as' },
    { pronome: 'ele', program: 'a' },
    { pronome: 'nós', program: 'amos' },
    { pronome: 'vós', program: 'ais' },
    { pronome: 'eles', program: 'am' },
]*/

const radical = 'program'
const sufixos = [
  { pronome: 'eu', sufixo: 'o' }, 
  { pronome: 'tu', sufixo: 'as' }, 
  { pronome: 'ele', sufixo: 'a' }, 
  { pronome: 'nós', sufixo: 'amos' }, 
  { pronome: 'vós', sufixo: 'ais' }, 
  { pronome: 'eles', sufixo: 'am' }
]

const montaConjugação = (el, i) => el.pronome +' '+ radical + el.sufixo
const mostraConjugação = (acc, cur) => acc += cur + '\n'

const conjugação = sufixos.map( montaConjugação ).reduce( mostraConjugação, '')

console.log(conjugação)