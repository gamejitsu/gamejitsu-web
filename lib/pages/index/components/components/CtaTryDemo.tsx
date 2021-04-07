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

const CtaTryDemoWrapper = styled(Flex)`
  width: 100%;
  height: 580px;

  ${down("md")} {
    height: 520px;
  }

  ${down("sm")} {
    height: auto;
  }
`

const CtaTryDemoContainer = styled(Flex)`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1240px;
  z-index: 1;

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

const MainImageContainer = styled(Flex)`
  justify-content: center;

  ${down("md")} {
    justify-content: flex-end;
    padding-right: 32px;
  }

  ${down("xs")} {
    justify-content: center;
    padding-right: 0;
  }
`

const MainImage = styled.img`
  position: relative;
  max-width: 500px;
  width: 100%;
  height: auto;

  ${down("sm")} {
    max-width: 320px;
  }

  ${down("xs")} {
    padding-top: 32px;
    max-width: 380px;
  }
`

const CtaTryDemo: FunctionComponent = () => {
  return (
    <CtaTryDemoWrapper>
      <Background src="/images/background-hero-unit.jpg" opacity="0.35" />
      <CtaTryDemoContainer height={"100%"}>
        <Flex flexWrap="wrap" width={"100%"}>
          <Flex
            width={["100%", "100%", "100%", "50%"]}
            alignItems={["center"]}
            justifyContent={["center", "flex-start"]}
          >
            <Box px={["24px", "24px", "24px", "8px"]} py="32px">
              <SecondaryTitle>Esport coaching Platform</SecondaryTitle>
              <MainTitle>Hire a Pro Coach from 10$</MainTitle>
              <ParagraphText>Get your game analyzed asynchronously</ParagraphText>
              <ParagraphText>by top quality coaches and start winning</ParagraphText>
              <Flex>
                <Box pt={4}>
                  <Button key="demo" text="WATCH DEMO" href="/demo" className={"new"} />
                </Box>
                <Box pt={4} pl={[3]}>
                  <Button
                    key="howitworks"
                    text="HOW IT WORKS"
                    href="/howitworks"
                    className={"alternative"}
                  />
                </Box>
              </Flex>
            </Box>
          </Flex>
          <Flex
            width={["100%", "100%", "100%", "50%"]}
            alignItems={"flex-end"}
            justifyContent={["center", "flex-end", "flex-end", "center"]}
          >
            <MainImageContainer>
              <Box>
                <MainImage src={mainLogo} />
              </Box>
            </MainImageContainer>
          </Flex>
        </Flex>
      </CtaTryDemoContainer>
    </CtaTryDemoWrapper>
  )
}

export default CtaTryDemo
