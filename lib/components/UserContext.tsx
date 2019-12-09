import { createContext } from "react"

interface User {
  username?: string
  id?: string
}

const defaultUser: User = {}
const UserContext = createContext({ user: defaultUser })

export default UserContext
