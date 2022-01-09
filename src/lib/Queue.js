import Queue from 'bull'
import redisConfig from '../config/redis'

import * as jobs from '../jobs'

// Percorrendo todos os meus jobs e criando filas para cada um.
const queues = Object.values(jobs).map(job => ({
  bull: new Queue(job.key, redisConfig),
  name: job.key, // Nome da minha fila
  handle: job.handle
}))

export default {
  queues,
  add(name, data) {
    const queue = this.queues.find(queue => queue.name === name)
    return queue.bull.add(data)
  },
  process() { // Responsável por processar minhas filas
    return this.queues.forEach(queue => {
      queue.bull.process(queue.handle)

      queue.bull.on('failed', (job, err) => {
        console.log('Job failed ', queue.key, job.data)
        console.log(err)
      })
    })

  }
}

// import RegisterMail from '../jobs/RegisterMail'

// // Criando a  fila de envio de email com o nome da chave do job

// const mailQueue = new Queue(RegisterMail.key, redisConfig)

// export default mailQueue