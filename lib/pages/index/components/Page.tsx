import React from "react"
import styled from "styled-components"

import { AuthenticatedComponent } from "gamejitsu/interfaces"
import { Layout } from "gamejitsu/components"
import { Flex } from "rebass"

const mainLogo = "/images/gamejitsu-main-logo.svg"

const Image = styled.img`
  width: 510px;
`
const Page: AuthenticatedComponent = () => (
  <Layout>
    <Flex alignItems="center" justifyContent="center" height="100%" marginTop="100px">
      <Image src={mainLogo} />
    </Flex>
  </Layout>
)

Page.skipAuthentication = true

export default Page
