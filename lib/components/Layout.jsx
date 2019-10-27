import Head from 'next/head'
import PropTypes from 'prop-types'
import React from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'
import Navbar from './Navbar'

const Container = styled(Box)`
  max-width: 1024px;
`

const Layout = ({ title, children }) => (
  <React.Fragment>
    <Navbar/>
    <Container mx="auto">
      <Head>
        <title>{title === undefined ? 'Gamejitsu' : `Gamejitsu - ${title}`}</title>
      </Head>
      {children}
    </Container>
  </React.Fragment>
)

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

export default Layout
