import { Flex, Box } from "rebass/styled-components"
import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { down } from "customUtils"
import { Button } from "gamejitsu/components"
import {
  Background,
  SecondaryTitle,
  MainTitle,
  ParagraphText
} from "../../../../components/UtilsComponents"
const mainLogo = "/images/gamejitsu-mascotte-crop.png"

const DotaBloodLaunchWrapper = styled(Flex)`
  width: 100%;
  position: relative;
  height: 580px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.9)),
    url("https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/dota_blood_desktop.png");

  background-size: cover;

  ${down("md")} {
    height: 520px;
  }

  ${down("sm")} {
    height: 100%;

    background-image: linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.97)),
      url("https://gamejitsu-assets.s3.eu-central-1.amazonaws.com/png/guides/tutorial_new_dota_players/dota_blood_desktop.png");
  }
`

const DotaBloodLaunchContainer = styled(Flex)`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1240px;

  ${down("md")} {
    max-width: 960px;
    padding-right: 0;
    padding-left: 0;
  }

  ${down("sm")} {
    max-width: 100%;
    padding-right: 0;
    padding-left: 0;
  }
`

const DotaBloodLaunch: FunctionComponent = () => {
  return (
    <DotaBloodLaunchWrapper>
      <DotaBloodLaunchContainer height={"100%"}>
        <Flex flexWrap="wrap" width={"100%"}>
          <Flex
            width={["100%", "100%", "100%", "50%"]}
            alignItems={"flex-end"}
            justifyContent={["center", "flex-end", "flex-end", "center"]}
          ></Flex>
          <Flex
            width={["100%", "100%", "100%", "50%"]}
            alignItems={["center"]}
            justifyContent={["center", "flex-start"]}
          >
            <Box px={["24px", "24px", "24px", "8px"]} py="32px">
              <SecondaryTitle color="#828588">Davion - Dragon Knight</SecondaryTitle>
              <MainTitle>The Ultimate tutorial for new Dota 2 Players </MainTitle>
              <Flex>
                <Box>
                  <Button
                    key="findoutmore"
                    text="FIND OUT MORE"
                    href="/guides/the_ultimate_tutorial_for_new_dota2_players"
                    className={"bw"}
                  />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </DotaBloodLaunchContainer>
    </DotaBloodLaunchWrapper>
  )
}

export default DotaBloodLaunch
