// Onde será processado os jobs da fila do bull.
// Dessa forma não é mais a instancia do server que está processando o envio de emailk
// mas sim a instancia da fila, que startamos com yarn dev:queue
import 'dotenv/config'
import Queue from './lib/Queue'
import RegisterMail from './jobs/RegisterMail'

Queue.process(RegisterMail.handle)