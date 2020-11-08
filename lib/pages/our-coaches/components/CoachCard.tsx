import React, { useContext, FunctionComponent } from "react"
import { Button, Patch, PatchFull } from "gamejitsu/components"
import styled from "styled-components"
import { Flex, Box } from "rebass"

import { UserContext } from "gamejitsu/contexts"
import UserPhotoSVG from "../../../../svgs/user-photo.svg"

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

const Container = styled(Box)`
  border: 1px solid ${(props) => props.theme.activeColor};
  position: relative;
  align-items: center;
  justify-content: center;
  display: grid | inline-grid;
  grid-template-rows: ... | ...;
  background: ${(props) => props.theme.lightBackgroundColor};
  z-index: 1;
  opacity: 0.9;
`

const HorizontalLine = styled.div`
  width: 95%;
  height: 1px;
  background-color: ${(props) => props.theme.textColorDark};
  margin: 0 auto;
`

const Title = styled.h1`
  color: ${(props) => props.theme.primaryColor};
  font-family: "Japanese 3017";
  font-size: 21px;
  font-weight: normal;
  letter-spacing: 3px;
`

const MainTitle = styled.h1`
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 20px;
`

const SecondaryTitle = styled.h2`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 20px;
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

const ButtonBotton = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  margin-left: 10px;
  margin-bottom: 20px;
`

interface ImgProps {
  img: string
}

const CoachDiv = styled.div<ImgProps>`
  width: 260px;
  height: 190px;
  background-image: ${(props) => props.img};
`

const Achievement: FunctionComponent = ({ children }) => (
  <AchievementContent>
    <img src="/images/icon-check-circle-1.png" width="20" color="red" /> {children}
  </AchievementContent>
)

const CoachCard: FunctionComponent<Props> = ({ coach }) => {
  const user = useContext(UserContext)

  return (
    <Box width="50%" mb={50} px={30}>
      <Container width="100%" height="100%" mb={2}>
        <Box mb={1}>
          <Flex>
            <Box ml={3} my={3}>
              {coach.image != null ? (
                (console.log(coach.image),
                (
                  <div
                    style={{
                      width: "260px",
                      height: "190px",
                      backgroundImage: "url('" + coach.image + "')",
                      backgroundSize: "cover"
                    }}
                  />
                ))
              ) : (
                <UserPhotoSVG width="200" height="100" />
              )}
              <Box ml={52} mt={-4}>
                <PatchFull text={"MMR: ".concat(coach.mmr.toString())} />
              </Box>
            </Box>

            <Box ml={3} mt={4}>
              <Title>{coach.game}</Title>
              <MainTitle>{coach.name}</MainTitle>
              150 reviews
              <Flex>
                {coach.roles.map((role) => (
                  <Box mt={3} mr={2}>
                    <Patch text={role} />{" "}
                  </Box>
                ))}
              </Flex>
            </Box>
          </Flex>
          <Box mb={3} mx={3}>
            {coach.description}
          </Box>
        </Box>
        <HorizontalLine />
        <Box ml={3} mt={3} mb={4}>
          <SecondaryTitle>Top Achievements</SecondaryTitle>
          {coach.achievements.map((achievement) => (
            <Box>
              <Achievement>{achievement}</Achievement>
            </Box>
          ))}
          <Box mx={3} mb={4} mt={50}>
            <ButtonBotton>
              <Box>
                <Button href={`/review-requests/${coach.id}`} text="Book Now" />
              </Box>
            </ButtonBotton>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default CoachCard
