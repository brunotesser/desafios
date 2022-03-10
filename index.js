// DESAFIO 2 CALCULO DE APOSENTADORIA
// Baseado nos valores acima utilize as fórmulas a seguir para calcular se a pessoa está apta ou não para se aposentar e no fim imprima uma mensagem em tela.
// O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
// Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;

const nome = 'Bruno'
const sexo = 'feminino'
const idade = 21
const contribuicao = 100

const condicao = idade + contribuicao

if (sexo === 'masculino') {
  if (condicao >= 95 || contribuicao >= 35) {
    console.log('Você contribuiu igual escravo otario, parabéns')
  } else {
    console.log('Você não escravo, seu bosta!')
  }
} else if (sexo === 'feminino') {
  if (condicao >= 85 || contribuicao >= 30) {
    console.log('Você contribuiu igual escravo otario, parabéns')
  }
} else {
  console.log('Você não escravo, seu bosta!')
}
