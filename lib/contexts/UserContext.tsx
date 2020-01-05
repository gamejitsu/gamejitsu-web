import { createContext } from "react"
import { User } from "../models"

const defaultUser: User | null = null
const UserContext = createContext({ user: defaultUser })

export default UserContext
