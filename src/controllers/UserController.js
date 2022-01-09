import Mail from '../lib/Mail'

class UserController {

  async store(req, res) {
    const { name, email, password } = req.body

    // Seria a chamada ao service que iria possuir o model para cadastrar de fato as infos no banco
    const user = {
      name,
      email,
      password
    }

    await Mail.sendMail({
      from: 'Queue test <queueTest@google.com',
      to: `${name} <${email}>`,
      subject: 'Cadastro de usuario',
      html: 'Olá bem vindo ao nosso sistema, seu cadastro foi realizado com sucesso.'
    })

    // Após o cadastro do usuário, iremos enviar um email para ele. 

    return res.json(user)


  }



}

export default new UserController