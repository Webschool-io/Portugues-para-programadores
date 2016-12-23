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
