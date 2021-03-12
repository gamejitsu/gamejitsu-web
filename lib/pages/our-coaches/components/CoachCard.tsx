import React, { useContext, FunctionComponent } from "react"
import { Button, Patch, PatchFull } from "gamejitsu/components"
import styled from "styled-components"
import { Flex, Box } from "rebass/styled-components"
import { UserContext } from "gamejitsu/contexts"
import { breakpointDown } from "../../../utils/mediaQueryDevices"
import { MainTitle, SecondaryTitle, Background } from "lib/components/UtilsComponents"

interface Coach {
  id: number
  name: string
  username: string
  reviewsStars: number
  description: string
  mmr: number
  roles: string[]
  achievements: string[]
  image?: string
  game: string
}

interface Props {
  coach: Coach
}

const HorizontalLine = styled.div`
  width: 95%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.textColorDark};
  margin: 0 auto;
`
const ChapterTitle = styled.h3`
  color: white;
  font-size: 27px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 30px;
`

const AchievementContent = styled.span`
  align-items: center;
  display: inline-flex;
  font-size: 14px;
  margin-bottom: 25px;

  img {
    margin-right: 10px;
  }
`

const Achievement: FunctionComponent = ({ children }) => (
  <AchievementContent>
    <img src="/images/icon-check-circle-1.png" width="20" color="red" /> {children}
  </AchievementContent>
)

const CoachWrapper = styled(Flex)`
  width: 49%;
  border: 1px solid ${(props) => props.theme.colors.activeColor};
  background: ${(props) => props.theme.colors.lightBackgroundColor};

  @media ${breakpointDown.sm} {
    width: 100%;
  }
`

const CoachImgWrapper = styled(Flex)`
  position: relative;
  width: 50%;
  padding-bottom: 35%;

  @media ${breakpointDown.md} {
    width: 100%;
    padding-bottom: 70%;
  }

  @media ${breakpointDown.sm} {
    width: 50%;
    padding-bottom: 35%;
  }

  @media ${breakpointDown.xs} {
    width: 100%;
    padding-bottom: 65%;
  }
`

const CoachHeaderInfo = styled(Flex)`
  width: 50%;
  padding: 16px 16px 0 32px;

  @media ${breakpointDown.md} {
    width: 100%;
    padding: 32px 16px 0 0;
  }

  @media ${breakpointDown.sm} {
    width: 50%;
    padding: 16px 16px 0 16px;
  }

  @media ${breakpointDown.xs} {
    width: 100%;
    padding: 32px 16px 0 0;
  }
`
const Rank = styled.div`
  position: absolute;
  margin: auto;
  z-index: 5;
  bottom: -10px;
  display: flex;
  justify-content: center;
  width: 100%;
`

const CoachCard: FunctionComponent<Props> = ({ coach }) => {
  const user = useContext(UserContext)

  return (
    <CoachWrapper flexDirection="column" p={3} mb={"2%"}>
      <Flex flexWrap="wrap">
        <CoachImgWrapper>
          <Background src={`${coach.image}`} bgPosition="top">
            <Rank>
              <PatchFull text={"MMR: ".concat(coach.mmr.toString())} />
            </Rank>
          </Background>
        </CoachImgWrapper>
        <CoachHeaderInfo flexDirection="column">
          <SecondaryTitle>{coach.game}</SecondaryTitle>
          <MainTitle>{coach.name}</MainTitle>
        </CoachHeaderInfo>
        <Flex width="100%" flexWrap="wrap" pt={[0, 0, 0, 3]}>
          {coach.roles.map((role) => (
            <Box mt={3} mr={2}>
              <Patch text={role} />{" "}
            </Box>
          ))}
        </Flex>
        <Flex py={3}>{coach.description}</Flex>
        <HorizontalLine />
        <Flex py={3} flexDirection="column">
          <ChapterTitle>Top Achievements</ChapterTitle>
          {coach.achievements.map((achievement) => (
            <Box>
              <Achievement>{achievement}</Achievement>
            </Box>
          ))}
        </Flex>
      </Flex>
    </CoachWrapper>
  )
}

export default CoachCard
