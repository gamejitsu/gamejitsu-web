import { Box, Flex } from "rebass"
import { NextPage } from "next"
import React, { useContext } from "react"
import styled from "styled-components"

import { LayoutWithMenuUser, Title } from "gamejitsu/components"
import { UserContext } from "gamejitsu/contexts"

const EmptyReviews = styled(Flex)`
  witdh: 100%;
  background-color: ${(props) => props.theme.lightBackgroundColor};
  font-weight: 40px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const getCurrentUser = () => useContext(UserContext)

const UserSettings: NextPage = () => {
  const user = getCurrentUser()
  return (
    <LayoutWithMenuUser title="Settings">
      <Title text="SETTINGS" />
      <EmptyReviews height="100%">
        <Box>Username: {user?.username}</Box>
        <Box>Public Profile: {user?.hasPublicProfile.toString()}</Box>
        <Box>{user?.email ? `Email: ${user.email}` : "Email not provided yet, insert it while requesting the review"}</Box>
      </EmptyReviews>
    </LayoutWithMenuUser>
  )
}

export default UserSettings
