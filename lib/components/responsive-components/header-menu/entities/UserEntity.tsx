import { FunctionComponent } from "react"
import { Button } from "gamejitsu/components"
import { User } from "gamejitsu/api/resources/user"
import { destroyCookie } from "nookies"
import MenuLink from "../MenuLink"

interface UserEntityProps {
  user: User
}

const UserEntity: FunctionComponent<UserEntityProps> = ({ user }) => {
  const logout = () => {
    destroyCookie({}, "authToken")
    window.location.href = "/"
  }
  return (
    <>
      <MenuLink text={"WATCH DEMO"} href={"/demo"} />
      <MenuLink text={"DASHBOARD"} href={"/dashboard"} />
      <MenuLink text={"REVIEWS"} href={"/reviews"} />
      <MenuLink text={user.username} href={"/settings"} />
      <Button key="logout" text={"LOGOUT"} onClick={logout} className={"new"} />
    </>
  )
}

export default UserEntity
