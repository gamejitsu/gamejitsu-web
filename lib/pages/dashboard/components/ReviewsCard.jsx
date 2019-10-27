import React from 'react'
import { Button, Card } from '~/components'
import { Box, Text } from 'rebass'
import PropTypes from 'prop-types'


const ReviewsCard = ({ children }) => (
  <Card>
    <Box p={3} mr="auto">
      <Text p={2}>Test Reviews Card 2</Text>
      <Text p={2}>Test Reviews Card 2 {children}</Text>
    </Box>
    <Box alignSelf='center' pr={3}>
      <Button onClick={() => {}} text="Pending review by..." />
      <Button onClick={() => {}} text="Cancel" />
    </Box>
  </Card>
)

ReviewsCard.propTypes = {
  children: PropTypes.node,
}


export default ReviewsCard
