import { Box, Flex } from "rebass"
import { NextPage } from "next"
import React, { useContext } from "react"
import styled from "styled-components"

import { LayoutWithMenuUser, Title } from "gamejitsu/components"
import { UserContext } from "gamejitsu/contexts"

const EmptyReviews = styled(Flex)`
  background-color: ${(props) => props.theme.lightBackgroundColor};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 0.9;
  border: 1px solid ${(props) => props.theme.activeColor};
`

const getCurrentUser = () => useContext(UserContext)

const UserSettings: NextPage = () => {
  const user = getCurrentUser()
  return (
    <LayoutWithMenuUser title="Settings">
      <Flex width="100%" flexDirection="column">
        <Title text="SETTINGS" />
        <Flex mt={3}>
          <EmptyReviews py={5} width="100%">
            <Box py={2}>Username: {user?.username}</Box>
            <Box py={2}>Public Profile: {user?.hasPublicProfile.toString()}</Box>
            <Box py={2} style={{ position: "relative" }}>
              {user?.email
                ? `Email: ${user.email}`
                : "Email not provided yet, insert it while requesting the review"}
            </Box>
          </EmptyReviews>
        </Flex>
      </Flex>
    </LayoutWithMenuUser>
  )
}

export default UserSettings
