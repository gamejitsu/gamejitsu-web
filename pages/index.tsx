import React from 'react'
import { NextPage } from 'next'
import { Layout } from '../lib/components/Layout'
import { Header } from '../lib/components/Page/Header'
import { Footer } from '../lib/components/Page/Footer'

const Index: NextPage = () => (
  <Layout title="Index">
    <Header isSticky={true} />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </p>
    <p>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
    <p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur.
    </p>
    <p>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.
    </p>
    <Footer text="Footer message here" />
  </Layout>
)

export default Index
