import 'dotenv/config'
import express from 'express'
// import BullBoard from 'bull-board'
import UserRoutes from './routes/UserRoutes'
// import Queue from './lib/Queue'

const app = express()

const PORT = 3333

// BullBoard.setQueues(Queue.queues.map(queue => queue.bull))

app.use(express.json())
app.use(UserRoutes)
// app.use('/admin/queues', BullBoard.UI)


app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT} `)
})