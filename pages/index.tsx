import React from 'react'
import { NextPage } from 'next'
import { Layout } from '~/components'

const Index: NextPage = () => <Layout>{process.env.API_ENDPOINT}</Layout>

export default Index
