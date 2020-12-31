import styled from "styled-components"

import { Box, Flex } from "rebass"
import { FunctionComponent } from "react"
import SettingsSVG from "../../svgs/settings.svg"

const Container = styled(Flex)`
  background-color: ${(props) => props.theme.lightBackgroundColor};
  font-weight: 40px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 0.9;
  border: 1px solid ${(props) => props.theme.activeColor};
`

interface Props {
  text: string
}

const EmptyCard: FunctionComponent<Props> = ({ text }) => (
  <Container width="100%" py={5}>
    <Box py={3}>
      <SettingsSVG width="200" height="100" />
    </Box>
    <Box>{text}</Box>
  </Container>
)

export default EmptyCard
