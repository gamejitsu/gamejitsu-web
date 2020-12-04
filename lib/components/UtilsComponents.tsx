import { Box } from "rebass"
import styled from "styled-components"
import { breakpointDown } from "../utils/mediaQueryDevices"

const Container = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1120px;
  z-index: 10;

  @media ${breakpointDown.md} {
    max-width: 960px;
    padding-right: 0;
    padding-left: 0;
  }

  @media ${breakpointDown.md} {
    max-width: 100%;
  }
`
interface BackgroundProps {
  src: string
  opacity?: string
  bgPosition?: string
}

const Background = styled.div<BackgroundProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-position: ${(props) => (props.bgPosition ? props.bgPosition : "center")};
  background-size: cover;
  z-index: 1;
  background-image: url(${(props) => props.src});
  opacity: ${(props) => (props.opacity ? props.opacity : "1.0")};
`

interface SpacerProps {
  padding: number
}

const Spacer = styled.div<SpacerProps>`
  width: 100%;
  padding-top: ${(props) => `${props.padding}px`};
  padding-bottom: ${(props) => `${props.padding}px`};

  @media ${breakpointDown.md} {
    width: 100%;
    padding-top: ${(props) => `${Math.trunc(props.padding / 3)}px`};
    padding-bottom: ${(props) => `${Math.trunc(props.padding / 3)}px`};
  }
`
const MainTitle = styled.h1`
  color: white;
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 20px;
  line-height: 42px;
`

interface SecondaryTitleProps {
  color?: string
}

const SecondaryTitle = styled.h2<SecondaryTitleProps>`
  color: ${(props) => props.color || props.theme.primaryColor};
  font-family: "Japanese 3017";
  font-size: 21px;
  font-weight: normal;
  letter-spacing: 3px;
`

const ParagraphTitle = styled.h3`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 15px;
`

const ParagraphText = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 5px;
`

interface FlowImageType {
  url: string
  imageHeight: string
}

const FlowImage = styled(Box) <FlowImageType>`
  background-image: url(${(props) => props.url});
  background-size: cover;
  width: 100%;
  padding-top: ${(props) => props.imageHeight ? `${props.imageHeight}%` : `100%`};
`

export { Container, Background, Spacer, MainTitle, SecondaryTitle, ParagraphTitle, ParagraphText, FlowImage }
