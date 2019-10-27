import React from 'react'
import { Layout, Button } from '~/components'

const login = () => {
  window.location.href =
    'https://steamcommunity.com/openid/login?openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.realm=http%3A%2F%2Flocalhost%3A3000%2Fauth&openid.return_to=http%3A%2F%2Flocalhost%3A3000%2Fauth'
}

export default () => (
  <Layout>
    {process.env.API_ENDPOINT}
  </Layout>
)
