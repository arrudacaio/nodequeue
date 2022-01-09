import express from 'express'
import UserRoutes from './routes/UserRoutes'

const app = express()

const PORT = 3333

app.use(UserRoutes)


app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT} `)
})