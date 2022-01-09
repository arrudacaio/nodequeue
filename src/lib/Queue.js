import Queue from 'bull'
import redisConfig from '../config/redis'

import RegisterMail from '../jobs/RegisterMail'

// Criandoa  fila de envio de email com o nome da chave do  job

const mailQueue = new Queue(RegisterMail.key, redisConfig)

export default mailQueue