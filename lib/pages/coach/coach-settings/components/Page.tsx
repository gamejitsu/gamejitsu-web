import { Box, Flex } from "rebass"
import { NextPage } from "next"
import React, { useContext } from "react"
import styled from "styled-components"

import { LayoutWithMenu, Title } from "gamejitsu/components"
import { UserContext } from "gamejitsu/contexts"
import UserPhotoSVG from "../../../../../svgs/user-photo.svg"

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
  const coach = user?.coach
  return (
    <LayoutWithMenu title="Settings">
      <Title text="SETTINGS" />
      <EmptyReviews height="100%">
        <Box>
          {coach.photoUrl != null ? (
            <img src={coach.photoUrl} />
          ) : (
            <UserPhotoSVG width="200" height="100" />
          )}
        </Box>
        <Box>Coach: {user?.username}</Box>
        <Box>Public Profile: {user?.hasPublicProfile.toString()}</Box>
        <Box>First name: {coach.firstName}</Box>
        <Box>Last name: {coach.lastName}</Box>
        <Box>Skill Level: {coach.skillLevel}</Box>
        <Box>Email: {coach.email}</Box>
        <Box>Approved: {coach.isApproved.toString()}</Box>
      </EmptyReviews>
    </LayoutWithMenu>
  )
}

export default CoachSettings
