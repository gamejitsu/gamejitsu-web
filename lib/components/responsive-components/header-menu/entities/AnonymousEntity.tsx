import { FunctionComponent } from "react"
import SteamSVG from "../../../../../svgs/steam-icon-new-3.svg"
import { Box } from "rebass/styled-components"
import { Button } from "gamejitsu/components"
import queryString from "query-string"
import MenuLink from "../MenuLink"

const urlBase = "https://steamcommunity.com/openid/login"

interface AnonymousEntityProps {}

const SteamIcon: FunctionComponent = () => {
  return (
    <Box
      alignSelf="center"
      verticalAlign="middle"
      mr={2}
      display="flex"
      width={"24px"}
      height={"15px"}
    >
      <SteamSVG height="100%" />
    </Box>
  )
}

const UserEntity: FunctionComponent<AnonymousEntityProps> = () => {
  const login = () => {
    const urlQuery = {
      "openid.claimed_id": "http://specs.openid.net/auth/2.0/identifier_select",
      "openid.identity": "http://specs.openid.net/auth/2.0/identifier_select",
      "openid.mode": "checkid_setup",
      "openid.ns": "http://specs.openid.net/auth/2.0",
      "openid.realm": window.origin + "/auth",
      "openid.return_to": window.origin + "/auth"
    }
    const stringified = queryString.stringify(urlQuery)
    window.location.href = urlBase + "?" + stringified
  }
  return (
    <>
      <MenuLink text={"WATCH DEMO"} href={"/demo"} />
      <Button key="login" text={"SIGN IN"} onClick={login} className={"new"} icon={<SteamIcon />} />
    </>
  )
}

export default UserEntity
