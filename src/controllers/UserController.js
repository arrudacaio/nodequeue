
class UserController {

  async store(req, res) {
    const { name, email, password } = req.body

    // Seria a chamada ao service que iria possuir o model para cadastrar de fato as infos no banco
    const user = {
      name,
      email,
      password
    }

    // Após o cadastro do usuário, iremos enviar um email para ele. 

    return res.json(user)


  }



}

export default new UserController