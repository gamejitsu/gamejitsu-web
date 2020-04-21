import styled from "styled-components"

import { Box, Flex } from "rebass"
import { darken } from "polished"
import { Divider, Elevation, Card as BPCard } from "@blueprintjs/core"
import { FunctionComponent, Fragment } from "react"
import { Title } from "."

interface Props {
  title?: string
}

const Header = styled(Box)`
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.lightBackgroundColor},
    ${(props) => darken(0.15, props.theme.lightBackgroundColor)}
  ); 
`

const Content = styled(BPCard)`
  padding: 0;
`

const Card: FunctionComponent<Props> = ({ children, title }) =>
  <Content elevation={Elevation.THREE}>
    {title &&
      <Fragment>
        <Flex alignItems="center">
          <Header px={3} py={25} flex={1}>
            <Title text={title} />
          </Header>
        </Flex>
        <Divider />
      </Fragment>
    }
    {children}
  </Content>

export default Card
