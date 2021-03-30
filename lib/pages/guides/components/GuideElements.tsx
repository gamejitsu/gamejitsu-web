import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { Box, Flex } from "rebass/styled-components"
import { down } from "customUtils"

const GuideParagraph = styled.div`
  line-height: 1.5;
  font-size: 1.1rem;
  padding-bottom: 1.25rem;

  ul {
    list-style-type: circle;
    padding-left: 24px;
  }
`

const GuideUpdate = styled.div`
  b {
    font-weight: bold;
    color: ${(props) => props.theme.colors.primaryColor};
  }

  ul {
    list-style-type: circle;
    padding-left: 24px;
  }

  line-height: 1.5;
  font-size: 1.1rem;
  padding-bottom: 1rem;
`

const GuideHeading1 = styled.h3`
  line-height: 1.25;
  font-size: 1.6rem;
  font-weight: bold;
  padding-bottom: 1.5rem;
`

const GuideHeading2 = styled.h4`
  line-height: 1.25;
  font-size: 1.3rem;
  font-weight: bold;
  padding-bottom: 1rem;
`

const GuideHeading3 = styled.h5`
  line-height: 1.25;
  font-size: 1.1rem;
  font-weight: bold;
  padding-bottom: 0.65rem;
`

interface GuideImageProps {
  caption: string
  src: string
}

const ImageContainer = styled(Flex)`
  border: 1px solid #313131;
  background-color: #181818;

  ${down("sm")} {
    border: none;
    background-color: transparent;
  }
`

const GuideImage: FunctionComponent<GuideImageProps> = ({ src, caption }) => {
  return (
    <ImageContainer mb={3} py={[2, 3, 4]} justifyContent={"center"}>
      <Box>
        <img src={src} style={{ maxWidth: "800px", width: "100%", height: "auto" }} />
        <Flex
          pt={2}
          style={{ fontSize: "0.85rem", maxWidth: "800px", lineHeight: "1.25" }}
          justifyContent={"center"}
        >
          {caption}
        </Flex>
      </Box>
    </ImageContainer>
  )
}

export { GuideImage, GuideHeading3, GuideHeading2, GuideHeading1, GuideUpdate, GuideParagraph }
