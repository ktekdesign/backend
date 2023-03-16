import express, { Application } from "express"
import { 
  listUsers,
  createUser,
  updateUser,
  removeUser
} from "./controller/User"

const app: Application = express()
const port: number = 4000

app.use(express.json())

app.get('/api/users', listUsers)
app.post('/api/user', createUser)
app.put('/api/user', updateUser)
app.delete('/api/user', removeUser)

app.listen(port)
