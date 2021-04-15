import React, { FunctionComponent, useContext } from "react"
import { UserContext } from "gamejitsu/contexts"
import styled from "styled-components"
import { Flex, Box } from "rebass/styled-components"
import { down } from "customUtils"
import SteamSVG from "../../../../svgs/steam-icon-new-3.svg"
import { Button } from "gamejitsu/components"
import queryString from "query-string"

const urlBase = "https://steamcommunity.com/openid/login"

const Icon: FunctionComponent = () => {
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

const WhatsNextContainer = styled(Flex)`
  width: 100%;

  .whats-next-title {
    color: ${(props) => props.theme.colors.primaryColor};
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
  }

  .action-container {
    font-size: 1.2rem;
    font-weight: bold;
  }
`

const WhatsNext: FunctionComponent = () => {
  const user = useContext(UserContext)
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
    <WhatsNextContainer flexWrap={"wrap"} pt={[4, 5]}>
      <Flex width={"100%"} justifyContent={"center"} className={"whats-next-title"}>
        Enjoyed the content? Here's whats next:
      </Flex>
      <Flex width={"100%"} justifyContent={"center"} py={["2rem", "4rem"]} flexWrap={"wrap"}>
        <Flex
          className={"action-container"}
          width={["100%", "50%"]}
          px={[2, 3]}
          justifyContent={"center"}
          flexWrap={"wrap"}
        >
          <Box width="100%" style={{ textAlign: "center" }}>
            Try out Gamejitsu's system for free:
          </Box>
          <Box width="100%" style={{ textAlign: "center" }} pt={[3, 4]}>
            <Button
              key="experienceDemo"
              text="EXPERIENCE OUR DEMO"
              href="/demo"
              className={"new"}
            />
          </Box>
        </Flex>
        <Flex
          className={"action-container"}
          width={["100%", "50%"]}
          pt={[4, 0]}
          px={[2, 3]}
          justifyContent={"center"}
          flexWrap={"wrap"}
        >
          <Box width="100%" style={{ textAlign: "center" }}>
            Access your personal dashboard:
          </Box>
          <Box width="100%" style={{ textAlign: "center" }} pt={[3, 4]}>
            {user ? (
              <Button
                key="loginWithSteam"
                text="GO TO THE DASHBOARD "
                href="/dashboard"
                className={"new"}
              />
            ) : (
              <Button
                key="loginWithSteam"
                text="LOGIN WITH STEAM "
                onClick={login}
                className={"new"}
                icon={<Icon />}
              />
            )}
          </Box>
        </Flex>
        <Flex px={[3, 4, 4, 5, 5]} pt={"3rem"}>
          <p style={{ fontSize: "1.35rem", lineHeight: "1.25", textAlign: "center" }}>
            Gamejitsu is an innovative coaching methodology that combines online replay viewing with
            professional coaches to form an online replay analysis coaching platform. Login
            immediately to access your recent games. Up to 8k MMR coaches at your service.
          </p>
        </Flex>
      </Flex>
    </WhatsNextContainer>
  )
}

export { WhatsNext }
