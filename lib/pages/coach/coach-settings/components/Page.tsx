import React, { useContext } from "react"

import { LayoutWithMenu, Title } from "gamejitsu/components"
import { NextPage } from "next"
import { Box, Flex } from "rebass"
import styled from "styled-components"
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

const CoachSettings: NextPage = () => {
  const user: any = getCurrentUser()
  return (
    <LayoutWithMenu title="Settings">
      <Title text="SETTINGS" />
      <EmptyReviews height="100%">
        <Box>Coach: {user?.username}</Box>
        <Box>Public Profile: {user?.hasPublicProfile.toString()}</Box>
        <Box>First name: {user?.coach.firstName}</Box>
        <Box>Last name: {user?.coach.lastName}</Box>
        <Box>Skill Level: {user?.coach.skillLevel}</Box>
        <Box>Email: {user?.coach.email}</Box>
        <Box>Photo Url: {user?.coach.photoUrl}</Box>
        <Box>Approved: {user?.coach.isApproved.toString()}</Box>
      </EmptyReviews>
    </LayoutWithMenu>
  )
}

export default CoachSettings
