import styled from "styled-components"

import { Box } from "rebass"
import { FunctionComponent } from "react"

interface Props {
    text: string
}

const Content = styled.h1`
  font-family: "Japanese 3017";
  font-weight: bold;
  font-size: 35px;
`

const Title: FunctionComponent<Props> = ({ text }) => {
    return (
        <Box px={3} py={3}>
            <Content>
                {text}
            </Content>
        </Box>
    )
}

export default Title
