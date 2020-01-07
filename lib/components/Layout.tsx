import { Box } from "rebass"
import Head from "next/head"
import Navbar from "./Navbar"
import { FunctionComponent } from "react"
import styled from "styled-components"

interface Props {
  title?: string
}

const Container = styled(Box)`
  max-width: 1024px;
`

const Layout: FunctionComponent<Props> = ({ title, children }) => (
  <>
    <Navbar />
    <Container mx="auto">
      <Head>
        <title>{title === undefined ? "Gamejitsu" : `Gamejitsu - ${title}`}</title>
      </Head>
      {children}
    </Container>
  </>
)

export default Layout
