import Mail from '../lib/Mail'

// Aqui é o body do meu job, possui um identificador e uma função para executar o que é necessário.
export default {
  key: 'RegisterMail', //Para que eu possa saber posteriormente qual job falhou, qual foi executado etc.
  async handle({ data }) {
    const { user } = data

    await Mail.sendMail({
      from: 'Queue test <queueTest@google.com',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de usuario',
      html: 'Olá bem vindo ao nosso sistema, seu cadastro foi realizado com sucesso.'
    })
  }
}