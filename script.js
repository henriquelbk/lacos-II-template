const bimestre1 = [5, 7, 9.3, 5]
const bimestre2 = [8, 6, 7.7, 9.2]
const bimestre3 = [4.7, 6.1, 5.6, 6.25]
const bimestre4 = [5, 7, 6.7, 7.7] 

const notasDoAno = [bimestre1, bimestre2, bimestre3, bimestre4]

/*for(i = 0; i < notasDoAno.length; i++){
  
  const bimestre = notasDoAno[i]
  let soma = 0
  let media = 0

  for(j = 0; j < bimestre.length; j++){
    
    soma = soma + bimestre[j]
    media = soma / bimestre.length
  }
    
    console.log(`Soma: ${soma}`)
    console.log(`Média: ${media}`)

}
*/

for(let index in notasDoAno) {

  let soma = 0
  let media = 0

  for (let elemento of notasDoAno[index]) {
    soma = soma + elemento
    media = soma / notasDoAno[index].length
  }
    console.log(`Soma: ${soma}`)
    console.log(`Média: ${media}`)
  }


const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻