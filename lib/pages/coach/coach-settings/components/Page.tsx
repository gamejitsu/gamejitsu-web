import { Box, Flex } from "rebass/styled-components"
import { NextPage } from "next"
import React, { useContext } from "react"
import styled from "styled-components"

import { LayoutWithMenu, Title } from "gamejitsu/components"
import { UserContext } from "gamejitsu/contexts"
import UserPhotoSVG from "../../../../../svgs/user-photo.svg"

const SettingsCard = styled(Flex)`
  background-color: ${(props) => props.theme.colors.lightBackgroundColor};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 0.9;
  border: 1px solid ${(props) => props.theme.colors.activeColor};
`

const getCurrentUser = () => useContext(UserContext)

const CoachSettings: NextPage = () => {
  const user: any = getCurrentUser()
  const coach = user?.coach
  return (
    <LayoutWithMenu title="Settings">
      <Flex width="100%" flexDirection="column">
        <Title text="SETTINGS" />
        <Flex>
          <SettingsCard py={5} width="100%">
            <Box pb={4}>
              {coach.photoUrl != null ? (
                <img src={coach.photoUrl} />
              ) : (
                <UserPhotoSVG width="200" height="100" />
              )}
            </Box>
            <Box py={2}>Coach: {user?.username}</Box>
            <Box py={2}>Public Profile: {user?.hasPublicProfile.toString()}</Box>
            <Box py={2}>First name: {coach.firstName}</Box>
            <Box py={2}>Last name: {coach.lastName}</Box>
            <Box py={2}>Skill Level: {coach.skillLevel}</Box>
            <Box py={2}>Email: {coach.email}</Box>
            <Box py={2}>Approved: {coach.isApproved.toString()}</Box>
          </SettingsCard>
        </Flex>
      </Flex>
    </LayoutWithMenu>
  )
}

export default CoachSettings
