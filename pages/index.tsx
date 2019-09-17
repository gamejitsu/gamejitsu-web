import { NextPage } from 'next'
import React from 'react'
import { Layout } from '~/components'

const Index: NextPage = () => <Layout>{process.env.API_ENDPOINT}</Layout>

export default Index
