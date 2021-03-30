import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { Flex } from "rebass/styled-components"
import { down } from "customUtils"
import NextLink from "next/link"

interface TileGuideProps {
  abstract: string
  title: string
  thumbnail: string
  pusblish_date: string
  coach: string
  href: string
}

interface BackgroundProps {
  thumbnail: string
}

const TileGuideContainer = styled(Flex)`
  border: solid 1px #aaa;
  cursor: pointer;
  background-color: #161616;

  &:hover {
    border: solid 1px ${(props) => props.theme.colors.primaryColor};
  }

  ${down("xs")} {
    flex-direction: column;
  }
`

const Thubnail = styled(Flex)<BackgroundProps>`
  width: 100%;
  min-height: 120px;
  position: relative;
  background: ${(props) => `url(${props.thumbnail})`};
  flex: 1 1 180px;
  background-size: cover;
  background-position: right;

  ${down("xs")} {
    flex: 1 1 120px;
    margin-bottom: 16px;
  }
`

const ContentWrapper = styled(Flex)`
  flex-direction: column;
  flex: 7 7;
`
const Abstract = styled(Flex)`
  flex-direction: column;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 8px;
  }
`

const InfoElement = styled(Flex)`
  align-items: center;
  font-size: 0.85rem;

  b {
    font-weight: bold;
  }

  :before {
    width: 0.5rem;
    height: 0.5rem;
    margin: 0 4px 0 8px;
    content: " ";
    background-color: ${(props) => props.theme.colors.primaryColor};
    border-radius: 50%;
  }
`

const Info = styled(Flex)`
  border-top: solid 1px #fff;
  flex-wrap: wrap;
`

const TileGuide: FunctionComponent<TileGuideProps> = ({
  href,
  title,
  abstract,
  thumbnail,
  pusblish_date,
  coach
}) => {
  return (
    <NextLink href={href}>
      <TileGuideContainer p={[3]}>
        <Thubnail thumbnail={thumbnail} />
        <ContentWrapper px={[0, 0, 3]}>
          <Abstract>
            <h2>{title}</h2>
            <p>{abstract}</p>
          </Abstract>
          <Info
            mt={[3]}
            pt={[2]}
            justifyContent={["flex-start", "flex-start", "flex-start", "flex-end"]}
          >
            <InfoElement>
              <b>Pushished: </b>&nbsp;{pusblish_date}
            </InfoElement>
            <InfoElement>
              <b>Written by: </b>&nbsp;{coach}
            </InfoElement>
          </Info>
        </ContentWrapper>
      </TileGuideContainer>
    </NextLink>
  )
}

export { TileGuide }
