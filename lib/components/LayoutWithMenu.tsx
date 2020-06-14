import Head from "next/head"
import Navbar from "./Navbar"
import styled from "styled-components"

import { Box, Flex } from "rebass"
import { FunctionComponent } from "react"

const companyName = "Gamejitsu"

interface Props {
  title?: string
}

const LeftMenu = styled(Box)`
  heigth: 100%;
  width: 350px;
  background-color: ${(props) => props.theme.lightBackgroundColor};
  padding: 40px;
  padding-top: 92px;
`

const Container = styled(Box)`
  height: 100%;
  flex-grow: 1;
  padding: 50px;  
  background-image: url('/images/background-hero-unit.jpg');
  background-position: center;
  `

const LayoutWithMenu: FunctionComponent<Props> = ({ title, children }) => (
  <>
    <Navbar />
    <Head>
      <link rel="shortcut icon" href="/favicon.png" />
      <title>{title === undefined ? companyName : `${companyName} - ${title}`}</title>
    </Head>
    <Flex>  
    <LeftMenu>
      test
    </LeftMenu>
    <Container pt={92}>
      {children}
    </Container>
    </Flex>
  </>
)

export default LayoutWithMenu
