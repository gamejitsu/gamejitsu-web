import Head from "next/head"
import Navbar from "./Navbar"
import styled from "styled-components"

import { Box } from "rebass"
import { FunctionComponent } from "react"

const companyName = "Gamejitsu"

interface Props {
  title?: string
}

const Container = styled(Box)`
  max-width: 1024px;
  height: 100%;
`

const Layout: FunctionComponent<Props> = ({ title, children }) => (
  <>
    <Navbar />
    <Container mx="auto" p={4}>
      <Head>
        <title>{title === undefined ? companyName : `${companyName} - ${title}`}</title>
      </Head>
      {children}
    </Container>
  </>
)

export default Layout
