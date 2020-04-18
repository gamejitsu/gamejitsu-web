import styled from "styled-components"

import { Box } from "rebass"
import { FunctionComponent } from "react"
import { Title } from "."

interface Props {
  title: string
}

const Form: FunctionComponent<Props> = ({ children, title }) =>
  <Box px={4} py={2}>
    <Box mb="40px">
      <Title text={title} />
    </Box>
    {children}
  </Box>

export default Form
