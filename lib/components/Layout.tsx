import Head from "next/head"

import { Box } from "rebass/styled-components"
import { FunctionComponent } from "react"

const companyName = "Gamejitsu"

interface Props {
  title?: string
}

const Layout: FunctionComponent<Props> = ({ title, children }) => (
  <>
    <Box mx="auto" px={[1, 3, 4]} py={[2, 4]}>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>{title === undefined ? companyName : `${companyName} - ${title}`}</title>
      </Head>
      {children}
    </Box>
  </>
)

export default Layout
