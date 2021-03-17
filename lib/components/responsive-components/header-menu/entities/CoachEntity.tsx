import { FunctionComponent } from "react"
import { Button } from "gamejitsu/components"
import { User } from "gamejitsu/api/resources/user"
import { destroyCookie } from "nookies"
import MenuLink from "../MenuLink"

interface CoachEntityProps {
  user: User
}

const UserEntity: FunctionComponent<CoachEntityProps> = ({ user }) => {
  const logout = () => {
    destroyCookie({}, "authToken")
    window.location.href = "/"
  }
  return (
    <>
      <MenuLink text={"COACH DASHBOARD"} href={"/coach-dashboard"} />
      <MenuLink text={"COACH REVIEWS"} href={"/coach-reviews"} />
      <MenuLink text={`Coach ${user.username}`} href={"/coach-settings"} />
      <Button key="logout" text={"LOGOUT"} onClick={logout} className={"new"} />
    </>
  )
}

export default UserEntity
