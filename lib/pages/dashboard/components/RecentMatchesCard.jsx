import React from 'react'
import { Button, Card } from '~/components'
import { Box, Flex, Text } from 'rebass'

const RecentMatchesCard = ({ children }) => (
  <Card>
    <Box p={3} mr="auto">
      <Text p={2}>Test Recent Matches Card</Text>
      <Text p={2}>Test Recent Matches Card Child: {children}</Text>
    </Box>
    <Box alignSelf="center" pr={3}>
      <Button text="Request Review" />
    </Box>
  </Card>
)

export default RecentMatchesCard
