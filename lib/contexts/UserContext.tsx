import { createContext } from "react"
import { User } from "gamejitsu/api/resources/user"

const UserContext = createContext<User | null>(null)

export default UserContext
