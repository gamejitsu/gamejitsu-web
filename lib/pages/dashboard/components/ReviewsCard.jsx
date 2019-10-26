import React from 'react'
import { Button, Card } from '~/components'
import { Box, Flex, Text } from 'rebass'

const ReviewsCard = ({ children }) => (
  <Card>
    <Box p={3} mr="auto">
      <Text p={2}>Test Reviews Card 2</Text>
      <Text p={2}>Test Reviews Card 2 {children}</Text>
    </Box>
    <Box alignSelf='center' pr={3}>
      <Button text="Pending review by..." />
      <Button text="Cancel" />
    </Box>
  </Card>
)

export default ReviewsCard